import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiList from '../lib/apiList';
import moment from 'moment';

const SavedJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        axios
            .get(apiList.wishlist + 'list', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setJobs(response.data.data);
            })
            .catch((err) => {
                console.log(err.response.data);

            });
    }, [])

    console.log('jobsjobs ', jobs);

    return (
        <>
            {/* <div class="container main_content my-5">
            <div class="row">
                <div class="col-lg-3">
                    <Sidebar />
                </div>

               <div class="col-lg-9">
                <div class="wrapper">
                    <div class="content">

                        <div class="job-bx-title clearfix">
                            <h5 class=" pull-left text-uppercase cp">Saved Jobs</h5>
                            <a href="#" class=" float-right custom_class">
                                <span class="sort">Sort</span>
                                <select name="#" id="#" class="custom_button">
                                    <option>All</option>
                            
                                    <option>Read</option>
                                    <option>Unread</option>
                                    
                                </select>
                            </a>
                        </div>

                        <div class="table-responsive text-center">
                            <table class="table table-striped">
                                <thead class="table_head">
                                    <tr>
                                        
                                        <th scope="col">Related Jobs</th>
                                        <th scope="col" className='ml-3'>Company</th>
                                        <th scope="col" className='text-center'>Date</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ CompanyName</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-pencil-alt eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ CompanyName</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-pencil-alt eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                 

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ CompanyName</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-pencil-alt eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                 

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ CompanyName</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-pencil-alt eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ Company Name</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-pencil-alt eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ Company Name</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-pencil-alt eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                  

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ Company Name</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-pencil-alt eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                  

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ Company Name</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-pencil-alt eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ Company Name</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-pencil-alt eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                   

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ Company Name</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-pencil-alt eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                       <div class="paging">
                            <ul class="pagination">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link   active" href="#">1</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div> 
            </div>
        </div>*/}


            <div id='sec4'>
                <div class="container main_content my-5">
                    <div class="row">
                        <div class="col-lg-3">
                            <Sidebar />
                        </div>
                        <div className="col-lg-9">
                            <div className="wrapper">
                                <div className="content">
                                    <div class="job-bx-title clearfix">
                                        <h5 class=" pull-left text-uppercase cp">SAVED JOBS</h5>
                                        <a href="#" class=" float-right custom_class">
                                            <span class="sort">Sort</span>
                                            <select name="#" id="#" class="custom_button">
                                                <option>Recent</option>
                                                <option>Read</option>
                                                <option>Unread</option>
                                                {/* <option></option> */}
                                            </select>
                                        </a>
                                    </div>

                                    {jobs.map((job, key) => {
                                        return <Link to='#'>
                                            <ul className="job-post">
                                                <li>
                                                    <div className="job-box">
                                                        <div className="d-flex mb-2">
                                                            <div className="job-company">
                                                                <span>
                                                                    <img alt="" src="" />
                                                                </span>
                                                            </div>
                                                            <div className="job-info">
                                                                <h4>
                                                                    {job.jobId.title}
                                                                </h4>
                                                                <ul>
                                                                    <li>
                                                                        <h5 className="home_company_name">{job.recruiter?.companyname}</h5>
                                                                    </li>
                                                                    <li>
                                                                        <h6 className="star_box">

                                                                        </h6>
                                                                    </li>
                                                                </ul>
                                                                <ul className="home_job_details">
                                                                    <li>
                                                                        <i className="fas fa-map-marker-alt"></i>
                                                                        {job.jobId.cities[0]}
                                                                    </li>
                                                                    <li>
                                                                        <i className="far fa-bookmark"></i>{job.jobId.jobType}
                                                                    </li>

                                                                    <li>
                                                                        <i className="fas fa-shopping-bag"></i>{job.jobId.experience}
                                                                    </li>
                                                                    <li>
                                                                        <i className="fas fa-rupee-sign"></i>{job.jobId.salary}
                                                                    </li>
                                                                </ul>
                                                                <div className="mt-3">
                                                                    {job.jobId.skillsets.map(skill => <button className="home_job_btn">{skill}</button>)}
                                                                    


                                                                    <div className="posted_home">
                                                                        <div className="job-type">
                                                                            <a href="#">
                                                                                <span>
                                                                                    <i className="fas fa-history"></i> {moment(job.jobId.postedAt? Number(job.jobId.postedAt) : job.jobId.dateOfPosting ).fromNow()}
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Link>
                                    })}





                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SavedJobs