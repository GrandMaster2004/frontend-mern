import React from 'react'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopSellingBook from './components/TopSellingBook';
// register Swiper custom elements
register();

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <TopSellingBook/>
    </>
  )
}

export default App
