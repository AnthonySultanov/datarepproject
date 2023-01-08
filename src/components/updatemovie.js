import React, { useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";



export function Updatemovie () {


    let { id } = useParams();

//this is the state of the movie
    const [title, setTitle] = useState("");
    const [banner, setBanner] = useState("");
    const [about, setAbout] = useState("");

   
    //this is the function that updates the movie
useEffect(() => {
    
    axios.get("http://localhost:5000/movies/" + id)
    .then((response) => {
        setTitle(response.data.title);
        setBanner(response.data.banner);
        setAbout(response.data.about);
    }
    )
    .catch((error) => {
        console.log(error);
    }
    )
} , []);
const onChangeTitle = (event) => {
    setTitle(event.target.value);
}

const onChangebanner = (event) => {
    setBanner(event.target.value);
}

const onChangeabout = (event) => {
    setAbout(event.target.value);
}



//this is the function that updates the movie
const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:5000/movies/" + id, {title, banner, about})
    .then((response) => {

        
        console.log(response.data);
        console.log("Movie updated");
        window.location = "/viewmovie";
    })
    .catch((error) => {
        console.log(error);
    }
    )
}
return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
  
    <Card style={{ width: '99%', backgroundColor: '#6F7378' }} >
        <Card.Body>
            <Card.Title>Update your movie here</Card.Title>
            <Card.Text>
                Please enter title, banner and about below:
            </Card.Text>
            
        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="update title" name="title" value={title} onChange={onChangeTitle}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Banner</Form.Label>
            <Form.Control type="textarea" placeholder="update banner" name="banner" value={banner} onChange={onChangebanner}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>About</Form.Label>
            <Form.Control type="textarea" placeholder="update about" name="about" value={about} onChange={onChangeabout}/>
        </Form.Group>

        <Button variant="danger" type="submit" value="Submit" onClick={handleSubmit}>Add Movie</Button>
    </Form>



        </Card.Body>
    </Card>
</div>
)



} 