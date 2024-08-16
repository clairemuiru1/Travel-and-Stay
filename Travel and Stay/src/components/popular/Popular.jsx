import React, { useState } from 'react';
import './popular.css';
import { FaArrowLeftLong, FaArrowRight, FaLocationDot } from "react-icons/fa6";

const data = [
  {
    id: 1,
    name: 'London',
    description: 'Experience the charm of the River Thames and the iconic Big Ben.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg',
  },
  {
    id: 2,
    name: 'Maldives',
    description: 'Enjoy the crystal-clear waters and pristine beaches.',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/230516112548-01-crossroads-maldives-aerial.jpg?c=original&q=h_447,c_fill',
  },
  {
    id: 3,
    name: 'Santorini',
    description: 'Explore the futuristic skyline and luxurious lifestyle.',
    image: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/data/ports/santorini-greece/overview/santorini-greece-oia-white-blue.jpg?$1440x600$',
  },
  {
    id: 4,
    name: 'Egypt',
    description: 'Discover the ancient pyramids and the mystique of the Nile.',
    image: 'https://facts.net/wp-content/uploads/2023/06/38-facts-about-egypt-1688101892.jpeg',
  },
  {
    id: 5,
    name: 'Kenya',
    description: 'Experience the stunning wildlife and beautiful landscapes.',
    image: 'https://www.naturaltoursandsafaris.com/wp-content/webp-express/webp-images/uploads/2023/05/Chale-Island-Diani-Beach-Kenya-Natural-World-Kenya-Safaris.jpeg.webp',
  },
  {
    id: 6,
    name: 'Cape Town',
    description: 'Explore the scenic beauty and vibrant culture of South Africa.',
    image: 'https://images.squarespace-cdn.com/content/v1/5c1f6e9636099b58efd736be/1558718243659-EUGGCDZEVVTPP0HBCVS9/lauren+cape+town.jpg',
  },
  {
    id: 7,
    name: 'Kilimanjaro',
    description: 'Take on the challenge of climbing Africa\'s highest peak.',
    image: 'https://blog.dookinternational.com/wp-content/uploads/2022/11/10.Hot-Air-Balloon-in-Kiliminjaro.jpg',
  },
  {
    id: 8,
    name: 'Tanzania',
    description: 'Enjoy the breathtaking landscapes and rich wildlife.',
    image: 'https://www.kiwoitoafricasafaris.com/wp-content/uploads/2023/10/house-landscape-pool-relaxation-garden-1140x530.jpg',
  },
  {
    id: 9,
    name: 'Los Angeles',
    description: 'Discover the glitz and glamour of Hollywood and sunny beaches.',
    image: 'https://www.tripsavvy.com/thmb/qhYNI0YAB9aTzK-HuGqqi-q8ToQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Los-Angeles-Assignment-1-124WEB-5c743d3d46e0fb0001835df8.jpg',
  },
  {
    id: 10,
    name: 'Paris',
    description: 'Witness the romantic city with its iconic Eiffel Tower.',
    image: 'https://www.francetourisme.fr/media/ILLU_TOUTBUS/illuminations-de-paris-2.jpg',
  },
  {
    id: 11,
    name: 'Great Wall of China',
    description: 'Walk along one of the world\'s greatest wonders.',
    image: 'https://img-cdn-china-admissions.imgix.net/wp-content/uploads/2023/10/great-wall-1.png?auto=format%2Cenhance%2Ccompress',
  },
  {
    id: 12,
    name: 'Mauritius',
    description: 'Relax in the serene and picturesque island of Mauritius.',
    image: 'https://www.indiantempletour.com/wp-content/uploads/2022/10/Mauritius-Island-Honeymoon-Package.webp',
  },
  {
    id: 13,
    name: 'Antelope Canyon',
    description: 'Explore the stunning slot canyon with its unique rock formations.',
    image: 'https://media.istockphoto.com/id/1054763362/photo/little-sand-fall-antelope-canyon-page-arizona-usa.jpg?s=612x612&w=0&k=20&c=nl9QlQHo4WBfKZ_zvqbEqU-eahIN6ETS4V7c_5f1HBE=',
  },
  {
    id: 14,
    name: 'India',
    description: 'Experience the diversity and cultural richness of India.',
    image: 'https://static.toiimg.com/photo/40250293.cms',
  },
  {
    id: 15,
    name: 'San Francisco',
    description: 'See the iconic Golden Gate Bridge and vibrant city life.',
    image: 'https://www.redfin.com/blog/wp-content/uploads/2023/09/GettyImages-1525360294.jpg',
  },
];

function Popular() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 3 ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 3 : prevIndex - 3
    );
  };

  return (
    <section className='popular section container'>
      <div className="secHeader flex">
        <div className="textDiv">
          <h2 className="secTitle">Popular destination</h2>
          <p>From historical cities to natural spectaculars, come see the best of the world!</p>
        </div>
        <div className="iconsDiv flex">
          <FaArrowLeftLong className='icon leftIcon' onClick={prevSlide} />
          <FaArrowRight className='icon' onClick={nextSlide} />
        </div>
      </div>
      <div className="mainContent grid">
        {data.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <div className="singleDestination" key={item.id}>
            <div className="destImage">
              <img src={item.image} alt={`Destination ${item.id}`} />
              <div className="overLayInfo">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <FaArrowRight className='icon' />
              </div>
            </div>
            <div className="destFooter">
              <div className="number">{item.id}</div>
              <div className="destText flex">
                <h6>{item.name}</h6>
                <span className="flex">
                  <FaLocationDot className='icon' />
                  Habibi
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Popular;
