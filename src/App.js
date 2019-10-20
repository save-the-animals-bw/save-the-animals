import React from 'react';
import './App.css';
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <Route path='/' component={Register} />
    </div>
  );
}

export default App;
