import React from 'react'
import FeedBackItem from './FeedBackItem'
import {motion,AnimatePresence} from 'framer-motion'
function FeedbackList(props) {
   // console.log(props.feedback)
   if(!props.feedback||props.feedback.length==0)
   {
       return <p>Nothing to show</p>
   }
    return (
        <div className='feedback-list'>
            <AnimatePresence>
            <ul>
          {props.feedback.map((comment,index)=>(
              <motion.div key={comment.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>

             
           <FeedBackItem key={comment.id} item={comment} handleDelete={props.handleDelete} />
           </motion.div>
            ))}
          </ul> 
            </AnimatePresence>
           
        </div>
    )
}

export default FeedbackList
