import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import logo from '../../images/Frame.png'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './section4.scss'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { AiOutlineClose } from 'react-icons/ai'

const marks = [
    {
      value: 1000,
      label: '1000',
    },
    {
      value: 2000,
      label: '20000',
    },
    {
      value: 3000,
      label: '3000',
    },
    {
      value: 5000,
      label: '5000',
    },
  ];


function Section4() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function valuetext(value) {
        return `${value}`;
      }

    useEffect(()=>{
        Aos.init({duration: 1000})
    },[]) 
      
  return (
    <div className='section4'>
        <div className='row'>
            <div className='sec4-left' data-aos="fade-down" data-aos-once='true'>
                <img src={logo} alt="logo jtc" />
                <h2>CALCULATE <br /> <span>YOUR COST</span></h2>
                <p>Yearly Growth</p>
                <button>Contact us</button>
            </div>
            <div className='sec4-right' data-aos="fade-up" data-aos-once='true'>
                <div className='sec4-results'>
                    <h3>Results</h3>
                    <div className="results">
                        <div>
                            <p>Year Of Investment</p>
                            <p className='count'>Year 01</p>
                        </div>
                        <div>
                            <p>Investment:</p>
                            <p className='count'>$5000</p>
                        </div>
                        <div>
                            <p>Share Price:</p>
                            <p className='count'>$20</p>
                        </div>
                        <div>
                            <p>Investor Shares:</p>
                            <p className='count'>175</p>
                        </div>
                        <div>
                            <p>Profit:</p>
                            <p className='count'>$600</p>
                        </div>
                        <div>
                            <p>Participant:</p>
                            <p className='count'>$3500</p>
                        </div>
                        <div>
                            <p>Exit:</p>
                            <p className='count'>$4100</p>
                        </div>
                        <div className='para'>
                            <p>No hidden charges in our service and no extra charge for our great services</p>
                        </div>
                    </div>
                </div>
                <div className='sec4-currency'>
                    <div className='currency-top'>
                        <h3>Currency:</h3>
                        <div className='mxn'>
                            <p>MXN</p>
                        </div>
                    </div>
                    <div className='currency-money'>
                        <h3>How much money:</h3>
                        <div className='progressbar'>
                        <Box sx={{ width: 300 }}>

                            <Slider
                                aria-label="Always visible"
                                defaultValue={3000}
                                getAriaValueText={valuetext}
                                step={10}
                                marks={marks}
                                valueLabelDisplay="on"
                                className='slider'
                            />
                            {/* <Slider defaultValue={30} step={10} marks min={10} max={110} disabled /> */}
                        </Box>
                        </div>
                        <div className='currency-min-max'>
                            <h3>$5000</h3>
                            <h3>$100000</h3>
                        </div>
                        <div className='currency-year'>
                            <div>
                                <h3>$1000</h3>
                            </div>
                        </div>
                            
                        <div className='currency-total'>
                            <p>Year:</p>
                            <p>1 Year</p>
                        </div>
                        <div className='calculate'>
                            <button className=''>Calculate</button>
                        </div>
                        <div className="cta">
                            <Button variant="primary" className="cta" onClick={handleShow}>
                                Java Times Gurantee
                            </Button>
                        </div>
                        <Modal show={show} onHide={handleClose} animation={false}>
                            <Modal.Header>
                            <Modal.Title>Java Times Caffe Guarantee</Modal.Title>
                            <button type="button" class="btn-close" aria-label="Close" onClick={()=> setShow(!show)}>
                                <AiOutlineClose />
                            </button>
                            </Modal.Header>
                            <Modal.Body>
                            <Container>
                                <Row className='para-row'>
                                    <Col>
                                        Dear Invester
                                    </Col>
                                </Row>
                                <Row className='para-row'>
                                    <Col>
                                    We are thrilled to have you as an investor in our project at Java Times Caffe. As a gesture of our commitment to your investment, we are pleased to provide you with the following guarantee:
                                    </Col>
                                </Row>
                                <Row className='para-row'>
                                    <Col>
                                    Guaranteed Annual Returns: We guarantee that you will receive a minimum annual return of 10% or more on your investment in Java Times Caffe. This guarantee is based on our projections and historical performance, and we are confident in our ability to achieve this level of returns.
                                    </Col>
                                </Row>
                                <Row className='para-row'>
                                    <Col>
                                    Money-Back Guarantee: If, for any reason, we fail to meet the guaranteed annual return of 10% or more, we will repurchase back all the shares amount you may have at the time. We understand the importance of your investment and want to ensure that you have peace of mind.
                                    </Col>
                                </Row>
                                <Row className='para-row'>
                                    <Col>
                                    Please note that this guarantee is subject to the terms and conditions outlined in our investment agreement, and certain limitations may apply. We encourage you to carefully review the investment agreement and consult with your financial advisor before making any investment decisions.
                                    </Col>
                                </Row>
                                <Row className='para-row'>
                                    <Col>
                                    Please note that this guarantee is subject to the terms and conditions outlined in our investment agreement, and certain limitations may apply. We encourage you to carefully review the investment agreement and consult with your financial advisor before making any investment decisions.
                                    </Col>
                                </Row>
                                <Row className='para-row'>
                                    <Col>
                                    At Java Times Caffe, we are committed to delivering value to our investors and creating a successful venture. We have a proven track record of performance and strive to exceed your expectations. We look forward to a mutually beneficial relationship and appreciate your trust in us.
                                    </Col>
                                </Row>
                                <Row className='para-row'>
                                    <Col>
                                    Thank you for choosing to invest in Java Times Caffe. If you have any questions or require further information, please do not hesitate to contact us.
                                    </Col>
                                </Row>
                                <Row className='para-last'>
                                    <Col>
                                    Sincerely,
                                    </Col>
                                </Row>
                                <Row className='para-last'>
                                    <Col>
                                    Antonio Leite
                                    </Col>
                                </Row>
                                <Row className='para-last'>
                                    <Col>
                                    Founder
                                    </Col>
                                </Row>
                                <Row className='para-last'>
                                    <Col>
                                    Java Times Caffe
                                    </Col>
                                </Row>

                            </Container>
                            </Modal.Body>
                            <Modal.Footer>
                            {/* <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button> */}
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section4