import { InputNumber, Space } from 'antd';
import React from 'react';
import './priceRanges.css';
function PriceRanges({priceMin, priceMax, setPriceMin, setPriceMax}) {
    function priceChange(min, max) {
        setPriceMin(min);
        setPriceMax(max);
    }
  return (
    <div>
        <h2>Price Ranges</h2>
        <p className="prices" onClick={() => priceChange(0,5)}>Under $5</p>
        <p className="prices" onClick={() => priceChange(5,10)}>$5 to $10</p>
        <p className="prices" onClick={() => priceChange(10,20)}>$10 to $20</p>
        <p className="prices" onClick={() => priceChange(20,100)}>$20 & Above</p>
        <Space>
            <InputNumber
            value={priceMin}
            formatter={value => `$ ${value}`}
            onChange={(value) => priceChange(priceMin, priceMax)}
            />
            <InputNumber
            value={priceMax}
            formatter={value => `$ ${value}`}
            onChange={(value) => priceChange(priceMin, priceMax)}
            />
        </Space>
    </div>
  )
}

export default PriceRanges