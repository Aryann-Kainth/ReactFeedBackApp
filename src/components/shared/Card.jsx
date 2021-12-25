import React from 'react'
//children automatically displays everything put insde <Card>
function Card({children}) {
    return (
        <div className='card' >
     {children}
        </div>
    )
}

export default Card
