import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import {useAssignToTripMutation, useFetchingTasksQuery} from "../api/tasks.js";
import { updateTasks } from "../redux/slices/taskSlice.js";
import { useDispatch, useSelector } from "react-redux";


export default function Tasks() {
    const dispatch   = useDispatch();
    const state = useSelector((state) => state);
    const tasksStore = state.tasks.tasks
    const tripCurrentTab = state.trips.currentTab
    const [tasks, setTasks]  = useState(tasksStore)
    const {data, error, isFetching} = useFetchingTasksQuery();
    const [assignToTrip, assignToTripResult] = useAssignToTripMutation()

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
        if (tasksStore)
            setTasks(tasksStore)
    }, [tasksStore, dispatch])
    console.log("tasksStore:", tasksStore)
    console.log("tasks", tasks)

    const assignEvent = (e, id) => {
        e.preventDefault()
        const trId = tripCurrentTab.split('trip-tab-')[1]

        const formData = new FormData()
        formData.append("trId", trId)
        formData.append("tsId", id)
        assignToTrip(formData).then((res) => {
            if (res.data) {
                alert(res.data.res)
                if (res.data.status === 200) {
                    const newTasks = tasks.map((task,index) => {
                        if (task.id === id)
                            return {...task, assigned: 1}
                        return task
                    })
                    console.log("newTasks", newTasks)
                    dispatch(updateTasks(newTasks))
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
