import React, { useState } from 'react';
import { MdBathtub, MdKingBed, MdAirportShuttle } from "react-icons/md";
import './offers.css';
import { FaWifi, FaLocationDot, FaArrowRight, FaArrowLeftLong } from 'react-icons/fa6';

const data = [
  { id: 1, image: 'https://www.hydehotel.ie/files-sbbasic/sr_hyde-hotel/deluxe-twin-room-hyde-hotel-galway.jpg', discount: '30% Offer', price: '$1,000', address: '450 Vine #310 London' },
  { id: 2, image: 'https://www.quellenhof.it/fileadmin/_processed_/6/2/csm_Quellenhof_Resort_Passeier_Eingang_3_6931ccbc0d.jpg', discount: '20% Offer', price: '$800', address: '123 Main St, New York' },
  { id: 3, image: 'https://media.expedia.com/media/content/shared/images/travelguides/sem-hotels-tablet.jpg?impolicy=fcrop&w=450&h=280&q=medium', discount: '25% Offer', price: '$900', address: '456 Elm St, Los Angeles' },
  { id: 4, image: 'https://img.galaxymacau.com/media_library/gh_hotel_main_hero.jpg?x-oss-process=image/resize%2Cm_lfit%2Cw_1920%2Climit_0/format%2Cwebp/quality%2Cq_75', discount: '15% Offer', price: '$700', address: '789 Maple Ave, Chicago' },
  { id: 5, image: 'https://digital.ihg.com/is/image/ihg/ihg-lp-refresh-hero-imea-gben-lvp-1440x617', discount: '10% Offer', price: '$600', address: '321 Oak St, Miami' },
  { id: 6, image: 'https://assets.tivolihotels.com/image/upload/q_auto,f_auto,c_limit,w_1378/media/minor/tivoli/images/brand_level/footer/1920x1000/thr_aboutus1_1920x1000.jpg', discount: '5% Offer', price: '$550', address: '654 Pine St, Dallas' },
  { id: 7, image: 'https://www.kempinski.com/var/site/storage/images/0/0/2/1/201200-1-eng-GB/95f100ec1a3f-73657573_4K.jpg', discount: '35% Offer', price: '$1,200', address: '987 Cedar St, San Francisco' },
  { id: 8, image: 'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/05/17123657/cover-19.png', discount: '40% Offer', price: '$1,500', address: '159 Birch St, Seattle' },
  { id: 9, image: 'https://cdn.prod.website-files.com/5c6d6c45eaa55f57c6367749/65046bf150d1abb7e5911702_x-65046bcfdc4f0.webp', discount: '22% Offer', price: '$850', address: '753 Walnut St, Boston' },
  { id: 10, image: 'https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg', discount: '18% Offer', price: '$720', address: '852 Chestnut St, Philadelphia' },
  { id: 11, image: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/dbeb3be8-2a3f-48b0-86fb-168010585fe7-Atlantis_Palm_underwatersuite.jpg', discount: '28% Offer', price: '$950', address: '963 Spruce St, Atlanta' },
  { id: 12, image: 'https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg', discount: '12% Offer', price: '$680', address: '741 Willow St, Houston' },
  { id: 13, image: 'https://image-tc.galaxy.tf/wijpeg-53gv183i3pel3gkm6rrzxpmy0/290523-carlton-hotel22065-edited.jpg?width=1920', discount: '32% Offer', price: '$1,100', address: '852 Fir St, San Diego' },
  { id: 14, image: 'https://www.peninsula.com/en/-/media/images/new-york/03roomssuites/suitetype_06_peninsula/peninsula-suite-living-room_p.jpg?mw=905&hash=93B9AF2DE7384F35C63887DA08F00A62', discount: '17% Offer', price: '$740', address: '963 Maple St, Denver' },
  { id: 15, image: 'https://promos.makemytrip.com/AltAcco/images/hotel.png', discount: '20% Offer', price: '$800', address: '741 Elm St, Orlando' },
];

function Offers() {
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
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <div className="secTitle">
            <h2>Special Offers</h2>
            <p>From historical cities to natural spectaculars, come see the best of the world!</p>
          </div>
        </div>
        <div iconsDiv flex>
        <div className="iconsDiv flex">
          <FaArrowLeftLong className='icon leftIcon' onClick={prevSlide} />
          <FaArrowRight className='icon' onClick={nextSlide} />
        </div>
        </div>
        <div className="carousel">
          <div className="mainContent">
            {data.slice(currentIndex, currentIndex + 3).map((hotel) => (
              <div className="singleOffer" key={hotel.id}>
                <div className="destImage">
                  <img src={hotel.image} alt={`Hotel ${hotel.id}`} />
                  <span className="discount">{hotel.discount}</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{hotel.price}</h4>
                    <span className="status">For Rent</span>
                  </div>
                  <div className="amenities flex">
                    <div className="singleAmenities flex">
                      <MdKingBed className='icon' />
                      <small>2 Beds</small>
                    </div>
                    <div className="singleAmenities flex">
                      <MdBathtub className='icon' />
                      <small>1 Bath</small>
                    </div>
                    <div className="singleAmenities flex">
                      <FaWifi className='icon' />
                      <small>Wi-Fi</small>
                    </div>
                    <div className="singleAmenities flex">
                      <MdAirportShuttle className='icon' />
                      <small>Shuttle</small>
                    </div>
                  </div>
                  <div className="location flex">
                    <FaLocationDot className='icon' />
                    <small>{hotel.address}</small>
                  </div>
                  <button className="btn flex">
                    View details
                    <FaArrowRight className='icon' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
