import React from 'react';
import './popular.css';
import { FaArrowLeftLong, FaArrowRight, FaLocationDot } from "react-icons/fa6";

// Destination data
const data = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg',
    name: 'London',
    description: 'The capital of England and the United Kingdom.',
  },
  {
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/230516112548-01-crossroads-maldives-aerial.jpg?c=original&q=h_447,c_fill',
    name: 'Maldives',
    description: 'A tropical paradise in the Indian Ocean.',
  },
  {
    image: 'https://i.ytimg.com/vi/DzChapc60mE/sddefault.jpg',
    name: 'Santorini, Greece',
    description: 'A stunning natural wonder in Arizona.',
  },
  {
    image: 'https://facts.net/wp-content/uploads/2023/06/38-facts-about-egypt-1688101892.jpeg',
    name: 'Egypt',
    description: 'Home to the Pyramids and the Sphinx.',
  },
  {
    image: 'https://www.naturaltoursandsafaris.com/wp-content/webp-express/webp-images/uploads/2023/05/Chale-Island-Diani-Beach-Kenya-Natural-World-Kenya-Safaris.jpeg.webp',
    name: 'Kenya',
    description: 'Known for its stunning savannahs and wildlife.',
  },
  {
    image: 'https://images.squarespace-cdn.com/content/v1/5c1f6e9636099b58efd736be/1558718243659-EUGGCDZEVVTPP0HBCVS9/lauren+cape+town.jpg',
    name: 'Cape Town',
    description: 'A vibrant city with beautiful landscapes in South Africa.',
  },
  {
    image: 'https://blog.dookinternational.com/wp-content/uploads/2022/11/10.Hot-Air-Balloon-in-Kiliminjaro.jpg',
    name: 'Kilimanjaro',
    description: 'The highest peak in Africa, located in Tanzania.',
  },
  {
    image: 'https://www.kiwoitoafricasafaris.com/wp-content/uploads/2023/10/house-landscape-pool-relaxation-garden-1140x530.jpg',
    name: 'Diani Beach',
    description: 'A beautiful beach destination in Kenya.',
  },
  {
    image: 'https://www.tripsavvy.com/thmb/qhYNI0YAB9aTzK-HuGqqi-q8ToQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Los-Angeles-Assignment-1-124WEB-5c743d3d46e0fb0001835df8.jpg',
    name: 'Los Angeles',
    description: 'A major city in California known for its entertainment industry.',
  },
  {
    image: 'https://www.francetourisme.fr/media/ILLU_TOUTBUS/illuminations-de-paris-2.jpg',
    name: 'Paris',
    description: 'The capital city of France, famous for its art and architecture.',
  },
  {
    image: 'https://img-cdn-china-admissions.imgix.net/wp-content/uploads/2023/10/great-wall-1.png?auto=format%2Cenhance%2Ccompress',
    name: 'Great Wall of China',
    description: 'A historic wall stretching across northern China.',
  },
  {
    image: 'https://www.indiantempletour.com/wp-content/uploads/2022/10/Mauritius-Island-Honeymoon-Package.webp',
    name: 'Mauritius',
    description: 'An island nation known for its beaches and coral reefs.',
  },
  {
    image: 'https://media.istockphoto.com/id/1054763362/photo/little-sand-fall-antelope-canyon-page-arizona-usa.jpg?s=612x612&w=0&k=20&c=nl9QlQHo4WBfKZ_zvqbEqU-eahIN6ETS4V7c_5f1HBE=',
    name: 'Antelope Canyon',
    description: 'A stunning slot canyon in Arizona known for its light beams and colors.',
  },
  {
    image: 'https://static.toiimg.com/photo/40250293.cms',
    name: 'Machu Picchu',
    description: 'Ancient Incan city set high in the Andes Mountains in Peru.',
  },
  {
    image: 'https://www.redfin.com/blog/wp-content/uploads/2023/09/GettyImages-1525360294.jpg',
    name: 'Iceland',
    description: 'A Nordic island country known for its dramatic landscapes and volcanoes.',
  },
];

function Popular() {
  return (
    <section className='popular section container'>
      <div className="secHeader flex">
        <div className="textDiv">
          <h2 className="secTitle">Popular destination</h2>
          <p>From historical cities to natural spectaculars, come see the best of the world!</p>
        </div>
        <div className="iconsDiv flex">
          <FaArrowLeftLong className='icon leftIcon' />
          <FaArrowRight className='icon' />
        </div>
      </div>
      <div className="mainContent grid">
        {data.map((item, index) => (
          <div className="singleDestination" key={index}>
            <div className="destImage">
              <img src={item.image} alt={`Destination ${index + 1}`} />
              <div className="overLayInfo">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <FaArrowRight className='icon' />
              </div>
            </div>
            <div className="destFooter">
              <div className="number">{index + 1}</div>
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
