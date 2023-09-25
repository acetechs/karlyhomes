import React from 'react'
import Bestselling from './Bestselling'
import Testimonial from './Testimonials'
import Carousels from './Carousel'
import About from './About'


const Main = () => {
  return (
    <div>
        <div className="main-div">
            <Carousels/>
            <Bestselling/>
            <Testimonial/>
            <About/>
            
            
            
        </div>
    </div>
  )
}

export default Main