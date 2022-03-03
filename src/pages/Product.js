import { Rate } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Purchase from '../components/Purchase';
import './product.css';
const Product = () => {
  const {state: book} = useLocation();
  console.log(book);
  return (
  <>
  <div className="container">
    <Header/>
    <div className='product-content'>
      <div>
        <div className='product-img'>
          <img src={book.image} alt="product" width='100%' />
        </div>
        <p style={{textAlign: 'center'}}>Hover over image to zoom</p>
      </div>
      <div className='product-details'>
        <h1>{book.name}</h1>
        <span>({book.rating}) </span>
        <Rate value={book.rating} disabled={true}/>
        <hr />
        <p>
          Price:
          <span className="price">$ {book.price}</span>
        </p>
        <p>Not Import Fees & Shipping Fee Include</p>
        <hr />
        <hr />
        <h3>About this Item</h3>
        <p>
          {book.about}
        </p>
      </div>
      <div className='purchase-details'>
        <Purchase book={book}/>
      </div>
    </div>
  </div>
  </>
)}
export default Product;
// https://youtu.be/GKsIPkXWpyc?t=3058
