import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './cardSlider.scss';

const CardSlider = () => {

    const PrevArrow = ({ onClick }) => (
        <button className="arrow prev" onClick={onClick}>
          &lt;
        </button>
      );
    
      const NextArrow = ({ onClick }) => (
        <button className="arrow next" onClick={onClick}>
          &gt;
        </button>
      );

      const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Number of cards to show initially (adjust as needed)
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    const responsiveSettings = [
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 991, 
            settings: {
                slidesToShow: 2, 
                slidesToScroll: 1,
            },
        },
    ];
  

  return (
    <div className="sec1-slider-container">
      <Slider {...sliderSettings} responsive={responsiveSettings}>
      <div className='sec1-card'>
            <div className='sec1-card-img'>
                <img src="/images/profile-img.png" alt="profile photo" />
            </div>
            <div className='sec1-card-content'>
                <p>John Doe Invested <br />in<span> Java times caffe</span></p>
                <div className='cards-space'>
                    <p className="price">$220 MXN</p>
                    <p className="days">2 Days ago</p>
                </div>
            </div>
        </div>
        <div className='sec1-card'>
            <div>
                <img src="/images/profile-img.png" alt="profile photo" />
            </div>
            <div className='sec1-card-content'>
                <p>John Doe Invested <br />in<span> Java times caffe</span></p>
                <div className='cards-space'>
                    <p className="price">$220 MXN</p>
                    <p className="days">2 Days ago</p>
                </div>
            </div>
        </div>
        <div className='sec1-card'>
            <div>
                <img src="/images/profile-img.png" alt="profile photo" />
            </div>
            <div className='sec1-card-content'>
                <p>John Doe Invested <br />in<span> Java times caffe</span></p>
                <div className='cards-space'>
                    <p className="price">$220 MXN</p>
                    <p className="days">2 Days ago</p>
                </div>
            </div>
        </div>
        <div className='sec1-card'>
            <div>
                <img src="/images/profile-img.png" alt="profile photo" />
            </div>
            <div className='sec1-card-content'>
                <p>John Doe Invested <br />in<span> Java times caffe</span></p>
                <div className='cards-space'>
                    <p className="price">$220 MXN</p>
                    <p className="days">2 Days ago</p>
                </div>
            </div>
        </div>
        <div className='sec1-card'>
            <div>
                <img src="/images/profile-img.png" alt="profile photo" />
            </div>
            <div className='sec1-card-content'>
                <p>John Doe Invested <br />in<span> Java times caffe</span></p>
                <div className='cards-space'>
                    <p className="price">$220 MXN</p>
                    <p className="days">2 Days ago</p>
                </div>
            </div>
        </div>
        <div className='sec1-card'>
            <div>
                <img src="/images/profile-img.png" alt="profile photo" />
            </div>
            <div className='sec1-card-content'>
                <p>John Doe Invested <br />in<span> Java times caffe</span></p>
                <div className='cards-space'>
                    <p className="price">$220 MXN</p>
                    <p className="days">2 Days ago</p>
                </div>
            </div>
        </div>
        <div className='sec1-card'>
            <div>
                <img src="/images/profile-img.png" alt="profile photo" />
            </div>
            <div className='sec1-card-content'>
                <p>John Doe Invested <br />in<span> Java times caffe</span></p>
                <div className='cards-space'>
                    <p className="price">$220 MXN</p>
                    <p className="days">2 Days ago</p>
                </div>
            </div>
        </div>
        
        {/* Add more cards as needed */}
      </Slider>
    </div>
  );
};

export default CardSlider;