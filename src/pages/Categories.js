import { Button, Layout } from 'antd';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import PriceRanges from '../components/PriceRanges';
import Rating from '../components/Rating';
import Results from '../components/Results';
const {Sider, Content} = Layout;

const Categories = () => {
const {state: category} = useLocation();
const [rating, setRating] = useState(1);
const [priceMin, setPriceMin] = useState(1);
const [priceMax, setPriceMax] = useState(100);
return(
  <>
    <div className="container">
      <Header/>
      <div className='results-header'>
        <span>Showing Products For</span>
        <span className='category'> "{category}"</span>
      </div>
      <Layout>
        <Sider
          width='340px'
          theme='light'
          style={{padding: "25px"}}
        >
          <Rating rating={rating} setRating={setRating}/>
          <PriceRanges setPriceMax={setPriceMax} setPriceMin={setPriceMin} priceMin={priceMin} priceMax={priceMax}/>
          <br />
          <Button className='login'>Apply Filters</Button>
        </Sider>
        <Content 
          theme='light'
          style={{padding: "35px", backgroundColor: '#fff'}}
        >
          <h1 style={{fontSize:"30px"}}>RESULTS</h1>
          <Results category={category} rating={rating} priceMin={priceMin} priceMax={priceMax}/>
        </Content>
      </Layout>
    </div>
  </>
)
}

export default Categories;
