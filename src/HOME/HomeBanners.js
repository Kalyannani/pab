import React from 'react'

const HomeBanners = () => {
    return (
      
            <div className='container'>
          <div className='row'>
          <div className="col-sm-12">
            <div className="B_color1">
          <div className="media">
            <img
              className="align-self-center mr-3 B_img1 img-fluid"
              src="images/intervie.png"
              alt="Generic placeholder image"
              />

            <div className="B_media-body">
              <h5 className="B_maintext">
                What it feels like to have 48% more interview calls?
              </h5>
              <p className="B_text">To get 5x more recruiter views on your profile</p>
            </div>
          </div>
          <button
            className="bg-primary text-white btn-lg"
            style={{position: "absolute", right:" 15px", bottom: "0px", borderTopLeftRadius:"50px"}}
          >
            Submit
          </button>
          
        </div>
      </div>
          </div>
      </div>
            
      
    )
}

export default HomeBanners
