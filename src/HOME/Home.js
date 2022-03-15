import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Testimonials from './Testimonials';
// import Pagination from './Pagination';
import Categories from './categories';
import OurClients from './OurClients';
import FeaturedCities from './FeaturedCities'
import RecentJobs from './RecentJobs';
import { toast } from 'react-toastify';
import Subfilter from '../Pages/jobs/subfilter';
import LocationalJobs from '../Pages/jobs/LocationalJobs';
import CompanyJobs from '../Pages/jobs/CompanyJobs';
import CategoryJobs from '../Pages/jobs/CategoryJobs';
import DesignationJobs from '../Pages/jobs/DesignationJobs';
import SkillJobs from '../Pages/jobs/SkillJobs';
import { Link } from 'react-scroll'


const Home = () => {

    const [keyword, setKeyword] = useState("");
    const [qlocation, setQLocation] = useState("");
    const [keywordError, setKeywordError] = useState("");
    const [locationError, setLocationError] = useState("");
    const navigate = useNavigate();

    const options = {
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    }

    const handleSearch = () => {
        let haveError = false
        if (keyword == '') {
            console.log('eee');
            haveError = true
            setKeywordError('Keyword is required!')
        }
        if (qlocation == '') {
            haveError = true
            setLocationError('Location is required!')
        }
        if (!haveError) {
            navigate(`/browsefilterlist?keyword=${keyword}&qlocation=${qlocation}`)
            // toast.error('All fields are required');
        }

    }
    console.log('keywordError', keywordError);

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, [])

    return (
        <div>

            <section>
                <div id="sec1" className="container-fluid">
                    <div className="container hm1">
                        <div className="home1">
                            <h2 className="am2">Find Your Right Job Here .....
                            </h2>
                            <div className="browse_joblocation_list-search_box">
                                <form className="form-control">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5" id="input1_joblocation">
                                            <input type="text" className="form-control" id="search_box_input_joblocation"
                                                placeholder="Job Title, Keywords, or Phrase" name='keyword' value={keyword} onChange={(e) => { setKeyword(e.target.value); setKeywordError("") }} />
                                            {keywordError != '' && <small style={{ color: 'red' }}>{keywordError}</small>}
                                        </div>
                                        <div className="col-lg-5 col-md-5" id="input2_joblocation">
                                            <input type="text" className="form-control" id="search_box_input_joblocation"
                                                placeholder="City ,Province or Region" name='qlocation' value={qlocation} onChange={(e) => { setQLocation(e.target.value); setLocationError("") }} />
                                            {locationError != '' && <small style={{ color: 'red' }}>{locationError}</small>}
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-xs-offset-3 col-xs-6 c0l-xs-offset-3"
                                            id="input_btn_joblocation">
                                            {/* <Link to={`/browsefilterlist?keyword=${keyword}&qlocation=${qlocation}`} > */}
                                            <a>
                                                <button type='button' id="search_box_btn_joblocation" className="btn-block" onClick={handleSearch} >
                                                    Search</button>
                                            </a>
                                            {/* </Link> */}
                                        </div>

                                    </div>
                                </form>
                            </div>

                            {/* <div className="alljob_buttons text-left ">
                     <div className='Job_link'> 
                    <NavLink  to="/browsefilterlist"  className="jobs_jobs">
                            All Jobs
                           
                    </NavLink>
                    </div>
                    <div className='Job_link'>    
                    <Link 
                            to="company" 
                            className="jobs_jobs">
                                Jobs By
                            Company
                    </Link></div>
               
                <div className='Job_link'>
                    <Link
                              to="category" className="jobs_jobs">
                   Jobs By
                            Category
                            </Link></div>
               
          <div className='Job_link'>
                            <Link
                            to="location" className="jobs_jobs">
                             Jobs By
                            Location</Link></div>
               
          <div className='Job_link'>
                            <Link
                            to="designation" className="jobs_jobs">
                                    Jobs By Designation
                            </Link></div>
               
          <div className='Job_link'>
                            <Link
                            to="skill" className="jobs_jobs">
                   Jobs By Skill
                    </Link>
                    </div>
               
                </div> */}
                        </div>
                    </div>
                </div>

            </section>

            {/* <RecentJobs /> */}
            <ins className='adsbygoogle'
                style={{ display: 'block' }}
                data-ad-client='ca-pub-12121212'
                data-ad-slot='12121212'
                data-ad-format='auto' />

            <Categories />

            <CompanyJobs />


            <CategoryJobs />
            <DesignationJobs />
            <SkillJobs />
            {/* <FeaturedCities /> */}
            <LocationalJobs />
            <OurClients />


            {/* <Testimonials /> */}



        </div>

    )
}
export default Home