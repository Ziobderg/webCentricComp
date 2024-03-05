import zoid from './Zoidpixel.png';
import './App.css';
import React, {useRef} from 'react';

function App() {
  const myRef = useRef(null);

  function Spin(){
    const target = myRef.current;
    target.className = "Spin-img";
  }

  function UnSpin(){
    const target = myRef.current;
    target.className = "NoSpin-img";
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={zoid} className="NoSpin-img" alt="logo" id="Zoidimg" ref={myRef}/>
        <button onClick={Spin}
        title="Spin"
        color="blue"
        accessibilityLabel="Spin the image"> 
        Spin 
        </button>
        <button onClick={UnSpin}
        title="Spin"
        color="blue"
        accessibilityLabel="UnSpin the image"> 
        UnSpin 
        </button>
        <p>
          Lab 6
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=DNM9YE57vHE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Who is this funky monkey?
        </a>
      </header>
    </div>
  );
}

export default App;
