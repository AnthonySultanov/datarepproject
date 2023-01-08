import React from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export class Viewmovie extends React.Component{
        constructor(){
            super();
            this.Deletemovie = this.Deletemovie.bind(this);
        }
        //this deletes the movie from the database
        Deletemovie(e){
            e.preventDefault();
    
            axios.delete('http://localhost:5000/movies/'+this.props.movies._id)
            .then((res)=>{this.props.Reload();})
            .catch();
        }
        render() {
            return (
                <div className="App">
    
                    <Card>
                        <Card.Header>{this.props.movies.title}</Card.Header>
                        <Card.Body>
                            <div>
                        <Link to={'/updatemovie/' + this.props.movies._id} style={{ marginRight: "auto" }} className="btn btn-primary">Update</Link>
                            <Button variant="danger" style={{ marginLeft: "auto" }} onClick={this.Deletemovie}>Delete</Button>
                        </div>
                        <Card.Title>{this.props.movies.title}</Card.Title>
                        <Card.Img className='moviebanner' src={this.props.movies.banner}/>
                        <Card.Text>{this.props.movies.about}</Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
