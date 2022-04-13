import React from 'react'

const HomeBanner3 = () => {
  return (
    <div>
              <div className='container'>
        <div className='row'>
        <div className="col-sm-12">
          <div className="B_color1">
        <div className="media">
          <img
            className="align-self-center mr-3 B_img1 img-fluid"
            src="images/intervie3.png"
            alt="Generic placeholder image"
            style={{height:'150px',width:'200px'}}
            />

          <div className="B_media-body">
            <h5 className="B_maintext">
            How to stand out from the millions of other resumes?
            </h5>
            <p className="B_text">80% of the resumes are rejected in 11 seconds.
                Don't want to be the 80%?</p>
          </div>
        </div>
        <button
          className="bg-primary text-white btn-lg"
          style={{position: "absolute", right:" 15px", bottom: "0px", borderTopLeftRadius:"50px",border:'none'}}
        >
          Submit
        </button>
        
      </div>
    </div>
        </div>
    </div>
    </div>
  )
}

export default HomeBanner3
