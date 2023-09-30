import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { message } from "antd";
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <>
    <nav className='h-[10vh] flex bg-gradient-to-r from-[#373739] to-blue-500 top-0 bg-[#373739] justify-between text-white ' >
      <div className='flex justify-start items-center'>
      <p className='m-[1rem] text-[1.5rem] text-white'>Income Expense Manager</p>
      {/* <p className='text-[1.5rem] hover:text-blue-500'><Link to="/">Home</Link></p> */}
    </div>
    <div className='flex justify-start items-center p-[2rem] '>
       <p className='m-[1rem] text-[1.5rem] text-white'>Hello {loginUser.name}</p>
       <button className="'bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"onClick={logoutHandler}  ><Link to="/">Logout</Link></button>
    </div>
       
     </nav>
      {/* <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              Income Expense Tracker
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {" "}
                <h6 className="nav-link ">
                  <UserOutlined /> {loginUser && loginUser.name}
                </h6>{" "}
              </li>
              <li className="nav-item">
                <button className="btn btn-danger" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Header;
