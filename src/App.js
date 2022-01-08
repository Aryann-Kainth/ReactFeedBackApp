/*function App() {
  const title = "No Way Home "
  const body = "Ghost of Tsushima"
  const comments=[
    {id:1,text:"This is a Comment"},
    {id:2,text:"This is a Comment"},
    {id:3,text:"This is a Comment"},
    {id:4,text:"This is a Comment"}
  ]
  return (
    <div className="container">
      <h1> Hello from here {title}</h1>
      <h2>{body}</h2>
      <p>Use div because JSX allows one parent</p>
      <h3>{Math.floor(Math.random() * 9 + 1)}</h3>
      <div className="comments">
        <h3>{comments.length}</h3>
        <ul>
          {comments.map((comment,index)=>(
            <li key={comment.id}>{comment.text}</li>))}
          </ul> 

      </div>
    </div>
  )


}*/
// above is basics of JSX 
import { useState } from "react";
import Header from "./components/Header";
import FeedBackItem from "./components/FeedBackItem";
import FeedbackData from "./data/FeedBackData";
import FeedbackList from "./components/FeedbackList";
import FeedBackStats from "./components/FeedBackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./Pages/aboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import { v4 as uuidv4 } from 'uuid'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AboutIconLink from "./components/AboutIconLink";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if (window.confirm("This will be deleted")) {
      setFeedback(feedback.filter((item) => item.id !== id))//deltes the passed id element
    }

  }
  const addFeedBack = (newFeedBack) => {
    newFeedBack.id = uuidv4()
    //console.log(newFeedBack)
    setFeedback([newFeedBack, ...feedback])
  }

  return (
    <FeedbackProvider>

 
    <Router>
      <Header />
      <div className='container'>
        <Routes>

       
        <Route exact path='/' element={
          <>
           <FeedbackForm handleAdd={addFeedBack} />
        <FeedBackStats  />
        <FeedbackList  handleDelete={deleteFeedback} />
        <AboutIconLink />
          </>
        }>
       
        </Route>
        
       
        <Route path='/about' element={<AboutPage />}/>
        </Routes>
       
      </div>

    </Router>
    </FeedbackProvider>
  )
}
export default App;