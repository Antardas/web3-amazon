import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Select } from 'antd';
import React, { useState } from 'react';
import { useMoralis } from 'react-moralis';
import './purchase.css';
const {Option} = Select;
function Purchase({book}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const {Moralis, account} = useMoralis()
  const handleOk = async () => {
    const options = {
      address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
      chain: "eth",
    }
    const price = await Moralis.Web3API.token.getTokenPrice(options);
    const priceMatic = book.price / price.usdPrice
    const bookStoreOwner = {
      type: 'native',
      amount: Moralis.Units.ETH(priceMatic),
      receiver: '0x50271ff5Ec84fA9fCbA9308B21c360BD454715Ff'
    }
    let result = await Moralis.transfer(bookStoreOwner);
    result && setDeliveryAddress('')
    // Saving Transaction detail to Database 
    const Transaction = Moralis.Object.extend('Transaction');
    const transaction = new Transaction()
    transaction.set("Customer", account);
    transaction.set("Delivery", deliveryAddress);
    transaction.set("Product", book.name);
    console.log(priceMatic);
  }
  return (
    <>
      <div>{book.name}</div>
      <span className='price'>{book.price}</span>
      <span>Not Import Fees & Free Shipping Include</span>
      <h1 style={{color: 'green'}}>In Stock</h1>
      <h3>Quantity</h3>
      <Select name="" id="" defaultValue={1} style={{width: '100%'}}>
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
        <Option value={5}>5</Option>
      </Select>
      <Button
      className='login'
      style={{width: '100%', marginTop: '20px'}}
      onClick={() => setIsModalVisible(true)}
      >
        <ShoppingCartOutlined/> Buy Now
      </Button>
      <Modal
      title='Purchase Product'
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={() => setIsModalVisible(false)}
      >
        <div style={{display: 'flex'}}>
          <img src={book.image} alt="" width="200px" />
          <div>
            <h3>{book.name}</h3>
            <h2>${book.price}</h2>
            <h4>Delivery Address</h4>
            <Input onChange={(value) => setDeliveryAddress(value)}/>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Purchase