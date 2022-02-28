import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Testimonials from './Testimonials';
// import Pagination from './Pagination';
import Categories from './categories';
import OurClients from'./OurClients';
import FeaturedCities from './FeaturedCities'
import RecentJobs from './RecentJobs';
import { toast } from 'react-toastify';
const Home = () => {
    const [keyword, setKeyword] = useState("");
    const [qlocation, setQLocation] = useState("");
    const navigate = useNavigate();

    const options ={
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
        if (keyword == '' || qlocation == '') {
            // toast.error('All fields are required');
        }else{
            navigate(`/browsefilterlist?keyword=${keyword}&qlocation=${qlocation}`)
        }
        
    }

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
                                    placeholder="Job Title, Keywords, or Phrase" name='keyword' value={keyword} onChange={(e) => setKeyword(e.target.value)} required />
                            </div>
                            <div className="col-lg-5 col-md-5" id="input2_joblocation">
                                <input type="text" className="form-control" id="search_box_input_joblocation"
                                    placeholder="City ,Province or Region" name='qlocation' value={qlocation} onChange={(e) => setQLocation(e.target.value)} required />
                            </div>
                            <div className="col-lg-2 col-md-2 col-xs-offset-3 col-xs-6 c0l-xs-offset-3"
                                id="input_btn_joblocation">
                                    {/* <Link to={`/browsefilterlist?keyword=${keyword}&qlocation=${qlocation}`} > */}
                                    <a>
                                    <button id="search_box_btn_joblocation" className="btn-block" onClick={handleSearch} >
                                    Search</button>
                                    </a>
                                    {/* </Link> */}
                            </div>

                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </section>
    <RecentJobs />
    <Categories />
    <OurClients />
    <FeaturedCities />
    
    {/* <Testimonials /> */}



</div>

    )
}
export default Home