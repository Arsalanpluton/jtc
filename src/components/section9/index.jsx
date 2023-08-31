import React from 'react'
import './section9.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { BsArrowUpRight } from 'react-icons/bs'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Section9() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className='section section9'>
        <h2><span>JAVA TIMES</span> Blog</h2>
        <div className="blogs-container">
        <Slider {...settings}>
            <Card sx={{ maxWidth: 345 }} className='sec9-blog-card'>
                <CardActionArea className='sec9-card-area'>
                    <CardMedia
                    component="img"
                    height="140"
                    image="/images/main.png"
                    alt="green iguana"
                    className='sec9-blog-img'
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='sec9-h'>
                        Java Times Caffe: Una Nueva Ol....
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='sec9-p'>
                        A medida que la cultura del cafe en Mexico florece, Java Times Caffe, una cadena de cafe de origen local, esta adoptando un
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions >
                    <div className='sec9-actions'>
                        <div className='left'>
                            <img src="" alt="" />
                            <div className="sec9-auther">
                                <h4>Antonio Leite</h4>
                                <p>1 month ago</p>
                            </div>
                        </div>
                        <div className="right">
                            <BsArrowUpRight  fontWeight={700} className='sec9-right-icon'/>
                        </div>
                    </div>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345}} className='sec9-blog-card'>
                <CardActionArea className='sec9-card-area'>
                    <CardMedia
                    component="img"
                    height="140"
                    image="/images/main.png"
                    alt="green iguana"
                    className='sec9-blog-img'
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='sec9-h'>
                        Java Times Caffe: Una Nueva Ol....
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='sec9-p'>
                        A medida que la cultura del cafe en Mexico florece, Java Times Caffe, una cadena de cafe de origen local, esta adoptando un
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div className='sec9-actions'>
                        <div className='left'>
                            <img src="" alt="" />
                            <div className="sec9-auther">
                                <h4>Antonio Leite</h4>
                                <p>1 month ago</p>
                            </div>
                        </div>
                        <div className="right">
                            <BsArrowUpRight className='sec9-right-icon'/>
                        </div>
                    </div>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }} className='sec9-blog-card'>
                <CardActionArea className='sec9-card-area'>
                    <CardMedia
                    component="img"
                    height="140"
                    image="/images/main.png"
                    alt="green iguana"
                    className='sec9-blog-img'
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='sec9-h'>
                        Java Times Caffe: Una Nueva Ol....
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='sec9-p'>
                        A medida que la cultura del cafe en Mexico florece, Java Times Caffe, una cadena de cafe de origen local, esta adoptando un
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div className='sec9-actions'>
                        <div className='left'>
                            <img src="" alt="" />
                            <div className="sec9-auther">
                                <h4>Antonio Leite</h4>
                                <p>1 month ago</p>
                            </div>
                        </div>
                        <div className="right">
                            <BsArrowUpRight className='sec9-right-icon'/>
                        </div>
                    </div>
                </CardActions>
            </Card>
            
        </Slider>
        </div>

    </div>
  )
}

export default Section9