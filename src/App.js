import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Updatemovie} from './components/updatemovie';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import  {Readmovie}  from './components/readmovie';
import  {Addmovie}  from './components/addmovie';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='app'>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">MovieIo</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/viewmovie">Home</Nav.Link>
              <Nav.Link href="/addmovie">  Add Movie</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      <Routes>
        <Route path='/' element={<Readmovie />}></Route>
        <Route path='/viewmovie' element={<Readmovie />}></Route>
        <Route path="/addmovie" element={<Addmovie />} />
        <Route path="/updatemovie/:id" element={<Updatemovie />} /> 
      </Routes>
      </div>
      </Router>
    );
  }
}

export default App;
