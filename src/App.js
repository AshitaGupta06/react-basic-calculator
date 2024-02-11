import { useState, useRef } from 'react';
import './App.css';

function App() {
  const inputRef =useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(event) {
    event.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(event) {
    event.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function multiply(event) {
    event.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(event) {
    event.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(event) {
    event.preventDefault();
   inputRef.current.value = 0;
  }

  function resetResult(event) {
    event.preventDefault();
    setResult((result) => 0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest calculator</h1>
      </div>
      <form>
        <p ref= {resultRef}>{result}</p>
        <input pattern='[0-9]' ref={inputRef} type="number" placeholder='Type a number'/>
        <div className='App-div'>
          <button onClick={plus} >Add</button>
          <button onClick={minus}>Substract</button>
          <button onClick={multiply}>Multiply</button>
          <button onClick={divide}>Divide</button>
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetResult}>Reset Result</button>
        </div>
      </form>
    </div>
  );
}

export default App;
