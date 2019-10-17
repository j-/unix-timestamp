import * as React from 'react';
import AppInputs from './AppInputs';
import AppOutputs from './AppOutputs';

const App: React.FC = () => (
  <div className="App">
    <AppInputs />
    
    <br />
    <hr />
    <br />
    
    <AppOutputs />
  </div>
);

export default App;
