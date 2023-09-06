import React, { useState, useRef, useEffect } from 'react';
import './section3.scss'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Section3() {

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Function to toggle video playback
  const togglePlay = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Add a listener for the video's "ended" event to reset the button text
  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])

  return (
    <div className='section3'>
        <div className='row'>
            <div className='sec3-left'>
                <h2 data-aos="fade-down" data-aos-once='true'>What our <span>Franchise</span><br /> Owner Say</h2>
                <p data-aos="fade-down" data-aos-once='true'>Help build a healthier community while <br /> building yourself a healthier bank <br />account!</p>
                <button>Contact us</button>
            </div>
            <div className='sec3-right' data-aos="fade-down" data-aos-once='true'>
            <video
              ref={videoRef}
              src="/videos/testimonialvideo1.mp4"
              loop
              onEnded={handleVideoEnded}
              onClick={togglePlay}
            ></video>
            </div>
        </div>
        
    </div>
  )
}

export default Section3