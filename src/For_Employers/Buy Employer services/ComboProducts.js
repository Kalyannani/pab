import React from "react";

const ComboProducts = () => {
  return (
    <>
      {/* <div
        className="container ">
        <div className="row">
          <div className="col-lg-4 col-md-6 ">
            <div className="combo_products">
              <div className="combo_header" style={{backgroundColor:'#494BA0'}}>
                <div className=" d-inline-block pl-3">
                  <span>STATE</span>
                </div>
                <div className=" float-right d-inline-block pr-3">
                  <span>RS.20860.0</span>
                </div>
              </div>
              <div className="combo_content">
                <div className="combo_inner_head text-center">
                  <h6>50 Job Postings</h6>
                  <p>
                    <span>+ NON-IT DB</span>3 months
                  </p>
                </div>
                <form>
                  <div class="form-group pt-3">
                    <label for="location">Select Location :</label>
                    <select class="form-control" id="location">
                      <option>Hyderabad</option>
                      <option>Vijayawada</option>
                      <option>Ongole</option>
                      <option>Warangal</option>
                      <option>Vizag</option>
                    </select>
                  </div>
                </form>
                <div className="combo_payment">
                  <p>
                    <span className="combo1 text-left">Resume Views</span>{" "}
                    <span className="combo2 ">RS.12000.0</span>
                  </p>
                  <p>
                    <span className="combo1 text-left">Resume Downloads</span>{" "}
                    <span className="combo2 ">RS.12000.0</span>
                  </p>
                  <p>
                    <span className="combo1 text-left">
                      Emails (50% EXTRA){" "}
                    </span>{" "}
                    <span className="combo2 ">RS.112000.0</span>
                    <sub>(for limited Period)</sub>
                  </p>
                </div>
              </div>
              <div className="text-center buy_combo_now">
                <button className="buy_now btn">BuyNow</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" >
            <div className="combo_products">
              <div className="combo_header" style={{backgroundColor:'#52C41A'}}>
                <div className=" d-inline-block pl-3">
                  <span>STATE</span>
                </div>
                <div className=" float-right d-inline-block pr-3">
                  <span>RS.20860.0</span>
                </div>
              </div>
              <div className="combo_content">
                <div className="combo_inner_head text-center">
                  <h6>50 Job Postings</h6>
                  <p>
                    <span>+IT DB</span>3 months
                  </p>
                </div>
                <form>
                  <div class="form-group pt-3">
                    <label for="location">Select Location :</label>
                    <select class="form-control" id="location">
                      <option>Hyderabad</option>
                      <option>Vijayawada</option>
                      <option>Ongole</option>
                      <option>Warangal</option>
                      <option>Vizag</option>
                    </select>
                  </div>
                </form>
                <div className="combo_payment">
                  <p>
                    <span className="combo1 text-left">Resume Views</span>{" "}
                    <span className="combo2 ">RS.12000.0</span>
                  </p>
                  <p>
                    <span className="combo1 text-left">Resume Downloads</span>{" "}
                    <span className="combo2 ">RS.12000.0</span>
                  </p>
                  <p>
                    <span className="combo1 text-left">
                      Emails (50% EXTRA){" "}
                    </span>{" "}
                    <span className="combo2 ">RS.112000.0</span>
                    <sub>(for limited Period)</sub>
                  </p>
                </div>
              </div>
              <div className="text-center buy_combo_now">
                <button className="buy_now btn">BuyNow</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 ">
            <div className="combo_products">
              <div className="combo_header">
                <div className=" d-inline-block pl-3">
                  <span>STATE</span>
                </div>
                <div className=" float-right d-inline-block pr-3">
                  <span>RS.20860.0</span>
                </div>
              </div>
              <div className="combo_content">
                <div className="combo_inner_head text-center">
                  <h6>50 Job Postings</h6>
                  <p>
                    <span>+ COMPLETE (IT+NONIT)DB</span>3 months
                  </p>
                </div>
                <form>
                  <div class="form-group pt-3">
                    <label for="location">Select Location :</label>
                    <select class="form-control" id="location">
                      <option>Hyderabad</option>
                      <option>Vijayawada</option>
                      <option>Ongole</option>
                      <option>Warangal</option>
                      <option>Vizag</option>
                    </select>
                  </div>
                </form>
                <div className="combo_payment">
                  <p>
                    <span className="combo1 text-left">Resume Views</span>{" "}
                    <span className="combo2 ">RS.12000.0</span>
                  </p>
                  <p>
                    <span className="combo1 text-left">Resume Downloads</span>{" "}
                    <span className="combo2 ">RS.12000.0</span>
                  </p>
                  <p>
                    <span className="combo1 text-left">
                      Emails (50% EXTRA){" "}
                    </span>{" "}
                    <span className="combo2 ">RS.112000.0</span>
                    <sub>(for limited Period)</sub>
                  </p>
                </div>
              </div>
              <div className="text-center buy_combo_now">
                <button className="buy_now btn">BuyNow</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 ">
            <div className="combo_products">
              <div className="combo_header">
                <div className=" d-inline-block pl-3">
                  <span>PAN INDIA</span>
                </div>
                <div className=" float-right d-ixnline-block pr-3">
                  <span>RS.18720.0</span>
                </div>
              </div>
              <div className="combo_content">
                <div className="combo_inner_head text-center">
                  <h6>50 Job Postings</h6>
                  <p>
                    <span>+ All INDIA DB</span>1 month
                  </p>
                </div>
                <form>
                  <div class="form-group pt-3">
                    <label for="location">Select Department :</label>
                    <select class="form-control" id="location">
                      <option>IT</option>
                      <option>NON-IT</option>
                      <option>COmplete IT+NON-IT</option>
                    </select>
                  </div>
                </form>
                <div className="combo_payment">
                  <p>
                    <span className="combo1 text-left">Resume Views</span>{" "}
                    <span className="combo2 ">RS.12000.0</span>
                  </p>
                  <p>
                    <span className="combo1 text-left">Resume Downloads</span>{" "}
                    <span className="combo2 ">RS.12000.0</span>
                  </p>
                  <p>
                    <span className="combo1 text-left">
                      Emails (50% EXTRA){" "}
                    </span>{" "}
                    <span className="combo2 ">RS.112000.0</span>
                    <sub>(for limited Period)</sub>
                  </p>
                </div>
              </div>
              <div className="text-center buy_combo_now">
                <button className="buy_now btn">BuyNow</button>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_details">
            <div className="heading_details">
                <h5>FOR ENQUIRIES CALL</h5>
            </div>
            <div className="contact_phone">
                <span>CONTACT NO :9876543210</span>
                <span>EMAIL : pabsolutions@gmail.com</span>
            </div>
        </div>
      </div> */}


<div className="container">
        <div className="cards">
          <div className="row ">
            <div className="col-sm-4 mt-3">
              <div className="card">
                <span className="close"></span>
                <span className="arrow"></span>
                <article>
                  <h2>Monthly</h2>
                  <div className="title"><i class="fas fa-rupee-sign"></i> 10000</div>
                  <div className="pic">
                    <img src="https://img.freepik.com/free-photo/cloud-solution-technology-3d-rendering_618100-138.jpg?w=740" />
                  </div>
                  <div className="desc ">
                    <label  className="font-weight-bold new_Job_lists"> Description :</label>
                    <div className="combo_payment">
                  <p>
                    <span className="combo1 text-left">Resume Views</span>{" "}
                    <span className="combo2 ">RS.12000.0</span>
                  </p>
                  <p>
                    <span className="combo1 text-left">Resume Downloads</span>{" "}
                    <span className="combo2 ">RS.12000.0</span>
                  </p>
                  <p>
                    <span className="combo1 text-left">
                      Emails (50% EXTRA){" "}
                    </span>{" "}
                    <span className="combo2 ">RS.112000.0</span>
                    <sub>(for limited Period)</sub>
                  </p>
                </div>
                  </div>
                </article>
                <div className="actions">
                  <button className="btn">
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mt-3">
              <div className="card">
                <span className="close"></span>
                <span className="arrow"></span>
                <article>
                  <h2>3 Months</h2>
                  <div className="title"><i class="fas fa-rupee-sign"></i> 15000</div>
                  <div className="pic">
                    <img src="https://img.freepik.com/free-photo/3d-render-blue-cloud-symbol-with-arrow-line-isolated-dark-backgroundcloud-storage-technologytransfer-data-informationminimal-style_265427-1116.jpg?w=740" />
                  </div>
                  <div className="desc">
                  <label  className="font-weight-bold"> Description :</label>
                  <div className="combo_payment">
                  <p>
                    <span className="combo1 text-left">Resume Views</span>{" "}
                    <span className="combo2 ">RS.12000.0</span>
                  </p>
                  <p>
                    <span className="combo1 text-left">Resume Downloads</span>{" "}
                    <span className="combo2 ">RS.12000.0</span>
                  </p>
                  <p>
                    <span className="combo1 text-left">
                      Emails (50% EXTRA){" "}
                    </span>{" "}
                    <span className="combo2 ">RS.112000.0</span>
                    <sub>(for limited Period)</sub>
                  </p>
                </div>
                  </div>
                </article>
                <div className="actions">
                  <button className="btn">
                  <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mt-3">
              <div className="card">
                <span className="close"></span>
                <span className="arrow"></span>
                <article>
                  <h2>6 Months</h2>
                  <div className="title"><i class="fas fa-rupee-sign"></i> 25000</div>
                  <div className="pic">
                    <img src="https://img.freepik.com/free-photo/3d-render-blue-cloud-symbol-with-arrow-line-isolated-dark-backgroundcloud-storage-technologytransfer-data-informationminimal-style_265427-1139.jpg?size=338&ext=jpg&ga=GA1.2.1168831157.1644922700" />
                  </div>
                  <div className="desc">
                  <label className="font-weight-bold "> Description :</label>
                  <div className="combo_payment">
                  <p>
                    <span className="combo1 text-left">Resume Views</span>{" "}
                    <span className="combo2 ">RS.12000.0</span>
                  </p>
                  <p>
                    <span className="combo1 text-left">Resume Downloads</span>{" "}
                    <span className="combo2 ">RS.12000.0</span>
                  </p>
                  <p>
                    <span className="combo1 text-left">
                      Emails (50% EXTRA){" "}
                    </span>{" "}
                    <span className="combo2 ">RS.112000.0</span>
                    <sub>(for limited Period)</sub>
                  </p>
                </div>
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
    </>
  );
};

export default ComboProducts;
