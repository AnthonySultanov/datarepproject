
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import React, {useState} from "react";

export const Addmovie = () => {



    const [title, setTitle] = useState("");
    const [banner, setBanner] = useState("");
    const [about, setAbout] = useState("");



    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onChangebanner = (event) => {
        setBanner(event.target.value);
    }

    const onChangeabout = (event) => {
        setAbout(event.target.value);
    }

    // Handle form submit
    const handleSubmit = (event) => {
        // Check if the title is empty
        if (title === "") {
           
            return;
        }

        if (banner === "") {
          
            return;
        }

        if (about === "") {
           
            return;
        }

        event.preventDefault();
        

        // Create a new movie object
        axios.post("http://localhost:5000/movies", { title, banner, about })
            .then(response => {
                console.log(response.data);
                console.log("Todo item created");

                // Redirect to the home page
                window.location = "/movies";
            })
            .catch(error => {
                console.log(error);
               
            });
    }
   
        return (
            <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
                
                <Card style={{ width: '99%', backgroundColor: '#6cc497' }} >
                    <Card.Body>
                        <Card.Title>Add your movie here</Card.Title>
                        <Card.Text>
                            Please enter title, banner and about below:
                        </Card.Text>
                        <Form>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" name="title" value={title} onChange={onChangeTitle}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Banner</Form.Label>
                        <Form.Control type="textarea" placeholder="Enter banner" name="banner" value={banner} onChange={onChangebanner}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>About</Form.Label>
                        <Form.Control type="textarea" placeholder="Enter about" name="about" value={about} onChange={onChangeabout}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" value="Submit" onClick={handleSubmit}>Add Movie</Button>
                </Form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
