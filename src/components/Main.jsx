import React from 'react'
import Bestselling from './Bestselling'
import Testimonial from './Testimonials'
import About from './About'
import Welcome from './Welcome'


const Main = () => {
  return (
    <div>
        <div className="main-div">
            {/* <Carousels/> */}
            <Welcome/>
            <Bestselling/>
            <Testimonial/>
            <About/>
            
            
            
        </div>
    </div>
  )
}

export default Main