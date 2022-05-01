import React, { Component } from "react";
import "./Header.css";
import { Navbar, Nav, NavDropdown, Container, Button, Form, FormControl } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">NTVP</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">About Us</Nav.Link>
              <NavDropdown title="Phong cách" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Phòng khách</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Phòng ngủ</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Phòng ăn</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Phòng bếp</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Trang trí nhà cửa" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Bàn</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Ghế</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Tủ bếp</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Đèn</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    )
  }
}