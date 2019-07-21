import React, { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Truckers from './components/Truckers/Truckers';
import AddTruckerForm from './components/AddTruckerForm/AddTruckerForm';

export default function App() {
  const [truckers, setTruckers] = useState([]);

  async function fetchData() {
    const response = await fetch('http://localhost:8080/truckers');
    const data = await response.json();
    setTruckers(data.reverse());
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addTrucker = async (trucker) => {
    await fetch('http://localhost:8080/truckers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trucker),
    })
      .then(res => res.json())
      .catch(err => console.log(err));

    await fetchData();
  };

  const deleteTrucker = async (id) => {
    fetch(`http://localhost:8080/truckers/${id}`, { method: 'DELETE' }).catch(err => console.log(err));
    setTruckers(truckers.filter(trucker => trucker._id !== id));
  };

  return (
    <div className="App">
      <Header />
      <AddTruckerForm addTrucker={addTrucker} />
      <Truckers truckers={truckers} deleteTrucker={deleteTrucker} />
    </div>
  );
}
