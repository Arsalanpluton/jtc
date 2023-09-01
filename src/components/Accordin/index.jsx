import React,{useState} from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import './accordin.scss'

function Accordin({title, para}) {
    
    const [clicked, setClicked] = useState(false)
  return (
    <div className="sec10-container">
        <div className="sec10-list">
            <div className={clicked?"sec10-title sec10-title-b" : "sec10-title"} >
                <h3>{title}</h3>
                {clicked ? 
                <FaMinus onClick={()=>setClicked(!clicked)} className='sec10-icon'/>
                :<FaPlus onClick={()=>setClicked(!clicked)} className='sec10-icon'/>}
            </div>
            {clicked ?
                    <div className="sec10-para">
                    <p>{para}</p>
                </div>  : ''
            }
            
        </div>
    </div>
  )
}

export default Accordin