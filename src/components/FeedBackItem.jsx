import React from 'react'
import {useState} from 'react' //hook
import Card from './shared/Card'
function FeedBackItem({item}) {
    
    return (
     <Card>
            <div className="num-display">
                {item.rating}
           </div>
            <div className="text-display">
                {item.text}
            </div>

        </Card>
    )
}

export default FeedBackItem
