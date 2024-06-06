import React, {useState, useEffect} from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {updateTrips, setTab} from "../redux/slices/tripSlice.js";
import { useDispatch, useSelector } from "react-redux";
import {useFetchingTripsQuery} from "../api/trips.js";
import {Link} from "react-router-dom";


export default function Trips() {
    const {data, error, isFetching, isLoading, currentData}   = useFetchingTripsQuery({ refetchOnMountOrArgChange: true });
    const [currentTab, setCurrentTab] = useState('home');
    const dispatch   = useDispatch();
    const trips = useSelector((state) => state.trips.trips);
    console.log("isLoading", isLoading)
    console.log("currentData", currentData)
    useEffect(() => {
        if(!isFetching) {
            if(data) {
                if(data.status === 200) {
                    if (currentData.trips.length !== trips.length)
                        dispatch(updateTrips({
                            trips: data.trips,
                        }));
                }
                else
                    alert('Fetching trips failed')
            }
            else if(error) {
                alert('Fetching trips failed. Back Err. Please try later')
                // console.log("error",error);
            }
        }
    }, [isFetching]);

    useEffect(() => {
        if (trips.length)
            setCurrentTabEvent('trip-tab-' +trips[0].id)
    }, [trips])

    const setCurrentTabEvent = (id) => {
        dispatch(setTab({
            currentTab: id
        }))
        setCurrentTab(id)
    }

    return (
        <Col md={8}>
            <Card>
                <Card.Header variant="top">Trips
                    <Link to="/trips/add">
                        <Button variant="success" className="float-end">New</Button>
                    </Link>
                </Card.Header>
                <Card.Body>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={currentTab}
                        onSelect={(k) => setCurrentTabEvent(k)}
                        className="mb-3"
                    >
                        { trips.length ?
                            trips.map((trip, index) => (
                                <Tab
                                    key={'trip-tab-' + trip.id}
                                    eventKey={'trip-tab-' + trip.id}
                                    title={trip.destination_addr}
                                >
                                    <Table striped bordered hover responsive size="sm">
                                        <tbody>
                                            <tr>
                                                <td style={{"width": "20%"}}><strong>Destination</strong></td>
                                                <td>{trip.destination_addr}</td>
                                            </tr>
                                            <tr>
                                                <td style={{"width": "20%"}}><strong>Customer</strong></td>
                                                <td>{trip.customer_name}</td>
                                            </tr>
                                            <tr>
                                                <td style={{"width": "20%"}}><strong>Content</strong></td>
                                                <td>{trip.load_content}</td>
                                            </tr>
                                            <tr>
                                                <td style={{"width": "20%"}}><strong>Load Weight(kg)</strong></td>
                                                <td>{trip.load_weight}</td>
                                            </tr>
                                            <tr>
                                                <td style={{"width": "20%"}}><strong>Truck</strong></td>
                                                <td>{trip.truck.type}</td>
                                            </tr>
                                            <tr>
                                                <td style={{"width": "20%"}}><strong>Driver</strong></td>
                                                <td>{trip.driver.user.name}</td>
                                            </tr>
                                            <tr>
                                                <td style={{"width": "20%"}}><strong>Task</strong></td>
                                                <td>{trip.task? trip.task.title : ''}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                            ))
                            :
                            <Tab eventKey="no_trips" title="no trips">
                                No trips have been created yet
                            </Tab>
                        }
                    </Tabs>
                </Card.Body>
            </Card>
        </Col>
    )
}
