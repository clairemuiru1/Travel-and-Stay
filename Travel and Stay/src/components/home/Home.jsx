import React from 'react'
import './home.css'

function Home() {
  return (
   <section className='home'>
    <div className="setContainer container">
      <div className="homeText">
        <h1 className='title'>
          Plan your Travel with Habibi Travel
        </h1>
        <p className="subTitle">
          Travel to your favourite city with respectful of the environment!
        </p>
        <button className="btn">
          <a href="a">Explore Now</a>
        </button>
      </div>
      <div className="homeCard grid">
        <div className="locationDiv">
          <label htmlFor="location">location</label>
          <input type="text" placeholder='Dream Destination' />
        </div>
        <div className="distanceDiv">
          <label htmlFor="distance">location</label>
          <input type="text" placeholder='11/Meters' />
        </div>
        <div className="priceDiv">
          <label htmlFor="price">location</label>
          <input type="text" placeholder='$140- $500' />
        </div>
        <button className='btn'>Search</button>
      </div>
    </div>
   </section>
  )
}

export default Home
