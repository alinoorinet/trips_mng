import React, {useState, useEffect} from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import {addTrip} from "../redux/slices/tripSlice.js";
import { useDispatch, useSelector } from "react-redux";
import {useFetchingAddTripInitQuery, useStoreTripMutation} from "../api/trips.js";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";


export default function AddTrip() {
    const {data, error, isFetching} = useFetchingAddTripInitQuery()
    const [storeTrip, storeTripResult] = useStoreTripMutation()

    const [init, setInit] = useState({
        tasks: [], drivers: [], trucks: []
    })
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        customer_name: '',
        load_content: '',
        load_weight: '',
        destination_addr: '',
        truck_id: '',
        driver_id: '',
        task_id: '',
    });
    const [formErr, setFormErr] = useState({
        customer_name: '',
        load_content: '',
        load_weight: '',
        destination_addr: '',
        truck_id: '',
        driver_id: '',
        task_id: '',
    });
    const dispatch = useDispatch();

    useEffect(() => {
        if(!isFetching) {
            if(data) {
                if(data.status === 200) {
                    setInit({
                        tasks: data.tasks,
                        trucks: data.trucks,
                        drivers: data.drivers,
                    })
                }
                else
                    alert('Fetching inits data failed')
            }
            else if(error) {
                alert('Fetching inits data failed. Back Err. Please try later')
                // console.log("error",error);
            }
        }
    }, [isFetching]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormErr({
            customer_name: '',
            load_content: '',
            load_weight: '',
            destination_addr: '',
            truck_id: '',
            driver_id: '',
            task_id: '',
        });

        if (form.customer_name === "") {
            setFormErr({...formErr, customer_name: "Enter the customer name"});
            return false;
        }
        if (form.load_content === "") {
            setFormErr({...formErr, load_content: "Enter the load content"});
            return false;
        }
        if (form.load_weight === "") {
            setFormErr({...formErr, load_weight: "Enter the load weight in kg"});
            return false;
        }
        if (form.destination_addr === "") {
            setFormErr({...formErr, destination_addr: "Enter the destination address"});
            return false;
        }
        if (form.truck_id === "") {
            setFormErr({...formErr, truck_id: "choose truck"});
            return false;
        }
        if (isNaN(form.truck_id)) {
            setFormErr({...formErr, truck_id: "trip's truck is invalid"});
            return false;
        }
        if (form.driver_id === "") {
            setFormErr({...formErr, driver_id: "choose trip driver"});
            return false;
        }
        if (isNaN(form.driver_id)) {
            setFormErr({...formErr, driver_id: "trip's driver is invalid"});
            return false;
        }
        if (form.task_id !== "" && isNaN(form.task_id)) {
            setFormErr({...formErr, task_id: "trip's task is invalid"});
            return false;
        }

        setIsLoading(true);
        storeTrip(form).then((res) => {
            setIsLoading(false);
            if(res.data) {
                if (res.data.status === 200) {
                    alert(res.data.res)
                    dispatch(addTrip({
                        trip: res.data.trip
                    }))
                    setForm({
                        customer_name: '',
                        load_content: '',
                        load_weight: '',
                        destination_addr: '',
                        truck_id: '',
                        driver_id: '',
                        task_id: '',
                    })
                }
                else if(res.data.status === 102)
                    alert(res.data.error);
                else if(res.data.status === 101) {
                    const errors = res.data.errors;
                    if(errors.customer_name)
                        setFormErr({...formErr,customer_name:errors.customer_name[0]});
                    if(errors.load_content)
                        setFormErr({...formErr,load_content:errors.load_content[0]});
                    if(errors.load_weight)
                        setFormErr({...formErr,load_weight:errors.load_weight[0]});
                    if(errors.destination_addr)
                        setFormErr({...formErr,destination_addr:errors.destination_addr[0]});
                    if(errors.task_id)
                        setFormErr({...formErr,task_id:errors.task_id[0]});
                    if(errors.driver_id)
                        setFormErr({...formErr,driver_id:errors.driver_id[0]});
                    if(errors.truck_id)
                        setFormErr({...formErr,truck_id:errors.truck_id[0]});
                }
            }
            else if (res.error) {
                if(res.error.status === "FETCH_ERROR")
                    alert("Unexpected error. Please try later")
            }
        });
    };

    return (
        <Col md={8}>
            <Card>
                <Card.Header variant="top">Create Trip Form
                    <Link to="/">
                        <Button variant="info" size="sm" className="float-end">Back to list</Button>
                    </Link>
                </Card.Header>
                <Card.Body>
                    <Card.Text className="text-warning">Fill the form with proper data</Card.Text>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="customer_name">
                            <Form.Label>Customer Name:</Form.Label>
                            <Form.Control
                                type="text"
                                autoComplete="off"
                                value={form.customer_name}
                                onChange={(e) => setForm({...form, customer_name: e.target.value})}
                            />
                            {formErr.customer_name &&
                                <strong className="invalid-feedback font15 d-block">{formErr.customer_name}</strong>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="load_content">
                            <Form.Label>Load Content:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Oil, Petrol..."
                                autoComplete="off"
                                value={form.load_content}
                                onChange={(e) => setForm({...form, load_content: e.target.value})}
                            />
                            {formErr.load_content &&
                            <strong className="invalid-feedback font15 d-block">{formErr.load_content}</strong>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="load_weight">
                            <Form.Label>Load Weight:</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="20000 (in kg)"
                                autoComplete="off"
                                value={form.load_weight}
                                onChange={(e) => setForm({...form, load_weight: e.target.value})}
                            />
                            {formErr.load_weight &&
                            <strong className="invalid-feedback font15 d-block">{formErr.load_weight}</strong>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="destination_addr">
                            <Form.Label>Destination Address:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                autoComplete="off"
                                value={form.destination_addr}
                                onChange={(e) => setForm({...form, destination_addr: e.target.value})}
                            />
                            {formErr.destination_addr &&
                            <strong className="invalid-feedback font15 d-block">{formErr.destination_addr}</strong>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="truck_id">
                            <Form.Label>Truck:</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                value={form.truck_id}
                                onChange={(e) => setForm({...form, truck_id: parseInt(e.target.value)})}
                            >
                                <option>choose...</option>
                                {init.trucks.map(truck =>
                                    <option
                                        key={`truck-${truck.id}`}
                                        value={truck.id}
                                    >{truck.type}...{truck.max_loading_weight}</option>
                                )}
                            </Form.Select>
                            <Form.Text className="text-muted">
                                The trucks in the list are not in the mission.
                            </Form.Text>
                            {formErr.truck_id &&
                            <strong className="invalid-feedback font15 d-block">{formErr.truck_id}</strong>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="driver_id">
                            <Form.Label>Driver:</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                value={form.driver_id}
                                onChange={(e) => setForm({...form, driver_id: parseInt(e.target.value)})}
                            >
                                <option>choose...</option>
                                {init.drivers.map(driver =>
                                    <option
                                        key={`driver-${driver.id}`}
                                        value={driver.id}
                                    >{driver.user.name}</option>
                                )}
                            </Form.Select>
                            <Form.Text className="text-muted">
                                The drivers in the list are not in the mission.
                            </Form.Text>
                            {formErr.driver_id &&
                            <strong className="invalid-feedback font15 d-block">{formErr.driver_id}</strong>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="task_id">
                            <Form.Label>Task:</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                value={form.task_id}
                                onChange={(e) => setForm({...form, task_id: parseInt(e.target.value)})}
                            >
                                <option>choose...</option>
                                {init.tasks.map(task =>
                                    <option
                                        key={`task-${task.id}`}
                                        value={task.id}
                                    >{task.title}</option>
                                )}
                            </Form.Select>
                            <Form.Text className="text-muted">
                                The tasks in the list are not assigned to the mission.<br />
                            </Form.Text>
                            <Form.Text className="text-muted">
                                this field is <strong className="text-info">optional</strong>. you can also assign task in the index
                            </Form.Text>
                            {formErr.task_id &&
                            <strong className="invalid-feedback font15 d-block">{formErr.task_id}</strong>
                            }
                        </Form.Group>
                        {!isLoading ?
                            <Button variant="primary" type="submit" className="mb-3">
                                Submit
                            </Button> :
                            <Button variant="primary" disabled className="mb-3">
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span className="visually-hidden">Loading...</span>
                            </Button>
                        }
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    )
}
