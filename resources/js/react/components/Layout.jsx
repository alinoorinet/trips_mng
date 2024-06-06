import React from 'react'
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


export default function Layout({children}) {
    return (
        <>
            <Container fluid="md">
                <Row className="mt-5">
                    <Col md="12" className="text-center">
                        <Image src="/img/icon.png" width="200"/>
                    </Col>
                    <Col md="12" className="text-center">
                        <h4>Trip Management</h4>
                    </Col>
                    {children && children}
                    <Outlet />
                </Row>
            </Container>

        </>
    )
}
