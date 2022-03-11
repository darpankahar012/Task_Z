import React from 'react'

function Banner() {
    return (
        <>
            <section className="banner-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <label>RXCE</label>
                            <h1><span>Earn</span> Daily 500 - 10000 Daily$<br className="d-md-block d-none" /> Without Risk</h1>
                            <a className="btn white-btn">Register Now</a>
                            <a className="btn border-btn">Join OurTelegram Channel</a>
                        </div>
                        <div className="col-md-4">
                            <div className="img">
                                <img src="../asset/images/round-shape.svg" alt="" title="" className="shape-img shape-one float-21_26k" />
                                <img src="../asset/images/triangle-one.svg" alt="" title="" className="shape-img shape-two float-21_26k" />
                                <img src="../asset/images/banner-img.png" alt="$1.000.000" title="$1.000.000" className="img-fluid" />
                                <img src="../asset/images/triangle-two.svg" alt="" title="" className="shape-img shape-three float-21_26k" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xl-3 order-xl-2 d-flex align-items-end">
                            <div className="img">
                                <img src="../asset/images/about-img.png" alt="about img" title="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 order-xl-1 pe-lg-4">
                            <ul>
                                <li>
                                    <img src="../asset/images/register.svg" alt="Register" title="Register" />
                                    <span>Register</span>
                                </li>
                                <li>
                                    <img src="../asset/images/join-telegram.svg" alt="Join Telegram" title="Join Telegram" />
                                    <span>Join Telegram</span>
                                </li>
                                <li>
                                    <img src="../asset/images/join-whatsApp-group.svg" alt="Join WhatsApp Group" title="Join WhatsApp Group" />
                                    <span>Join WhatsApp Group</span>
                                </li>
                                <li>
                                    <img src="../asset/images/participate.svg" alt="Participate" title="Participate" />
                                    <span>Participate</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-xl-5 order-xl-3">
                            <label className="lbl-title" className="lbl-title">ABOUT RXCE</label>
                            <h2 className="title">How to participate in red envelope gift event</h2>
                            <p className="text-cnt">My name is Muhamad Raul Iqbal,tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus</p>
                            <p className="text-cnt">My name is Muhamad Raul Iqbal,tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus</p>
                            <div className="btns">
                                <a className="btn secondwhite-btn">Register Now</a>
                                <a className="btn secondwhite-btn join-btn">Join Telegram Channel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner