import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Badge } from "react-bootstrap";
import "./NavbarComponent.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../store/action/cartAction";

export default function NavbarComponent(props) {
  const { carts } = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCart())
  }, [])
  
  let sum = 0;


  return (
    <div className="NavbarComponent">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Cart">
                Carts<Badge variant="light">
                  {Math.max(...carts.map(product => product.id), 0)}</Badge>
                <span className="sr-only">unread messages</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Histories">Histories</Link>
            </Nav.Link>
          </Nav>
          <Link to="/LoginForm">
            <Button variant="outline-primary">Login</Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
