import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tasks from "./Tasks.jsx";
import Trips from "./Trips.jsx";


export default function Layout() {
    return (
        <Container fluid="md">
            <Row className="mt-5">
                <Col md={4}>
                    <Card>
                        <Card.Header variant="top">Tasks List</Card.Header>
                        <Card.Body>
                            <Card.Text>tasks must be assign to trips</Card.Text>
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
                            <Trips />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
