import React from 'react'
import logo from '../../images/Frame.png'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './section4.scss'

function Section4() {

    function valuetext(value) {
        return `${value}`;
      }
      
  return (
    <div className='section4'>
        <div className='row'>
            <div className='sec4-left'>
                <img src={logo} alt="logo jtc" />
                <h2>CALCULATE <br /> <span>YOUR COST</span></h2>
                <p>Yearly Growth</p>
                <button>contact us</button>
            </div>
            <div className='sec4-right'>
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
                            <p>No hidden charges in our service and no extra charge for our great services, Enjoy from the first day</p>
                        </div>
                    </div>
                </div>
                <div className='sec4-currency'>
                    <div className='currency-top'>
                        <h3>Currency:</h3>
                        <p>MXN</p>
                    </div>
                    <div className='currency-money'>
                        <h3>How much money:</h3>
                        <div className='progressbar'>
                        <Box sx={{ width: 300 }}>
                            <Slider
                                aria-label="Temperature"
                                defaultValue={5000}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={500}
                                max={100000}
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
                        <div className='cta'>
                            <button >Java Times Gurantee</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section4