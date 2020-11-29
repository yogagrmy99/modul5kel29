import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
export default class tekkom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: "",
            img: "",
            urlh: "https://api.chucknorris.io/jokes/random"
        };
    }

    reloadh = () => {
        this.jalan();
        document.getElementById('pict').src = this.state.img;
    };

    jalan() {
        axios({
            method: "get",
            url: this.state.urlh,
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log("have you had enough");
                this.setState({
                    jokes: data.data.value,
                    img: data.data.icon_url
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.jalan();
    }

    render() {
        return (
            <div>
                <div className="boxWhite">
                    <center>
                        <h1>What are you looking for?</h1>
                        <h2>a joke?</h2>
                        <h3>here we go again...</h3>
                    </center>
                    <center>
                        <button onClick={this.reloadh}>another??</button>
                    </center>
                    <br/><br/><br/><br/><br/>
                    <li><img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" id="pict" width="30" height="30"></img>{this.state.jokes}</li>
                </div>
            </div>
        );
    }
}