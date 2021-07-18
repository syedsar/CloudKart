import React from 'react'
import './Footer.css'



function Footerr() {
  return (
    <>
      <section className="footer footer__section">
        <footer className="footer__short">
          <div className="container">
            <div className="row algin-items-center">
              <div className="col-12 col-lg-6 share">
                <div className="socail-links" >
                  <div className="footer-section__social--text text-uppercase" tabIndex="0" style={{ display: 'inline-block' }}>
                    <strong style = {{color: '#5a5e57'}}>Follow Us : </strong>
                  </div>
                  <ul className="list-inline social-links" style={{ display: 'inline-block', padding: "5px"}}>
                    <li className="list-inline-item social-link item">
                      <a href="https://www.linkedin.com/company/cloudkartcom" ><i className="fa fa-linkedin fa-2x icon" /></a>
                    </li>
                    <li className="list-inline-item social-link item">
                      <a href="https://www.facebook.com/CloudKartCom/" ><i className="fa fa-facebook-square fa-2x icon" /></a>
                    </li>
                  </ul>

                </div>
              </div>

              <div className="col-12 col-lg-6 d-lg-flex justify-content-end footer__logo">
                <div className="footer-logo logo">
                  <a href="https://www.cloudkart.com" >Cloudkart</a>
                </div>
              </div>

              <div className="col-12 hr-line">
                <div className="horizontal-rule hr">
                  <div style={{ marginBottom: "10px", width: "100%", minHeight: "2px", backgroundColor: "#C4C4C4" }}></div>
                </div>
              </div>

              <div className="col-12 col-lg-7 copyright">
                <div class="footer-copyright-text richtext text">
                  <div class="cmp-text aos-init aos-animate" data-aos="fade-zoom-in" data-aos-offset="20" data-aos-duration="300">
                    <p>Copyright&nbsp;@2021 Cloudkart corp, All rights reserved.</p>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-5 d-lg-flex justify-content-end privacyLinks">

                <div class="footer-text richtext text">
                  <div class="cmp-text aos-init aos-animate" data-aos="fade-zoom-in" data-aos-offset="20" data-aos-duration="300">

                  <ul className= "footer-ul">
                    <li id = "li-border"><a href="https://www.cloudkart.com/">Home</a></li>
                    <li id= "li-border"><a href="https://www.cloudkart.com/service">Services</a></li>
                    <li id= "li-border"> <a href="https://www.cloudkart.com/about">About</a></li>
                    <li ><a href="https://www.cloudkart.com/contact">Contact</a></li>
                  </ul>
                </div>
  </div>


              </div>

            </div>
          </div>
        </footer>

      </section>







    </>
  )
}

export default Footerr
