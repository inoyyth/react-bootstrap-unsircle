import React, { Component } from 'react';
import { Container, Col, Nav, Navbar, Row, Jumbotron } from 'react-bootstrap';
import { SESSION_KEY } from "../config/constant";

class Home extends Component {
    handleLogout = () => {
        localStorage.removeItem(SESSION_KEY);
        window.location.reload();
    };
    render() {
        return (
            <Container>
                <Col lg={12}>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <Nav.Link href="#" onClick={this.handleLogout}>Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
                <Col lg={12}>
                    <Row>
                        <Jumbotron>
                            <h1>Hello, {this.props.user}</h1>
                            <p>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                        </Jumbotron>
                    </Row>
                </Col>
            </Container>
        );
    }
}

export default Home;