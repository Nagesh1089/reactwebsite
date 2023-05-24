import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import axios from "axios";
import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Contact() {
    const [data, setData] = useState({});
    const [post, setPost] = React.useState(null);
    

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    

    function sendFeedback(serviceID , templateId, variables) {
        window.emailjs.send(serviceID, templateId, variables)
          .then(res => {
            console.log('Email successfully sent!');
          })
          .catch(err => {
            console.error('There has been an error. Here are some thoughts on the error that occurred:', err);
          });
      }


    const form = useRef(data);
    
    const submit = (e) => {
        e.preventDefault()
        console.log(data)
        window.alert("form submitted sucessfully");
        axios
        .post("http://localhost:8080/aao/create", data)
        .then((response) => {
          setPost(response.data);
        });


                    //Send Email using EmailJS code Start
         
        // emailjs.sendForm('service_new', 'template_icug5sj', form.current, '3uCv0xNeOryDL5Giu')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        //Send Email using EmailJS code End


        sendFeedback('service_new', 'template_icug5sj', data)
        e.target.reset();




    }

    return (
        <div>
                <h1>Contact form</h1>
                <br />
        <form className='form' onSubmit={submit} ref={form}>
            
            <TextField type="text" name="id" label="id" required onChange={updateData}/><br /><br />
            
            <TextField type="text" name="name" label="Name" required onChange={updateData}/><br /><br />
            
           <TextField type="email" name="email" label="Email" required onChange={updateData}/><br /><br /> 
           
            <TextField type="text" name="username" label="UserName" required onChange={updateData}/><br /><br />
            
            <TextField type="password" name="password" label="Password" required onChange={updateData}/><br /><br />
           
          <Button variant="contained" color="success" type="submit">Register</Button>
          
         
      </form>
      </div>
    )
}