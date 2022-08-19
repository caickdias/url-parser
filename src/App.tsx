import React from 'react';
import './App.css';

import { Main, Sidebar } from '../src/components';

function App() {
  return (
    <div className="flex flex-1 justify-center items-center h-screen text-white bg-[#1e272e]">
      
        <Main />

        <Sidebar />
      
    </div>
  );
}

export default App;
