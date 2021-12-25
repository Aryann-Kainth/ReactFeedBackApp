import React from 'react'

function FeedBackStats({feedback}) {
    let avg=0;
    for(let item of feedback)
    {
        avg+=item.rating;
    }
    if(feedback.length!=0)
    {
    avg/=feedback.length;
    }
    return (
        <div className='feedBack-stats'>
            <h4>{feedback.length} Reviews</h4>   
            <h4>Average Rating :{avg}</h4>   
        </div>
    )
}

export default FeedBackStats
