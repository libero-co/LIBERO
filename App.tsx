import React from 'react';
import { Calculator } from './components/Calculator';

const App: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Calculator />
    </div>
  );
};

export default App;