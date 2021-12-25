import React from 'react'
import {useState} from 'react' //hook
import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'
function FeedBackItem({item,handleDelete}) {
    /*const handleClick=(id)=>{
        console.log(id)
    }*/
    return (
     <Card reverse={false}>
            <div className="num-display">
                {item.rating}
           </div>
           <button className='close' onClick={()=>handleDelete(item.id)}>
               <FaTimes color='purple'/>
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
