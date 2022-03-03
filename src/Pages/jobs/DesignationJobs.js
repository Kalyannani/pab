import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../../JsonData/Designation.json'
import Subfilter from './subfilter'
import { useLocation } from 'react-router-dom'
import SearchFilter from './SearchFilter'
const DesignationJobs = () => {
    const location = useLocation();
    const [designation,setDesignation] = useState(data)
    const handleSort =  (char) => {
        setDesignation(data.filter(post => {
            if (char === "") {
              //if query is empty
              return post;
            } else if (post.Designation.charAt(0).toLowerCase().includes(char.toLowerCase())) {
              //returns filtered array
              return post;
            }
          }) ) 
    
    }

    return (
        <div >
              { location.pathname === '/designationjobs'?
            <div className="jobs_sec_1_jobdesignation">
                <div className="heading_pic_jobdesignation">
                    <div className="container">
                        <SearchFilter />
                        <Subfilter />
                    </div>
                </div>
            </div>: null }


            {/* <!-- sec 1 --> */}

            <div className="jobdesignation_sec_2">
                <div className="container">
                    <div className="jobcategory_sec_2_sub">
                        <h6 className="jobcategory_sec_2_heading_1">BROWSE JOBS BY DESIGNATION</h6>
                        <hr className="bg-light" />
                        { location.pathname === '/designationjobs'?
                        <div class="company_jobs_section_2_buttons text-left my-4">
                            {/* <button class="company_jobs_section_2_button_sub current d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">Top 100</button> */}
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('a')}>A</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('b')}>B</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('c')}>C</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('d')}>D</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('e')}>E</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('f')}>F</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('g')}>G</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('h')}>H</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('i')}>I</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('j')}>J</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('k')}>K</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('l')}>L</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('m')}>M</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('n')}>N</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('o')}>O</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('p')}>P</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('q')}>Q</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('r')}>R</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('s')}>S</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('t')}>T</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('u')}>U</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('v')}>V</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('w')}>W</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('x')}>X</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('y')}>Y</button>
                            <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('z')}>Z</button>
                            {/* <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">0-99</button> */}


                        </div>:null }
                        <div className="row">
                            {
                             location.pathname === '/designationjobs'?
                             designation?.map(designation => {
                                return <div class="col-lg-4 col-md-6">
                                    <Link to={`/browsefilterlist?designate=${designation?.Designation}`}>
                                        <a  class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/auto_repair.png" alt=""
                                            class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">{designation?.Designation}</span></a>
                                    </Link>
                                </div>
                            }):
                            designation?.slice(0,15).map(designation => {
                                return <div class="col-lg-3 col-md-6">
                                    <Link to={`/browsefilterlist?designate=${designation?.Designation}`}>
                                        <a  class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span>
                                            {/* <img src="images/auto_repair.png" alt=""
                                            class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /> */}
                                            </span><span class="company_jobs_img_1_text align-self-center px-2">{designation?.Designation}</span></a>
                                    </Link>
                                </div>
                            })
                            }
                        </div>
                        <div className='mb-5 mt-4' id='skill'>
                        {
                            location.pathname === '/designationjobs' ? null:<Link to="/designationjobs" className='float-right All-Links'>View All Designations</Link>
                        }
                        </div>
                    </div>
                    {/* 
            <!-- container --> */}

                    {/* <div className="jobdesignation_sec_2_sub">

                        <h6 className="jobdesignation_sec_2_heading_1">BROWSE JOBS BY DESIGNATION</h6>
                        <hr className="bg-light" /> */}

                        {/* <!-- buttons --> */}
                        {/* <div className="jobdesignation_section_2_buttons text-left my-4">
                            <button className="jobdesignation_section_2_button_sub current">Top 100</button>
                            <button className="jobdesignation_section_2_button_sub">A</button>
                            <button className="jobdesignation_section_2_button_sub">B</button>
                            <button className="jobdesignation_section_2_button_sub">C</button>
                            <button className="jobdesignation_section_2_button_sub">D</button>
                            <button className="jobdesignation_section_2_button_sub">E</button>
                            <button className="jobdesignation_section_2_button_sub">F</button>
                            <button className="jobdesignation_section_2_button_sub">G</button>
                            <button className="jobdesignation_section_2_button_sub">H</button>
                            <button className="jobdesignation_section_2_button_sub">I</button>
                            <button className="jobdesignation_section_2_button_sub">J</button>
                            <button className="jobdesignation_section_2_button_sub">K</button>
                            <button className="jobdesignation_section_2_button_sub">L</button>
                            <button className="jobdesignation_section_2_button_sub">M</button>
                            <button className="jobdesignation_section_2_button_sub">N</button>
                            <button className="jobdesignation_section_2_button_sub">O</button>
                            <button className="jobdesignation_section_2_button_sub">P</button>
                            <button className="jobdesignation_section_2_button_sub">Q</button>
                            <button className="jobdesignation_section_2_button_sub">R</button>
                            <button className="jobdesignation_section_2_button_sub">S</button>
                            <button className="jobdesignation_section_2_button_sub">T</button>
                            <button className="jobdesignation_section_2_button_sub">U</button>
                            <button className="jobdesignation_section_2_button_sub">V</button>
                            <button className="jobdesignation_section_2_button_sub">W</button>
                            <button className="jobdesignation_section_2_button_sub">X</button>
                            <button className="jobdesignation_section_2_button_sub">Y</button>
                            <button className="jobdesignation_section_2_button_sub">Z</button>
                            <button className="jobdesignation_section_2_button_sub">0-99</button>

                        </div>


                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>

        </div>
    )
}

export default DesignationJobs