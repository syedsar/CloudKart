import React from 'react'
import './Service.css'
import Footerr from './Footer'

function Service() {
    return (
        <>
        <h1>service</h1>
            <div className="service-card mt-4 pl-5">
                <div className="card-body d-lg-flex justify-content-start">
                    <h2 className= "service-header">Our Service</h2> 
                </div>
            </div>


            <section className = "service-section1">

            <div className = 'section1-heading my-5'>
                    <div className = 'text-center'>
                        <h2>Manage Your Cloud</h2>
                    </div>
                </div>

                <div className = "container">
                <div className = "row ">
                    <div className = "col-lg-6 col-md-6 col-md-6 col-12 col-xl-6">
                        
                        <p>Operating in the cloud is completely different to operating on-premises. 
                            If you aren’t prepared, you risk losing control – known as cloud sprawl. 
                            Our unique approach to cloud management gives you the right set of tools 
                            and analytics to better understand your cloud operations, 
                            so you can make it work for you. Until you’re in control, we’ll guide you.
                        </p>
                        <p>
                        Our cloud management services allow you to develop faster, scale instantly and iterate constantly.
                        </p>
                        <p>
                        Many organizations are moving to the cloud to take advantage of increased agility, 
                        flexibility and lower IT spend. However, 
                        the initial cloud migration is only the first step of the process. 
                        To maximize your return on investment, 
                        you need to ensure that you’re able to fully optimize your workloads, 
                        systems and databases on the cloud. With Navisite’s Cloud Optimization Services, 
                        we’ll identify areas of improvement and optimization to ensure you can continually 
                        drive efficiencies and save costs for your cloud deployment.
                        </p>
                    </div>

                    <div className = "col-lg-6 col-md-6 col-md-6 col-12 col-xl-6 service1">
                        <figure>
                            <img src={'Images/about2.jpg'} alt=""/>
                        </figure>
                    </div>

                </div>
            </div>


            </section>

            <section className = "service-section2">

            <hr />

            <div className = 'section2-heading my-5'>
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
                            <img src={'Images/google-cloud.svg'} alt=""/>
                        </figure>
                    </div>

                </div>
            </div>

            <hr />
            
            </section>

            <section className = 'service-section3'>

            <div className = "container">
                <div className = "row my-5">

                    <div className = "col-lg-4 col-md-4 col-md-4 col-12 col-xl-4 my-4 service-card-section" >
                        <div class="card service-cards" style ={{width: "18rem"}}>
                            <img src="/Images/home.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className = "col-lg-4 col-md-4 col-md-4 col-12 col-xl-4 my-4 service-card-section" >
                        <div class="card" style ={{width: "18rem"}}>
                            <img src="/Images/home.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className = "col-lg-4 col-md-4 col-md-4 col-12 col-xl-4 my-4 service-card-section" >
                        <div class="card" style ={{width: "18rem"}}>
                            <img src="/Images/home.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className = "col-lg-4 col-md-4 col-md-4 col-12 col-xl-4 my-4 service-card-section" >
                        <div class="card" style ={{width: "18rem"}}>
                            <img src="/Images/home.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className = "col-lg-4 col-md-4 col-md-4 col-12 col-xl-4 my-4 service-card-section" >
                        <div class="card" style ={{width: "18rem"}}>
                            <img src="/Images/home.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className = "col-lg-4 col-md-4 col-md-4 col-12 col-xl-4 my-4 service-card-section" >
                        <div class="card" style ={{width: "18rem"}}>
                            <img src="/Images/home.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>


                
                </div>
            </div>
            </section>





                    <section className = "services-footer">
                        <Footerr />
                    </section>


        </>
    )
}

export default Service
