import React, { useEffect } from 'react'
import useState from 'react-usestateref'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
// import apiList, { server } from '../../lib/apiList';
import apiList from '../lib/apiList';
import ReactPaginate from 'react-paginate';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import moment from 'moment';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import TopCompaniesFilter from './filters/TopCompaniesFilter';  
import TopCompaniesFilter from '../Pages/Browse_Jobs//filters/TopCompaniesFilter'
// import ExperienceFilter from './filters/ExperienceFilter';
import ExperienceFilter from '../Pages/Browse_Jobs/filters/ExperienceFilter';
// import LocationFilter from './filters/LocationFilter';
import LocationFilter from '../Pages/Browse_Jobs/filters/LocationFilter';
// import IndustryFilter from './filters/IndustryFilter';
import IndustryFilter from '../Pages/Browse_Jobs/filters/IndustryFilter';
// import JobCategoryFilter from './filters/DesignationFilter';
// import EducationFilter from './filters/EducationFilter';
import EducationFilter from '../Pages/Browse_Jobs/filters/EducationFilter';
// import SalaryFilter from './filters/SalaryFilter';
import SalaryFilter from '../Pages/Browse_Jobs/filters/SalaryFilter';
import ReactTimeAgo from 'react-time-ago'
// import DesignationFilter from './filters/DesignationFilter';
import DesignationFilter from '../Pages/Browse_Jobs/filters/DesignationFilter';
import FileSaver, { saveAs } from 'file-saver';

