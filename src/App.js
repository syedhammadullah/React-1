import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(1);
  function incr() {
    if (counter > 2) {
      setCounter(3)
    } else {
      setCounter(counter + 1);
    }
  }
  function decr() {
    if (counter <= 1) {
      setCounter(1)
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="App">
      <h1 style={{
        color: 'slateblue',
        textDecoration: 'underline'
      }}>Stepper</h1>

      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <p style={{ backgroundColor: counter > 0 ? '#7265F0' : 'white', borderRadius: '40%', padding: '10px', border: '3px solid lightgray', color: counter > 0 ? 'white' : 'black' }}>1</p>
        <p style={{ backgroundColor: counter > 1 ? '#7265F0' : 'white', borderRadius: '40%', padding: '10px', border: '3px solid lightgray', color: counter > 1 ? 'white' : 'black' }}>2</p>
        <p style={{ backgroundColor: counter > 2 ? '#7265F0' : 'white', borderRadius: '40%', padding: '10px', border: '3px solid lightgray', color: counter > 2 ? 'white' : 'black' }}>3</p>
      </div>
      <div style={{
        marginBottom: '50px',
        marginTop: '50px'
      }}>
        <p style={{
          color: 'white'
        }}>{counter == 1 ? "Learn React ⚛️" : ''}</p>
        <p style={{
          color: 'white'
        }}>{counter == 2 ? "Earn income 💸" : ''}</p>
        <p style={{
          color: 'white'
        }}>{counter == 3 ? "Invest your income 🤑" : ''}</p>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        <button className='prevButton' onClick={decr}>Previous</button>
        <button className='nextButton' onClick={incr}>Next</button>
      </div>
    </div>
  );
}


export default App;
