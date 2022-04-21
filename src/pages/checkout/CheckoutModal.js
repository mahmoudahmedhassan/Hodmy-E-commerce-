import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function CheckoutModal({cartItems}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [state,setState] = useState({
        name:'',
        email: '',
        address:'',
        id:''
    });

    const handleChange =({target})=>{
             let values = {...state}
            values[target.name]=target.value
            setState(values)
    }

    const order =()=>{
       console.log(cartItems) 


        setShow(false);
     }

 
    return (
        <>
            <button variant="primary" onClick={handleShow}>
                Checkout
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> Name  </Form.Label>
                            <Form.Control
                                type="name"
                                name='name'
                                placeholder="Name"
                                autoFocus
                                onChange={(e)=>handleChange(e)}
                                value ={state.name}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name='email'
                                    placeholder="name@example.com"
                                    autoFocus
                                    onChange={(e)=>handleChange(e)}
                                    value={state.email}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            ></Form.Group>
                            <Form.Label> Address</Form.Label>
                            <Form.Control
                             as="textarea" rows={3}
                            onChange={(e)=>handleChange(e)}
                            value={state.address}
                            name='address'
                             />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={order}>
                       order
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CheckoutModal 