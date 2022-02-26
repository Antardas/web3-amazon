import { Card, Carousel } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import carouselImg1 from '../images/carousel1.png';
import carouselImg2 from '../images/carousel2.png';
import carouselImg3 from '../images/carousel3.png';
import comics from '../images/comics.png';
import "./Home.css";
const Home = () => {
const carousel = [carouselImg1, carouselImg2, carouselImg3];
return(
  <>
    <div className="container">
      <Header/>
      <Carousel autoPlay className='carousel'>
        {
          carousel.map((e, index) => {
            return (
              <img key={index} src={e} className='carousel-img' alt='slider'></img>
            )
          })
        }
      </Carousel>
        <div className='cards'>
          <Card className='card'>
            <h1>Browse Comics</h1>
            <img src={comics} alt="Comics Category" className="card-content" />
            <br />
            <Link to='categories' state={"Comics"} className="link">Shop Now</Link>
          </Card>
        </div>
    </div>
  </>
)
}

export default Home;
