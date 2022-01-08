import React from 'react'
import FeedBackItem from './FeedBackItem'
import {motion,AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackList({handleDelete}) {
   // console.log(props.feedback)
   const {feedback}=useContext(FeedbackContext)
   if(!feedback||feedback.length==0)
   {
       return <p>Nothing to show</p>
   }
    return (
        <div className='feedback-list'>
            <AnimatePresence>
            <ul>
          {feedback.map((comment,index)=>(
              <motion.div key={comment.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>

             
           <FeedBackItem key={comment.id} item={comment} handleDelete={handleDelete} />
           </motion.div>
            ))}
          </ul> 
            </AnimatePresence>
           
        </div>
    )
}

export default FeedbackList
