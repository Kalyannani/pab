import React from "react";

const Jobposting = () => {
  return (
    // <div className="C1_top">
    //   <div className="C1_topline">
    //     <em>Job Posting Solutions - Find the right skilled candidates</em>
    //   </div>

    //   <div className="container c1_border">
    //     <div className="row">
    //       <div className="col-md-3 C1_box">
    //         <img src="images/pabjobs.png" className="C1_img" />
    //       </div>
    //       <div className="col-md-9">
    //         <div className="row">
    //           <div className="col-md-3">
    //             {/* <p className="text-center mt-4"><b>No.of Jobs</b></p> */}
    //             <label className="mt-3">
    //               <b>No.of Jobs</b>
    //             </label>

    //             <select className="form_control mr-sm-2" name="jobType">
    //               <option value="1">1</option>
    //               <option value="2">2 </option>
    //               <option value="5">5</option>
    //               <option value="10">10</option>
    //               <option value="50">50</option>
    //             </select>
    //           </div>
    //           <div className="col-md-3">
    //             {/* <p className="text-center"><b>Validity</b></p> */}
    //             <label className="mt-3">
    //               <b>Validity</b>
    //             </label>
    //             <select className="form_control mr-sm-2" name="jobType">
    //               <option value="1 month">1 Month</option>
    //             </select>
    //           </div>
    //           <div className="col-md-3">
    //             <p className="mt-3 ">
    //               <b>
    //                 Price(INR)<sup style={{ color: "red" }}>*</sup>
    //               </b>
    //             </p>
    //             <p className="mt-3 ">
    //               <b>Rs. 1180.0</b>
    //             </p>
    //           </div>
    //           <div className="col-md-1"></div>
    //           <div className="col-md-2">
    //             <button className=" c1_buynow mt-3">Buy Now</button>
    //             <em>*Prices Inclusive of all taxes</em>
    //           </div>
    //         </div>

    //         <div className="row">
    //           <div className="col-md-12">
    //             <h1 className="c1_description mt-5">DESCRIPTION :</h1>
    //             <ul className="c1_lists">
    //               <li>
    //                 Post jobs to 2.3 crore registered job seekers with
    //                 TimesJobs.
    //               </li>
    //               <li>Greater visibility for your brand on WizJobs.</li>
    //               <li>
    //                 Reach out to relevant candidates with the help of unique job
    //                 matching tool.
    //               </li>
    //               <li>
    //                 Send job opening alerts to a rich database of top
    //                 professionals twice every week.
    //               </li>
    //               <li>
    //                 Easy to manage your personal job application database, aided
    //                 by tools like CustomQ.
    //               </li>
    //               <li>
    //                 Refresh, edit, delete, & mark vacancy filled with a single
    //                 click.
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="text-right">
    //         <b className="c1_footer ">READ OUR CLIENT TESTIMONIALS</b>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

   
    <div className="container">
        <div className="cards">
          <div className="row">
            <div className="col-lg-4 col-sm-6 mt-3">
              <div className="card">
                <span className="close"></span>
                <span className="arrow"></span>
                <article>
                  <h2>Free</h2>
                  <div className="title"><i class="fas fa-rupee-sign"></i> 0</div>
                  <div className="pic">
                    <img src="images/FreeNew.png" />
                  </div>
                  <div className="desc">
                    <label  className="font-weight-bold"> Description :</label>
                    <ul className="pl-1">
                      <li>30 applicants access of the posted jobs</li>
                    </ul>
                  </div>
                </article>
                <div className="actions">
                  <button className="btn">
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-3">
              <div className="card">
                <span className="close"></span>
                <span className="arrow"></span>
                <article>
                  <h2>Premium</h2>
                  <div className="title"><i class="fas fa-rupee-sign"></i> 4000</div>
                  <div className="pic">
                    <img src="images/PremiumNew.png" />
                  </div>
                  <div className="desc">
                  <label  className="font-weight-bold"> Description :</label>
                    <ul className="pl-1">
                    <li>Unlimited applicants access of the posted jobs for one month</li>
                    </ul>
                  </div>
                </article>
                <div className="actions">
                  <button className="btn">
                  <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-3">
              <div className="card">
                <span className="close"></span>
                <span className="arrow"></span>
                <article>
                  <h2>Express Hire</h2>
                  <div className="title"><i class="fas fa-rupee-sign"></i> 7000</div>
                  <div className="pic">
                    <img src="images/ExpressNew.png" />
                  </div>
                  <div className="desc">
                  <label className="font-weight-bold"> Description :</label>
                    <ul className="pl-1">
                    <li>Access 150 candidates for predefines</li>
                    </ul>
                  </div>
                </article>
                <div className="actions">
                  <button className="btn">
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
   
  );
};

export default Jobposting;
