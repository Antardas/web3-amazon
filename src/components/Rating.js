import { Radio, Rate } from 'antd';
import React from 'react';


const Rating = ({rating, setRating}) => {
    return (
        <div>
            <h2>Customer Review</h2>
            <Radio.Group value={rating} onChange={(value) => setRating(value.target.value)}>
                <Radio value={5}><Rate defaultValue={5} disabled={true}></Rate></Radio>
                <Radio value={4}><Rate defaultValue={4} disabled={true}></Rate></Radio>
                <Radio value={3}><Rate defaultValue={3} disabled={true}></Rate></Radio>
                <Radio value={2}><Rate defaultValue={2} disabled={true}></Rate></Radio>
                <Radio value={1}><Rate defaultValue={1} disabled={true}></Rate></Radio>
            </Radio.Group>
            <h1>{rating}</h1>
        </div>
    );
};

export default Rating;