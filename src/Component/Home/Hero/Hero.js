import React from 'react'
import styled from "styled-components"
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


function Hero() {
  return (
    <Container>
      <>
        <Carousel fade prevLabel="" nextLabel="">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/slide1.jpg"
              alt="First slide"


              style={{
                height: "400px",
                objectFit: "cover"
              }}

            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/slider2.jpg"
              alt="Second slide"

              style={{
                height: "400px",
                objectFit: "cover"
              }}

            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/slider3.jpg"
              alt="Third slide"

              style={{
                height: "400px",
                objectFit: "cover"
              }}

            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    </Container>
  )
}

export default Hero

const Container = styled.div`

height: 400px;
background-color: #212531;
justify-content: center;
align-items: center;
color: white;
width: 100%;
align-items: center;
display: flex;
margin-top: 60px;
z-index: 800;



@media screen and (max-width:320px){
width: 320px;
}





`

