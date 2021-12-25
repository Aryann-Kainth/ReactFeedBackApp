import React from 'react'
import {useState} from 'react' //hook
import Card from './shared/Card'
function FeedBackItem({item}) {
    
    return (
     <Card reverse={false}>
            <div className="num-display">
                {item.rating}
           </div>
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
