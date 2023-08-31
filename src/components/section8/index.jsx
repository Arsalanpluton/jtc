import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './section8.scss'

function Section8() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div className='section section8'>
        <h2>Our  <span>INVESTORS</span></h2>
        <p>
            Willing to take risks to win with us!
        </p>

        <div className='slider'>
            <Slider {...settings}>
                <div className='slider-container'>
                    <div className="slider-image">
                        <img src="/images/Rectangle 215.png " alt="slider image" />
                    </div>
                    <div className="slider-content">
                        <div className="icon"></div>
                        <h3>LAURA MONSERRAT FAVELA CONTRERAS</h3>
                        <p>Being able to trust a project, its people and its ideal is incredible to find, the innovation that supports Java is the definitive decision maker that prompted me to believe in a change in business and how this positively impacts people, super happy with contributing a grain of coffee to this growth.</p>
                    </div>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Section8