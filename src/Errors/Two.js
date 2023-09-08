// const Two = () => {
//     throw new Error("error!!")
//     return <p>Two</p>;
// };

// export default Two;


import React, { useState } from "react";

const Two=()=> {
    const [count, setCount] = useState(0);
const handleIncrement = () => {
    console.log("123");
      throw new Error('I crashed!');
    //setCount(count => count + 1);
    
  };
  throw new Error('I crashed!');
  return (
    
    <div>
        <h1 onClick={handleIncrement}>Count:{count}</h1>
    </div>
  );
}

export default Two;
