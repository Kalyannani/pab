import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../../JsonData/Designation.json'
import Subfilter from './subfilter'
import { useLocation } from 'react-router-dom'
import SearchFilter from './SearchFilter'
const DesignationJobs = () => {
    const [searchTerm , setsearchTerm] = useState('')

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
                        {/* <h6 className="jobcategory_sec_2_heading_1">BROWSE JOBS BY DESIGNATION</h6> */}
                        <div className='row'>
                            <div className='col-md-6'>
                                <h6 className="jobcategory_sec_2_heading_1">BROWSE JOBS BY DESIGNATION</h6>
                            </div>
                            <div className='col-md-6'>
                            {
                             location.pathname === '/designationjobs'?
                                <form>
                                    <div ng-app="angularsearch" ng-controller="searchsuggetions">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <input type="text" class="form-control serach_input_1" id="se" placeholder="Search" ng-model="in"  onChange={(event)=>{setsearchTerm(event.target.value);}}/>
                                                <div class="input-group-btn">
                                                    <button type="submit" class="btn search_btn_1"><i class="fa fa-search"></i></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                                :null}
                            </div>
                        </div>
                        
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
                             designation?.filter((val)=>
                             {
                                 if(searchTerm == "")
                                 {
                                     return val
                                 }
                                 else if(val.Designation.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
                                 {
                                     return val
                                 }
                             }).map(designation => {
                                return <div class="col-lg-4 col-md-6">
                                    <Link to={`/browsefilterlist?designate=${designation?.Designation}`}>
                                        <a  class="company_jobs_anchor p-2">
                                            <span class="company_jobs_img_1_text">{designation?.Designation}</span></a>
                                    </Link>
                                </div>
                            }):
                            // designation?.slice(0,15).map(designation => {
                            //     return <div class="col-lg-3 col-md-6">
                            //         <Link to={`/browsefilterlist?designate=${designation?.Designation}`}>
                            //             <a  class="company_jobs_anchor p-2"><span>
                                            
                            //                 </span><span class="company_jobs_img_1_text">{designation?.Designation}</span></a>
                            //         </Link>
                            //     </div>
                            // })
                            <>
                            
                            <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=ABAP%20Consultant'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                            {/* <span className='B_icon'><img src='images/sap.ico'/>
                                        </span> */}
                                        <span class="company_jobs_img_1_text align-self-center px-2">ABAP Consultant</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=ABAP%20Developer'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">ABAP Developer</span></a>
                                    </Link>
                                </div>
                                
                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=ABAP%20Programmer'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">ABAP Programmer</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=AC%20Operator'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                            {/* <span className='B_icon'><img src='images/ac.ico'/>
                                        </span> */}
                                        <span class="company_jobs_img_1_text align-self-center px-2">AC Operator</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=AC%20Technician'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">AC Technician</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=AME%20Trainee'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                            {/* <span  className='B_icon'><img src='images/a5jw1-5eaqs-001.ico'/>
                                        </span> */}
                                        <span class="company_jobs_img_1_text align-self-center px-2">AME Trainee</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=ASC%20Head'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">ASC Head</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=ASE'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">ASC</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=ASE%20Trainee'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">ASC Trainee</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=AV%20Editor'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                            {/* <span><img src='images/vedio.ico'/>
                                        </span> */}
                                        <span class="company_jobs_img_1_text align-self-center px-2">AV Editor</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=Abap%20Human%20Resources%20Consultant'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Abap Human Resources Consultant</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=Abstractor'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Abstractor</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=Academic%20Associate'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                            {/* <span><img src='images/academicc.ico'/>
                                        </span> */}
                                        <span class="company_jobs_img_1_text align-self-center px-2">Academic Associate</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=Academic%20Consultant'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Academic Consultant</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=Academic%20Coordinator'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Academic Coordinator</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=Accounts%20Manager'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Account's Manager</span></a>
                                    </Link>
                                </div>
                            </>
                            }
                        </div>
                        <div className='mb-5 mt-4' id='skill'>
                        {
                            location.pathname === '/designationjobs' ? null:<Link to="/designationjobs" className='float-right All-Links'><i class="fas fa-arrow-right pr-2"></i> View All Designations</Link>
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