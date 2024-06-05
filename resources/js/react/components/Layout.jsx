import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function Layout({children}) {
    return (
        <>
            <Container fluid="md">
                <Row className="mt-5">
                    {children && children}
                    <Outlet />
                </Row>
            </Container>

        </>
    )
}
