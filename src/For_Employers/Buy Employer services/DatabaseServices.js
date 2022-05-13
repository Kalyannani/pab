import React from "react";

const DatabaseServices = () => {
  return (
    <>


<div className="container">
        <div className="cards">
          <div className="row">
            <div className="col-sm-4 mt-3">
              <div className="card">
                <span className="close"></span>
                <span className="arrow"></span>
                <article>
                  <h2>Monthly</h2>
                  <div className="title"><i class="fas fa-rupee-sign"></i> 700</div>
                  <div className="pic">
                    <img src="images/MonthlyNew.png" />
                  </div>
                  <div className="desc">
                    <label  className="font-weight-bold new_Job_lists"> Description :</label>
                    <ul className="pl-1">
                      <li>Exel downloads 4000 profiles</li>
                      <li>Reach out to 2000 views</li>
                      <li>Easy to access 10k mails</li>
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
            <div className="col-sm-4 mt-3">
              <div className="card">
                <span className="close"></span>
                <span className="arrow"></span>
                <article>
                  <h2>3 Months</h2>
                  <div className="title"><i class="fas fa-rupee-sign"></i> 1400</div>
                  <div className="pic">
                    <img src="images/3 MonthsNew.png" />
                  </div>
                  <div className="desc">
                  <label  className="font-weight-bold"> Description :</label>
                    <ul className="pl-1">
                      <li>Exel downloads 4000 profiles</li>
                      <li>Reach out to 2000 views</li>
                      <li>Easy to access 10k mails</li>
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
            <div className="col-sm-4 mt-3">
              <div className="card">
                <span className="close"></span>
                <span className="arrow"></span>
                <article>
                  <h2>6 Months</h2>
                  <div className="title"><i class="fas fa-rupee-sign"></i> 2100</div>
                  <div className="pic">
                    <img src="images/6 MonthsNew.png" />
                  </div>
                  <div className="desc">
                  <label className="font-weight-bold "> Description :</label>
                    <ul className="pl-1">
                      <li>Exel downloads 4000 profiles</li>
                      <li>Reach out to 2000 views</li>
                      <li>Easy to access 10k mails</li>
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
    </>
  );
};

export default DatabaseServices;
