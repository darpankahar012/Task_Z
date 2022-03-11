import React from 'react'

function Contact() {
    return (
        <>
            <section className="get-in-touch">
                <div className="text-center">
                    <label className="lbl-title">CONTACT ME</label>
                    <h2 className="title">Get In Touch</h2>
                </div>
                <div className="inner-get-in-touch">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <ul className="info-sec">
                            <li>
                                <span><img src="../asset/images/user.svg" alt="User" title="User" /></span>
                                <label className="mb-0">Cameron Williamson</label>
                            </li>
                            <li>
                                <span><img src="../asset/images/phone.svg" alt="Phone" title="Phone" /></span>
                                <a href="tel:+628977302988">+62 897-730-2988</a>
                            </li>
                            <li>
                                <span><img src="../asset/images/email.svg" alt="Email" title="Email" /></span>
                                <a href="mailto:hgostline.gt@gmail.com ">hgostline.gt@gmail.com </a>
                            </li>
                        </ul>
                        <ul className="d-flex align-items-center social">
                            <li>
                                <a ><img src="../asset/images/dribble.svg" alt="Dribble" title="Dribble" /></a>
                            </li>
                            <li>
                                <a ><img src="../asset/images/facebook.svg" alt="Facebook" title="Facebook" /></a>
                            </li>
                            <li>
                                <a ><img src="../asset/images/twitter.svg" alt="Twitter" title="Twitter" /></a>
                            </li>
                            <li>
                                <a ><img src="../asset/images/instagram.svg" alt="Instagram" title="Instagram" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="info-form">
                        <form>
                            <div className="form-group">
                                <label className="mb-0">Name</label>
                                <input type="text" placeholder="Your name" className="form-control" />
                                <span className="animated-label"></span>
                            </div>
                            <div className="form-group">
                                <label className="mb-0">Email</label>
                                <input type="email" placeholder="Your email" className="form-control" />
                                <span className="animated-label"></span>
                            </div>
                            <div className="form-group">
                                <label className="mb-0">Message</label>
                                <input type="text" placeholder="Your  message" className="form-control" />
                                <span className="animated-label"></span>
                            </div>
                            <input type="submit" className="btn blue-btn" value="Send Message" />
                        </form>
                    </div>
                </div >
            </section >
        </>
    )
}

export default Contact