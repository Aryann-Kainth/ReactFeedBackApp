import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useState } from 'react'
function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating, setRating] = useState(10)
    const [message, setMessage] = useState('')
    const handleTextChange = (e) => {
        // console.log(e.target.value);
        if (text == '') {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if (text !== '' && text.trim().length < 10) {

            setBtnDisabled(true)
            setMessage("Text must have atleast 10 characters")
        }
        else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value);
    }
    const handleSubmit= (e) =>{
        e.preventDefault()
        if(text.trim().length>10)
        {
            const newFeedBack={
                text,
                rating
            }
            //console.log(newFeedBack)
            handleAdd(newFeedBack)
            setText("")
        }
    }
    return (
        <Card>
            <form  onSubmit={handleSubmit}>
                <h2>Rate your Experience</h2>
                <RatingSelect select={(rating)=>setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='write a review' value={text} />
                    <Button type='submit' isDisabled={btnDisabled} >Add a Review</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
