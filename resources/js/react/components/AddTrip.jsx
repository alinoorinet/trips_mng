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
import {useFetchingAddTripInitQuery} from "../api/trips.js";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";


export default function AddTrip() {
    const {data, error, isFetching} = useFetchingAddTripInitQuery()
    const [init, setInit] = useState({
        tasks: [], drivers: [], trucks: []
    })

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
    console.log("formErr", formErr)
    console.log("form", form)
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
        if (form.driver_id === "") {
            setFormErr({...formErr, driver_id: "choose trip driver"});
            return false;
        }
        if (form.task_id === "") {
            setFormErr({...formErr, task_id: "choose trip task"});
            return false;
        }

        /*let source = IsMobile();

        const formData = new FormData();
        formData.append('ticket_id', form.ticket_id);
        formData.append('department_id', form.department_id);
        formData.append('group_id', form.group_id);
        formData.append('subject', form.subject);
        formData.append('source', source? '1': '0');
        formData.append('text', form.text);
        formData.append('priority', form.priority);
        formData.append('is_private', form.is_private);
        formData.append('attach', form.attach);

        setIsLoading(true);
        storeTicket(formData).then((res) => {
            setIsLoading(false);
            if(res.data) {
                if (res.data.status === 200) {
                    toast.success(res.data.res);
                    setTimeout(() => {
                        history.push(`/${currentUser.company.name}/tickets`);
                    },1500)
                }
                else if(res.data.status === 102)
                    toast.error(res.data.error);
                else if(res.data.status === 101) {
                    const errors = res.data.errors;
                    if(errors.department_id)
                        setFormErr({...formErr,department_id:errors.department_id[0]});
                    if(errors.group_id)
                        setFormErr({...formErr,group_id:errors.group_id[0]});
                    if(errors.subject)
                        setFormErr({...formErr,subject:errors.subject[0]});
                    if(errors.text)
                        setFormErr({...formErr,text:errors.text[0]});
                    if(errors.priority)
                        setFormErr({...formErr,priority:errors.priority[0]});
                    if(errors.is_private)
                        setFormErr({...formErr,is_private:errors.is_private[0]});
                    if(errors.attach)
                        setFormErr({...formErr,attach:errors.attach[0]});
                }
            }
            else if (res.error) {
                if(res.error.status === "FETCH_ERROR")
                    toast.error("خطای ارتباط با سرور. لطفاً ضمن اطمینان از اتصال به اینترنت، دقایق دیگر دوباره تلاش کنید.")
            }
        });*/
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
                                onChange={(e) => setForm({...form, truck_id: e.target.value})}
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
                                onChange={(e) => setForm({...form, driver_id: e.target.value})}
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
                                onChange={(e) => setForm({...form, task_id: e.target.value})}
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
                                The tasks in the list are not assigned to the mission.
                            </Form.Text>
                            {formErr.task_id &&
                            <strong className="invalid-feedback font15 d-block">{formErr.task_id}</strong>
                            }
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mb-3">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    )
}
