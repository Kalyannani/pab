import React, { useState, useEffect } from "react";
// import '../../src/For_Employers/Searchcandidates/'
// import { Link } from 'react-router-dom'
import { useCallback } from "react";
import Modal from "react-modal";
import UI from '../SearchCandidates/UI'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import apiList, { server } from '../../lib/apiList';
// import apiList from '../lib/apiList';

import ReactPaginate from 'react-paginate';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import moment from 'moment';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import TopCompaniesFilter from './filters/TopCompaniesFilter';  
// import TopCompaniesFilter from '../Pages/Browse_Jobs//filters/TopCompaniesFilter'
import TopCompaniesFilter from "../../Pages/Browse_Jobs/filters/TopCompaniesFilter";
// import ExperienceFilter from './filters/ExperienceFilter';
// import ExperienceFilter from '../Pages/Browse_Jobs/filters/ExperienceFilter';
import ExperienceFilter from "../../Pages/Browse_Jobs/filters/ExperienceFilter";



// import LocationFilter from './filters/LocationFilter';
// import LocationFilter from '../Pages/Browse_Jobs/filters/LocationFilter';
import LocationFilter from "../../Pages/Browse_Jobs/filters/LocationFilter";



// import IndustryFilter from './filters/IndustryFilter';
// import IndustryFilter from '../Pages/Browse_Jobs/filters/IndustryFilter';
import IndustryFilter from "../../Pages/Browse_Jobs/filters/IndustryFilter";
// import JobCategoryFilter from './filters/DesignationFilter';
// import EducationFilter from './filters/EducationFilter';
// import EducationFilter from '../Pages/Browse_Jobs/filters/EducationFilter';
import EducationFilter from "../../Pages/Browse_Jobs/filters/EducationFilter";
// import SalaryFilter from './filters/SalaryFilter';
// import SalaryFilter from '../Pages/Browse_Jobs/filters/SalaryFilter';
import SalaryFilter from "../../Pages/Browse_Jobs/filters/SalaryFilter";
// import SkillFilter from '../Pages/Browse_Jobs/filters/SkillFilter';
import SkillFilter from "../../Pages/Browse_Jobs/filters/SkillFilter";

import ReactTimeAgo from 'react-time-ago'
// import DesignationFilter from './filters/DesignationFilter';
// import DesignationFilter from '../Pages/Browse_Jobs/filters/DesignationFilter';
import DesignationFilter from "../../Pages/Browse_Jobs/filters/DesignationFilter";
import FileSaver, { saveAs } from 'file-saver';
// import Browsead from '../ads/Browsead'
// import Browsead form '../../../'
// import Browsehomead from '../ads/Browsehomead';
import Browsehomead from "../../ads/Browsehomead";
import { useSelector } from 'react-redux';
// import Browsehrads from '../ads/Browsehrads';
// import Browseverads from '../ads/Browseverads';
// import ApplicationFilter from './filters/ApplicationFilter';

