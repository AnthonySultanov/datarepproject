import React from "react";
import { Viewmovie } from "./viewmovie";

export class Movies extends React.Component {
    render() {
        {/*In React, the map method is used to traverse and display a list of similar objects of a component. A map is not a feature of React. Instead, it is the standard JavaScript function that could be called on an array. The map() method creates a new array by calling a provided function on every element in the calling array.*/ }
        {/*Props are also how you pass data from one component to another, as parameters*/ }
        return this.props.movies.map(
            (movies) => {
                {/*Return movies with key and reloads data*/ }
                return <Viewmovie movies={movies} key={movies._id} Reload={this.props.Reload}></Viewmovie>
            }
        );
    }
}