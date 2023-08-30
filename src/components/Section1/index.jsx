import React from 'react'
import './style.scss'
import Slider from "react-slick";

function Section1() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
    <div className='container'>
        <div className='main-content'>
            <h1>OWN A <span className='clr-red'>JAVA TIMES <br />CAFFE</span> FRANCHISE</h1>
            <p>Join one of the fastest growing <br /> caffe franchise in the world</p>
            <button className='btn-getstarted'>GET STARTED</button>
        </div>
        <div className='carosal'>
            <div className='cards'>
            <img src="/images/profile-img.png" alt="profile photo" />
                <div className='card-content'>
                    <p>John Doe Invested <br /><span>in Java times caffe</span></p>
                    <div className='cards-space'>
                        <p className="price">$220 MXN</p>
                        <p className="days">2 Days ago</p>
                    </div>
                </div>
            </div>
            <div className='cards'>
                <img src="/images/profile-img.png" alt="profile photo" />
                <div className='card-content'>
                    <p>John Doe Invested <br /><span>in Java times caffe</span></p>
                    <div className='cards-space'>
                        <p className="price">$220 MXN</p>
                        <p className="days">2 Days ago</p>
                    </div>
                </div>
            </div>
            <div className='cards'>
                <img src="/images/profile-img.png" alt="profile photo" />
                <div className='card-content'>
                    <p>John Doe Invested <br /><span>in Java times caffe</span></p>
                    <div className='cards-space'>
                        <p className="price">$220 MXN</p>
                        <p className="days">2 Days ago</p>
                    </div>
                </div>
            </div>

            {/* <div>
                <h2> Responsive </h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
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
            </div> */}
        </div>
    </div>
  )
}

export default Section1