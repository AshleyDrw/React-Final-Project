import React from 'react';
import './App.css'
import Newsfeed from './components/Newsfeed';
import MerchList from './components/MerchList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';


export default function App() {

  return (
    <Router>
      <>
        <Navbar bg='dark' variant='dark'>
          <NavbarBrand as={Link} to='/'>TiHi 😈</NavbarBrand>
          <Nav className="mr-auto">
            <div>
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
            </div>
            <div>
              <Nav.Link as={Link} to='/post'>Posts</Nav.Link>
            </div>
            <div>
              <Nav.Link as={Link} to='/merch'>Merch</Nav.Link>
            </div>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
         </Nav>
         <NavDropdown title="Log In">
            <Form>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="outline-info">Log In</Button>
            </Form>
      </NavDropdown>
         <NavbarBrand as={Link} to='/cart'>🛒</NavbarBrand> 
         
        </Navbar>

          <Switch>
            <Route path='/post'>
              <Newsfeed />
            </Route>
            <Route path='/merch'>
              <MerchList />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
      </>
    </Router>
  );
}























