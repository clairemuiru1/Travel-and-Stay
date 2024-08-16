import React from 'react';
import "./about.css";
import video from './video.mp4';

function About() {
  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">
          Why Hiking?
        </h2>
        <div className="mainContent container grid">
          <div className="singleItem">
            <img src='https://imagedelivery.net/xE-VtsYZUS2Y8MtLMcbXAg/4592abf8399953bd3b61/orig' alt='100+ Hikings'/>
            <h3>100+ Hikings</h3>
            <p>Research shows that a chance to break away from the normal
              rhythms of daily life reduces stress and improves health and well-being.
            </p>
          </div>
          <div className="singleItem">
            <img src='https://png.pngtree.com/template/20200209/ourmid/pngtree-mountain-logo-element-vector-emblem-isolated-background-white-image_350214.jpg' alt='2000+ Mountains'/>
            <h3>2000+ Mountains</h3>
            <p>Research shows that a chance to break away from the normal
              rhythms of daily life reduces stress and improves health and well-being.
            </p>
          </div>
          <div className="singleItem">
            <img src='https://png.pngtree.com/png-clipart/20230928/original/pngtree-online-customer-service-icon-with-headset-on-white-background-vector-png-image_12898913.png' alt='1000+ Customers'/>
            <h3>1000+ Customers</h3>
            <p>Research shows that a chance to break away from the normal
              rhythms of daily life reduces stress and improves health and well-being.
            </p>
          </div>
        </div>
        <div className="videoCard container">
          <div className="cardcontent grid">
            <div className="cardText">
              <h2>Wonderful House experience in there!</h2>
              <p>
                The Adventure subranking is based on an equally
                weighted average of scores from five countries. 
              </p>
            </div>
            <div className="cardVideo">
              <video src={video} autoPlay loop muted></video>    
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
