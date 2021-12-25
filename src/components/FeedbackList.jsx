import React from 'react'
import FeedBackItem from './FeedBackItem'
function FeedbackList(props) {
   // console.log(props.feedback)
   if(!props.feedback||props.feedback.length==0)
   {
       return <p>Nothing to show</p>
   }
    return (
        <div className='feedback-list'>
           <ul>
          {props.feedback.map((comment,index)=>(
           <FeedBackItem key={comment.id} item={comment} handleDelete={props.handleDelete} />
            ))}
          </ul> 
        </div>
    )
}

export default FeedbackList
