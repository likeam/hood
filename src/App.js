

import { createContext, useReducer, useState } from 'react';
import RemoteComponent from './RemoteComponent';



function App() {

  const Context = createContext(null)

  return <div className="App" >
    <h1 
    
    >Counter: </h1>
    <Context.Provider value={"Hello Abdul"}>
    <RemoteComponent />
    </Context.Provider>
    
    <button >Increase the Increment</button>
    </div>
}

export default App;
