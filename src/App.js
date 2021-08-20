import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => { setCount(count + 1) }}>Click</button>
        <p>{ count }</p>
      </header>
    </div>
  );
}

export default App;
