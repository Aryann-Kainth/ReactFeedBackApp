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
import Header from "./components/Header";
function App(){
return (
  <>
  <Header /> 
  <div className='container'>
<h1>My App</h1>

  </div>
  </>
)  
}
export default App;