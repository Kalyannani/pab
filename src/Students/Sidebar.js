import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link,NavLink, useNavigate } from "react-router-dom";
import apiList, { server } from "../lib/apiList";
import ProfileImageUpload from "../common/ProfileImageUpload";
import { toast } from 'react-toastify';



const Sidebar = ()=>{
    const [profile,setProfile] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("type");
        dispatch({type:"CLEAR"})
        navigate("/auth")
  };
console.log(profile)
  useEffect(() => {
    getData();
  },[]);


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

  const [profileImg, setProfileImg] = useState({
    profileImage: "",
  })
  const [file, setFile] = useState("");

  const imageonChangeHandling=(event)=>{

    setFile(event.target.files[0])
  
}


  const handleprofileUpload=()=>{
    const data = new FormData();
    console.log(file)
    data.append("file", file);
    axios.post(apiList.uploadProfileImage, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data"
      }
    })
      .then((response) => {
        console.log(response.data.image);
        setProfile({...profile,profileImage:response.data.image})
        toast.success(response.data.message)
          // getData();
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.message)
      });
  }
  useEffect(()=>{
    handleprofileUpload();
  },[file])

    return(
        
        <div className="sticky-top">
                    <p>
                        <button className="sidebar_button" data-toggle="collapse" href="#collapseExample" role="button"
                            aria-expanded="false" aria-controls="collapseExample" onclick="ezy()">Profile Menu
                            <i className="fas fa-arrow-right  text-white ml-2    sidebar_toggle-btn"></i>
                        </button>
                    </p>
                    <div className="collapse show" id="collapseExample">
                        <div className="sidebar" id="sidebar">
                            <div className="main_header text-center">
                                {/* <div className="heading ">
                                    <img src={profile.profileImage? profile.profileImage :`images/girl_avtar.png`} alt="" className="info_img" height="145px" />
                                    <h4 className="company">{profile.name}</h4>
                                    <p className="company_text">Web developer</p>
                                </div> */}

                <div className="canditate-des">
                <label for="file">
                      <p href="#">
                        <img
                          className="resume_img img-responsive"
                          src={profile.profileImage? profile.profileImage :`images/girl_avtar.png`}
                        />
                      </p>
                      
                        <i class="fas fa-camera img_pencil img_edit_sidebar"></i>
                      </label>
                      <input type="file" 
                      id="file" 
                      style={{ display: "none" }} 
                      onChange={(event) =>imageonChangeHandling(event)}
                      />
                      
                    </div>

                            </div>
                            <NavLink to="/myprofile"><i className="fa fa-user"
                                    aria-hidden="true"></i> Profile</NavLink>
                            <NavLink to="/myresume"><i
                                    className="far fa-file-alt"></i> My Resume</NavLink>
                            <NavLink  to="/appliedjobs"><i
                                    className="fas fa-briefcase"></i> Applied Jobs</NavLink>
                            <NavLink to="/jobalerts"><i
                                    className="far fa-address-card"></i> Job Alert</NavLink>
                            <NavLink to="/savedjobs"><i
                                    className="fas fa-random"></i> Saved Jobs</NavLink>
                            {/* <a href="../../../Company/candidate_profile/cv manager/cv_manager.html"><i className="far fa-address-card"></i> CV Manager</a> */}
                            <NavLink to="/changepassword"><i
                                    className="fas fa-key"></i> Change Password</NavLink>
                            <a onClick={()=>handleClick()}><i className="fas fa-sign-out-alt"></i> Log Out</a>
                        </div>
                    </div>
                </div>
        )
}
export default Sidebar