
import { useEffect } from 'react';
import { useState } from 'react';




function App() {

  const [msg, setMsg] = useState('');

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
      setMsg(data);
    }
    fetchData();
  }, [])

  return <div className="App">
    <h1>Counter1:{msg}</h1>
  </div>
}

export default App;
