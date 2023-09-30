import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import Layout from '../components/Layout/Layout'
import "../styles/RegisterPage.css";
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("http://localhost:3001/users/register", values);
      message.success("Registeration Successfull");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/home");
    }
  }, [navigate]);
  return (
    <>
    <Layout>
      <div className="register-page ">
        {loading && <Spinner />}
        <Form
          className="register-form"
          layout="vertical"
          onFinish={submitHandler}
        >
          <h2>Register Form</h2>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/login">Already Register? login here!</Link>
            <button className="btn ">Resgiter</button>
          </div>
        </Form>
      </div>
      </Layout>
    </>
  );
};

export default Register;

// import React,{useState,useEffect} from 'react'
// import { Form , Input,Button, message} from 'antd'
// import {Link, useNavigate} from "react-router-dom"
// import Layout from '../components/Layout/Layout'
// import Spinner from '../components/Spinner'
// // const axios = require('axios');
// import axios from 'axios';
// function Register() {
//   const navigate = useNavigate();
//   const [name , setname] = useState();
//   const [email, setemail] = useState();
//   const [password,setpassword]=useState();
//   const [loading , setloading]= useState(false)
//   const handlechangename = (e) =>{
//      setname(e.target.value)
//   }
//   const handlechangeemail = (e) =>{
//     setemail(e.target.value)
//  }
//  const handlechangepassword = (e) =>{
//     setpassword(e.target.value)
//  }
 
//  const onFinish = async(values)=>{
//   try{
//     setloading(true)
//     const data = values;
//     await axios.post("http://localhost:3001/users/register", {
//       name,
//       email,
//       password
//     })
//     .then(()=>message.success('Registered'))
//     setloading(false)
//     localStorage.setItem('register',JSON.stringify({...data,password:''}))
//     navigate('/login')
//   }
//   catch(e){
//     console.log(e);
//   }
//  }
//  useEffect(()=>{
//   if(localStorage.getItem('user')){
//     navigate("/")
//   }
//  },[navigate])
//   return (
// <Layout>
//    {/* <form>
//    <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="htmlForm-label">Name:</label>
//     <input onChange={handlechangename} type="text" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <h1>you are typing {name} </h1>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="htmlForm-label">Email:</label>
//     <input onChange={handlechangeemail} type="text" className="htmlForm-control" id="exampleInputPassword1"/>
//     <h1>you are typing {email} </h1>
//   </div>
//   <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password:</label>
//     <input onChange={handlechangepassword} type="password" className="htmlForm-control" id="exampleInputPassword"/>
//     <h1>you are typing {password} </h1>
//    </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>

// <button onClick={handleSubmit}>sub</button> */}



//     <div className='register-page mt-[2rem]'>
//     {/* <Alert message="Success Tips" type="success" showIcon /> */}
//     <Form className='mt-[2rem] w-[50%] m-auto' layout='vertical'  onFinish={onFinish}>
//         <h1 className='text-[2rem] text-center mb-[2rem]'>Register</h1>
//         <Form.Item onChange={handlechangename} label="Name" name="name">
//             <Input />
//         </Form.Item>
//         <Form.Item onChange={handlechangeemail} label="Email" name="email">
//             <Input />
//         </Form.Item>
//         <Form.Item onChange={handlechangepassword} label="password" name="password">
//             <Input />
//         </Form.Item>
//         <div className='flex m-[10px]'>
//           <Link to="/login">Already Registred? Click here</Link>
//         </div>
//         <div>
//      {loading && <Spinner /> }
//      </div>
//         <Button type="primary" htmlType="buttton">
//         Register
//       </Button>
//     </Form>
// </div>
// </Layout>
//   )
// }

// export default Register
