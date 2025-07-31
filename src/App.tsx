import React from 'react';
import './App.css';

// 1. Import the components you just built
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* 2. Use the Greeting component with a name prop */}
      <Greeting name="TypeScript Learner" />

      {/* 3. Use the Counter class component */}
      <Counter />
    </div>
  );
}

export default App;
