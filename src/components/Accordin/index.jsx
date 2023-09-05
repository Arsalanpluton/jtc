import React,{useState} from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import './accordin.scss'

function Accordin({title, para}) {
    
    const [clicked, setClicked] = useState(false)
  return (
    <div className="accordin-container">
        <div className="accordin-list">
            <div className={clicked?"accordin-title accordin-title-b" : "accordin-title"} >
                <h3>{title}</h3>
                {clicked ? 
                <FaMinus onClick={()=>setClicked(!clicked)} className='accordin-icon'/>
                :<FaPlus onClick={()=>setClicked(!clicked)} className='accordin-icon'/>}
            </div>
            {clicked ?
                    <div className="accordin-para">
                    <p>{para}</p>
                </div>  : ''
            }
            
        </div>
    </div>
  )
}

export default Accordin