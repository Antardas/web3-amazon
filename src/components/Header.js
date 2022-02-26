import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Button, Input, PageHeader, Space } from 'antd';
import { useMoralis } from "react-moralis";
import { Link } from 'react-router-dom';
import bookStore from '../images/bookstore.png';
import amazonLogo from '../images/logo.png';
import USA from '../images/usa.png';
import './Header.css';

const {Search} = Input;
const categories = ["Comics", "Dictionaries", "Novels", "Fantasy", "Horror", "Adventure"];

const Header = () => {
  const { authenticate } = useMoralis();
  return(
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="Amazon"
        extra={[
         <>
          <img src={amazonLogo} key='2' alt="logo" className='logo'></img>
          <img src={bookStore} key='3' alt="Book logo" className='logo'></img>

          <Search
            placeholder='Find a Product'
            enterButton
            className='searchBar'
          />
          
            <Button key="1"
             type="primary"
             className='login'
             onClick={() => authenticate()}>
            Login with Metamask
            </Button>
          <Space size={'large'}>
            <Badge count={0} showZero >
              <span className="header-buttons">
                <ShoppingCartOutlined className='header-icon'></ShoppingCartOutlined>
                cart
              </span>
              <Space className='header-buttons' size={'small'}>
                <img src={USA} alt='region' className='flag'></img>▼
              </Space>
            </Badge>
          </Space>
         </>
        ]}>
      </PageHeader>

      <div className='site-page-subheader-ghost-wrapper'>
        <Space size={'middle'}>
          <Space size={'small'} style={{fontWeight: 'bold'}}>
            <MenuOutlined/>
            Categories
          </Space>
          {
            categories.map((category, index) => {
              return (
                <Link to="/categories" state={category} key={index} className='categories'>
                {category}
                </Link>
              )
            })
          }
        </Space>
      </div>
    </div>
  )
}

export default Header;