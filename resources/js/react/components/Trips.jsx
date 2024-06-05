import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {updateTasks} from "../redux/slices/taskSlice.js";
import { useDispatch, useSelector } from "react-redux";
import {useFetchingTripsQuery} from "../api/trips.js";


export default function Trips() {
    const {data, error, isFetching} = useFetchingTripsQuery();
    const [currentTab, setCurrentTab] = useState('home');
    const dispatch= useDispatch();
    // const tasksStore = useSelector((state) => state.tasks.tasks);
    const [trips, setTrips]   = useState([])

    useEffect(() => {
        if(!isFetching) {
            if(data) {
                /*if(data.status === 200)
                    dispatch(updateTasks({
                        tasks: data.tasks,
                    }));
                else
                    alert('Fetching trips failed')*/
            }
            else if(error) {
                alert('Fetching trips failed. Back Err. Please try later')
                // console.log("error",error);
            }
        }
    }, [isFetching]);

    /*useEffect(() => {
        // console.log("tasksStore:", tasksStore)
        setTasks(tasksStore)
    }, [tasksStore, dispatch])*/

    return (
        <>
            <Tabs
                id="controlled-tab-example"
                activeKey={currentTab}
                onSelect={(k) => setCurrentTab(k)}
                className="mb-3"
            >
                { trips ?
                    trips.map((trip, index) => (
                        <Tab eventKey="home" title={trip.destination_addr}>
                            {trip.destination_addr}
                        </Tab>
                    ))
                    :
                    <Tab eventKey="home" title="no trips">
                        No trips have been created yet
                    </Tab>
                }
            </Tabs>
        </>
    )
}
