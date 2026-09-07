import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>  
  );
}

export default App; 