const Searchcandidates = () => {



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





  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  // const [status, setStatus] = React.useState(0); // 0: no show, 1: show yes, 2: show no.

  // const radioHandler = (status) => {
  //     setStatus(status);
  // };


  const customStyles = {
    content: {
      top: '475px',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: "600px",
      padding: "20px 0px 0px"
      // position:"relative"
    },
    overlay:
      {}

  };

  const [clickRadio, setClickRadio] = useState(true);

  const ClickRadio1 = () => {
    setClickRadio(false);
    isChangeRadio(true);
    isChangeRadio3(true);
  };

  const [changeRadio, isChangeRadio] = useState(true);

  const ChangeRadio2 = () => {
    isChangeRadio(false);
    setClickRadio(true);
    isChangeRadio3(true);
  };

  const [changeRadio3, isChangeRadio3] = useState(true);
  const ChangeRadio3 = () => {
    isChangeRadio3(false);
    isChangeRadio(true);
    setClickRadio(true);
  };

  const [changeRadio4, isChangeRadio4] = useState(true);
  const ChangeRadio4 = () => {
    isChangeRadio4(false);
    isChangeRadio(true);
    isChangeRadio3(true);
    setClickRadio(true);
  };
  return (

    <>

      <div style={{ marginTop: "110px" }}>
        <div className="job_detail_wrapper">
          <div className="heading_pic_filter_list">
            <h1 className="filter_list_heading_1">Student List</h1>
            <p className="text-center filter_list_sub_heading">
              <Link to="/" className="filter_list_sub_heading_1">Home</Link>
              <i class='fas fa-greater-than text-white px-2'></i>
              <a href="#" className="filter_list_sub_heading_2 ">Student List</a></p>
          </div>
        </div>



        <div className="container mt-5 ">
          <div className="row">
            <div className="col-md-3 seach_card  pb-3">
              <div className="header_title d-flex justify-content-between pt-3">
                <p className="filter_para">
                  <i class="fas fa-filter"></i> Filters
                </p>
                <a href="" className="more_filter">Clear all</a>
              </div>

              <div
                class="alert alert_radius  alert-dismissible fade show d-flex"
                role="alert"
              >
                <p>Accountant  <a type="button" className="alert_close1" >X</a> </p>
                {/* <button
                type="button"
                class="close alert_close alert_close1"
                data-dismiss="alert"
                aria-label="Close"
                
              >
                <span aria-hidden="true">&times;</span>
              </button> */}
              </div>

              <div>
                <div
                  class="accordion accordion-flush accordion_bg"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item accordion-item_bg">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button accordion-button_btn accordion_bg collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Role
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="card_body  ">
                          <form className="form-group p-2">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Eg: BPO,KPO"
                            />
                            {/* first radio */}
                            <div className="check_div p-2 mt-2">
                              <div className="first_radio">
                                <div class="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios1"
                                    value="option1"
                                    onChange={ClickRadio1}
                                  />
                                  <label class="form-check-label" for="exampleRadios1">
                                    Accountant
                                  </label>
                                </div>

                                {/* check box */}
                                {clickRadio ? null : (
                                  <div className="pl-3">
                                    <div class="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck1"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="customCheck1"
                                      >
                                        Audit
                                      </label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck2"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="customCheck2"
                                      >
                                        Finance
                                      </label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck3"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="customCheck3"
                                      >
                                        Clerk
                                      </label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck4"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="customCheck4"
                                      >
                                        Book Keeper
                                      </label>
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* second radio */}
                              <div className="second_radio">
                                <div class="form-check mt-2">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios2"
                                    value="option2"
                                    onChange={ChangeRadio2}
                                  />
                                  <label class="form-check-label" for="exampleRadios2">
                                    Animation
                                  </label>
                                </div>

                                {changeRadio ? null : (
                                  <div className="pl-3">
                                    <div class="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck5"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="customCheck5"
                                      >
                                        3D Mays
                                      </label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck6"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="customCheck6"
                                      >
                                        3D Modeler
                                      </label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck7"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="customCheck7"
                                      >
                                        Animator
                                      </label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck8"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="customCheck8"
                                      >
                                        Graphic Design
                                      </label>
                                    </div>
                                  </div>
                                )}
                              </div>
                              {/* third radio */}
                              <div className="second_radio">
                                <div class="form-check mt-2">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios2"
                                    value="option2"
                                    onChange={ChangeRadio3}
                                  />
                                  <label class="form-check-label" for="exampleRadios2">
                                    Beautician
                                  </label>
                                </div>

                                {changeRadio3 ? null : (
                                  <div className="pl-3">
                                    <div class="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck5"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="customCheck5"
                                      >
                                        Beauty care
                                      </label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck6"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="customCheck6"
                                      >
                                        Esthetician
                                      </label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck7"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="customCheck7"
                                      >
                                        Hair
                                      </label>
                                    </div>
                                  </div>
                                )}
                              </div>
                              {/* fourth radio */}
                              <div className="second_radio">
                                <div class="form-check mt-2">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios2"
                                    value="option2"
                                    onChange={ChangeRadio4}
                                  />
                                  <label class="form-check-label" for="exampleRadios2">
                                    Architect
                                  </label>
                                </div>

                                {changeRadio4 ? null : (
                                  <div className="pl-3">
                                    <div class="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck5"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="customCheck5"
                                      >
                                        Exterior Design
                                      </label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck6"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="customCheck6"
                                      >
                                        Interior Design
                                      </label>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*second-accordion */}
                  <div class="accordion-item accordion-item_bg">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button accordion-button_btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Locality
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <form className="form-group">
                          <input
                            type="text"
                            placeholder="Eg: Madhapur"
                            className="form-control"
                          />
                        </form>
                      </div>
                    </div>
                  </div>

                  {/* third-accordion */}
                  <div class="accordion-item accordion-flush accordion-item_bg">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button accordion-button_btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Experience (in years)
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div class="col-6 m-0 p-0 mt-2 d-flex justify-content-between">
                          <form className="form-group">
                            <p className="p-0 m-0">max</p>
                            <select id="cars" name="cars">
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                            </select>
                          </form>
                          <form className="form-group">
                            <p className="p-0 m-0">min</p>
                            <select id="cars" name="cars">
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                            </select>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-auto text-center pt-3">
                  {/* <a href="" className="more_filter">
                    <i class="fas fa-plus"></i> More Filters
        </a> */}

                  {/* <input type="button"className="more_filter" value="Open modal" onClick={openModal} /> */}
                  <button type="button" className="more_filter" data-toggle="modal" data-target="#exampleModalCenter"  ><i class="fas fa-plus"></i> More Filter</button>

                  {/* <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
                    <a className="search_close_modal" onClick={closeModal}><i className="fas fa-times"></i></a>
                    <UI />
                  </Modal> */}

                  <div class="modal fade " id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable" role="document">
                      <div class="modal-content search_candidates_modal">
                        <div class="modal-body position-relative">
                          <button type="button" class="btn filter_search_cand" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                          <UI />
                        </div>
                        <div class="modal-footer search_footer">
                          <div className="fixed_apply d-inline-block">
                            <div className="d-flex">
                              <button className="btn reset_cand"> RESET</button>
                              <button className="btn apply_cand"> APPLY</button>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>



                </div>
                <div className="text-center mt-2">
                  <button className="btn btn-block apply_btn">APPLY</button>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              {/* <div>
          <i className="fas fa-map-marker-alt"></i>Hyderabad <i class="fas fa-chevron-circle-down"></i>
          </div> */}
              <div className="row">
                <div className="col-md-3">
                  <li class="nav-item dropdown1">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "black" }}>
                      <i class="fas fa-map-marker-alt" ></i> Andra Pradesh
                    </a>
                    <div class="dropdown-menu scrollable_menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="#">Delhi</a>
                      <a class="dropdown-item" href="#">Madhya Pradesh</a>
                      <a class="dropdown-item" href="#">Himachal Pradesh</a>
                      <a class="dropdown-item" href="#">Odisha</a>
                      <a class="dropdown-item" href="#">Goa</a>
                      <a class="dropdown-item" href="#">Sikkim</a>
                      <a class="dropdown-item" href="#">Kerala</a>
                      <a class="dropdown-item" href="#">Uttarakhand</a>
                      <a class="dropdown-item" href="#">Mizoram</a>
                      <a class="dropdown-item" href="#">Manipur</a>
                      <a class="dropdown-item" href="#">Telangana</a>
                      <a class="dropdown-item" href="#">Arunachal Pradesh</a>
                      <a class="dropdown-item" href="#">Nagaland</a>
                      <a class="dropdown-item" href="#">Tamil Nadu</a>
                      <a class="dropdown-item" href="#">Chhattisgarh</a>
                      <a class="dropdown-item" href="#">Rajasthan</a>
                      <a class="dropdown-item" href="#">Maharashtra</a>
                      <a class="dropdown-item" href="#">Tripura</a>
                      <a class="dropdown-item" href="#">Karnataka</a>
                      <a class="dropdown-item" href="#">AndraPradesh</a>
                      <a class="dropdown-item" href="#">Bihar</a>
                      <a class="dropdown-item" href="#">Haryana</a>
                      <a class="dropdown-item" href="#">Assam</a>
                      <a class="dropdown-item" href="#">Uttar Pradesh</a>
                      <a class="dropdown-item" href="#">Punjab</a>
                    </div>
                  </li>
                </div>

                <div className="col-md-4"></div>

                <div className="col-md-2">

                  <div className="search_candidate_dropdownbtn">
                    <span>Sort by:</span>
                    <select
                      className=""
                      name=""
                      style={{ border: "none" }}

                    >
                      <option hidden>Recent</option>
                      <option value="Recent">Recent</option>
                      <option value="Relavant">Relavant</option>
                      <option value="VIP First">VIP First</option>

                    </select>
                  </div>


                </div>
                <div className="col-md-3">
                  <div className="search_candidate_dropdownbtn">
                    <span>Result Per Page :</span>
                    <select
                      className=""
                      name=""
                      style={{ border: "none" }}

                    >
                      <option>20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                      <option value="50">50</option>
                    </select>
                  </div>


                </div>
              </div>


              <div className='text-right list_student_count' > <p>Total Number of Candidates :<b>{applicationsCounat}</b> </p></div>

              {
                allapplicants.length > 0 ?
                  allapplicants?.map((applicant, indexx) => {
                    return (
                      <>
                        {indexx % 3 == 0 && <div className='google_ads'>
                          <Browsehomead /> </div>}

                        <div className="student_box">
                          <div className="details_heading">
                            <span className="user_icon">
                              <i class="fas fa-user"></i>
                              {/* <img src={applicant.profileImage ? applicant.profileImage : `images/girl_avtar.png`} alt="" /> */}
                            </span>
                            <div className="d-inline-block pl-3 ">
                              <span className="cand_name"> {applicant?.name}</span>
                              <span className="cand_age">23 years</span>
                              <div className="cand_address d-block">
                                <span>             {
                                  applicant?.designation?.[0] ?
                                    <div class="table-cell table_data2">{applicant?.designation}</div>
                                    : <div class="table-cell table_data2">[Not Updated]</div>
                                } from
                                  {
                                    applicant?.currentlocation?.[0] ?
                                      <div class="table-cell table_data2">{applicant?.currentlocation}</div>
                                      : <div class="table-cell table_data2">[Not Updated]</div>
                                  }</span>
                              </div>
                            </div>
                          </div>

                          <div className="down_cand_content">
                            <div className="row action_data my-2">
                              <div className="col-md-6  my-1 action_sms">
                                <button>SMS</button>
                                <button>Email</button>
                                <button>View Contact</button>
                              </div>
                              <div className="col-md-6 cand_verify  my-1 pt-1 ">
                                <span className="cand_resume">
                                  <a
                                    onClick={() => downloadReusme(applicant?.resume.url)}
                                    class="download_box"
                                  >
                                    <img src="images/resumedownload.svg" alt="" />
                                    <span className="pl-2">Download Resume</span>
                                  </a>
                                </span>

                                <span className="cand_mobile">
                                  <i class="fas fa-mobile-alt ml-4"></i>
                                  <span className="pl-2">                                   {
                                    applicant?.contactNumber ?
                                      <div class="table-cell table_data2">
                                        <span className='font-weight-bold' style={{ fontSize: "17px" }}>
                                          xxxxxx </span>{applicant?.contactNumber ? applicant.contactNumber.toString().slice(-4) : null}
                                        {/* {applicant?.contactNumber} */}
                                      </div>
                                      : <div class="table-cell table_data2">[Not Updated]</div>
                                  }</span>
                                </span>
                              </div>
                            </div>

                            <div className="more_details my-2">
                              <span className="cand_edu">
                                <i class="fas fa-graduation-cap"></i>                                      {
                                  applicant?.education?.[0]?.highestgraduation ?
                                    <div class="table-cell table_data2">{applicant?.education[0]?.highestgraduation} </div>
                                    : <div class="table-cell table_data2">[Not Updated]</div>
                                }

                              </span>
                              <span className="cand_exp">
                                <i class="fas fa-briefcase"></i>
                                {/* {
                                  applicant?.experience?.experience ?
                                    <span >{applicant?.experience?.experience.charAt(0).toUpperCase() + applicant?.experience?.experience.slice(1)}
                                      ({applicant?.experience?.year} Years - {applicant?.experience?.month})
                                    </span>
                                    :
                                    <span >{applicant?.experience?.charAt(0).toUpperCase() + applicant?.experience?.slice(1)}</span> 
                                    

                                } */}
                                {
                                  applicant?.experience == "" ?
                                    <span> [Not Updated]
                                    </span>
                                    : (
                                      applicant?.experience?.experience ?
                                        <span >{applicant?.experience?.experience.charAt(0).toUpperCase() + applicant?.experience?.experience.slice(1)}
                                          ({applicant?.experience?.year} Years - {applicant?.experience?.month})
                                        </span>
                                        :
                                        <span >{applicant?.experience?.charAt(0).toUpperCase() + applicant?.experience?.slice(1)}</span>


                                    )
                                }
                              </span>
                              <span className="cand_salary">
                                <i class="fas fa-rupee-sign"></i>25000 / month
                              </span>
                            </div>

                            <div className="cand_shift">
                              <span>
                                Interested in Full Time Jobs with Morning Shift, Evening
                                Shift, Any Shift
                              </span>
                            </div>

                            <div className="row">
                              <div className="col-md-6">
                                <div className="main_data">
                                  <div className="inner">
                                    <div className="left_content">
                                      Hello English Score Minimum :
                                    </div>
                                    <div className="right_content">
                                      <span>50</span>
                                    </div>
                                  </div>

                                  <div className="inner">
                                    <div className="left_content">Industry : </div>
                                    <div className="right_content">
                                      <span>
                                        {
                                          applicant?.organization?.[0] ?
                                            <div class="table-cell table_data2">{applicant?.organization}</div>
                                            : <div class="table-cell table_data2">[Not Updated]</div>
                                        }
                                      </span>
                                    </div>
                                  </div>

                                  <div className="inner">
                                    <div className="left_content">Skills :</div>
                                    <div className="right_content">
                                      <span>
                                      {
                                        applicant?.experience == "" ?
                                        <span> [Not Updated]
                                        </span>
                                        : (
                                            applicant?.skills?.map(val=>{
                                                return(<button className="php_search">{val}</button>)
                                            })
                                        )
                                        }
                                      </span>
                                    </div>
                                  </div>

                                  <div className="inner">
                                    <div className="left_content">Degree : </div>
                                    <div className="right_content">
                                      <span>
                                        {
                                          applicant?.education?.[0]?.highestgraduation ?
                                            <div class="table-cell table_data2">{applicant?.education[0]?.highestgraduation} </div>
                                            : <div class="table-cell table_data2">[Not Updated]</div>
                                        }
                                      </span>
                                    </div>
                                  </div>

                                  <div className="inner">
                                    <div className="left_content">Address Proof Number : </div>
                                    <div className="right_content">
                                      <span>
                                        {
                                          applicant?.personaldetails?.[0]?.AdressProofNumber ?
                                            <div class="table-cell table_data2">{applicant?.personaldetails[0]?.AdressProofNumber} </div>
                                            : <div class="table-cell table_data2">[Not Updated]</div>
                                        }
                                      </span>
                                    </div>
                                  </div>

                                  <div className="inner">
                                    <div className="left_content">Company :</div>
                                    <div className="right_content">
                                      <span>Sai Rama Association</span>
                                    </div>
                                  </div>

                                  <div className="inner">
                                    <div className="left_content">Location : </div>
                                    <div className="right_content">
                                      <span>
                                      {
                                          applicant?.currentlocation?.[0] ?
                                            <div class="table-cell table_data2">{applicant?.currentlocation}</div>
                                            : <div class="table-cell table_data2">[Not Updated]</div>
                                        }
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="main_data">
                                  <div className="inner">
                                    <div className="left_content">
                                      Designation :
                                    </div>
                                    <div className="right_content">
                                      <span>
                                        {
                                          applicant?.designation?.[0] ?
                                            <div class="table-cell table_data2">{applicant?.designation}</div>
                                            : <div class="table-cell table_data2">[Not Updated]</div>
                                        }
                                      </span>
                                    </div>
                                  </div>

                                  <div className="inner">
                                    <div className="left_content">Type : </div>
                                    <div className="right_content">
                                      <span>Clerk/Book Keeper</span>
                                    </div>
                                  </div>

                                  <div className="inner">
                                    <div className="left_content">Languages known : </div>
                                    <div className="right_content">
                                      <span>
                                        {
                                          applicant?.personaldetails?.languages?.[0] ?
                                            <div class="table-cell table_data2">{applicant?.personaldetails?.languages}</div>
                                            : <div class="table-cell table_data2">[Not Updated]</div>
                                        }
                                      </span>
                                    </div>
                                  </div>

                                  <div className="inner">
                                    <div className="left_content"> Certifications : </div>
                                    <div className="right_content">
                                      <span>others</span>
                                    </div>
                                  </div>

                                  <div className="inner">
                                    <div className="left_content">Address Proof : </div>
                                    <div className="right_content">
                                      <span>
                                        {
                                          applicant?.personaldetails?.[0]?.AddressProof ?
                                            <div class="table-cell table_data2">{applicant?.personaldetails[0]?.AddressProof} </div>
                                            : <div class="table-cell table_data2">[Not Updated]</div>
                                        }
                                      </span>
                                    </div>
                                  </div>

                                  <div className="inner">
                                    <div className="left_content">Passport : </div>
                                    <div className="right_content">
                                      <span>
                                        {
                                          applicant?.personaldetails?.[0]?.passport ?
                                            <div class="table-cell table_data2">{applicant?.personaldetails[0]?.passport} </div>
                                            : <div class="table-cell table_data2">[Not Updated]</div>
                                        }
                                      </span>
                                    </div>
                                  </div>

                                  <div className="inner">
                                    <div className="left_content">
                                      Do you have marg accounting certification? :
                                    </div>
                                    <div className="right_content">
                                      <span>Yes </span>
                                    </div>
                                  </div>

                                  <div className="inner">
                                    <div className="left_content"> Hello English score : </div>
                                    <div className="right_content">
                                      <span> 50-70 </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="d-inline-block mb-2">
                              <div className="last_time d-inline-block pr-5">
                                <span>Last activity 3 hrs ago</span>
                              </div>

                              <div className="d-inline-block last_time pr-5">
                                <span>
                                  <i class="fas fa-list pr-2"></i>Shortlisted by 2
                                  Recruiters recently{" "}
                                </span>
                              </div>
                              <div className="d-inline-block last_time">
                                <span>
                                  {" "}
                                  <i class="fas fa-comment-dots pr-2"></i>Contacted by 0
                                  Recruiters recently
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
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
          </div>
        </div>

      </div>

    </>

  )
}

export default Searchcandidates
