import { useState } from 'react'
import './section11.scss'

function Section11() {
    const [tab, setTab] = useState(0)
    return (
        <div className='section section11'>
            <div className="sec11-left">
                <h2><span>Contact</span> Us!</h2>
                <p>Submit The Form Below To Get Started:</p>
            </div>
            <div className="sec11-right">
                <form className='sec11-form'>
                    <div className='sec11-form-align'>
                        <div className='input'>
                            <label htmlFor="name">Name</label><br />
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className='input'>
                            <label htmlFor="email">Email</label><br />
                            <input type="email" placeholder='Email' />
                        </div>
                    </div>
                    <div className='sec11-form-align'>
                        <div className='input'>
                            <label htmlFor="phone">Phone</label><br />
                            <input type="Number" placeholder='+92' />
                        </div>
                        <div className='input'>
                            <label htmlFor="type">Type</label><br />
                            <div className="input-flex">
                                <div
                                    onClick={() => setTab(0)}
                                    className={`tab-class ${tab === 0 ? 'active-tab' : ""}`}>
                                    Own Franchise
                                </div>

                                <div
                                    className={`tab-class ${tab === 1 ? 'active-tab' : ""}`}

                                    onClick={() => setTab(1)}>
                                    Share Franchise
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sec11-form-align'>
                        <div className='input'>
                            <label htmlFor="message">Message</label><br />
                            <textarea type="text" placeholder='Message' />
                        </div>
                    </div>
                    <button type='submit'>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Section11