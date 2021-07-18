import React from 'react'
import { NavLink } from 'react-router-dom'
import './About.css'
import Footerr from './Footer'

function About() {
    return (
        <>
        <h1>about</h1>
        <section className = "about-top-section">
            <div className="about-card mt-4 pl-5">
                <div className="card-body d-lg-flex justify-content-start">
                    <h2 className= "about-header">About Us</h2> 
                </div>
            </div>

            <div className = "container">
                <div className = "row my-5">
                    <div className = "col-lg-6 col-md-6 col-md-6 col-12 col-xl-6">
                        <h2>We’ve always done things differently</h2>
                        <p>Cloudkart is a leading multi cloud managed services provider,
                             specialized is run aspect of cloud journey. 
                            Operational Excellence is our core strength,
                             we deliver operational excellent by ensuring we have skilled people,
                             lean process and next gen technology along with culture of transparency and ownership.
                        </p>
                        <p>
                        We provide managed services offering based on the clients unique needs and
                         we understand every client has different operating requirements.
                         We offer tiered support model and service level agreement based on T&M/staff augmentation,
                          output based, and outcome based. 

                        </p>
                        <p>
                        Every Cloudkarter believe is our client success is our success, to achieve that we are committed to partnership,
                         sustainability, ethics and compliance.
                        </p>
                    </div>

                    <div className = "col-lg-6 col-md-6 col-md-6 col-12 col-xl-6 about-2">
                        <figure>
                            <img src={'Images/about2.jpg'} alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
            </section>

            <section className = "about-section2">
            <div className = "container">
                <div className = "row">
                    
                    <div className = "col-lg-6 col-md-6 col-md-6 col-12 col-xl-6 ">
                        <figure className = "section1-figure">
                            <img src={'Images/about2.jpg'} alt=""  />
                        </figure>
                    </div>

                    <div className = "col-lg-6 col-md-6 col-md-6 col-12 col-xl-6 d-flex justify-content-center align-items-start flex-column">
                        <h2>Do things better.</h2>
                        <h2>Then do better things.</h2>
                        <p>Jion our Team</p>
                        
                            <NavLink to="/contact" className="btn-get-started scrollto" style={{ textDecoration: 'none' }}>
                            <div className="btn btn-outline-dark ">Contact Us</div>
                            </NavLink>
        
                    </div>
                </div>
            </div> 
            </section>

            <section className = "about-section3">
            <div className = "container">
                <div className = "row my-5">
                    <div className = "col-lg-6 col-md-6 col-md-6 col-12 col-xl-6">
                        <h3>Behind our services are our Cloudlkart</h3>
                        <p>We are an inclusive community of technologists,
                             problem solvers and innovators, and the go-to destination for talented,
                              quirky and driven people looking for unique work experiences.
                             Every Cloudkart brings their own individual perspectives to the table and we embrace them.
                        </p>
                        <p>
                        We strongly believe that a diversity of experience and backgrounds is 
                        not just desirable but essential in creating both an energizing and fulfilling environment for our people and,
                         critically, better solutions and experiences for our customers.
                        </p>
                        
                    </div>

                    <div className = "col-lg-6 col-md-6 col-md-6 col-12 col-xl-6 about-2">
                        <figure className = "section2-figure">
                            <img src={'Images/about2.jpg'} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
            </section>


            <section className = "about-section3">

                <div className = 'section3-heading my-5'>
                    <div className = 'text-center'>
                        <h2>Our Cloudy Values: how we keep it cloudy:</h2>
                    </div>
                </div>

            <div className = "container">
                <div className = "row">
                    
                    <div className = "col-lg-6 col-md-6 col-md-6 col-12 col-xl-6 ">

                        <p>At Cloudkart, our values are more than posters on a wall or corporate obligations – 
                            they guide who we hire, the way we do business, and how we celebrate success together</p>
                     
                        <figure className = "section3-figure">
                            <img src={'Images/about2.jpg'} alt=""  style = {{width : '100%', height : '86vh'}}/>
                        </figure>
                        </div> 
                    

                    <div className = "col-lg-6 col-md-6 col-md-6 col-12 col-xl-6 d-flex justify-content-center align-items-start flex-column">
                        <h4>01 Be curious</h4>
                        <p>Promoting personal growth by always questioning, 
                            always learning, always seeking feedback and new opportunities.</p>

                        <h4>02 Wow your customer</h4>
                        <p>Exceeding expectations and turning challenges into opportunities
                             by building trusted partnerships and seeing the world through our customers’ eyes.</p>

                        <h4>03 Stay one step ahead</h4>
                        <p>Building for the future by analyzing yesterday, anticipating tomorrow, and innovating today.</p>

                        <h4>04 Make it happen</h4>
                        <p>Going for it and delivering on our promises by acting fast, staying focused, and taking ownership.</p>
                        
                        <h4>05 Succeed together</h4>
                        <p>Accomplishing our goals by sharing ideas with an open mind and winning (and losing) as a team.</p>

                        <h4>06 Respect the individual</h4>
                        <p>Encouraging a workplace where diversity is celebrated and the individual is respected,
                             included, and empowered to bring their whole self to work.</p>
                            
        
                    </div>
                </div>
            </div> 

            </section>

            <Footerr />

            
            
        </>
    );
}

export default About

