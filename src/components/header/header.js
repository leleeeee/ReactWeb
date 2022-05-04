import React, { Component } from "react";
import "./Header.css";
import { Navbar, Nav, NavDropdown, Container, Button, Form, FormControl } from "react-bootstrap";
import { HOME_ICON_SIZE } from "../../constant/constant";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container fluid>
          <Link to='/'>
            <Navbar.Brand href="#">
              <img
                src="https://cdn-icons.flaticon.com/png/512/1531/premium/1531779.png?token=exp=1651525656~hmac=b4d17eeb54655f259e0e3ac381a80bdf"
                width={HOME_ICON_SIZE}
                height={HOME_ICON_SIZE}
                alt="UR"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/about-us">Giới thiệu</Nav.Link>
              <NavDropdown title="Phong cách" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Chung cư</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Nhà phố</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Văn phòng</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="#action3">Phòng khách</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Phòng ngủ</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Phòng bếp</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Trang trí nhà cửa" id="navbarScrollingDropdown">
                <NavDropdown.Item href={`/products/${'Bàn'}`}>Bàn</NavDropdown.Item>
                <NavDropdown.Item href={`/products/${'Ghế'}`}>Ghế</NavDropdown.Item>
                <NavDropdown.Item href={`/products/${'Tủ bếp'}`}>Tủ bếp</NavDropdown.Item>
                <NavDropdown.Item href={`/products/${'Đèn'}`}>Đèn</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about-us">Dự án nổi bật</Nav.Link>
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