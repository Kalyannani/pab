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
import ExperienceFilter  from '../Pages/Browse_Jobs/filters/ExperienceFilter';
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
import { useSelector } from 'react-redux';
const StudentList = () => {

  const result = useSelector(state=>state.data)

  const [allapplicants,setallApplicants] = useState([]);

  const getData=()=>{
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
  },[]);

 




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
          <h1 className="filter_list_heading_1">Browse Job List</h1>
          <p className="text-center filter_list_sub_heading">
            <Link to="/" className="filter_list_sub_heading_1">Home</Link>
            <i class='fas fa-greater-than text-white px-2'></i>
            <a href="#" className="filter_list_sub_heading_2 ">Browse Filter List</a></p>
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

            <div className="col-lg-3">
              <div className="sticky-top">
               
              </div>
            </div>



            <div className="list_view_width col-lg-9">
              
                  {
                    allapplicants.length > 0 ?
                      allapplicants?.map((applicant) => {
                        return ( 
                                                 
                          <ul className="filter_list_job_post ">
                            <li>
                            <Link to='#'>
                              <div className="filter_list_job_box">
                                <div className="d-flex mb-4">
                                  <div className="filter_list_job_company">
                                    {/* <span><img alt="" src={job.recruiter?.profileImage? `${server}/public/profile/${job.recruiter.profileImage}`: " " }/></span> */}
                                    {/* <img src={job.recruiter?.profileImage? job.recruiter.profileImage:" " } alt=""/> */}
                                  </div>
                                  <div className="filter_list_job_info">
                                    <h4></h4>
                                    <h5 className="home_company_name"> {applicant?.name} </h5>
                                    <ul>
                                    
                                      
                                    
                                      <li><i className="fas fa-map-marker-alt">

                                      </i>
                                      {applicant.currentlocation.map((applicant,index,arr)=>{
                                        return (<>
                                          {applicant}{index!=(arr.length-1)?"/":""}
                                          </>)
                                      })}
                                     
                                      </li>
                                      <li><i className="far fa-bookmark"></i>
                                      {applicant?.contactNumber} 
                                      </li>
                                      <li><i className="far fa-clock"></i>
                                      {applicant?.email} 
                                      </li>
{/* 1646973039978 */}
                                    </ul>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <div className="filter_list_job_type mr-auto">
                                    <a href="#"><span>Full Time</span></a>
                                  </div>
                                  <div className="filter_list_salary">
                                    <span><i className="fas fa-rupee-sign"></i>  
                                      </span>
                                  </div>
                                </div>
                                <label className="wishlist">
                                {result?.type==="applicant" ? 
                                <button className='btn job_details_applybtn filter_list_wishlist' > Apply </button>: 
                                result?.type==="recruiter"? null :  
                                <Link to="/auth" > <button className='btn job_details_applybtn filter_list_wishlist'> Login to Apply </button>  </Link>} 
                                </label>
                                
                              </div>
                              </Link>


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