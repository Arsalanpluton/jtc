import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './section2.scss'

function Section2() {
  return (
    <div className='sec2-container'>
            <Row>
                <Col>
                    <h2 className='sec2-h2'>Why Open A <span>JAVA <br /> TIMES CAFFE</span> Franchise?</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='sec2-p'>We created a system that creates real value for our franchise <br /> partners and our customers.</p>
                </Col>
            </Row>
    </div>
    
  )
}

export default Section2