import { connect } from 'react-redux';
import './App.css';

import logo2 from './img/flower.png';
import { startAnimation,stopAnimation } from './Redux/index'; 

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <p>Initial value is { props.status }</p>
      <p>
        <button onClick={ props.startAnimation }>Start Rotating</button>
        <button onClick={ props.stopAnimation  }> Stop Rotating</button>
      </p>
      <header className="App-header">
        <img width="200" src={logo2} className={ 'rot '+props.status } alt="logo" />
      </header>
    </div>
  );
}

let mapStateToProps = (state)=>{
  return {
    status:state.status
  };
}

let mapDispatchToProps = (dispatch)=>{
  return {
    startAnimation:()=>{ dispatch( startAnimation() ) },
    stopAnimation :()=>{ dispatch( stopAnimation() ) }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
