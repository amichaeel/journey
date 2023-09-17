import axios from "axios";
// import { useAuth0 } from "@auth0/auth0-react";
import React, { Component, useState, useEffect } from "react";
import LocationCard from "../LocationCard/LocationCard";

export default class DashboardSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: []
        }
    }

    async getLocation() {
        const categories = {
            // "retail": 17000,
            "arts and entertainment": 10000,
            "dining and drinking": 13000,
            // "event": 14003,
            // "landmarks and outdoors": 16000,
            // "recreation": 18000,
        };

        const key = 'fsq3Bk83H5oDHtU1NaEgmxy8e6clWHBs4+pYOri8TkeMKCw=';
        const apiUrl = "https://api.foursquare.com/v3/places/search";

        await axios
            .get(apiUrl, {
                headers: {
                    Authorization: key,
                },
                params: {
                    categories: Object.values(categories).join(","),
                    near: "miami",
                    limit: 5
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
                    <LocationCard img={place.fsq_id} name={place.name} address={place.location.formatted_address}/>
                ))}</div>
            </>
        );
    }
}