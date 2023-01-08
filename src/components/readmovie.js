import React from "react";
import { Movies } from "./movies.js";
import axios from "axios";

export class Readmovie extends React.Component {

    constructor() {
        super();
        this.Reload = this.Reload.bind(this);
    }

    Reload() {
        this.componentDidMount();
    }

    componentDidMount() {
        //this gets all the movies from the database
        axios.get("http://localhost:5000/movies")
            .then((response) => {
                //sets the state of the movies array to the data from the database
                this.setState({ movies: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

   //this is the state of the movies
    state = {
        movies: []
    }


    render() {
        return (
            <div className="App">
                <h1>My Favourite Movies</h1>
                <Movies movies={this.state.movies} Reload={this.Reload}></Movies>
            </div>
        );
    }
}