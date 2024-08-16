import React from 'react';
import './blog.css';
import { FaArrowRight } from "react-icons/fa6";

const blogData = [
  {
    imgSrc: 'https://miro.medium.com/v2/resize:fit:1000/1*2c3dB30SysZ8pCtojBTSXg.jpeg', 
    title: 'Amazing Mountain Adventures',
    description: 'Explore the most breathtaking mountain trails with us and experience nature like never before.',
  },
  {
    imgSrc: 'https://healthyline.com/cdn/shop/articles/danxia.jpg?v=1712868738&width=1445', 
    title: 'The Beauty of the Ocean',
    description: 'Dive into the deep blue and discover the wonders of the underwater world.',
  },
  {
    imgSrc: 'https://imageio.forbes.com/specials-images/imageserve/61cc7beff25d333b87554661/Marble-Caves-in-General-Carrera-Lake--Patagonia--Chile-most-beautiful-places/960x0.jpg?height=399&width=711&fit=bounds', 
    title: 'Desert Safari Escapades',
    description: 'Experience the thrill of a desert safari and witness the vast beauty of the sand dunes.',
  }
];

function Blog() {
  return (
    <section className='blog container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className='secTitle'>
            Our Best Blog?
          </h2>
          <p>An insight to the incredible experience in the world</p>
        </div>
        <div className="mainContainer grid">
          {blogData.map((post, index) => (
            <div className="singlePost" key={index}>
              <div className="imgDiv">
                <img src={post.imgSrc} alt={post.title} />
              </div>
              <div className="postDetails">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
              <a href="#" className='flex'>
                Read More
                <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog;
