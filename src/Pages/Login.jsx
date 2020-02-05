import React, { Component, Fragment } from 'react';
import { Container, Form, Col, Button, Alert } from 'react-bootstrap';
import './Login.css';
import { SESSION_KEY } from "../config/constant";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formLogin: {
                email: '',
                password: ''
            },
            emailStorage: 'alertunsircle@gmail.com',
            passwordStorage: 'alertunsircle@gmail.com',
            isAlert: false,
            isAlertVariant: 'danger'
        }
    }

    resetForm = () => {
        this.setState({
            formLogin: {
                email: '',
                password: ''
            }
        });
    }

    sendPost = async (e) => {
        e.preventDefault();
        let form = e.target;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        if (email === this.state.emailStorage && password === this.state.passwordStorage) {
            localStorage.setItem(SESSION_KEY, JSON.stringify({ user: email }));
            window.location.reload();
        } else {
            this.setState({
                isAlert: true,
                isAlertVariant: 'danger'
            })
        }

    }
    render() {
        return (
            <Fragment>
                <Container>
                    {this.state.isAlert &&
                        <Alert className="text-center" variant={this.state.isAlertVariant}>Wrong username or password!!!</Alert>
                    }
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1 className="text-center">LOGIN</h1>
                        <hr />
                        <Form onSubmit={this.sendPost.bind(this)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    type="email"
                                    placeholder="Enter title"
                                    defaultValue={this.state.formLogin.email}
                                    onChange={this.handleChange}
                                    required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name="password"
                                    type="password"
                                    rows="3"
                                    placeholder="Enter description"
                                    defaultValue={this.state.formLogin.password}
                                    onChange={this.handleChange}
                                    required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Button variant="warning" onClick={this.resetForm} type="reset">
                                Cancel
                            </Button>
                        </Form>
                    </Col>
                </Container>
            </Fragment>
        );
    }
}

export default Login;