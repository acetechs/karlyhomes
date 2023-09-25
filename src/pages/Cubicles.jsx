import React from 'react'
import img1 from '../images/cub1.jpg'
import img2 from '../images/cub2.jpg'
import img3 from '../images/cub3.jpg'
import img4 from '../images/cub4.jpg'
import img5 from '../images/cub5.jpg'
import img6 from '../images/cub6.jpg'
import img7 from '../images/cub7.jpg'
import img8 from '../images/cub8.jpg'
import img9 from '../images/cub9.jpg'
import CollapsibleExample from '../components/Navbar';
import Footer from '../components/Footer';

const Cubicles = () => {
    return (
        <div>
          <CollapsibleExample/>
          <h1 className="product-head">Wash hand basin</h1>
          <div className="product-hold">
            <div className="product-view">
              <a href="/cubicles" className="text-decoration-none text-black">
                <div class="product-card">
                  <img src={img1} alt="" />
                  <div class="card-body">
                    <p class="card-text">Cubicle 1</p>
                  </div>
                  <div class="card-footer">
                    {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                  </div>
                </div>
              </a>
              <a href="/cubicles" className="text-decoration-none text-black">
                <div class="product-card">
                  <img src={img2} alt="" />
                  <div class="card-body">
                    <p class="card-text">Cubicle 2</p>
                  </div>
                  <div class="card-footer">
                    {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                  </div>
                </div>
              </a>{" "}
              <a href="/cubicles" className="text-decoration-none text-black">
                <div class="product-card">
                  <img src={img3} alt="" />
                  <div class="card-body">
                    <p class="card-text">Cubicle 3</p>
                  </div>
                  <div class="card-footer">
                    {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                  </div>
                </div>
              </a>
              <a href="/cubicles" className="text-decoration-none text-black">
                <div class="product-card">
                  <img src={img4} alt="" />
                  <div class="card-body">
                    <p class="card-text">Cubicle 4</p>
                  </div>
                  <div class="card-footer">
                    {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                  </div>
                </div>
              </a>
              <a href="/cubicles" className="text-decoration-none text-black">
                <div class="product-card">
                  <img src={img5} alt="" />
                  <div class="card-body">
                    <p class="card-text">Cubicle 5</p>
                  </div>
                  <div class="card-footer">
                    {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                  </div>
                </div>
              </a>
              <a href="/cubicles" className="text-decoration-none text-black">
                <div class="product-card">
                  <img src={img6} alt="" />
                  <div class="card-body">
                    <p class="card-text">Cubicle 6</p>
                  </div>
                  <div class="card-footer">
                    {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                  </div>
                </div>
              </a>
              <a href="/cubicles" className="text-decoration-none text-black">
                <div class="product-card">
                  <img src={img7} alt="" />
                  <div class="card-body">
                    <p class="card-text">Cubicle 7</p>
                  </div>
                  <div class="card-footer">
                    {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                  </div>
                </div>
              </a>
              <a href="/cubicles" className="text-decoration-none text-black">
                <div class="product-card">
                  <img src={img8} alt="" />
                  <div class="card-body">
                    <p class="card-text">Cubicle 8</p>
                  </div>
                  <div class="card-footer">
                    {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                  </div>
                </div>
              </a>
              <a href="/cubicles" className="text-decoration-none text-black">
                <div class="product-card">
                  <img src={img9} alt="" />
                  <div class="card-body">
                    <p class="card-text">Cubicle 9</p>
                  </div>
                  <div class="card-footer">
                    {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                  </div>
                </div>
              </a>

          
         
            </div>
          </div>
          <p className="note">
            *Note: Some new products may not be listed here, please contact us to
            get availabilty of any products of your choice even if not listed here.
          </p>
    
          <Footer/>
        </div>
      );
}

export default Cubicles