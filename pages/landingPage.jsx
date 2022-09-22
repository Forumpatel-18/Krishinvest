import React from 'react';
import Hero1 from '../components/hero1'
import Hero2 from '../components/hero2'
import Hero3 from '../components/hero3'
import Card from '../components/card'
import Carousel from '../components/Carousel'
import Footer from '../components/footer'


const landingPage = () => {
  return <>
    
    <Hero1 />
    <Hero2 />
    <Card />
    <Carousel />
    <Hero3 />
    <Footer />

  </>;
};

export default landingPage;
