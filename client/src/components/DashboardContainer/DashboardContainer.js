import React, { Component } from "react";
import { CForm, CFormTextarea } from "@coreui/react";
import "./DashboardContainer.css";
import DashboardSearch from "../DashboardSearch/DashboardSearch";
import { FaBagShopping, FaPalette, FaSpoon, FaSun } from "react-icons/fa6";
import { GiMicrophone } from "react-icons/gi";
import { SiFunimation } from "react-icons/si";
export default class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            start: "",
            isSubmitted: false,
            "shopping": false,
            "arts": false,
            "dining": false,
            "events": false,
            "outdoors": false,
            "recreation": false
        };


        this.onSubmit = this.onSubmit.bind(this);
        this.toggleFilter = this.toggleFilter.bind(this)
    }

    onSubmit(e) {
        this.setState({ isSubmitted: true });
    }

    toggleFilter(e) {
        const id = e.target.id;
      
        this.setState((prevState) => ({
          [id]: !prevState[id],
        }));
      
        console.log(this.state);
      }

    updateInputValue(evt) {
        const val = evt.target.value;

        this.setState({
            inputValue: val,
            start: val,
        });
    }

    render() {
        return (
            <div className="dashboard-container">
                <div className="new-journey-container">
                    <filter></filter>
                    <form>
                        <label class="box-label">
                            <FaBagShopping />
                            <input onChange={this.toggleFilter} class="box" type="checkbox" id="shopping" />
                        </label>
                        <label class="box-label">
                            <FaPalette />
                            <input onChange={this.toggleFilter} class="box" type="checkbox" id="arts" />
                        </label>
                        <label class="box-label" for="shopping">
                            <FaSpoon />
                            <input onChange={this.toggleFilter} class="box" type="checkbox" id="dining" />
                        </label>
                        <label class="box-label">
                            <GiMicrophone />
                            <input onChange={this.toggleFilter} class="box" type="checkbox" id="events" />
                        </label>
                        <label class="box-label">
                            <FaSun />
                            <input onChange={this.toggleFilter} class="box" type="checkbox" id="outdoors" />
                        </label>
                        <label class="box-label">
                            <SiFunimation />
                            <input onChange={this.toggleFilter} class="box" type="checkbox" id="recreation" />
                        </label>
                        <input value={this.state.inputValue} onChange={(evt) => this.updateInputValue(evt)} placeholder="Enter your starting point"></input>
                    </form>
                    <button type="button" onClick={this.onSubmit}>
                        Generate Journey
                    </button>
                    <div class="results-container">{this.state.isSubmitted && 
                    <DashboardSearch
                        location={this.state.start}
                        shopping={this.state.shopping}
                        arts={this.state.arts}
                        dining={this.state.dining}
                        events={this.state.events}
                        outdoors={this.state.outdoors}
                        recreation={this.state.recreation}
                         />}</div>
                </div>
                <div className="past-journeys-container"></div>
            </div>
        );
    }
}
