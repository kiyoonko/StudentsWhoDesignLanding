import React, {Component} from 'react';
import './App.css';
import Landing from './components/Landing'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return (
      <div style = {generalStyle}>
        <Landing />
      </div>
    );
  }
}

const generalStyle = {
  backgroundColor: '#e5e5e5'
}

export default App;
