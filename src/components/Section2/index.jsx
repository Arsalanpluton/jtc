import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './section2.scss'
import StatBox from '../StatBox';

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
          <Row>
              <Col>
              <div className="lp-phone-img-wrapper">
                      <img
                        src='/images/main.png'
                        alt=""
                        // onError={(e) =>
                        //   (e.currentTarget.src = imageUrl("landing-phone.png"))
                        // }
                        className="lp-shop-crop"
                        width={"100%"}
                      />
                      <StatBox
                        order={2}
                        label="Total Stores Funded"
                        number={20000}
                        icon="stores-funded-icon.png"
                      />
                      <StatBox
                        order={3}
                        label="Total Shares"
                        number={120000000}
                        icon="total-shares-icon.png"
                      />
                      <StatBox
                        order={5}
                        label="Stores Price"
                        number={20}
                        icon="stores-price-icon.png"
                      />
                    </div>
              </Col>
          </Row>
    </div>
    
  )
}

export default Section2