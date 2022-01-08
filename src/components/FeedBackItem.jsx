import React from 'react'
import {useState} from 'react' //hook
import Card from './shared/Card'
import {FaTimes,FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedBackItem({item}) {
    /*const handleClick=(id)=>{
        console.log(id)
    }*/
    const {deleteFeedback}=useContext(FeedbackContext)
    return (
     <Card reverse={false}>
            <div className="num-display">
                {item.rating}
           </div>
           <button className='close' onClick={()=>deleteFeedback(item.id)}>
               <FaTimes color='purple'/>
           </button>
           <button className='edit' onClick={()=>deleteFeedback(item.id)}>
               <FaEdit color='purple'/>
           </button>
            <div className="text-display">
                {item.text}
            </div>

        </Card>
    )
}
Card.defaultProps={
    reverse:false
}
export default FeedBackItem
