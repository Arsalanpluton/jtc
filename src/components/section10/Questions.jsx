import React,{useState} from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

function Questions() {
    
    const [clicked, setClicked] = useState(false)
  return (
    <div className="sec10-container">
        <div className="sec10-list">
            <div className={clicked?"sec10-title sec10-title-b" : "sec10-title"} >
                <h3>What is Java Times Caffé?</h3>
                {clicked ? 
                <FaMinus onClick={()=>setClicked(!clicked)} className='sec10-icon'/>
                :<FaPlus onClick={()=>setClicked(!clicked)} className='sec10-icon'/>}
            </div>
            {clicked ?
                    <div className="sec10-para">
                    <p>We have Build our business from ground up using Blockchain technology has the potential to be used in a variety of ways in the coffee shop industry, and there are a few specific ways in which it could be used to create a successful coffee shop solution.</p>
                </div>  : ''
            }
            
        </div>
    </div>
  )
}

export default Questions