import React from 'react'
import './section7.scss'
import Accodin from '../Accordin/index'

function Section7() {

  return (
    <div className='section section7'>
      <div className='row'>
        <div className="sec7-left col-lg-3 col-sm-12">
          <ul class="sec7-left-ul">
            <li class="active">Pitch+</li>
            <ul class="open-header-sub-menu">
              <li class="active">PROBLEM</li>
              <li>SOLUTION</li>
              <li>CUSTOMERS</li>
              <li>BUSINESS MODEL</li>
              <li>PROTOTYPE STORE</li>
              <li>MARKET</li>
              <li>COMPETITION</li>
            </ul>
            <li class="">CompetitionDiscussion</li>
            <li class="">Updates</li>
            <li class="">Reviews</li>
            <li class="">JTC Bonus</li>
            <li class="">Terms and Condition for JTC Tokens</li>
          </ul>
        </div>
        <div className="sec7-right col-lg-9 col-sm-12">
          <div className="sec7-right-top">
            <div className="sec7-right-img">
              <img src="/images/1677751495.1677653650 1.png" alt="stats" />
            </div>
            <div className="sec7-right-content">
              <p>Minimum investment amount:The smallest amount of money that an investor can put into the business is 5000 Mexican PesosThe expected return on investment (ROI) for this business ranges from 10% to 38% per year or more. It's important to note that the actual ROI may be different than the expected ROI and can be affected by various factors.</p>
            </div>
          </div>
          <div className="accordin">
            <Accodin title="hello world" para="new para graph"/>
            <Accodin title="hello world" para="new para graph"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7