import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import {useState} from 'react'
function FeedbackForm() {
    const [text,setText]=useState('')
    const  handleTextChange=(e)=>{
       // console.log(e.target.value);
       setText(e.target.value);
    }
    return (
        <Card>
            <form >
                <h2>Rate your Experience</h2>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='write a review' value={text} / >
                       <Button type='submit'  >Add a Review</Button> 
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
