import React from "react";
import axios from "axios";
import { Viewmovie } from "./viewmovie";


export class Header extends React.Component{
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }
   
    componentDidMount() {
        axios.get('http://localhost:5000/movies')
            .then((response) => {
                this.setState({ movies: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        movies: []
    }

    

    render(){
        return(
            <div>
                
                <Viewmovie movies={this.state.movies} Reload={this.componentDidMount}></Viewmovie>
            </div>
        );
    }
}