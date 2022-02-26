import { Card, Carousel } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import adventure from '../images/adventure.png';
import artemisFowl from '../images/ArtemisFowl.png';
import carouselImg1 from '../images/carousel1.png';
import carouselImg2 from '../images/carousel2.png';
import carouselImg3 from '../images/carousel3.png';
import comics from '../images/comics.png';
import dictionaries from '../images/dictionaries.png';
import fantasy from '../images/fantasy.png';
import horror from '../images/horror.png';
import mobyDick from '../images/MobyDick.png';
// import fantasy from '../images';
import "./Home.css";
const Home = () => {
const carousel = [carouselImg1, carouselImg2, carouselImg3];
const categoryCard = [adventure, fantasy, horror, dictionaries]
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
          <Card className='card'>
            <h1>artemisFowl</h1>
            <img src={artemisFowl} alt="Comics Category" className="card-content" />
            <br />
            <Link to='categories' state={"Comics"} className="link">Shop Now</Link>
          </Card>
          <Card className='card'>
            <h1>MobyDick</h1>
            <img src={mobyDick} alt="Comics Category" className="card-content" />
            <br />
            <Link to='categories' state={"Comics"} className="link">Shop Now</Link>
          </Card>
          <Card className='card'>
            <h1>Shop By Category</h1>
            <div className="card-content">
              {
                categoryCard.map((category, index) => {
                  return (
                    <img src={category} alt="Comics Category" key={index} className='card-category' />
                  )
                })
              }
            </div>
            <br />
            <Link to='/categories' state={"Comics"} className="link">Shop All</Link>
          </Card>
        </div>
    </div>
  </>
)
}

export default Home;
