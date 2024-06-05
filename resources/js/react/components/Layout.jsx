import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tasks from "./Tasks.jsx";


export default function Layout() {
    const [key, setKey] = useState('home');

    return (
        <Container fluid="md">
            <Row className="mt-5">
                <Col md={4}>
                    <Card>
                        <Card.Header variant="top">Tasks List</Card.Header>
                        <Card.Body>
                            <Card.Title>tasks must be assign to trips</Card.Title>
                            <Tasks />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card>
                        <Card.Header variant="top">Trips
                            <Button variant="success" className="float-end">New</Button>
                        </Card.Header>
                        <Card.Body>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="Home">
                                    Tab content for Home
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    Tab content for Profile
                                </Tab>
                                <Tab eventKey="contact" title="Contact" disabled>
                                    Tab content for Contact
                                </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
