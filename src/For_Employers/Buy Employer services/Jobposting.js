import React from "react";

const Jobposting = () => {
  return (
    <div className="C1_top">
      <div className="C1_topline">
        <em>Job Posting Solutions - Find the right skilled candidates</em>
      </div>

      <div className="container c1_border">
        <div className="row">
          <div className="col-md-3 C1_box">
            <img src="images/pabjobs.png" className="C1_img" />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-3">
                {/* <p className="text-center mt-4"><b>No.of Jobs</b></p> */}
                <label className="mt-3">
                  <b>No.of Jobs</b>
                </label>

                <select className="form_control mr-sm-2" name="jobType">
                  <option value="1">1</option>
                  <option value="2">2 </option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="50">50</option>
                </select>
              </div>
              <div className="col-md-3">
                {/* <p className="text-center"><b>Validity</b></p> */}
                <label className="mt-3">
                  <b>Validity</b>
                </label>
                <select className="form_control mr-sm-2" name="jobType">
                  <option value="1 month">1 Month</option>
                </select>
              </div>
              <div className="col-md-3">
                <p className="mt-3 ">
                  <b>
                    Price(INR)<sup style={{ color: "red" }}>*</sup>
                  </b>
                </p>
                <p className="mt-3 ">
                  <b>Rs. 1180.0</b>
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-2">
                <button className=" c1_buynow mt-3">Buy Now</button>
                <em>*Prices Inclusive of all taxes</em>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <h1 className="c1_description mt-5">DESCRIPTION :</h1>
                <ul className="c1_lists">
                  <li>
                    Post jobs to 2.3 crore registered job seekers with
                    TimesJobs.
                  </li>
                  <li>Greater visibility for your brand on WizJobs.</li>
                  <li>
                    Reach out to relevant candidates with the help of unique job
                    matching tool.
                  </li>
                  <li>
                    Send job opening alerts to a rich database of top
                    professionals twice every week.
                  </li>
                  <li>
                    Easy to manage your personal job application database, aided
                    by tools like CustomQ.
                  </li>
                  <li>
                    Refresh, edit, delete, & mark vacancy filled with a single
                    click.
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-right">
            <b className="c1_footer ">READ OUR CLIENT TESTIMONIALS</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobposting;
