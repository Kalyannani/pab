import React,{useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Logout from './Logout';
import { useDispatch } from 'react-redux';
import IdleTimer from 'react-idle-timer';
const Student_Navbar = () => {
  const idleTimerRef = useRef(null)
    const[state, setState] = useState({navbar_content:"white",color:"black"});
    const [collapse,setCollapse]= useState();
    const [id,setId] = useState();
    const dispatch = useDispatch()
    const [width,setWidth]=useState(window.innerWidth)
    const navigate = useNavigate();
    const Resize = ()=>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize",Resize)
    },[])
    useEffect(()=>{
        if(width<1440){
            setCollapse("collapse")
            setId("#navbarNav")
        }else{
            setCollapse("")
            setId("")
        }
    },[width])
    const handleClick = () => {
            localStorage.removeItem("token");
            localStorage.removeItem("type");
            dispatch({type:"CLEAR"})
            navigate("/auth")
      };

      const onIdle = ()=>{
        localStorage.removeItem("token");
            localStorage.removeItem("type");
            dispatch({type:"CLEAR"})
            navigate("/auth")
    }


    return (
        <>
                <div className="collapse navbar-collapse" id="navbarNav"   >
                    <ul className="navbar-nav ml-auto"   >
                       
                        <li className="nav-item dropdown profile_dropdown position-relative d-inline-block">
                        <li className="nav-item">
                            <a className=" font-weight-bold dropdown-toggle" id="a5" >
                              <button type="button"
                                    className="btn  navbar-btn profile-btn" data-toggle="modal" data-target="#MyModal"><i
                                        className="fas fa-user"></i> 
                              </button></a>
                        </li>
                  <div
                  id='profile-dropdown'
                    className="dropdown-menu dropdown-content d-none position-absolute bg-white rounded"
                    aria-labelledby="a2" data-toggle={collapse} data-target={id}
                  >
                    <Link className="dropdown-item" to="/myprofile">
                      My Profile
                    </Link>
                    <Link className="dropdown-item" to="/myresume">
                      My Resume
                    </Link>
                    <Link className="dropdown-item" to="appliedjobs">
                      Applied Jobs
                    </Link>
                    <Link className="dropdown-item" to="/jobalerts">
                      Job Alerts
                    </Link>
                    {/* <Link className="dropdown-item " to="/savedjobs">
                      Saved Jobs
                    </Link> */}
                    <Link className="dropdown-item" to="/changepassword">
                      Change Password
                    </Link>
                    <a onClick={()=>handleClick()} className=" font-weight-bold" id="a5" data-toggle={collapse} data-target={id}>
                      <button type="button"
                     className="btn logout-btn" data-toggle="modal" data-target="#MyModal">
                       Logout</button>
                     </a>
                  </div>
                </li>
                    </ul>
                </div>
                <IdleTimer ref={idleTimerRef} timeout={900*1000} onIdle={onIdle}></IdleTimer>

    </>
    )
}
export default Student_Navbar