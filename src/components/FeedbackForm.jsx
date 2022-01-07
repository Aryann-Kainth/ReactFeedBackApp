import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useState } from 'react'
function FeedbackForm() {
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
    return (
        <Card>
            <form >
                <h2>Rate your Experience</h2>
                <RatingSelect selected={(rating)=>setRating(rating)}/>
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
