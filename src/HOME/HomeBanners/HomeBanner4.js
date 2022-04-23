import React, { useState } from 'react';
import axios from "axios";

const HomeBanner4 = () => {

  const [phone, setphone] = useState("")

  const handleSubmit = (e) => 
  {
    e.preventDefault();
    const data={
      PhoneNumbar : phone,
    }
    console.log(data)
     axios.post("https://sheet.best/api/sheets/100d369e-bfd6-43d3-80db-c7d4f6e5add9",data).then((res)=>
     {
       console.log(res);
       setphone('');
     })
     .catch((err)=>
     {
       console.log(err)
     })
 }
  return (
    <div>
      <div className='container home_banner4'>
        <form onSubmit={handleSubmit}>
          <div className="row ">


          <div className="col-sm-12">
            <div className="row B_serach">
              <div className="col-sm-6">
                <h6 className="B_ftext">Find Better & Faster with PAB jobs Career Services
                  Call : 1800 833 9448 now! (Toll-free)</h6>
              </div>
              <div className="col-sm-6 m-auto">
                <div className="B_input-group input-group">
                  <input type="number" className="form-control" placeholder="Enter your Mobile no"  onChange={(e) => setphone(e.target.value)} value={phone}/>
                  <div className="input-group-append">
                    <button className="btn-warning B_btn-warning " type="submit">Get a Call Back</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        </form>
      </div>
    </div>
  )
}

export default HomeBanner4
