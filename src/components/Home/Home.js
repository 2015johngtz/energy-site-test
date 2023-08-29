import React, { Component } from 'react';
import { NavBar, Footer } from '../../common'
import './HomeStyles.scss'
import Slider from "react-slick";
import { Entypo, EvilIcons, AntDesign } from 'react-web-vector-icons';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className}
      onClick={onClick}>
      <Entypo
        name="chevron-thin-right"
        size={33}
      />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className}
      onClick={onClick} style={{ position: 'relative', left: '-63px', top: '150px' }}>
      <Entypo
        name="chevron-thin-left"
        size={33}
      />

    </div>
  );
}
const settings = {
  // dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

function Home() {
  return (
    <div>
      <NavBar />
      <div className="top-div-main">
        <div className="top-div1">
          <div className="container">
            <div className="zip-code-div">
              <h2>
                Let TECS Find The Best Electricity & Solor Panel Rates For You
                </h2>
              <div className="explore-div">
                <button >Explore</button>
                <input type="text"
                  placeholder="Enter ZIP code" name="search" />
              </div>
            </div>

            <div className="moving-new-address">
              <h6>Are you moving to a new address?</h6>
              <div className="radio-input-div">
                <input type="radio" name="choice" />
                <label>Yes</label>
                <input type="radio" name="choice" />
                <label>No</label>
              </div>
              <button>For Business</button>
            </div>
          </div>
        </div>
      </div>
      <div className="easy-as-shop">
        <div className="container">
          <h2>Easy as shop, choose, & save !</h2>

          <div className="row">

            <div>
              <img src={require('../../assets/imgs/shop1.png')} width="110" height="110" />
              <p style={{
                width: '100px', textAlign: 'center',
                fontFamily: 'Poppins-Regular', fontSize: '12px', marginTop: '12px',
              }}>Enter your zip code</p>
            </div>

            <img className="arrow-img" src={require('../../assets/imgs/arrow.png')} />
            <div>
              <img src={require('../../assets/imgs/shop2.png')} width="110" height="110" />
              <p style={{
                width: '136px', textAlign: 'center', fontFamily: 'Poppins-Regular',
                fontSize: '12px', marginTop: '12px', marginLeft: '-9px'
              }}>Filter and Compare plans</p>
            </div>
            <img className="arrow-img" src={require('../../assets/imgs/arrow.png')} />
            <div>
              <img src={require('../../assets/imgs/shop3.png')} width="110" height="110" />
              <p style={{
                width: '146px', textAlign: 'center', fontFamily: 'Poppins-Regular',
                fontSize: '12px', marginTop: '12px', marginLeft: '-13px'
              }}>Order the plan That's Right for you</p>
            </div>

          </div>

        </div>

      </div>
      <div className="trouble-contact">
        <div className="container">
          <div style={{ justifyContent: 'space-around', marginBottom: '27px' }} className="row">
            <h6 style={{ fontSize: '23px', fontFamily: 'Poppins-Regular', position: 'relative', right: '60px' }}>Trouble</h6>
            <h6 style={{ fontSize: '23px', fontFamily: 'Poppins-Regular', position: 'relative', right: '180px' }}>Contact Us</h6>
          </div>
          <div className="row">
            <div className="trouble">
              <div className="row" style={{ marginLeft: '53px' }}>
                <img src={require('../../assets/imgs/speed.png')} style={{ height: '40px', width: '39px' }} />
                <div style={{ marginLeft: '58px' }}>
                  <h6>What makes us different?</h6>
                  <p>We provide electricity & solar panels that are
                  affordable & reliable, with none of the question
                  marks you face from other providers. That
                  means no jargon, no complicated pricing
                  structures or fees, and the support you deserve.</p>
                </div>
              </div>
              <div className="row" style={{ marginLeft: '37px' }}>
                <img src={require('../../assets/imgs/exp.png')} style={{ height: '65px', width: '55px' }} />
                <div style={{ marginLeft: '58px' }}>
                  <h6>Our Experience</h6>
                  <p>Over the past 13 years, Texas Energy Consulting Services has served 1.2 million statisfied customers become one today.</p>
                </div>
              </div>
              <div className="row" style={{ marginLeft: '37px' }}>
                <img src={require('../../assets/imgs/network.png')} style={{ height: '57px', width: '54px' }} />
                <div style={{ marginLeft: '58px' }}>
                  <h6>Why Us?</h6>
                  <p>Get more comfort, convenience, and control
                  with TECS—that’s why when it comes to client
                  selection, we’re choosy. We want to give each
                  of you the time and guidance you deserve.</p>
                </div>
              </div>
              <h7>Fill the form to get a quick qoute! <img src={require('../../assets/imgs/dArrows.png')} /></h7>

            </div>
            <div className="contact-us">
              <div className="row">
                <label>Service Address*</label>
                <input />
              </div>
              <div className="row">
                <label>Full Name*</label>
                <input />
              </div>
              <div className="row">
                <label>Phone*</label>
                <input />
              </div>
              <div className="row">
                <label>Email*</label>
                <input />
              </div>
              <div className="row">
                <label>Message</label>
                <textarea />
              </div>
              <button>GET QUOTE!</button>
            </div>
          </div>

        </div>

      </div>
      <div className="div4">
        <div className="container">
          <div className="row">
            <div class="div4-textDiv">
              <h2>Texas Energy Consulting Services - Electricity & Solar Panel</h2>
              <p>TECS offers a range of affordable electricity plans designed to fit your budget and lifestyle. Plus, TECS makes it easy to switch or start your service. You'll even find ways to make your home more energy efficient, secure and simpler to manage.</p>
              <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
              <button >GO SOLAR TODAY! - GET STARTED</button>
              <button style={{
                backgroundColor: '#494d71', color: 'white', marginLeft: '20px',
                fontWeight: '100', width: '125px'
              }}>Learn More</button>
            </div>
            <div className="div4-imgDiv">
              <div className="imgDiv">
                <div className="rectangle-rounded"></div>

              </div>

            </div>
          </div>

        </div>

      </div>
      <div className="div5">
        <div className="container">
          <h2>Our Customers Have To Say -</h2>
          <h7>learn everything there is to know about the ubiquitous lorem ipsum passage.
learn everything there is to know about the.</h7>
          <div className="slider">
            <Slider {...settings}>
              <div className="slide">
                <img src={require('../../assets/imgs/sliderImg.png')} />
                <h2>Solar panels saved me</h2>
                <p>Such an easy experience! They look at electric rates all day. They know the ins and outs of every
                package. Trust them to pick what’s best for you! I got solar panels in less than a month!
                - Justin, TX
                </p>
              </div>
              <div className="slide">
                <img src={require('../../assets/imgs/sliderImg.png')} />
                <h2>Solar panels saved me</h2>
                <p>Such an easy experience! They look at electric rates all day. They know the ins and outs of every
                package. Trust them to pick what’s best for you! I got solar panels in less than a month!
                - Justin, TX
                </p>
              </div>
              <div className="slide">
                <img src={require('../../assets/imgs/sliderImg.png')} />
                <h2>Solar panels saved me</h2>
                <p>Such an easy experience! They look at electric rates all day. They know the ins and outs of every
                package. Trust them to pick what’s best for you! I got solar panels in less than a month!
                - Justin, TX
                </p>
              </div>


            </Slider>
          </div>

        </div>

      </div>
      <div className="div6">
        <div className="container">
          <div className='row'>
            <img src={require('../../assets/imgs/div6-img.png')} />
            <div className="div6-text">
              <h2>We've served 1.2 million satisfied customers</h2>
              <p style={{ marginTop: '30px', marginBottom: '30px' }}>Stop looking around through thousands of websites and still not having the luck you deserve! Leave your headaches to us, we do the heavy lifting, so you can sit back and relax! Become a TECS customer today!</p>
              <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs.</p>
              <div className="div6-input">
                <input type="text"
                  placeholder="Email Address" name="search" />
                <button >Sign up</button>

              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="div7">
        <div className="container">
          <div className="div7-videoDiv">
            <iframe src="https://www.youtube.com/embed/NtxPSJMWgm8"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
           encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

            </iframe>
          </div>
          <div className="row">
            <EvilIcons
              name="sc-facebook"
              size={35}
              style={{ marginRight: '-11px', marginTop: '-7px' }}
            />
            <AntDesign
              name="instagram"
              size={25}


            />
            <AntDesign
              name="youtube"
              size={25}

            />
            <AntDesign
              name="twitter"
              size={25}

            />


          </div>
          <div className="div7-footer">
            <p style={{ marginTop: '30px', marginBottom: '3px' }}>Get help 24/7/365</p>
            <p> Reach TECS customer support 24/7, 365 days a year via phone or live chat.
            You'll always speak to a real person. Houston, Texas 77010, United States</p>
            <p>CONTACT US GO SOLAR! (NOW AVAILABLE)1 (956) 598-3250</p>

          </div>
        </div>
      </div>
      <div className="div8">
        <div className="container">
          <h2>We Sell The Brand You Know</h2>
          <img src={require('../../assets/imgs/brands.png')} />
          <div className="row">
            <img src={require('../../assets/imgs/div8-img.png')} />
            <div className='div8-text'>
              <h2>What is Lorem Ipsum?</h2>
              <p>From its medieval origins to the digital era, learn everything there is to know
               about the ubiquitous lorem ipsum passage.</p>
              <div className="row">
                <button style={{ marginRight: '10px' }}>Get A Quote</button>
                <button>Lorem Ipsum</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
