import React, { useState, useEffect } from "react";
import { Form, Input, message ,Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/Loginpage.css";
import img from "../image/background.png"
import Layout from "../components/Layout/Layout"
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:3001/users/login", values);
      setLoading(false);
      message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/home");
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
    <div className=''>
    <div className="login-page  ">
        {loading && <Spinner />}
        <div className="row container flex justify-center items-center">
          <div className="col-md-4 login-form">
            <Form layout="vertical" onFinish={submitHandler}>
              <h1>Login Form</h1>

              <Form.Item label="Email" name="email">
                <Input type="email" required />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" required />
              </Form.Item>
              <div className="d-flex justify-content-between">
                <Link to="/register">
                  Not a user ? Click Here to regsiter !
                </Link>
                <button className="btn">Login</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      </div>
      </Layout>
    </>
  );
};

export default Login;

// import React,{useEffect, useState} from 'react'
// import { Button, Form, Input,message } from 'antd';
// import {Link, json, useNavigate} from "react-router-dom"
// import Layout from '../components/Layout/Layout'
// import axios from 'axios';
// import Spinner from '../components/Spinner';

// function Login() {
//     const navigate = useNavigate();
//     const [userName , setUserName] = useState();
//     const [password , setPassword] = useState();
//     const [loading , setloading] = useState(false)
//     // const handlechangename =(e)=>{ 
//     //    setUserName(e.target.value)
//     // }
//     const handlechangepassword =(e)=>{ 
//         setPassword(e.target.value)
//      }

//      const onFinish = async(values) =>{
//     try{
//      setloading(true)
//      setUserName(values.Email);
//      const data = values;
//        await axios.post("http://localhost:3001/users/login", {
//         email: userName,
//         password: password
//       }).then(()=>{
//          message.success("Login")
//          localStorage.setItem('user',JSON.stringify({...data,password:""}))

//         //  to retrive data from the localStorage
//         //  const name = JSON.parse(localStorage.getItem('register'));
      
//         setloading(false)
//          navigate("/home")
//       })
//     }
//     catch(error){
//       message.error("Failed to login")
//     }
//      }
     
//       useEffect(()=>{
//         setTimeout(()=>{
//           if(localStorage.getItem('user')){
//             message.success('you are already login')
//             navigate("/home")
//           }
//         },1000)
//       },[navigate])
     
     

//   return (
//    <>
//    <Layout>
   
//     <div className='mt-[3rem]'>
    
//   <Form className=' w-[50%] m-auto'
//     name="basic"
//     labelCol={{
//       span: 8,
//     }}
//     wrapperCol={{
//       span: 16,
//     }}
//     style={{
//       maxWidth: 600,
//     }}
//     initialValues={{
//       remember: true,
//     }}
//     onFinish={onFinish}
//   >
    
//     <h1 className='text-[2rem] text-center mb-[2rem]' >Login Form</h1>
//     <Form.Item
//       label="Email"
//       name="Email"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your username!',
//         },
//       ]}
//     >
//       <Input />
//       {/* <Input onChange={handlechangename} /> */}
//     </Form.Item>

//     <Form.Item
//       label="Password"
//       name="password"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your password!',
//         },
//       ]}
//     >
//       <Input.Password onChange={handlechangepassword}  />
//     </Form.Item>

//     <Form.Item
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <div className='flex m-[10px]'>
//           <Link to="/register">Not Registred?Click Here</Link>
//      </div>
     
//    <Button type="primary" htmlType="buttton">
//         Login
//       </Button>
    
    
    
    
//     </Form.Item>
//   </Form>
//   </div>
//   </Layout>
//    </>
//   )
// }

// export default Login
