import React from 'react'

const HomeBanner2 = () => {
    return (
      
        <div className='container'>
        <div className='row'>
        <div className="col-sm-12">
          <div className="B_color1">
        <div className="media">
          <img
            className="align-self-center mr-3 B_img1 img-fluid"
            src="images/intervie2.png"
            alt="Generic placeholder image"
            />

          <div className="B_media-body">
            <h5 className="B_maintext">
            Get your profile to rank on top of recruiter searches
            </h5>
            <p className="B_text">Unleash your profile's true capability to 10X your chance</p>
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

export default HomeBanner2
