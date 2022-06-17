import './App.css';
import Info from "./info.js";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <Info />
      <ButtonState />
    </div>
  );
}

function ButtonState(){
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updateTitleClicked = () =>{
    setTitle("We now have a title");
  }

  const updateCounterClicked = () =>{
    setCount(count+1)
  }
  return(
    <div>
      <Data title={title} count={count} />
      <button onClick={updateTitleClicked}>update title</button>
      <button onClick={updateCounterClicked}>update counter</button>
    </div>
  )
}

function Data(props) {
  return (
    <div>
      <p>title: {props.title}</p>
      <p>count: {props.count}</p>
    </div>
  )
}
export default App;
