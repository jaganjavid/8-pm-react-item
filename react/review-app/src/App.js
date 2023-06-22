import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/shared/Card";

function App() {

  const [feedback, setFeedback] = useState([
    {
      id:1,
      rating:1,
      text:"This is smaple text 1"
    },
    {
      id:2,
      rating:5,
      text:"This is smaple text 2"
    },
    {
      id:3,
      rating:8,
      text:"This is smaple text 3"
    },
  ]);


  const deleteFeedback = (id) =>{
    if(window.confirm("Are you sure you want to delete")){
       setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  return (
   <div>
      <Header/>
      <div className="container">
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
   </div>
  )
}

export default App;
