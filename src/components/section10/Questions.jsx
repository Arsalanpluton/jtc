import React,{useState} from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

function Questions({title, para}) {
    
    const [clicked, setClicked] = useState(false)
  return (
    <div className="sec10-container" data-aos="fade-up" data-aos-once='true'>
        <div className="sec10-list">
            <div className={clicked?"sec10-title sec10-title-b" : "sec10-title"}  >
                <h3 >{title}</h3>
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

export default Questions