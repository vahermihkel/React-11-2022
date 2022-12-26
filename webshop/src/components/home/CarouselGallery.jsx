import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import config from "../../data/config.json";

const CarouselGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(config.imagesDbUrl)
      .then(res => res.json())
      .then(json => {
        setImages(json || []);
      });
  }, []);

  return (
    <Carousel controls={images.length > 1}>
      {images.map(element => 
        <Carousel.Item key={element.url}>
          <img
            src={element.url}
            alt={element.alt}
          />
          <Carousel.Caption>
            <h3>{element.header}</h3>
            <p>{element.text}</p>
          </Carousel.Caption>
        </Carousel.Item>)}
    </Carousel>
  )
}

export default CarouselGallery