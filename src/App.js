import './App.css';
import logo2 from './img/flower.png';

function App() {
  let startRot = ()=>{
    alert('ok');
  }
  function stopRot(){
    alert('ok');
  }
  return (
    <div className="App">
      <p>
        <button onClick={startRot}>Start Rotating</button>
        <button onClick={stopRot}> Stop Rotating</button>
      </p>
      <header className="App-header">
        <img width="200" src={logo2} className="rot" alt="logo" />
      </header>
    </div>
  );
}

export default App;
