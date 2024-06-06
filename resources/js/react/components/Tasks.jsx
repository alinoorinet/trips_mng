import React, { useEffect} from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import {useAssignToTripMutation, useFetchingTasksQuery} from "../api/tasks.js";
import { updateTasks } from "../redux/slices/taskSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { updateTrips } from "../redux/slices/tripSlice";


export default function Tasks() {
    const {data, error, isFetching} = useFetchingTasksQuery();
    const state   = useSelector((state) => state);
    const tasks   = state.tasks.tasks
    const trips   = state.trips.trips
    const tripCurrentTab = state.trips.currentTab
    const [assignToTrip, assignToTripResult] = useAssignToTripMutation()
    const dispatch   = useDispatch();

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


    const assignEvent = (e, id) => {
        e.preventDefault()
        const confi = confirm("Assign task to selected current trip tab?")
        if(!confi)
            return false;
        const trId = tripCurrentTab.split('trip-tab-')[1]

        const formData = new FormData()
        formData.append("trId", trId)
        formData.append("tsId", id)
        assignToTrip(formData).then((res) => {
            if (res.data) {
                alert(res.data.res)
                if (res.data.status === 200) {
                    const newTrips = trips.map((trip,index) => {
                        if (trip.id === parseInt(trId))
                            return {...trip, task: res.data.task, task_id: res.data.task.id}
                        return trip
                    })
                    dispatch(updateTrips({
                        trips: newTrips
                    }))
                    const newTasks = tasks.map((task,index) => {
                        if (task.id === id)
                            return {...task, assigned: 1}
                        return task
                    })
                    dispatch(updateTasks({
                        tasks: newTasks
                    }))
                }
            }
        })
    }

    return (
        <Col md={4}>
            <Card>
                <Card.Header variant="top">Tasks List</Card.Header>
                <Card.Body>
                    <Card.Text>tasks must be assign to trips</Card.Text>
                    <Table striped bordered hover responsive>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Assigned</th>
                            <th>Assign to trip</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            tasks.map((task, index) => (
                                <tr key={'task' + index}>
                                    <td>{index + 1}</td>
                                    <td>{task.title}</td>
                                    <td>{ task.assigned ? <span className="text-success">Yes</span> : <span className="text-danger">No</span> }</td>
                                    <td>{ task.assigned ? '' : <Button size="sm" onClick={(e) => assignEvent(e, task.id)}>Assign</Button> }</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
    )
}
