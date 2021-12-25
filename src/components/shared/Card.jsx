import React from 'react'
//children automatically displays everything put insde <Card>
function Card({children,reverse}) {
    return (
        <div className={`card ${reverse&&'reverse'}`} >
     {children}
        </div>
    )
}

export default Card
