import React, { useState } from "react";
import leftimg from "../images/photo/d-removebg-preview.png";
import { VscVersions } from "react-icons/vsc";
import { VscVmConnect } from "react-icons/vsc";
import { VscTerminalCmd } from "react-icons/vsc";
import ShowMoreText from "react-show-more-text";
import i1 from "../images/photo/image1.jpg";
import i2 from "../images/photo/image2.png";
import i3 from "../images/photo/image3.jpg";
import i4 from "../images/photo/image4.jpg";
import i5 from "../images/photo/image5.jpg";
import i6 from "../images/photo/image6.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function () {
  const [one, setOne] = useState([
    { heading: "Web design", icon: <VscVersions className="icon" /> },
    { heading: "Web Deveelopment", icon: <VscVmConnect className="icon" /> },
    { heading: "Creative Design", icon: <VscTerminalCmd className="icon" /> },
  ]);
  const [two, SetTwo] = useState([
    {
      img: i1,
    },
    {
      img: i2,
    },
    {
      img: i3,
    },
    {
      img: i4,
    },
    {
      img: i5,
    },
    {
      img: i6,
    },
  ]);
  return (
    <div className="m-page">
      <div className="container">
        <div>
          <p className="dev">Developer.</p>
        </div>
        <div className="row">
          <div className=" col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-5">
            <div className="carding">
              <div className="top1">
                <p className="hello">Hello</p>
                <p className="im">I'M</p>
              </div>
              <div className=""data-aos="flip-up"data-aos-delay="300">
                <div className="heading">
                  <p className="header1">Vinoth kumar</p>
                  <div className="header">
                    <p className="header2">Front-end</p>
                    <p className="header3">Developer</p>
                  </div>
                </div>
                <div className="para1 mb-4">
                  Welcome to my frond-end developer portflolio! Im vinoth kumar,askilled and
                  creative frond-end developer with a passion for creating beautiful
                  responsive and user-friendly Website ive Worked on variety of
                  web projects,ranging from personal belogs to e-commerce
                  platforms
                </div>
                <div>
                  <button className="say mb-3">Say Hello</button>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="carding1">
              <img className="img-fluid leftimg mb-5" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" src={leftimg} />
            </div>
          </div>
        </div>
      </div>
      <div className="second-slot">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
              <div className="carding3   ">
                <img className="img-fluid rightimg"data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500"src={leftimg} />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 "data-aos="zoom-out"data-aos-delay="550">
              <div className="carding4 mt-5">
                <div className="secondslot1">
                  <p className="about">ABOUT</p>
                  <p className="me">ME</p>
                </div>
                <div className="secondslot2">
                  <p>Creative Front-end developer!</p>
                </div>
                <div className="para2">
                  <p>
                    As A Front-end developer .I Speccialize in Creating User interface
                    and Experiences for digital products. I have extensive
                    experience working with product managers developers and
                    other stakeholders to gather requirements create wireframes
                    and prototypes and contducts user testing to ensure that
                    final products meets the need of the users. Throughout my
                    career.Ihave achieved several milestones,including desgining
                    successful digital products that have recieved positive
                    feedback from users and stakeholders
                  </p>
                </div>
                <button className="more bb-5">More About</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fourthslot">
        <div className="container">
          <div className="row">
            <div className="carding5 mt-5">
              <p className="what mb-0">What I offer</p>
              <div className="thirdslot1 mt-0">
                <p className="my">My</p>
                <p className="ser">Services</p>
              </div>
            </div>
            {one.map((e) => (
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-5" data-aos="zoom-in-up"data-aos-delay="550">
                <div className="carding6 p-5">
                  <span className="icon">{e.icon}</span>
                  <p className="webdesign">{e.heading}</p>
                  <div className="para3">
                    <p>
                      We are dedicated to providing high-quality web designe
                      services that are tailored to meet the specific needs of
                      our clients
                    </p>
                  </div>
                  <button className="rm">Read More</button>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
      <div className="fiftyslot">
        <div className="container">
          <div className="row">
            <div className="fifyslot1 mt-5">
              <p className="por mb-0">portflolio</p>
              <p className="latest">Latest</p>
            </div>
            {two.map((e) => (
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4"data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"data-aos-delay="100">
                <div className="carding7 ">
                  <div>
                    <img className="img-fluid siximg" src={e.img} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sevenslot">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-5 "data-aos="fade-up"
     data-aos-duration="3000">
              <div className="sevenslot1">
                <p className="contact">Contact</p>
                <p className="me1">Me!</p>
              </div>
              <p className="sp1">if you have any project in mind</p>
              <div className="sp2">
                <p>
                  you can reach me through the contact team provided on this
                  website simply fill out the form with your name email
                  address,number and message and i will get back to you as soon
                  as possible
                </p>
                <p>krishna villa</p>
                <p>Devoli Road</p>
                <p>Tank</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-5"data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
              <div className="carding8">
                <form className="mb-5 fo1 ">
                  <input type="text" className="yn p-2" name="your name" placeholder="Your name " />
                  <input type="email" className="yn p-2" name="your name" placeholder="Your email address "/>
                  <input type="phone number" className="yn p-2" name="your name" placeholder=" Your phone number "/>
                  <textarea rows="10" cols="40"name="Your idea" className="yi p-2 "  placeholder="your idea... "></textarea>
                </form>
                <div className="b1 ">
                  <button className="sevensubmit mt-0"> submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
