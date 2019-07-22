import React, { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Truckers from './components/Truckers/Truckers';
import AddTruckerForm from './components/AddTruckerForm/AddTruckerForm';
import EditTruckerForm from './components/EditTruckerForm/EditTruckerForm';

export default function App() {
  const [truckers, setTruckers] = useState([]);

  async function fetchData() {
    const response = await fetch('https://truckpad-api.herokuapp.com/truckers');
    const data = await response.json();
    setTruckers(data.reverse());
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addTrucker = async (trucker) => {
    await fetch('https://truckpad-api.herokuapp.com/truckers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trucker),
    })
      .then(res => res.json())
      .catch(err => console.log(err));

    await fetchData();
  };

  const deleteTrucker = async (id) => {
    fetch(`https://truckpad-api.herokuapp.com/truckers/${id}`, { method: 'DELETE' }).catch(err => console.log(err));
    setEditing(false);
    setTruckers(truckers.filter(trucker => trucker._id !== id));
  };

  const [editing, setEditing] = useState(false);

  const [currentTrucker, setCurrentTrucker] = useState({});

  const editRow = (trucker) => {
    setEditing(true);
    setCurrentTrucker({
      _id: trucker._id,
      name: trucker.name,
      phone: trucker.phone,
      birthDate: trucker.birthDate,
      cnhNumber: trucker.documents[0].number,
      category: trucker.documents[0].category,
      cpfNumber: trucker.documents[1].number,
    });
  };

  const updateTrucker = async (id, object) => {
    setEditing(false);
    await fetch(`https://truckpad-api.herokuapp.com/truckers/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object),
    })
      .then(res => res.json())
      .catch(err => console.log(err));
    await fetchData();
  };

  return (
    <div className="App">
      <Header />
      {editing ? (
        <div>
          <h2>Edit Trucker</h2>
          <EditTruckerForm
            editing={editing}
            setEditing={setEditing}
            currentTrucker={currentTrucker}
            updateTrucker={updateTrucker}
          />
        </div>
      ) : (
        <div>
          <h2>Add Trucker</h2>
          <AddTruckerForm addTrucker={addTrucker} />
        </div>
      )}
      <Truckers truckers={truckers} deleteTrucker={deleteTrucker} editRow={editRow} />
    </div>
  );
}
