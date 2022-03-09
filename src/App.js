import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="home">
        <nav className="navbar navbar-expand-lg" id="myHeader">
          <div className="container">
            <a className="navbar-brand" href="index.html"><img src="../asset/images/logo.png" alt="Index" title="Index" /></a>
            <button id="navIcon" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="collapse navbar-collapse offcanvas-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active"><a className="nav-link" >About</a></li>
                <li className="nav-item"><a className="nav-link" >Privacy</a></li>
                <li className="nav-item"><a className="nav-link" >Terms & Conditions</a></li>
                <li className="nav-item"><a className="nav-link" >Singup</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
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
      <section className="specializing">
        <div className="container">
          <div className="text-center">
            <label className="lbl-title">WHAT I DO</label>
            <h2 className="title">Specializing In</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="border-box">
                <div className="icon earn">
                  <img src="../asset/images/product-design.svg" title="product-design" alt="product-design" />
                </div>
                <h3>How to earn in RXCE?</h3>
                <p className="text-cnt">Diposit money easily by all recharge channel</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="border-box">
                <div className="icon recharge">
                  <img src="../asset/images/user-interface.svg" title="user-interface" alt="user-interface" />
                </div>
                <h3>How to Recharge in RXCE?</h3>
                <p className="text-cnt">Diposit money easily by all recharge channel</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="border-box">
                <div className="icon money">
                  <img src="../asset/images/earn-money.svg" title="earn-money" alt="earn-money" />
                </div>
                <h3>Earn Money Everyday</h3>
                <p className="text-cnt">mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="border-box">
                <div className="icon withdrawal">
                  <img src="../asset/images/withdrawal.svg" title="withdrawal" alt="withdrawal" />
                </div>
                <h3>How to do Withdrawal in RXCE?</h3>
                <p className="text-cnt">mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="border-box">
                <div className="icon tricks">
                  <img src="../asset/images/tricks.svg" title="tricks" alt="tricks" />
                </div>
                <h3>Earning Tips & Tricks</h3>
                <p className="text-cnt">mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="border-box">
                <div className="icon fun">
                  <img src="../asset/images/fun.svg" title="fun" alt="fun" />
                </div>
                <h3>How to play AB Fun in RXCE</h3>
                <p className="text-cnt">mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="earning-trick">
        <div className="container">
          <div className="text-center">
            <label className="lbl-title">Tutorials</label>
            <h2 className="title">Earning Tips &amp; Tricks</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="img-box">
                <img src="../asset/images/tutorials-img1.png" alt="" title="" className="img-fluid" />
                <div className="hover-box">
                  <a ><img src="../asset/images/play-icon.svg" alt="" title="" className="" /></a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="img-box">
                <img src="../asset/images/tutorials-img4.png" alt="" title="" className="img-fluid" />
                <div className="hover-box">
                  <a ><img src="../asset/images/play-icon.svg" alt="" title="" className="" /></a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="img-box">
                <img src="../asset/images/tutorials-img2.png" alt="" title="" className="img-fluid" />
                <div className="hover-box">
                  <a ><img src="../asset/images/play-icon.svg" alt="" title="" className="" /></a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="img-box">
                <img src="../asset/images/tutorials-img3.png" alt="" title="" className="img-fluid" />
                <div className="hover-box">
                  <a ><img src="../asset/images/play-icon.svg" alt="" title="" className="" /></a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="img-box">
                <img src="../asset/images/tutorials-img4.png" alt="" title="" className="img-fluid" />
                <div className="hover-box">
                  <a ><img src="../asset/images/play-icon.svg" alt="" title="" className="" /></a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="img-box">
                <img src="../asset/images/tutorials-img5.png" alt="" title="" className="img-fluid" />
                <div className="hover-box">
                  <a ><img src="../asset/images/play-icon.svg" alt="" title="" className="" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a className="btn blue-btn">View All Videos</a>
          </div>
        </div>
      </section>
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
      <footer className="home">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <a ><img src="../asset/images/logo.png" alt="Indx" title="Indx" /></a>
              <p>COPYRIGHT &copy; <script>document.write(/\d{4}/.exec(Date())[0])</script> DESIGN BY RXCE</p>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}

export default App;