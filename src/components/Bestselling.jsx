import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

export default function Bestselling() {
  return (
    <div className="pb-5">
      <h3 className="mt-5 pt-5 text-capitalize fs-2 fw-bold fst-italic">
        Best Selling products of all time
      </h3>
      <hr />
      <div className="products d-flex gap-5 justify-content-around flex-wrap">
        <MDBCard className="card-display">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src={require("../images/jacuzzi.jpg")}
              fluid
              alt="..."
              className="card-img"
            />
            
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Jacuzzi</MDBCardTitle>
            <MDBCardText>
              Talk about some relaxation while washing up after a long day,
              different models of jacuzzi available for purchase contact us
              right away.
            </MDBCardText>
            <MDBBtn href="jacuzzi" className="bg-black">
              <a href="/jacuzzi" className="text-decoration-none text-white">
                {" "}
                View More Like This
              </a>
              <a
                href="/jacuzzi"
                className="text-decoration-none text-white"
              ></a>
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="card-display">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src={require("../images/sinks.jpg")}
              fluid
              alt="..."
            />
            
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>

          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Sinks</MDBCardTitle>
            <MDBCardText>
              Get any kind of sink at our store, be rest assured to get an
              authentic sink for that kitchen with us today.
            </MDBCardText>
            <MDBBtn href="/sinks" className="bg-black">
              <a href="/sinks" className="text-decoration-none text-white">
                {" "}
                View More Like This
              </a>
              <a
                href="/sinks"
                className="text-decoration-none text-white"
              ></a>
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="card-display">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage src={require("../images/tap.jpg")} fluid alt="..." />
            
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Tap</MDBCardTitle>
            <MDBCardText>
              Unlock the Flow, Discover the Perfect Harmony of Taps and Style
            </MDBCardText>
            <MDBBtn href="/taps" className="bg-black">
              <a href="/taps" className="text-decoration-none text-white">
                {" "}
                View More Like This
              </a>
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="card-display">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage src={require("../images/wc.jpg")} fluid alt="..." />
            
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>WC</MDBCardTitle>
            <MDBCardText>
              Dive into Pure Comfort with Our different brands of Luxurious
              Water Closets
            </MDBCardText>
            <MDBBtn href="/wc" className="bg-black">
              <a href="/wc" className="text-decoration-none text-white">
                {" "}
                View More Like This
              </a>
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="card-display">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage src={require("../images/gas.jpg")} fluid alt="..." />
            
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Gas Cooker</MDBCardTitle>
            <MDBCardText>
              Ignite Flavorful Delights with Our Premier Gas Cookers
              available for purchase
            </MDBCardText>
            <MDBBtn href="oven" className="bg-black">
              <a href="/oven" className="text-decoration-none text-white">
                {" "}
                View More Like This
              </a>
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}
