import Carousel from "react-bootstrap/Carousel";


function Carousels() {
  return (
    <Carousel className="carousel carousel-control-prev-icon-none">
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 car-img"
          src={require("../images/car-img1.png")}
          alt="First slide"
        />

        <Carousel.Caption className="car-cap">
          <h3 className="carousel-h3">
            Welcome to KarlyHomesLtd. Discover Exquisite Sanitary Wares to
            Elevate Your Home with Unparalleled Craftsmanship and
            Timeless Elegance.
          </h3>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 car-img"
          src={require("../images/car-img2.png")}
          alt="First slide"
          
        />
          <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

        <Carousel.Caption className="car-cap">
          <h3 className="carousel-h3">
            Welcome to KarlyHomesLtd. Discover Exquisite Sanitary Wares to
            Elevate Your Home with Unparalleled Craftsmanship and
            Timeless Elegance.
          </h3>
      
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 car-img"
          src={require("../images/car-img3.png")}
          alt="First slide"
        />

        <Carousel.Caption className="car-cap">
          <h3 className="carousel-h3">
            Welcome to KarlyHomesLtd. Discover Exquisite Sanitary Wares to
            Elevate Your Home with Unparalleled Craftsmanship and
            Timeless Elegance.
          </h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          {/* <div className="car-btn-flex ">
            <Button variant="dark">
              <a href="/product" className=" car-btn">
                Go to store
              </a>
            </Button>{" "}
            <Button variant="dark">
              {" "}
              <a href="#footer" className="car-btn">
                Contact us
              </a>
            </Button>{" "}
          </div> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
