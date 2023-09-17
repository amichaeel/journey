import React, { Component, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import Placeholder from "react-bootstrap/Placeholder";

export default class LocationCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: "client/public/img/journeyairplanewhite.svg",
        };
    }

    async getImg() {
        const key = process.env.REACT_APP_FOURSQUARE_KEY;
        const foursquarePlaceImgUrl = `https://api.foursquare.com/v3/places/${this.props.img}/photos`;
        await axios
            .get(foursquarePlaceImgUrl, {
                headers: {
                    Authorization: key,
                },
                params: {
                    limit: 1,
                },
            })
            .then((res) => {
                this.setState({ imgUrl: res.data[0]["prefix"] + res.data[0]["height"] + "x" + res.data[0]["width"] + res.data[0]["suffix"] });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.getImg();
    }

    render() {
        return (
            <div className="d-flex justify-content-around">
                {console.log(this)}
                <Card style={{ width: "18rem" }}>
                    <Card.Img src={this.state.imgUrl} variant="top" style={{ objectFit: "cover", height: "200px" }} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{this.props.address}</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        );
    }
}
