import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import apiList from '../../lib/apiList'
import Subfilter from './subfilter'
import skills from "../../JsonData/Skill.json"
const SkillJobs = () => {
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
      };
    // const [skills, setSkills] = useState([])

    // const fetchSkills = async () => {
    //     await axios.get(apiList.listSkills)
    //         .then((response) => {
    //             setSkills(response.data.skills)
    //         })
    //         .catch((err) => {
    //             console.log(err.response.data);
    //             toast.error(err.response.data.message)
    //         });
    // }

    // useEffect(async () => {
    //     fetchSkills();
    // }, [])

    return (
        <div >
            {/* <div className="jobs_sec_1_skilljob">
                <div className="heading_pic_skilljob">
                    <div className="container">
                        <div className="browse_skilljob_list-search_box">
                            <form className="form-control">
                                <div className="row">
                                    <div className="col-lg-5 col-md-5" id="input1_skilljob">
                                        <input type="text" className="form-control" id="search_box_input_skilljob"
                                            placeholder="Job Title, Keywords, or Phrase" />
                                    </div>
                                    <div className="col-lg-5 col-md-5" id="input2_skilljob">
                                        <input type="text" className="form-control" id="search_box_input_skilljob"
                                            placeholder="City ,Province or Region" />
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-xs-offset-3 col-xs-6 c0l-xs-offset-3"
                                        id="input_btn_skilljob">
                                        <a href="#"><button id="search_box_btn_skilljob" type="submit" className="btn-block">
                                            Search</button></a>
                                    </div>

                                </div>
                            </form>
                        </div>

                        <Subfilter />
                    </div>
                </div>
            </div> */}


            {/* <!-- sec 1 -->

    <!-- sec 2 --> */}

            <div className="jobskill_sec_2">
                <div className="container">

                    {/* 
            <!-- container --> */}

                    <div className="jobskill_sec_2_sub">
                        <h6 className="jobskill_sec_2_heading_1">BROWSE JOBS BY Skill</h6>
                        <hr className="bg-light" />
                        <div className="row">
                            {
                                isReadMore?
                            skills.slice(0,15).map(res => {
                                return <div className="col-lg-3 col-md-6">
                                    <Link to="#">
                                        <a class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/auto_repair.png" alt=""
                                            class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">{res.Skill}</span></a>
                                    </Link>
                                        
                                </div>
                                
                            }):
                            skills.map(res => {
                                return <div className="col-lg-3 col-md-6">
                                     <Link to="#">
                                        <a class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/auto_repair.png" alt=""
                                            class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">{res.Skill}</span></a>
                                    </Link>
                                </div>
                            })
                            }
                        </div>
                        <div className='mb-3' id='location'>
                        <span className="more_inner float-right mr-4" onClick={toggleReadMore}>{isReadMore ? "...more" : " show less"}</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className="container">
                <div className="jobskill_sec_2_sub">

                    <h6 className="jobskill_sec_2_heading_1">BROWSE JOBS BY NON-SKILL</h6>
                    <hr className="bg-light" />
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>


                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default SkillJobs