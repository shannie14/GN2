//import the useState Hook. It lets us keep local state in a function component.
import React, { useState } from 'react';

//Inside the Example component, we declare a new state variable by calling the useState Hook
function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count} views</p>
 
    </div>
  );
}



//other return code 
    //button      <button onClick={() => setCount(count + 1)}>Click me </button>

function YTStats () {
    const [view, setView] = useState('');
}