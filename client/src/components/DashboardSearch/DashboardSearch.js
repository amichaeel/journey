import axios from "axios";
// import { useAuth0 } from "@auth0/auth0-react";
import React, { Component, useState, useEffect } from "react";
import LocationCard from "../LocationCard/LocationCard";

export default class DashboardSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: [],
            categories: []
        }
    }

    async getLocation() {
        const categories = {
            "shopping": 17000,
            "arts": 10000,
            "dining": 13000,
            "events": 14003,
            "outdoors": 16000,
            "recreation": 18000,
        };

        let categoriesFinal = [];

        for (const key in this.props) {
            if (categories[key] && this.props[key]) {
                categoriesFinal.push(categories[key])
            }
        }

        console.log(categoriesFinal)

        const key = process.env.REACT_APP_FOURSQUARE_KEY;
        const apiUrl = "https://api.foursquare.com/v3/places/search";

        await axios
            .get(apiUrl, {
                headers: {
                    Authorization: key,
                },
                params: {
                    categories: Object.values(categoriesFinal).join(","),
                    near: this.props.location,
                    sort: "DISTANCE"
                },
            })
            .then((res) => {
                this.setState({locations: res.data.results})
            })
            .catch((err) => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        return (
            <>
                <div>{this.state.locations.map(place => (
                    <LocationCard className="location-card" img={place.fsq_id} name={place.name} description={place.description} address={place.location.formatted_address}/>
                ))}</div>
            </>
        );
    }
}