
import { useEffect, useRef } from 'react';
import { useState } from 'react';




function App() {

  const obj = useRef(100);
  const [counter, setCounter] = useState(0)

  useEffect(() =>{
    console.log('Effect ran');
  }, [obj])

  useEffect(() =>{
    obj.current += 5
    console.log('now object is ', obj)
  }, [counter])

  return <div className="App">
    <h1 onClick={()=> setCounter(counter => counter +1)}>Counter: {counter}</h1>
  </div>
}

export default App;
