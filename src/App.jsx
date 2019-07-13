import React, { useState } from 'react';

import Header from './components/Header/Header';
import Trucker from './components/Trucker/Trucker';

export default function App() {
  // eslint-disable-next-line
  const [] = useState([]);

  return (
    <div className="App">
      <Header />
      <Trucker />
    </div>
  );
}
