// src/ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import { Container, Button } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';  // For custom styles
import a from './images.jpg';
import b from './2.png';
import c from './3.jpg';
import { useNavigate } from 'react-router-dom';

const ImageCarousel = () => {
  const Navigate= useNavigate()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [
    a,
    b,
    c,
  ];
 const handleclick=()=>{
  Navigate('/login')
 }
  return (
    <Container>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="image-container">
            <img 
              src={img} 
              alt={`Slide ${index + 1}`} 
              className="block" 
            />
          </div>
        ))}
      </Slider>
      <div className="text-center mt-3">
        <Button variant="primary" href="#contact" onClick={handleclick}> 
          Explore
        </Button>
      </div>
    </Container>
  );
};

export default ImageCarousel;
