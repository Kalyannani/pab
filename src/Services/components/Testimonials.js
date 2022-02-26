import React from "react";
import OwlCarousel from "react-owl-carousel";
const Testimonials = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  };
  return (
    <div>
      <section id="clients" className="hire_clients">
        <div className="container">
          <header className="section-header clients_header">
            <h2 className="clients_heading   ">Testimonials</h2>
          </header>
          <div className="item  ">
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item text-center testimonial_item">
                <div className="corousal_item">
                  <img src="images/Testifour.png" className="img-fluid  mx-auto" alt="image"></img>
                  <p>
                    I joined the Train and Hire at Hyderabad. Everything was
                    perfect, be it teaching, lab facilities and attitude of
                    trainers. Loved it! I am working with a top tech Company at the
                    moment and I believe its all because of the trainer who
                    explained things interestingly. I would definitely recommend
                    PabJob's for anyone who aims to become an IT professional.
                  </p>
                  <h4>Rahul</h4>
                </div>
              </div>
              <div className="item text-center">
                <div className="corousal_item testimonial_item">
                  <img src='images/Testitwo.png' className="img-fluid testimonial_image_avatar mx-auto " alt='image'></img>
                  <p>
                    Being a fresher, I started looking for a job in the IT field
                    from June 2018. I attended 13 interviews including Top Company's
                    like, TCS, Accenture & Cognizant. But no luck. Finally, I
                    heard about PabJob's Train and Hire model through one of my
                    friends. I got through the interview and completed 3.5
                    months of PabJob's training in Chennai and cleared the Top Company
                    interview. Now, I am working as a Programmer in one of
                    India's top Company. The job Guarantee and excellent trainers
                    encouraged me to join the program. Thanks to PabJobs! Rahul
                  </p>
                  <h4>Vinitha</h4>
                </div>
              </div>
              <div className="item text-center">
                <div className="corousal_item testimonial_item">
                  <img src='images/Testifour.png' className="img-fluid mx-auto" alt='image'></img>
                  <p>
                    PabJobs is a place where you will get equipped with the
                    latest technologies and provides an environment to showcase
                    them. It is a good place to start your software career here,
                    especially for freshers. All the employees who work there
                    are friendly in nature that helps us learn new things while
                    working here.
                  </p>
                  <h4>Rajesh</h4>
                </div>
              </div>
               
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
