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
import SkillFilter from '../Pages/Browse_Jobs/filters/SkillFilter';

import ReactTimeAgo from 'react-time-ago'
// import DesignationFilter from './filters/DesignationFilter';
import DesignationFilter from '../Pages/Browse_Jobs/filters/DesignationFilter';
import FileSaver, { saveAs } from 'file-saver';
import Browsead from '../ads/Browsead'
import Browsehomead from '../ads/Browsehomead';

import { useSelector } from 'react-redux';
import Browsehrads from '../ads/Browsehrads';
import Browseverads from '../ads/Browseverads';
import ApplicationFilter from './filters/ApplicationFilter';
const StudentList = () => {

  const [post, setPost] = useState({

    skillsets: [],
    cities: [],

  })
  let paramSkill = [];



  const [industryType, setIndustryType] = useState([])
  const [education, setEducation] = useState([])
  const result = useSelector(state => state.data)
  const [applicationFilter, setapplicationFilter] = useState([])
  const [salary, setSalary] = useState()
  const [skill, setSkill] = useState(paramSkill)
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log('qqqq ', query.get('keyword'));
  const [isLoading, setLoading] = useState(false)
  let paramKeyword = ''
  let paramQLocation = ''

  let paramLocation = []

  paramKeyword = query.get('keyword');
  paramQLocation = query.get('qlocation');
  let paramDesignation = []

  if (query.get('locate')) {
    paramLocation.push(query.get('locate'))
  }

  if (query.get('designate')) {
    paramDesignation.push(query.get('designate'))
  }

  if (query.get('skill')) {
    paramSkill.push(query.get('skill'))
  }


  const [qlocation, setQLocation] = useState(paramQLocation)
  const [location, setLocation] = useState(paramLocation)
  const [experience, setExperience] = useState([])
  const [designation, setDesignation] = useState(paramDesignation)

  const handleLocationAdd = async (locations) => {
    setLocation(locations)
    fetchJobs();

  }
  const handleLocationRemove = async (locations) => {
    setLocation(locations)
    // fetchJobs();
  }

  const resetFilter = () => {

    setLocation([]);
    setExperience([]);
    setapplicationFilter([]);
    setEducation([]);
    setDesignation([]);
    setIndustryType([]);
    setSkill([]);
    setQLocation("")
  }

  const fetchJobs = async (page = 0) => {
    setLoading(true)
    let token = localStorage.getItem("token");
    let headers = {}
    if (token) {
      headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }
    let data = {
      applicationFilter,
      location,
      experience,
      // companies: topCompanies,
      educations: education,
      category: designation,
      industryType,
      skills: skill
      // salaryMin: 0,  
      // salaryMax: 18000
    }
    // if (salary) {
    //   data.salaryMin = salary.salaryMin
    //   data.salaryMax = salary.salaryMax
    // }
    // if (keyword !== '') {
    //   data.q = keyword
    // }
    // if (qlocation !== '') {
    //   data.qlocation = qlocation
    // }
    await axios.post(apiList.searchApplicats + '?page=' + page, data, {
      headers,
    })
      .then((response) => {
        setLoading(false)
        setPageCount(Math.ceil(response.data.counts) / 20)
        console.log('posts', response.data.posts);
        setallApplicants(response.data.posts)
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data.message)
      });


  }

  useEffect(async () => {
    fetchJobs();
  }, [location, experience, industryType, designation, education, salary, skill, applicationFilter])

  useEffect(() => {
    getData()
  }, [])
  const handleIndustryTypeAdd = async (industry) => {
    setIndustryType(industry)
    fetchJobs();

  }

  const handleIndustryTypeRemove = async (industry) => {
    setIndustryType(industry)
    // fetchJobs();

  }

  const handleDesignationAdd = async (designate) => {
    setDesignation(designate)
    fetchJobs();

  }

  const handleDesignationRemove = async (designate) => {
    setDesignation(designate)
    // fetchJobs();

  }

  const handleEducationAdd = async (educations) => {
    setEducation(educations)
    fetchJobs();

  }

  const handleEducationRemove = async (educations) => {
    setEducation(educations)
    // fetchJobs();

  }

  const handleSkillAdd = async (educations) => {
    setSkill(educations)
    fetchJobs();

  }

  const handleSkillRemove = async (educations) => {
    setSkill(educations)
    // fetchJobs();

  }



  const [allapplicants, setallApplicants] = useState([]);

  const getData = () => {
    axios.get(apiList.allapplicants, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })

      .then((response) => {
        // setPageCount(Math.ceil(response.data.length) / perPage)
        // console.log(response.data);
        // setallApplicants(response.data.reverse());
        setapplicationsCounat(response.data.length)
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  const downloadReusme = (resume) => {
    if (resume === "" || resume == null) {
      toast.error('Resume not uploaded')
    }

    else {
      const data = resume;
      FileSaver.saveAs(data, "application/pdf");
      toast.success('Resume downloaded successfully')

    }
  }



  // Pagination code
  const [offset, setOffset] = useState(1);
  //   const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(20);
  const [pageCount, setPageCount] = useState(0);
  const [applicationsCounat, setapplicationsCounat] = useState(0)
  const indexOfLastPost = offset * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPost = allapplicants.slice(indexOfFirstPost, indexOfLastPost);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
    fetchJobs(selectedPage)
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 320,
      behavior: "smooth"
    });
  };


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
                  <ApplicationFilter application={applicationFilter} setApplication={setapplicationFilter} />

                  <ExperienceFilter experience={experience} setExperience={setExperience} />
                  <LocationFilter location={location} handleLocationAdd={handleLocationAdd} handleLocationRemove={handleLocationRemove} from={"student"} />

                  <IndustryFilter industryType={industryType} handleIndustryTypeAdd={handleIndustryTypeAdd} handleIndustryTypeRemove={handleIndustryTypeRemove} />

                  <DesignationFilter designation={designation} handleDesignationAdd={handleDesignationAdd} handleDesignationRemove={handleDesignationRemove} from={"student"} />

                  {/* 6 */}

                  <EducationFilter education={education} handleEducationAdd={handleEducationAdd} handleEducationRemove={handleEducationRemove} from={"student"} />

                  {/* 7 */}

                  <SalaryFilter salary={salary} setSalary={setSalary} />

                  <SkillFilter skill={skill} handleSkillAdd={handleSkillAdd} handleSkillRemove={handleSkillRemove} from={"student"} />

                  {/* 5 */}

                  {/* <div class="card">
                    <div class="card-header" id="headingFive">
                      <h5
                        class=" collapsed accordionItemHeading"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Designation{" "}
                        <span className="float-right">
        <i className="fas fa-plus"></i>
    </span>
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
                  </div> */}

                  {/* 2 */}

                  {/* <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h5
                        class="collapsed accordionItemHeading"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Experience{" "}
                        <span className="float-right">
                          <i className="fas fa-plus"></i>
                        </span>
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
                                name="experience"
                                id="experience1"
                                // onChange={handleChange}
                                value="0-2 years"
                              />
                              <label
                                className="form-check-label"
                                for="experience1"
                              >
                                00 - 02 years
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="experience"
                                id="experience2"
                                // onChange={handleChange}
                                value="2-5 years"
                              />
                              <label
                                className="form-check-label"
                                for="experience2"
                              >
                                02 - 05 years
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="experience"
                                // onChange={handleChange}
                                id="experience3"
                                value="5-10 years"
                              />
                              <label
                                className="form-check-label"
                                for="experience3"
                              >
                                05 - 10 years
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="experience"
                                // onChange={handleChange}
                                id="experience4"
                                value="10-15 years"
                              />
                              <label
                                className="form-check-label"
                                for="experience4"
                              >
                                10 - 15 years
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="experience"
                                 onChange={()=>alert()}
                                id="experience5"
                                value="15+ years"
                              />
                              <label
                                className="form-check-label"
                                for="experience5"
                              >
                                15 + years
                              </label>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div> */}



                  {/* 4 */}

                  {/* <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5
                        class=" collapsed accordionItemHeading"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Industry{" "}
                        <span className="float-right">
                        <i className="fas fa-plus"></i>
                    </span>
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
                  </div> */}



                  {/* 6 */}

                  {/* <div class="card">
                    <div class="card-header" id="headingSix">
                      <h5
                        class="accordionItemHeading collapsed"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Education
                        <span className="float-right">
                          <i className="fas fa-plus"></i>
                        </span>
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
                  </div> */}

                  {/* 7 */}

                  {/* <div class="card">
                    <div class="card-header" id="headingSeven">
                      <h5
                        class="accordionItemHeading collapsed"
                        data-toggle="collapse"
                        data-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        Salary{" "}
                        <span className="float-right">
                          <i className="fas fa-plus"></i>
                        </span>
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
                  </div> */}

                  <div className="google_ads">
                    <Browseverads />

                    <Browsead />

                    <Browsehrads />

                    <Browsehrads />



                    <Browsead />

                    <Browsehrads />



                    <Browsehrads />

                    <Browseverads />

                    <Browsead />

                    <Browsehrads />

                    <Browseverads />


                    <Browsead />

                    <Browsehrads />

                    <Browseverads />

                    <Browsehrads />

                    <Browseverads />

                    <Browsead />

                    {/* <Browsehrads /> */}

                    <Browseverads />


                    {/* <Browsead /> */}

                    <Browsehrads />

                    <Browseverads />

                  </div>
                </div>
              </div>
            </div>



            <div className="list_view_width col-lg-7">
              <div className='text-right list_student_count' > <p>Total Number of Candidates :<b>{applicationsCounat}</b> </p></div>
              {
                allapplicants.length > 0 ?
                  allapplicants?.map((applicant, indexx) => {
                    return (
                      <>
                        {indexx % 3 == 0 && <div className='google_ads'>
                          <Browsehomead /> </div>}

                        <ul className="filter_list_job_post position-relative" style={{ cursor: "pointer" }}>
                          <li >
                            {/* <Link to=''> */}
                            <div className="filter_list_job_box">
                              <div className="d-flex mb-4">
                                <div className="filter_list_job_company">
                                  <img src={applicant.profileImage ? applicant.profileImage : `images/girl_avtar.png`} alt="" />
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
                                        applicant?.education?.[0]?.highestgraduation ?
                                          <div class="table-cell table_data2">{applicant?.education[0]?.highestgraduation} </div>
                                          : <div class="table-cell table_data2">[Not Updated]</div>
                                      }

                                    </div>

                                    <div class="table-row">
                                      <div class="table-cell table_data1">ContactNumber<span className='indicator_list'>:</span></div>
                                      {
                                        applicant?.contactNumber ?
                                          <div class="table-cell table_data2">
                                            <span className='font-weight-bold' style={{ fontSize: "17px" }}>
                                              xxxxxx </span>{applicant?.contactNumber ? applicant.contactNumber.toString().slice(-4) : null}
                                            {/* {applicant?.contactNumber} */}
                                          </div>
                                          : <div class="table-cell table_data2">[Not Updated]</div>
                                      }

                                    </div>

                                    <div class="table-row">
                                      <div class="table-cell table_data1">Email<span className='indicator_list'>:</span></div>
                                      {
                                        applicant?.email ?
                                          <div class="table-cell table_data2"><span className='font-weight-bold' style={{ fontSize: "17px" }}>
                                            xxxxxx </span>{applicant?.email ? applicant.email.toString().slice(-12) : null}
                                          </div>
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
                                        applicant?.currentlocation?.[0] ?
                                          <div class="table-cell table_data2">{applicant?.currentlocation}</div>
                                          : <div class="table-cell table_data2">[Not Updated]</div>
                                      }

                                    </div>

                                    <div class="table-row">
                                      <div class="table-cell table_data1">Gender<span className='indicator_list'>:</span></div>
                                      {
                                        applicant?.personaldetails?.gender ?
                                          <div class="table-cell table_data2">{applicant?.personaldetails?.gender}</div>
                                          : <div class="table-cell table_data2">[Not Updated]</div>
                                      }

                                    </div>


                                    <div class="table-row">
                                      <div class="table-cell table_data1">Pincode<span className='indicator_list'>:</span></div>
                                      {
                                        applicant?.personaldetails?.pincode ?
                                          <div class="table-cell table_data2">{applicant?.personaldetails?.pincode}</div>
                                          : <div class="table-cell table_data2">[Not Updated]</div>
                                      }

                                    </div>


                                    <div class="table-row">
                                      <div class="table-cell table_data1">Maritl Status<span className='indicator_list'>:</span></div>
                                      {
                                        applicant?.personaldetails?.maritalStatus ?
                                          <div class="table-cell table_data2">{applicant?.personaldetails?.maritalStatus}</div>
                                          : <div class="table-cell table_data2">[Not Updated]</div>
                                      }

                                    </div>

                                  </div>
                                </div>
                                <div className='col-lg-12'>
                                  {applicant?.skills && applicant?.skills?.map((skill) => {
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

                              {/* <label className="wishlist">
                                {result?.type === "applicant" ?
                                  <button className='btn job_details_applybtn filter_list_wishlist' > Apply </button> :
                                  result?.type === "recruiter" ? null :
                                    <Link to="/auth" > <button className='btn job_details_applybtn filter_list_wishlist'> Login to Apply </button>  </Link>}
                              </label> */}

                            </div>
                            {/* </Link> */}


                            <a
                              onClick={() => downloadReusme(applicant?.resume.url)}
                              class="download_box"
                            >
                              <i class="fa fa-download student_icon_app"></i>

                            </a>

                          </li>
                        </ul>
                      </>
                    )

                  }) :
                  <div style={{ textAlign: "-webkit-center" }}>
                    <p>There is no student to list with the current filter</p>
                    <button
                      className={`btn list_view mb-2 `} onClick={resetFilter}>Reset Filter</button>
                  </div>


              }



              <div class="d-flex justify-content-center">
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
                  onClick={() => scrollToTop()}
                />
              </div>


            </div>


            {/* ad */}
            <div className='col-md-2 google_ads'>

              <Browsead />

              <Browsehrads />

              <Browsehrads />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsehrads />

              <Browseverads />

              <Browsead />

              {/* <Browseverads />

              <Browsead />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />
              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads />

              <Browsead />

              <Browsehrads />

              <Browsead />

              <Browseverads /> */}

            </div>


          </div>
        </div>
      </div>



    </div>
  )
}
export default StudentList;