import React from 'react'
import { NavLink } from 'react-router-dom'

const Subfilter = ()=>{

return(<>
                <div className="alljob_buttons text-left ">
                
                    <NavLink to="/alljobs" className="jobs_jobs">
                            All Jobs
                           
                    </NavLink>
                
          
                    <NavLink
                            to="/companyjobs" className="jobs_jobs">
                                Jobs By
                            Company
                    </NavLink>
               
          
                    <NavLink
                            to="/categoryjobs" className="jobs_jobs">
                   Jobs By
                            Category
                            </NavLink>
               
          
                            <NavLink
                            to="/locationaljobs" className="jobs_jobs">
                             Jobs By
                            Location</NavLink>
               
          
                            <NavLink
                            to="/designationjobs" className="jobs_jobs">
                                    Jobs By Designation
                            </NavLink>
               
          
                            <NavLink
                            to="/skilljobs" className="jobs_jobs">
                   Jobs By Skill
                    </NavLink>
               
                </div>

</>)

}
export default Subfilter