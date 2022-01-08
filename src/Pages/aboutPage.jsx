import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'
function aboutPage() {
    return (
        <Card>
           <div className="about">
               <h1>About This Project</h1>
               <p>This is a React App to Leave feedback for product/service/movie This is Just a Front End Page </p>
               <Link to='/' >Back To Home Page</Link>
           </div>
        </Card>
    )
}

export default aboutPage
