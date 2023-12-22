import React from 'react';
import ReactDOM from 'react-dom/client';

import Nav from './components/navbar';
import Banner from './components/banner';
import Ourcart from './components/ourcart';
import Ad1 from './components/presentads';
import Location from './components/location';
import Ad2 from './components/futureadd';
import Offer from './components/offer';
import Test from './components/testimonial';
import Blog from './components/blog';
import Footer from './components/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Banner/>
    <Ourcart/>
    <Ad1/>
    <Location/>
    <Ad2/>
    <Offer/>
    <Test/>
    <Blog/>
    <Footer/>
  </React.StrictMode>
);


