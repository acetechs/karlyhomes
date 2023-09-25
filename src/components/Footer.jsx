import React from "react";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-div" id="footer">
        <div className="Contact d-flex flex-column">
          <h3>Contact</h3>
          <a href="address" className="bi bi-house-door-fill">
            : Block C, Shop #4 Happy Home Mall, <br /> Odunade Market; Along
            Lagos - Badagry Express Way, <br />
             Lagos State
          </a>
          <br />
          <a href="email" className="bi bi-envelope-at-fill">
            : karlyhomesltd@gmail.com
          </a>
          
          <br />
          <a href="number" className="bi bi-telephone-fill">
            : +2348065023664
          </a>
        </div>

        <div className="products d-flex flex-column gap-2">
          <h3>Products</h3>
          <a href="Jacuzzi">Jacuzzi</a>
          <a href="Taps">Taps</a>
          <a href="Doors">Doors</a>
          <a href="Cabinets">Cabinets</a>
        </div>
        <div className="social d-flex flex-column gap-2">
          <h3>Follow us</h3>
          <a href="https://www.instagram.com/karlyhomesltd/" className="bi bi-instagram" target="_blank"></a>
          <a href="https://www.facebook.com/profile.php?id=100075508314893&mibextid=ZbWKwL" target="_blank" className="bi bi-facebook"></a>
          <a href="https://www.tiktok.com/@karlyhomes?_t=8eUjf0Y3l6D&_r=1" className="bi bi-tiktok" target="_blank"></a>
        </div>
        <div className="hours d-flex flex-column ">
          <h3>Opening Hours</h3>
          <p> Monday to Saturday: 9am – 7pm <span className=""></span></p>
          <br /> 
          <p>Sunday: Closed.</p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Footer;
