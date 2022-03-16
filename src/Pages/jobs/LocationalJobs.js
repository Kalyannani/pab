import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../../JsonData/locations.json'
import Subfilter from './subfilter'
import { useLocation } from 'react-router-dom'
import SearchFilter from './SearchFilter'
const LocationalJobs = () => {
   
    const location = useLocation();
    const [locations,setLocations] = useState(data)
    const handleSort =  (char) => {
        setLocations(data.filter(post => {
            if (char === "") {
              //if query is empty
              return post;
            } else if (post.location.charAt(0).toLowerCase().includes(char.toLowerCase())) {
              //returns filtered array
              return post;
            }
          }) ) 

 
    }

    return (
        <div >  { location.pathname === '/locationaljobs'?
            <div className="jobs_sec_1_joblocation">
                <div className="heading_pic_joblocation">
                    <div className="container">
                        <SearchFilter />

                        <Subfilter />
                    </div>
                </div>
            </div>:null}


            {/* <!-- sec 1 -->

    <!-- sec 2 --> */}



            {/* <!-- 2 --> */}
            <div className="container">
                <div className="jobcategory_sec_2_sub">
                    <h6 className="jobcategory_sec_2_heading_1">BROWSE JOBS BY LOCATIONS</h6>
                    <hr className="bg-light" />
                    { location.pathname === '/locationaljobs'?
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
                             location.pathname === '/locationaljobs'?
                             locations.map(res => {
                                return <div class="col-lg-3 col-md-6">
                                    <Link to={`/browsefilterlist?locate=${res.location}`}>
                                        <a class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/auto_repair.png" alt=""
                                            class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">{res.location}</span></a>
                                    </Link>
                                </div>
                            })
                            :
                            locations.slice(0,15).map(res => {
                                return <div class="col-lg-3 col-md-6">
                                    <Link to={`/browsefilterlist?locate=${res.location}`}>
                                        <a class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span>
                                            {/* <img src="images/auto_repair.png" alt=""
                                            class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /> */}
                                            </span><span class="company_jobs_img_1_text align-self-center px-2">{res.location}</span></a>
                                    </Link>
                                </div>
                            })
                        }
                       
                    </div>
                    <div className='mb-3'>
                    {
                            location.pathname === '/locationaljobs' ? null:<Link to="/locationaljobs" className='float-right All-Links'>View All Locations</Link>
                        }
                        </div>
                </div>
               
                {/* <div className="row">
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />

                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>


                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                        </div>

                    </div>

                </div> */}
            </div>
            {/* <!-- 3 --> */}
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>


                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>

                        </div>

                    </div>

                </div>
            </div> */}
            {/* <!-- 4 --> */}
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>

                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>

                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>

                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>

                        </div>

                    </div>

                </div>
            </div> */}
        </div>
    )
}

export default LocationalJobs