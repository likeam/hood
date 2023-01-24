

import { useReducer, useState } from 'react';

function randomFunction(state, action){

  switch(action.type){
    case 'INCREMENT_SETUP': {
      return {
        ...state,
        step: state.step + action.playload
      }
    }
    case 'INCREMENT_COUNTER': {
      return {
        ...state,
        counter: state.counter + state.step
      }
    }
  }
}



function App() {

  // const [step, setStep] = useState(20);

  const [state, dispatch] = useReducer(randomFunction, {
    counter: 0,
    step: 1
  })

  function incrementCounter(){
    dispatch({
      type: 'INCREMENT_COUNTER', 
      playload: 1
    })
  }
  


  return <div className="App" >
    <h1 
    onClick={incrementCounter}
    >Counter: {state.counter}</h1>
    <h2>Current step: {state.step}</h2>
    <button onClick={incrementCounter}>Increase the Increment</button>
    </div>
}

export default App;
