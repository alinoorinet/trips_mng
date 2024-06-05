import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {useFetchingTasksQuery} from "../api/tasks.js";
import {updateTasks} from "../redux/slices/taskSlice.js";
import { useDispatch, useSelector } from "react-redux";


export default function Trips() {
    const [key, setKey] = useState('home');
    /*const dispatch     = useDispatch();
    const tasksStore = useSelector((state) => state.tasks.tasks);
    const [tasks, setTasks]   = useState(tasksStore)
    const {data, error, isFetching} = useFetchingTasksQuery();

    useEffect(() => {
        if(!isFetching) {
            if(data) {
                if(data.status === 200)
                    dispatch(updateTasks({
                        tasks: data.tasks,
                    }));
                else
                    alert('Fetching tasks failed')
            }
            else if(error) {
                alert('Fetching tasks failed. Back Err. Please try later')
                // console.log("error",error);
            }
        }
    }, [isFetching]);

    useEffect(() => {
        // console.log("tasksStore:", tasksStore)
        setTasks(tasksStore)
    }, [tasksStore, dispatch])*/

    return (
        <>
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
        </>
    )
}
