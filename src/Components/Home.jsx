import React from 'react'
import { NavLink } from 'react-router-dom'
import Footerr from './Footer';
import './Home.css';







function Home() {

  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">



{/* <video src="/video/video-2.mp4" autoPlay loop muted></video> */}

          <div className = "col-lg-7 col-md-7 col-md-7 col-12 col-xl-7">
          <h1>Welcome to <span>Cloudkart</span></h1>
          <h2>Cloudkart is on "A Mission of Enabling Digital Trasformation"</h2>
          <h3>We help our clients to achive their business and IT objectives utilizing public cloud and digital services</h3>
          </div>

          <div className="d-flex">
            <NavLink className = "getstarted" to="/service" style={{ textDecoration: 'none' }}>
            <div className = "btn btn-outline-primary">
              Get Started
              </div>
              </NavLink>
          </div>

        </div>
      </section>


     

    
      <section id="about" class="about">

        <div class="container" data-aos="fade-up">
          <div class="row gx-0">

            <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <div class="content">
                <h3>Who We Are</h3>
                <h2>We Accelerate digital transformation, embrace change and move your business forward with modern IT services
                   for modern IT needs.</h2>
                <p>
                  We prioritize your needs, not our personal preferences. We’re completely 
                  platform-agnostic and have deep expertise in specific technologies, 
                  so we can work with whatever works best for you.
                  Our mission is to deliver the promise of the cloud,
                   helping enterprises navigate their unique journeys and build new foundations for future growth.
              </p>
                <div class="text-center text-lg-start">
                  <NavLink to='/about' class="d-inline-flex align-items-center justify-content-center align-self-center" style={{ textDecoration: 'none' }}>
                    
                      <div className = "btn btn-outline-dark">
                      Read More 
                      {/* <i class="bi bi-arrow-right"></i> */}
                      </div>
                     
                  </NavLink>
                </div>
              </div>
            </div>

            <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
              <img src={'Images/about.jpg'} class="img-fluid" alt="" />
            </div>

          </div>
        </div>
      </section>


      <section className = "home-section3 m-0">

<hr />

<div className = 'section3-heading'>
        <div className = 'text-center'>
            <h2>We are partner with</h2>
        </div>
    </div>

<div className = "container">
    <div className = "row my-5">

        <div className = "col-lg-4 col-md-4 col-md-4 col-12 col-xl-4 partner-section" >
            <figure className = "logo">
                <img src={'Images/aws-logo.svg'} alt=""/>
            </figure>
        </div>

        <div className = "col-lg-4 col-md-4 col-md-4 col-12 col-xl-4 partner-section" >
            <figure className = "logo">
                <img src={'Images/azure-logo.svg'} alt=""/>
            </figure>
            <h6 className = 'text-center'></h6>
    
        </div>

        <div className = "col-lg-4 col-md-4 col-md-4 col-12 col-xl-4 partner-section" >
            <figure className = "logo">
                <img src={'Images/aws-logo.svg'} alt=""/>
            </figure>
        </div>

    </div>
</div>

<hr />

</section>




      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={'Images/carousel1.jpg'} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={'Images/carousel4.jpg'} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={'Images/carousel3.jpg'} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




    <Footerr />
   


    </>
  )
}

export default Home
