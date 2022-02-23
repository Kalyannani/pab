import React, { useEffect } from 'react'
import useState from 'react-usestateref'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import apiList from '../../lib/apiList';
import ReactPaginate from 'react-paginate';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import moment from 'moment';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import TopCompaniesFilter from './filters/TopCompaniesFilter';
import ExperienceFilter from './filters/ExperienceFilter';
import LocationFilter from './filters/LocationFilter';
import IndustryFilter from './filters/IndustryFilter';
import JobCategoryFilter from './filters/JobCategoryFilter';
import EducationFilter from './filters/EducationFilter';
import SalaryFilter from './filters/SalaryFilter';
import ReactTimeAgo from 'react-time-ago'

const BrowseFilterList = () => {
  const [jobs, setJobs] = useState([])
  const [topCompanies, setTopCompanies] = useState([])
  const [experience, setExperience] = useState([])
  const [location, setLocation] = useState([])
  const [education, setEducation] = useState([])
  const [salary, setSalary] = useState()
  const [listType, setListType] = useState('list')
  const list = [1, 2, 3, 4, 5, 6];
  let { search } = useLocation();
  const query = new URLSearchParams(search);
   const paramKeyword = query.get('keyword');
   const paramQLocation = query.get('qlocation');

  const [keyword, setKeyword] = useState(paramKeyword)
  const [qlocation, setQLocation] = useState(paramQLocation)



  // Pagination code
  const [offset, setOffset] = useState(1);
  //   const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(30);
  const [pageCount, setPageCount] = useState(0);
  // const indexOfLastPost = offset * perPage;
  // const indexOfFirstPost = indexOfLastPost - perPage;
  // const currentPosts = jobs.slice(indexOfFirstPost, indexOfLastPost);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
    console.log('selectedPage', selectedPage);
    fetchJobs(selectedPage)
    window.scrollTo({
      top: 450,
      behavior: 'smooth',
    })
  };

  const handleTopCompaniesAdd = async (companies) => {
    setTopCompanies(companies)
    fetchJobs();

  }

  const handleTopCompaniesRemove = async (companies) => {
    setTopCompanies(companies)
    // fetchJobs();

  }

  const handleLocationAdd = async (locations) => {
    setLocation(locations)
    fetchJobs();

  }

  const handleLocationRemove = async (locations) => {
    setLocation(locations)
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

  const fetchJobs = async (page = 0) => {
    setJobs([])
    console.log('topCompaniesssss', topCompanies);
    let token = localStorage.getItem("token");
    let headers = {}
    if (token) {
      headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }
    let data = {
      location,
      experience,
      companies: topCompanies,
      educations: education,
      // salaryMin: 0,
      // salaryMax: 18000
    }
    if (salary) {
      data.salaryMin = salary.salaryMin
      data.salaryMax = salary.salaryMax
    }
    console.log('daaaaaaaaaaaaa ', data);
    await axios.post(apiList.jobSearch + '?page=' + page, data, {
      headers,
    })
      .then((response) => {
        setPageCount(Math.ceil(response.data.counts) / 20)
        console.log('posts', response.data.posts);
        setJobs(response.data.posts)
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data.message)
      });
  }

  const searchJob = async (e) => {
    e.preventDefault();
    fetchJobsSearch(e.target.keyword.value, e.target.location.value)
  }

  const fetchJobsSearch = async (keyword, qlocation) => {
    setJobs([])
    let token = localStorage.getItem("token");
    let headers = {}
    if (token) {
      headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }
    let data = {
      q: keyword,
      qlocation,
      location,
      experience,
      companies: topCompanies,
      educations: education,
      // salaryMin: 0,
      // salaryMax: 18000
    }
    if (salary) {
      data.salaryMin = salary.salaryMin
      data.salaryMax = salary.salaryMax
    }
    console.log('daaaaaaaaaaaaa ', data);
    await axios.post(apiList.jobSearch , data, {
      headers,
    })
      .then((response) => {
        setPageCount(Math.ceil(response.data.counts) / 20)
        console.log('posts', response.data.posts);
        setJobs(response.data.posts)
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data.message)
      });
  }

  useEffect(async () => {
    
   if (keyword) {
    fetchJobsSearch(keyword, qlocation)
   }else{
    fetchJobs();
   }


  }, [topCompanies, experience, location, education, salary])
  console.log('saaaaaaaaaas <<<< ', salary);

  return (
    <div>
      <div className="job_detail_wrapper">
        <div className="heading_pic_filter_list">
            <h1 className="filter_list_heading_1">Browse Job List</h1>
            <p className="text-center filter_list_sub_heading">
                <Link to="/" className="filter_list_sub_heading_1">Home</Link>
                <i class='fas fa-greater-than text-white px-2'></i>
                <a href="#" className="filter_list_sub_heading_2 ">Browse Filter List</a></p>
        </div>
      </div>


      <div className="container">
        <div className="filter_list_search-box">
          <form className="form-control" action="" method='get'>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>

                  </label>
                  <div className="input-group">
                    <input type="text" name="keyword" className="form-control" id="search_filter_list_input" defaultValue={keyword}
                      placeholder="Job Title, Keywords, or Phrase" />
                    <div className="input-group-append">
                      <span className="filter_list_group_icon">
                        <i className="fas fa-search ml-2" id="filter_list_search_icon1"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <label></label>
                  <div className="input-group">
                    <input type="text" className="form-control" name="qlocation" id="search_filter_list_input" defaultValue={qlocation}
                      placeholder="Location" />
                    <div className="input-group-append">
                      <span className="filter_list_group_icon">
                        <i className="fas fa-map-marker-alt" id="filter_list_search_icon2"></i></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 ">
                <label for=""></label>
                <a href="#"></a><button type="submit" id="filter_list_search_btn" type="submit" className=" btn-block">Find
                  Job</button>
              </div>

            </div>
          </form>
        </div>

      </div>




      <div id="job_filter_list">
        <div className="container">
          <div className="d-flex mb-4">
            {/* <div className="mr-auto">
              <h2 className="job_filter_list_title">2269 Jobs Found</h2>
            </div> */}
            <div className="view_list_grid ml-auto">
              <button
                className={`btn list_view mb-2 ${listType === 'list' && 'browse_active'}`} onClick={() => setListType('list')}>List View</button>
              <button
                className={`btn list_view mb-2 ${listType === 'grid' && 'browse_active'}`} onClick={() => setListType('grid')}>Grid View</button>
              {/* <Link to="/browsefiltergrid" className="filter_grid_view "> <button
                            className="btn grid_view mb-2">Grid View</button></Link> */}
            </div>
          </div>
          <div className="row">

            <div className="col-lg-3 ">
              <div className="sticky-top">
                <div id="accordion">
                  <TopCompaniesFilter topCompanies={topCompanies} handleTopCompaniesAdd={handleTopCompaniesAdd} handleTopCompaniesRemove={handleTopCompaniesRemove} />

                  {/* 2 */}

                  <ExperienceFilter experience={experience} setExperience={setExperience} />

                  <LocationFilter location={location} handleLocationAdd={handleLocationAdd} handleLocationRemove={handleLocationRemove} />

                  {/* 4 */}

                  {/* <IndustryFilter /> */}

                  {/* 5 */}

                  {/* <JobCategoryFilter /> */}

                  {/* 6 */}

                  <EducationFilter education={education} handleEducationAdd={handleEducationAdd} handleEducationRemove={handleEducationRemove} />

                  {/* 7 */}

                  <SalaryFilter salary={salary} setSalary={setSalary} />
                </div>
              </div>
            </div>



            <div className="col-lg-9">
              {listType === 'list' ?
                <>
                  {
                    jobs.length > 0 ?
                      jobs?.map((job) => {
                        return (
                          <Link to={`/jobdetailes/${job._id}`}>
                          <ul className="filter_list_job_post">
                            <li>
                              <div className="filter_list_job_box">
                                <div className="d-flex mb-4">
                                  <div className="filter_list_job_company">
                                    <span><img alt="" src="" /></span>
                                  </div>
                                  <div className="filter_list_job_info">
                                    <h4>{job.title}</h4>
                                    <ul>
                                      <li><i className="fas fa-map-marker-alt"></i>
                                      {job.cities.map((job,index,arr)=>{
                                        return (<>
                                          {job}{index!=(arr.length-1)?"/":""}
                                          </>)
                                      })}
                                      </li>
                                      <li><i className="far fa-bookmark"></i>{job.jobType}</li>
                                      <li><i className="far fa-clock"></i>Published {" "}
                                        <ReactTimeAgo date={job.dateOfPosting} locale="en-US"/>
                                      </li>

                                    </ul>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <div className="filter_list_job_type mr-auto">
                                    <a href="#"><span>Full Time</span></a>
                                  </div>
                                  <div className="filter_list_salary">
                                    <span><i className="fas fa-rupee-sign"></i> {job.salary} 
                                      </span>
                                  </div>
                                </div>
                                <label className="filter_list_wishlist">
                                  <input type="checkbox" /><span className="filter_list_added"><i
                                    className="fas fa-heart"></i></span>
                                </label>
                              </div>
                            </li>
                          </ul>
                          </Link>
                        )
                      }) :
                      <div className="skeleton">
          {list.map((item)=>{
            return(
          <div className="contact__item mb-5" key={item}>
            <ul className="job-post">
          <li >
            <SkeletonTheme color="#f3f3f3" highlightColor="#ecebeb">
              <div style={{ display: "flex", width: "100%" }}>
                <Skeleton circle={false} height={50} width={50} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%"
                  }}
                >
                  <Skeleton
                    height={12}
                    width="30%"
                    style={{ marginLeft: "1rem", marginBottom: "0.5rem" }}
                  />
                  <Skeleton
                    height={8}
                    width="40%"
                    style={{ marginLeft: "1rem" }}
                  />
                  <Skeleton
                    height={8}
                    width="50%"
                    style={{ marginLeft: "1rem", marginTop: 0 }}
                  />
                  <Skeleton
                    height={12}
                    width="80%"
                    style={{ marginLeft: "1rem", marginTop: "0.6rem" }}
                  />
                </div>
              </div>
            </SkeletonTheme>
            </li>
          </ul>
          </div>
            )
          })}
    </div>
                      // <div style={{ textAlign: "-webkit-center" }}>
                      //   <ReactLoading type="balls" color={"rgb(118 55 117)"} height={500} width={150} />
                      // </div>
                  }
                </>
                :
                <div class="row" id='job_filter_grid'>
                  {
                    jobs.length > 0 ?
                      jobs?.map((job) => {
                        return (<>
                          <div className="col-lg-6 col-sm-12">
                             <Link to={`/jobdetailes/${job._id}`}>
                            <div className="job_filter_grid_box">
                              <div className="d-flex mb-4">
                                <div className="job_filter_grid_info">
                                  <h5>
                                 {job.title}
                                  </h5>
                                  <p />
                                  <div className="job_filter_grid_in_up">
                                    <i className="fas fa-map-marker-alt" />
                                    <span> Hyderabad</span>
                                    <i className="far fa-bookmark" />
                                    <span> {job.jobType}</span>
                                    <div className="job_filter_grid_in_down">
                                      <i className="far fa-clock" /> <span> Published <ReactTimeAgo date={job.dateOfPosting} locale="en-US"/></span>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div className="d-flex">
                                <div className="job_filter_grid_type mr-auto mb-3">
                                  <span>Full Time</span>
                                </div>
                                <div className="job_filter_grid_salary">
                                  <span>
                                    <i className="fas fa-rupee-sign" /> {job.salary} -
                                    <i className="fas fa-rupee-sign" /> 25000
                                  </span>
                                </div>
                              </div>
                              <label className="job_filter_grid_wishlist">
                                <input type="checkbox" />
                                <span className="filter_grid_added">
                                  <i className="fas fa-heart" />
                                </span>
                              </label>
                            </div>
                            </Link>
                          </div>
                        </>)
                      }) 
                      
                      :
                      <div style={{ textAlign: "-webkit-center", margin:"100px auto" }}>
                        <h1>No Jobs Found </h1>
                        {/* <ReactLoading type="balls" color={"rgb(118 55 117)"} height={500} width={150} /> */}
                      </div>
                  }
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
                          />
                          </div>
              
            </div>

          </div>
        </div>
      </div>



    </div>
  )
}
export default BrowseFilterList;