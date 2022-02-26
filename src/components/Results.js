import { Card, Rate } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { books } from '../books';
import './result.css';

function Results({priceMin, priceMax, category, rating}) {
    const bookCategory = books[category].filter(x => x.rating >= rating).filter(x => x.price > priceMin).filter(x => x.price <= priceMax);
    console.log(bookCategory)
  return (
    <div>
        {
            bookCategory.map((e, index) => {
                return (
                    <Card key={index}>
                        <div style={{display: 'flex'}}>
                            <img src={e.image} alt="product" width="300px"/>
                            <div>
                                <p className='title'>{e.name}</p>
                                <Rate value={e.rating} disabled={true}></Rate>
                                <h2>{e.price}</h2>
                                <p>
                                    Ships your location
                                </p>
                                <Link to='/product' state={e}>Go to product page</Link>
                            </div>

                        </div>
                    </Card>
                )
            })
        }
    </div>
  )
}

export default Results