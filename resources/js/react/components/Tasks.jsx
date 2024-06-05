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


export default function Tasks() {
    const dispatch     = useDispatch();
    const [tasks, setTasks]   = useState([])
    const {data, error, isFetching} = useFetchingTasksQuery();

    console.log("data:", data)
    console.log("err:", error)

    useEffect(() => {
        if(!isFetching) {
            if(data) {
                if(data.status === 200) {
                    setTasks(data.tasks)
                    dispatch(updateTasks({
                        tasks: data.tasks,
                    }));
                }
                /*else if (data.status === 200) {
                    setFetchedData(data);
                    setPaginator({
                        ...paginator,
                        totalPage:data.totalPage,
                        perPageCount: data.perPage
                    });
                    /!*dispatch(setTickets({
                        "type":"SET",
                        tickets: data.data,
                    }));*!/
                }*/
                else
                    alert('Fetching tasks failed')
            }
            else if(error) {
                alert('Fetching tasks failed. Back Err. Please try later')
                console.log("error",error);
            }
        }
    }, [isFetching]);

    return (
        <>
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
                            <td>{ task.assigned ? '' : <Button size="sm">Assign</Button> }</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </>
    )
}
