import './App.css';

function App() {
  return (
    <div className='container'>
      <div className="calculator-grid">
        <div className="out-put">
          <div className="output-text">1000</div>
          <div className="output-result">200</div>
        </div>
        <button className='btn ac'>AC</button>
        <button className='btn'>DEL</button>
        <button className='btn'>÷</button>

        <button className='btn'>1</button>
        <button className='btn'>2</button>
        <button className='btn'>3</button>
        <button className='btn'>*</button>

        <button className='btn'>4</button>
        <button className='btn'>5</button>
        <button className='btn'>6</button>
        <button className='btn'>+</button>

        <button className='btn'>7</button>
        <button className='btn'>8</button>
        <button className='btn'>9</button>
        <button className='btn'>-</button>

        <button className='btn'>.</button>
        <button className='btn'>0</button>
        <button className='btn equal'>=</button>
      </div>
    </div>
  );
}

export default App;
