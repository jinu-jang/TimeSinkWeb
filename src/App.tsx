import React from 'react';
import './App.css';
import OuroborosPage from './components/OuroborosPage';

function App() {
  return (
    <div className="App">
      <OuroborosPage backgroundColors={['DodgerBlue', 'red', '#99CC33', 'coral']}/>
    </div>
  );
}

export default App;
