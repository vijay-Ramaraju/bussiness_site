import React from 'react';
import DryFruit from '../Images/Dry_fruit.jpg';
import './index.css';

function Home() {
  return (
    <div className="container ">
      <h1 className="my-4 header-main-heading">Welcome to Putharakulu</h1>
      <div className="cards_desription">
        <div className="each-card-container col-md-4 fade-in-up">
          {/* <img className="image" src={DryFruit} /> */}
          <div className='text-container'>
            <h3>Dry Fruit Putharekulu</h3>
            <p>Made with ghee and a mix of premium dry fruits, this variety is rich in flavor and nutrients.</p>
            <p>Health Benefits: Packed with vitamins and minerals, dry fruits boost immunity and provide a healthy energy source.</p>
          </div>
        </div>
        <div className="each-card-container col-md-4 fade-in-up delay-1s">

        <div className='text-container'>
          <h3>Jaggery Putharekulu</h3>
          <p>A traditional delicacy made with pure jaggery and ghee, offering a sweet and wholesome taste.</p>
          <p>Health Benefits: Jaggery is known for its ability to cleanse the body, aid digestion, and provide iron.</p>
        </div>
        </div>
        <div className="each-card-container col-md-4 fade-in-up delay-1s">
        <div className='text-container'>
          <h3>Plain Putharekulu</h3>
          <p>Simple yet delicious, plain putharekulu are made with minimal ingredients, focusing on the purity of taste.</p>
          <p>Health Benefits: A light and healthy snack that can be enjoyed by all age groups, promoting overall well-being.</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
