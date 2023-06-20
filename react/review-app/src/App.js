import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

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

  return (
   <div>
      <Header/>
      <div className="container">
          <FeedbackList feedback={feedback}/>
      </div>
   </div>
  )
}

export default App;
