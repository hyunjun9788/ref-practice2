import logo from './logo.svg';
import './App.css';
import {useState, useRef} from "react";

function App() {
  const [count, setCount] = useState(0)
    const countRef=useRef(0)

    console.log(countRef)
  const increaseCountState = () => {
    setCount(count+1)
  }
    const increaseCountRef=()=>{
      countRef.current = countRef.current+1
    }


  return (
   <div>
     <p>State:{count}</p>
       <p>Ref: {countRef.current} </p>
     <button onClick={increaseCountState}>State 올려</button>
       <button onClick={increaseCountRef}>Ref 올려</button>
   </div>
  );
}

export default App;
