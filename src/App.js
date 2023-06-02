

import './App.css';
import Clickcomponent from './Components/Clickcomponent';
import Hovercomp from './Components/Hovercomp';
import MyPureComponent from './Components/MyPureComponent';
import { useState } from 'react';


function App() {
  const [count,setCount]=useState(0);
  const increment = () =>{
    setCount(count+1);
  };
  return (

    <div>
     <Clickcomponent/>
      <Hovercomp/>
      <br></br>
      <br></br>
     <p> Hello Iam Pure Component passed as Prop From Parent to Child Component😊</p>
      
     <MyPureComponent count ={count}/>
      <button onClick={()=>{increment();}}> pure click</button>
    </div>
  );
}

export default App;
