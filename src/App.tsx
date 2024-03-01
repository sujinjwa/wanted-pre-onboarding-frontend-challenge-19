import React from 'react';
import './App.css';
import { Reset } from 'styled-reset';
import ScreenCardList from './page/ScreenCardList';

function App() {
  return (
    <div className='App'>
      <Reset />
      <ScreenCardList />
    </div>
  );
}

export default App;
