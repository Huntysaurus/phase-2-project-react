import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function Login({name, onHandleNameChange, onLoginSubmit}) {
    return (
        <>
            <h1 style={{backgroundColor:"#593F44", color:"white"}}>/Login/</h1>
                <div style={{backgroundImage:"url('https://media.gettyimages.com/photos/young-group-of-friends-meeting-up-for-barbecue-hugging-and-greeting-picture-id825251302?s=2048x2048')", padding:"1%", height:700}}>
                    <Container style={{marginLeft:"10%", marginTop:75}}>
                    <Form onSubmit={onLoginSubmit}>
                        <Form.Group>
                        <Form.Label style={{backgroundColor:"#010A26", padding:25, fontSize:"20px", color:"#ADC5D9"}}>
                            Log in with your Name:
                            <Form.Control
                            type='input'
                            placeholder='type your name here'
                            value={name}
                            onChange={onHandleNameChange}
                            />
                        </Form.Label>
                        </Form.Group>
                        <Button type="submit">Login</Button>
                    </Form>
                    </Container>
                </div>
        </>
    )
}

export default Login