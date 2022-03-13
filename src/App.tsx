import React from 'react';
import Todos from './components/Todos';
function App() {
  return (
    <div className="App">
      <Todos items={['Hi this is Motaz', 'Hi this is Leomord']}/>
    </div>
  );
}

export default App;
