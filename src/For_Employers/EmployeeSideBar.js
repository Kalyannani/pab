import React, { useEffect, useState } from 'react'
import { Link , NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import axios from 'axios';
import apiList from '../lib/apiList';
export const EmployeeSideBar = () => {
    const [profile,setProfile] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("type");
        dispatch({type:"CLEAR"})
        navigate("/auth")
  };

  useEffect(() => {
    getData();
  },[]);

  console.log(profile)
  const getData = () => {
    axios
      .get(apiList.user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setProfile(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        
      });
  };
    return (
        <div className="sticky-top">
        <p>
            <button className="sidebar_button" data-toggle="collapse" href="#collapseExample" role="button"
                aria-expanded="false" aria-controls="collapseExample" onclick="ezy()">
                <i className="fa fa-bars text-white"></i>
            </button>
        </p>
        <div className="collapse show" id="collapseExample">
            <div className="sidebar" id="sidebar">

                <div className="main_header text-center">
                    <div className="heading ">
                        <img src="images/girl_avtar.png" alt="" className="info_img" />
                        <h4 className="company">{profile.companyname}</h4>
                    </div>
                </div>
                <NavLink to="/company_profile"><i className="fa fa-user" aria-hidden="true"></i> Company Profile</NavLink>

                <NavLink to="/post_jobs"><i
                        className="far fa-file-alt"></i> Post a
                    Job</NavLink>
              
                <NavLink to="/Manage_jobs" ><i
                        className="fas fa-briefcase"></i> My
                    Jobs</NavLink>
              
                <NavLink  to="/password"><i
                        className="fas fa-key"></i> Change Password</NavLink>

                <a className='cursor-pointer' onClick={()=>handleClick()}><i className="fas fa-sign-out-alt"></i> Log Out</a>


            </div>
        </div>
    </div>

    )
}
export default EmployeeSideBar;