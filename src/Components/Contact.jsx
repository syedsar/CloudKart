import React from 'react'
import './Contact.css'
import Footerr from './Footer'

function Contact() {
    return (
        <>
        <h1>jcjjk</h1>
          <section id="contact" class="contact">

            <div className="about-card mt-4 pl-5">
                <div className="card-body d-lg-flex justify-content-start">
                    <h2 className= "about-header">Contact Us</h2> 
                </div>
            </div>

      <div class="container mt-4">

        <div class="row mt-5">

         
          <div class="card col-lg-8  mt-2 mb-4  p-4  mt-lg-0 form-card" data-aos="fade-left">

            <form role="form" class="php-email-form">
              <div class="row">
                <div class="form-group my-3" >
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div class="form-group my-3 ">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div class="form-group my-3">
                <input type="text" class="form-control" name="phone" id="subject" placeholder="Enter your phone number" required/>
              </div>
              <div class="form-group my-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              {/* <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div> */}
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>
          


          <div class="col-lg-3 ml-2 d-flex " data-aos="fade-right">
            <div class="col-lg-3 info">
              <div class="address">
                <i class="bi bi-geo-alt-fill"></i>
                <h4>Location:</h4>
                <p>Chennai, Tamil Nadu 600042</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope-fill"></i>
                <h4>Email:</h4>
                <p>support@cloudkart.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-telephone-fill"></i>
                <h4>Call:</h4>
                <p>+91 9986166210</p>
              </div>

            </div>

          </div>


        </div>

      </div>
    </section>
    
    <section className = 'about-footer'>
        <Footerr />
    </section>
    
        </>
    )
}

export default Contact
