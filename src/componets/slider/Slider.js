import React from 'react'
import classes from './slider.module.css';
import Carousel from 'react-bootstrap/Carousel';
import artem from '../images/pexels-artem-beliaikin-994523.jpg';
import dom from '../images/pexels-dom-j-45982.jpg';
import tembela from '../images/pexels-tembela-bohle-1884581.jpg';
import ylanite from '../images/pexels-ylanite-koppens-934063.jpg';
function Slider() {
    return (
        <div className={classes.slider}>
            <Carousel fade controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={artem}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={dom}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={tembela}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ylanite}
                        alt="Third slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Slider