import React, { useState } from "react";

const BuggyCounterFuntion=()=> {
    const [count, setCount] = useState(0);
const handleIncrement = () => {
    console.log("123");
      throw new Error('I crashed!');
    //setCount(count => count + 1);
    
  };
  
  return (
    
    <div>
        <h1 onClick={handleIncrement}>Count:{count}</h1>
    </div>
  );
}

export default BuggyCounterFuntion;
