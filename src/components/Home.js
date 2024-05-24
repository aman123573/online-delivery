import React from 'react';
import '../styles/Home.css'
import pizzaboy from '../images/pizza-delivery.png';
import ItemsSection from './ItemsSection';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <div className='home-page'>
        <div className="introduction">
          <h1>Fresh Pizza</h1>
          <p className='first-line'>Fresh Pizza at your doorstep</p>
          <p className='second-line'>in just <span>30mins</span></p>
          <Link to="/items"><button>Order Now</button></Link>
        </div>
        <div className="delivery-boy">
          <img src={pizzaboy} alt="" />
        </div>

      </div>
      <ItemsSection />
    </>
  )
}

export default Home
