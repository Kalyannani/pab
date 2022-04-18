import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../../JsonData/Category.json'
import Subfilter from './subfilter'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import apiList from '../../lib/apiList'
import SearchFilter from './SearchFilter'
import CategoryJobAds from '../../ads/CategoryjobAds'



const CategoryJobs = () => {

    const [searchTerm, setsearchTerm] = useState('')
    const [category, setCategory] = useState(data)
    const location = useLocation();


    const handleSort = (char) => {
        setCategory(data.filter(post => {
            if (char === "") {
                //if query is empty
                return post;
            } else if (post.Category.charAt(0).toLowerCase().includes(char.toLowerCase())) {
                //returns filtered array
                return post;
            }
        }))

    }



    return (
        <div >
            {location.pathname === '/categoryjobs' ?
                <div className="jobs_sec_1_jobscategory">
                    <div className="heading_pic_jobscategory">
                        <div className="container">
                            <SearchFilter />

                            <Subfilter />
                        </div>
                    </div>
                </div> : null}


            {/* <!-- sec 1 --> */}

            <div className="jobcategory_sec_2">
                <div className="container">
          <div className='row'>
              <div className='col-md-10'>

                    <div className="jobcategory_sec_2_sub ">
                        <div className='row'>
                            <div className='col-md-6'>
                                <h6 className="jobcategory_sec_2_heading_1">BROWSE JOBS BY FUNCTIONAL AREA / DEPARTMENT</h6>
                            </div>
                            <div className='col-md-6'>
                                {location.pathname === '/categoryjobs' ?
                                    <form>
                                        <div ng-app="angularsearch" ng-controller="searchsuggetions">
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <input type="text" class="form-control serach_input_1" id="se" placeholder="Search" ng-model="in" onChange={(event) => { setsearchTerm(event.target.value); }} />
                                                    <div class="input-group-btn">
                                                        <button type="submit" class="btn search_btn_1"><i class="fa fa-search"></i></button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </form> :
                                    null
                                }
                            </div>
                        </div>
                        <hr className="bg-light" />
                        {location.pathname === '/categoryjobs' ?
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


                            </div> : null}



                        <div className="row">
                            {
                                location.pathname === '/categoryjobs' ?
                                    category?.filter((val) => {
                                        if (searchTerm == "") {
                                            return val
                                        }
                                        else if (val.Category.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                            return val
                                        }
                                    }).map(industry => {
                                        return <div class="col-lg-3 col-md-6 ">
                                            <Link to={`/browsefilterlist?category=${industry.Category}`}>
                                                <a class="company_jobs_anchor p-2">

                                                    <span class="company_jobs_img_1_text ">{industry.Category}</span>
                                                </a>
                                            </Link>
                                        </div>
                                    }) :
                                    // category?.slice(0, 15).map(industry => {
                                    // return <div class="col-lg-3 col-md-6">
                                    //     <Link to={`/browsefilterlist?category=${industry.Category}`}>
                                    //         <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                    //         </span><span class="company_jobs_img_1_text align-self-center px-2">{industry.Category}</span></a>
                                    //     </Link>
                                    // </div>
                                    // })
                                    <>
                                        {/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Accounting'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Accounting</span></a>
                                    </Link>
                                </div> */}

                                        {/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Interior%20Design'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Interior Design</span></a>
                                    </Link>
                                </div>

                                
                                 */}

                                        <div class="col-lg-4 col-md-6" >
                                            <Link to='/browsefilterlist?category=Airline' >
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon'   style={{color:"#FF6B6B"}}><i class="fas fa-plane-departure"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2">Airline</span></a>
                                            </Link>
                                        </div>

                                        <div class="col-lg-4 col-md-6">
                                            <Link to='/browsefilterlist?category=Advertising'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{color:"green"}}><i class="fas fa-ad"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2" >Advertising</span></a>
                                            </Link>
                                        </div>


                                        <div class="col-lg-4 col-md-6">
                                            <Link to='/browsefilterlist?category=Analytics'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon'  style={{color:"#FF85B3"}}><i class="fas fa-chart-bar"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2"  >Analytics</span></a>
                                            </Link>
                                        </div>

                                        <div class="col-lg-4 col-md-6">
                                            <Link to='/browsefilterlist?category=Bank'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                    <span className='B_icon' style={{color:"#8D8DAA "}}><i className="fas fa-university"></i></span>
                                                    <span class="company_jobs_img_1_text align-self-center px-2">Bank</span></a>
                                            </Link>
                                        </div>

                                        <div class="col-lg-4 col-md-6">
                                            <Link to='/browsefilterlist?category=BPO'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{color:"#FFD93D "}}><i class="fas fa-headset"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2">BPO</span></a>
                                            </Link>
                                        </div>

                                        {/* <div class="col-lg-3 col-md-6">
                                            <Link to='/browsefilterlist?category=Business%20Analyst'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{color:"#F76E11 "}}><i class="fas fa-business-time"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2" >Business Analyst</span></a>
                                            </Link>
                                        </div> */}

                                        

                                        <div class="col-lg-4 col-md-6">
                                            <Link to='/browsefilterlist?category=Content%20Writing'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{color:"#006778 "}}><i class="fas fa-pen"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2">Content Writing</span></a>
                                            </Link>
                                        </div>

                                        {/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Consultant'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Consultant</span></a>
                                    </Link>
                                </div> */}
                                        {/* 
                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Engineering'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Engineering</span></a>
                                    </Link>
                                </div> */}

                                      
                                        {/* 
                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Merchandiser'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Merchandiser</span></a>
                                    </Link>
                                </div> */}

                                        {/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Security'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Security</span></a>
                                    </Link>
                                </div> */}

                                        {/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=HR'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">HR</span></a>
                                    </Link>
                                </div> */}

                                        {/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Hotel'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Hotel</span></a>
                                    </Link>
                                </div> */}

                                        {/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Application%20Programming'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Application Programming</span></a>
                                    </Link>
                                </div> */}

                                      

                                        {/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=DBA'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">DBA</span></a>
                                    </Link>
                                </div> */}



                                        <div class="col-lg-4 col-md-6">
                                            <Link to='/browsefilterlist?category=Ecommerce'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{color:"#FFC300 "}}><i class="fas fa-shopping-cart"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2" >Ecommerce</span></a>
                                            </Link>
                                        </div>

                                       

                                        {/* <div class="col-lg-3 col-md-6">
                                            <Link to='/browsefilterlist?category=Client%20Server'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{color:"#ff2f00 "}}><i class="fas fa-industry"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2">Industrial</span></a>
                                            </Link>
                                        </div> */}


                                        <div class="col-lg-4 col-md-6">
                                            <Link to='/browsefilterlist?category=System%20Programming'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon'  style={{color:"#203239 "}}><i class="fas fa-server"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2">System Programming</span></a>
                                            </Link>
                                        </div>


                                        <div class="col-lg-4 col-md-6">
                                            <Link to='/browsefilterlist?category=Networking'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon'  style={{color:"#86C6F4 "}}><i class="fas fa-network-wired"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2" >Network Design</span></a>
                                            </Link>
                                        </div>

                                        <div class="col-lg-4 col-md-6">
                                            <Link to='/browsefilterlist?category=IT'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{color:"#395B64 "}}><i class="fas fa-city"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2">IT</span></a>
                                            </Link>
                                        </div>

                                        <div class="col-lg-4 col-md-6">
                                            <Link to='/browsefilterlist?category=Logistics'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{color:"#FFC300 "}}><i class="fas fa-shipping-fast"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2">Logistics</span></a>
                                            </Link>
                                        </div>

                                        {/* <div class="col-lg-4 col-md-6">
                                            <Link to='/browsefilterlist?category=Hotel'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{color:"#395B64 "}}><i class="fas fa-hospital"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2">Hotel</span></a>
                                            </Link>
                                        </div> */}

                                        <div class="col-lg-4 col-md-6">
                                            <Link to='/browsefilterlist?category=Pharma'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{color:"green "}}><i class="fas fa-capsules"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2">Pharma</span></a>
                                            </Link>
                                        </div>

                                       

                                     

                                        {/* <div class="col-lg-3 col-md-6">
                                            <Link to='/browsefilterlist?category=System%20Programming'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{color:"red"}}><i class="fas fa-desktop"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2" >System Programming</span></a>
                                            </Link>
                                        </div> */}

                                       


                                        {/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=DBA'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon'><i class="fas fa-analytics"></i>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Marketing</span></a>
                                    </Link>
                                </div> */}

                                      

                                    

                                        



                                        {/* 
                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=DBA'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon'><i class="fas fa-shipping-fast"></i>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Shipping</span></a>
                                    </Link>
                                </div> */}


                                        {/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Interior%20Design'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Interior Design</span></a>
                                    </Link>
                                </div> */}

                                    </>





                            }
                        </div>

                        <div className='mb-5 mt-4' id='designation'>
                            {
                                location.pathname === '/categoryjobs' ? null : <Link to="/categoryjobs" className='float-right All-Links'> <i class="fas fa-arrow-right pr-2"></i> View All Functional Areas</Link>
                            }
                        </div>
                    </div>

                    {/* <!-- next container --> */}

                    {/* <div className="jobcategory_sec_2_sub">
                        <h6 className="jobcategory_sec_2_heading_1">BROWSE JOBS BY FUNCTIONAL AREA / DEPARTMENT</h6>
                        <hr className="bg-light" />
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>

                        </div>
                    </div> */}

                </div>



{/* 
                                {/* ad *
                <div className='col-md-2 vgad'>
                <ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-3502028008615885" data-ad-slot={4102552451} data-ad-format="auto" data-full-width-responsive="true" />
                </div> */}

                <div className='col-md-2 text-center'>
                    {/* <img src='images/ashok.jpeg' style={{width:"160px",height:"475px"}}/> */}
                   {/* <CategoryJobAds/> */}
                </div>





                </div>
                </div>

            </div>
        </div>
    )
}

export default CategoryJobs