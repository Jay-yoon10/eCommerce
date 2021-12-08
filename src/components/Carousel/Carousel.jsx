import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

const CarouselHome = ({ products }) => {
    return (
        <Carousel>
            {products.map((item, i) => {
                let url = item.image;
                let title = item.title;
                let info = item.description;
                return (
                    <Carousel.Item>
                        <img src={url} />
                        <Carousel.Caption>
                            <h3>{title}</h3>
                            <p>{info}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://codingapple1.github.io/shop/shoes1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://codingapple1.github.io/shop/shoes1.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://codingapple1.github.io/shop/shoes1.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    );
};

export default CarouselHome;
