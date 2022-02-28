import React from 'react'
import { NavLink } from 'react-router-dom'

const Subfilter = ()=>{

return(<>
                <div className="alljob_buttons text-left">
                <button className="alljob_buttons_sub ">
                    <NavLink to="/alljobs" className="jobs_jobs">
                            All Jobs
                    </NavLink>
                </button>
                <button className="alljob_buttons_sub ">
                    <NavLink
                            to="/companyjobs" className="jobs_jobs">
                                Jobs By
                            Company
                    </NavLink>
                </button>
                <button className="alljob_buttons_sub ">
                    <NavLink
                            to="/categoryjobs" className="jobs_jobs">
                   Jobs By
                            Category
                            </NavLink>
                </button>
                <button className="alljob_buttons_sub ">
                            <NavLink
                            to="/locationaljobs" className="jobs_jobs">
                             Jobs By
                            Location</NavLink>
                </button>
                <button className="alljob_buttons_sub ">
                            <NavLink
                            to="/designationjobs" className="jobs_jobs">
                                    Jobs By Designation
                            </NavLink>
                </button>
                <button className="alljob_buttons_sub ">
                            <NavLink
                            to="/skilljobs" className="jobs_jobs">
                   Jobs By Skill
                    </NavLink>
                </button>
                </div>

</>)

}
export default Subfilter