import { useSelector } from 'react-redux';
const StudentList = () => {

  const result = useSelector(state => state.data)

  const [allapplicants, setallApplicants] = useState([]);

  const getData = () => {
    axios.get(apiList.allapplicants, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })

      .then((response) => {
        console.log(response.data);
        setallApplicants(response.data.reverse());
      })
      .catch((err) => {
        console.log(err.response.data);

      });
  }


  useEffect(() => {
    getData();
  }, []);


  const downloadReusme=(resume)=>{
    const data = resume;
    FileSaver.saveAs(data, "application/pdf");
  }



  // Pagination code
  // const [offset, setOffset] = useState(1);

  // const [perPage, setPerPage] = useState(30);
  // const [pageCount, setPageCount] = useState(0);

  // const handlePageClick = (e) => {
  //   const selectedPage = e.selected;
  //   setOffset(selectedPage + 1);
  //   console.log('selectedPage', selectedPage);
  //   fetchJobs(selectedPage)
  //   window.scrollTo({
  //     top: 450,
  //     behavior: 'smooth',
  //   })
  // };


  return (
    <div >
      <div className="job_detail_wrapper">
        <div className="heading_pic_filter_list">
          <h1 className="filter_list_heading_1">Student List</h1>
          <p className="text-center filter_list_sub_heading">
            <Link to="/" className="filter_list_sub_heading_1">Home</Link>
            <i class='fas fa-greater-than text-white px-2'></i>
            <a href="#" className="filter_list_sub_heading_2 ">Student List</a></p>
        </div>
      </div>


      <div className="container" >
        <div className="filter_list_search-box">
          {/* <form className="form-control" onSubmit={handleSearch} >
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>

                  </label>
                  <div className="input-group">
                    <input type="text" name="keyword" className="form-control" id="search_filter_list_input"
                      placeholder="Job Title, Keywords, or Phrase" value={keyword} onChange={(e) => {setKeyword(e.target.value); setKeywordError("")}}  />
                    
                    <div className="input-group-append">
                      <span className="filter_list_group_icon">
                        <i className="fas fa-search ml-2" id="filter_list_search_icon1"></i>
                      </span>
                    </div>
                  </div>
                  {keywordError != '' && <small style={{color: 'red'}}>{keywordError}</small>}
                </div>
              </div>

               <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <label></label>
                  <div className="input-group">
                    <input type="text" className="form-control" name="qlocation" id="search_filter_list_input" value={qlocation} onChange={(e) => {setQLocation(e.target.value); setLocationError("")}}
                      placeholder="Location"  />
                      
                    <div className="input-group-append">
                      <span className="filter_list_group_icon">
                        <i className="fas fa-map-marker-alt" id="filter_list_search_icon2"></i></span>
                    </div>
                  </div>
                  {locationError != '' && <small style={{color: 'red'}}>{locationError}</small>}
                </div>
              </div>

              <div className="col-lg-2 col-md-6 ">
                <label for=""></label>
                <a href="#"></a><button id="filter_list_search_btn" className=" btn-block">Find
                  Job</button>
              </div> 

            </div>
          </form> */}
        </div>

      </div>




      <div id="job_filter_list">
        <div className="container BFL">


          <div className="row ">

          <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="sticky-top">
                  <div id="accordion">
                    <div class="card">
                      <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                          <h5
                            class="accordionItemHeading"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                             
                            Top Companies{" "}
                            <span className="float-right">
                              {/* <i className="fas fa-minus"></i> */}
                            </span>
                          </h5>
                         
                        </h5>
                      </div>

                      <div
                        id="collapseOne"
                        class="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                         
                          <div className="accordionItemContent">
                            <form action="#" className="acc_form">
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault2"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault2"
                                >
                                  Accenture(750)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Reliance Industries(680)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Adani Group(248)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  IBM(576)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Cognizent Technologies(768)
                                </label>
                              </div>

                              <div className="more">
                                <Link
                                  to="/companyjobs"
                                  className="more_inner float-right mr-4 py-1"
                                >
                                  {" "}
                                  more...{" "}
                                </Link>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2 */}

                    <div class="card">
                      <div class="card-header" id="headingTwo">
                      <h5 class="mb-0">
                          <h5
                            class="accordionItemHeading"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                             
                            Experience{" "}
                            <span className="float-right">
                              {/* <i className="fas fa-minus"></i> */}
                            </span>
                          </h5>
                         
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        class="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                        
                          <div className="accordionItemContent">
                            <form action="#" className="acc_form">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault2"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  for="flexRadioDefault2"
                                >
                                  0 - 1 years (120)
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  - 1 years (120)
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  0 - 1 years (120)
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  0 - 1 years (120)
                                </label>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                          <h5
                            class="accordionItemHeading"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                             
                            Location{" "}
                            <span className="float-right">
                              {/* <i className="fas fa-minus"></i> */}
                            </span>
                          </h5>
                         
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          
                          <div className="accordionItemContent">
                            <form action="#" className="acc_form">
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault2"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault2"
                                >
                                  Bangolore / Benguluru (18954)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Delhi (7586)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Mumbai (9756)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Hyderabad / Secunderabad (8765)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Chennai (8845)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Ahmedabad (9456)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Kolkata (6578)
                                </label>
                              </div>

                              <div className="more">
                                <Link
                                  to="/locationaljobs"
                                  className="more_inner float-right mr-4 py-1"
                                >
                                  {" "}
                                  more...{" "}
                                </Link>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4 */}

                    <div class="card">
                      <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                          <h5
                            class="accordionItemHeading"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                             
                            Industry{" "}
                            <span className="float-right">
                              {/* <i className="fas fa-minus"></i> */}
                            </span>
                          </h5>
                         
                        </h5>
                      </div>
                      <div
                        id="collapseFour"
                        class="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          
                          <div className="accordionItemContent">
                            <form action="#" className="acc_form">
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault2"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault2"
                                >
                                  IT Services & Consulting (1500)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  BPO / Call Center(879)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Real Estate(589)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Management Jobs (685)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Financial Services (965)
                                </label>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 5 */}

                    <div class="card">
                      <div class="card-header" id="headingFive">
                      <h5 class="mb-0">
                          <h5
                            class="accordionItemHeading"
                            data-toggle="collapse"
                            data-target="#collapseFive"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                             
                             Job Function / Category{" "}
                            
                          </h5>
                         
                        </h5>
                      </div>
                      <div
                        id="collapseFive"
                        class="collapse"
                        aria-labelledby="headingFive"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          
                          <div className="accordionItemContent">
                            <form action="#" className="acc_form">
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input "
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault2"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault2"
                                >
                                  Production Management(120)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Design Engineering(300)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Saftey/health(235)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Engineering (568)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Product Development (798)
                                </label>
                              </div>

                              <div className="more">
                                <Link
                                  to="/categoryjobs"
                                  className="more_inner float-right mr-4 py-1"
                                >
                                  {" "}
                                  more...{" "}
                                </Link>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 6 */}

                    <div class="card">
                      <div class="card-header" id="headingSix">
                      <h5 class="mb-0">
                          <h5
                            class="accordionItemHeading"
                            data-toggle="collapse"
                            data-target="#collapseSix"
                            aria-expanded="true"
                            aria-controls="collapseSix"
                          >
                             
                            Education
                            <span className="float-right">
                              {/* <i className="fas fa-minus"></i> */}
                            </span>
                          </h5>
                         
                        </h5>
                      </div>
                      <div
                        id="collapseSix"
                        class="collapse"
                        aria-labelledby="headingSix"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          
                          <div className="accordionItemContent">
                            <form action="#" className="acc_form">
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input "
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault2"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault2"
                                >
                                  Post Graduate Not Required(15321)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Any Post Graduate(4783)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Any Graduate (7634)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  B.Tech / B.E (14564)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  B.Com (13567)
                                </label>
                              </div>

                              <div className="more">
                                <Link
                                  to="/designationjobs"
                                  className="more_inner float-right mr-4 py-1"
                                >
                                  {" "}
                                  more...{" "}
                                </Link>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 7 */}

                    <div class="card">
                      <div class="card-header" id="headingSeven">
                      <h5 class="mb-0">
                          <h5
                            class="accordionItemHeading"
                            data-toggle="collapse"
                            data-target="#collapseSeven"
                            aria-expanded="true"
                            aria-controls="collapseSeven"
                          >
                             
                           Salary
                            <span className="float-right">
                              {/* <i className="fas fa-minus"></i> */}
                            </span>
                          </h5>
                         
                        </h5>
                      </div>
                      <div
                        id="collapseSeven"
                        class="collapse"
                        aria-labelledby="headingSeven"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                         
                          <div className="accordionItemContent">
                            <form action="#" className="acc_form">
                              <div className="form-check  my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault2"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault2"
                                >
                                  0 - 3 Lakhs
                                </label>
                              </div>
                              <div className="form-check  my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  3 - 7 Lakhs
                                </label>
                              </div>
                              <div className="form-check  my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  7 - 15 Lakhs
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  15 - 30 Lakhs
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  30 - 60 Lakhs
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  60 - 100+++ Lakhs
                                </label>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 

                            


                            <div className="accordionWrapper">
                                 <div className="head_acc">
                                     <h5 className="acc_sidebar_filter float-left"><span className="acc_icon"><i className="fas fa-sliders-h sliders"></i></span><span className="refined">Refined By</span></h5>
                                     <Link to="/" className="acc_sidebar_filter_para float-right">Reset All</Link>
                                 </div>
                                <div className="accordionItem open">
                                    <h2 className="accordionItemHeading">Companies <span className="float-right"><i className="fas fa-minus"></i></span></h2>
                                    <div className="accordionItemContent">
                                     

                                     <form action="#" className="acc_form">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                              Job Mirror Consultancy(50)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                            Engineering Group(80) 
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label" for="flexRadioDefault1">
                                              Electric Co.(248)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                             Telcom Industry(576)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                            Safety/Health(768)
                                            </label>
                                          </div>
                                     </form>
                                       

                                    </div>
                                </div>
    
                                <div className="accordionItem close">
                                    <h2 className="accordionItemHeading">Experience <span className="float-right"><i className="fas fa-plus"></i></span></h2>
                                    <div className="accordionItemContent">
                                       

                                     <form action="#" className="acc_form">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                              0 - 1 years (120)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                 - 1 years (120)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                0 - 1 years (120)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                0 - 1 years (120)
                                            </label>
                                          </div>
                                     </form>
                                      
                                    </div>
                                </div>
    
                                <div className="accordionItem close">
                                    <h2 className="accordionItemHeading">Job Function <span className="float-right"><i className="fas fa-plus"></i></span></h2>
                                    <div className="accordionItemContent">
                                       
                                     <form action="#" className="acc_form">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                              Production Management(120)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                              Design Engineering(300)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                             Saftey/health(235)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Engineering (568)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Product Development (798)
                                            </label>
                                          </div>
                                     </form>
                                       
                                    </div>
                                </div>
    
                                <div className="accordionItem close">
                                    <h2 className="accordionItemHeading">Salary <span className="float-right"><i className="fas fa-plus"></i></span></h2>
                                    <div className="accordionItemContent">
                                    
                                     <form action="#" className="acc_form">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                                Job Mirror Consultancy (50)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Engineering Group (80)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Electric Co. (235)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                              Telecom industry (568)
                                            </label>
                                          </div>
                                     </form>
                                      
                                    </div>
                                </div>
    
                                <div className="accordionItem close">
                                    <h2 className="accordionItemHeading">Industry <span className="float-right"><i className="fas fa-plus"></i></span></h2>
                                    <div className="accordionItemContent">
                                       
                                     <form action="#" className="acc_form">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                              Telcom(5)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                              Consulting Services(10)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                            Engineering/Projects(15)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                              Manfacturing/Industries(12)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                              Architecture/Interior Design(8)
                                            </label>
                                          </div>
                                     </form>
                                       
                                    </div>
                                </div>
                            </div> */}
                </div>
              </div>



            <div className="list_view_width col-lg-9">

              {
                allapplicants.length > 0 ?
                  allapplicants?.map((applicant) => {
                    return (

                      <ul className="filter_list_job_post position-relative">
                        <li>
                          <Link to='#'>
                            <div className="filter_list_job_box">
                              <div className="d-flex mb-4">
                                <div className="filter_list_job_company"> 
                                  <img src={applicant.profileImage? applicant.profileImage :`images/girl_avtar.png`} alt=""/>
                                </div>
                                <div className="filter_list_job_info my-auto">
                                  <h5 className="home_company_name"> {applicant?.name} </h5>
                                  <ul>

                                  </ul>
                                </div>
                              </div>
                              <div className="row table_row">
                                <div className="col-md-6 ">
                                  <div class="table table_row_right">

                                    <div class="table-row">
                                      <div class="table-cell table_data1">Education <span className='indicator_list'>:</span></div>
                                      {
                                        applicant?.education[0]?.highestgraduation ?
                                          <div class="table-cell table_data2">{applicant?.education[0]?.highestgraduation} </div>
                                          : <div class="table-cell table_data2">[Not Updated]</div>
                                      }

                                    </div>

                                    <div class="table-row">
                                      <div class="table-cell table_data1">contactNumber<span className='indicator_list'>:</span></div>
                                      {
                                        applicant?.contactNumber ?
                                          <div class="table-cell table_data2"><span className='font-weight-bold' style={{ fontSize: "17px" }}>xxxxxx </span>{applicant?.contactNumber ? applicant.contactNumber.toString().slice(-4) : null}</div>
                                          : <div class="table-cell table_data2">[Not Updated]</div>
                                      }

                                    </div>

                                    <div class="table-row">
                                      <div class="table-cell table_data1">Email<span className='indicator_list'>:</span></div>
                                      {
                                        applicant?.email ?
                                          <div class="table-cell table_data2"><span className='font-weight-bold' style={{ fontSize: "17px" }}>xxxxxx </span>{applicant?.email ? applicant.email.toString().slice(-12) : null}</div>
                                          : <div class="table-cell table_data2">[Not Updated]</div>
                                      }

                                    </div>

                                    <div class="table-row">
                                      <div class="table-cell table_data1">Experience<span className='indicator_list'>:</span></div>
                                      <div class="table-cell table_data2">
                                        {
                                          applicant?.experience?.experience ?
                                            <span >{applicant?.experience?.experience.charAt(0).toUpperCase() + applicant?.experience?.experience.slice(1)}
                                              ({applicant?.experience?.year} Years - {applicant?.experience?.month})
                                            </span>
                                            :
                                            <span >{applicant?.experience?.charAt(0).toUpperCase() + applicant?.experience?.slice(1)}</span>
                                       

                                        }


                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-6 ">
                                  <div class="table table_row_right">

                                    <div class="table-row">
                                      <div class="table-cell table_data1">Location<span className='indicator_list'>:</span></div>
                                      {
                                        applicant?.currentlocation[0] ?
                                          <div class="table-cell table_data2">{applicant?.currentlocation}</div>
                                          : <div class="table-cell table_data2">[Not Updated]</div>
                                      }

                                    </div>

                                    <div class="table-row">
                                      <div class="table-cell table_data1">Gender<span className='indicator_list'>:</span></div>
                                      {
                                        applicant?.personaldetails?.gender?
                                          <div class="table-cell table_data2">{applicant?.personaldetails?.gender}</div>
                                          : <div class="table-cell table_data2">[Not Updated]</div>
                                      }

                                    </div>


                                    <div class="table-row">
                                      <div class="table-cell table_data1">Pincode<span className='indicator_list'>:</span></div>
                                      {
                                        applicant?.personaldetails?.pincode?
                                          <div class="table-cell table_data2">{applicant?.personaldetails?.pincode}</div>
                                          : <div class="table-cell table_data2">[Not Updated]</div>
                                      }

                                    </div>


                                    <div class="table-row">
                                      <div class="table-cell table_data1">Maritl Status<span className='indicator_list'>:</span></div>
                                      {
                                        applicant?.personaldetails?.maritalStatus?
                                          <div class="table-cell table_data2">{applicant?.personaldetails?.maritalStatus}</div>
                                          : <div class="table-cell table_data2">[Not Updated]</div>
                                      }

                                    </div>

                                  </div>
                                </div>
                                <div className='col-lg-12'>
                                {applicant?.skills.map((skill) => {
                          return (
                            <>
                              <div className="application_skills d-inline-block">
                                <button class="php">{skill}</button>
                              </div>
                            </>
                          );
                        })}
                                </div>

                              </div>

                              <label className="wishlist">
                                {result?.type === "applicant" ?
                                  <button className='btn job_details_applybtn filter_list_wishlist' > Apply </button> :
                                  result?.type === "recruiter" ? null :
                                    <Link to="/auth" > <button className='btn job_details_applybtn filter_list_wishlist'> Login to Apply </button>  </Link>}
                              </label>

                            </div>
                          </Link>
                          <a
                          onClick={()=>downloadReusme(applicant?.resume.url)}
                          class="download_box"
                          data-tip
                          data-for="registerTip"
                        >
                          <i class="fa fa-download student_icon_app"></i>
                        
                        </a>

                        </li>
                      </ul>

                    )
                  }) :
                  null


              }




              {/* <div class="d-flex justify-content-center">
                <ReactPaginate
                  previousLabel="Prev"
                  nextLabel="Next"
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />
              </div>  */}


            </div>
          </div>
        </div>
      </div>



    </div>
  )
}
export default StudentList;