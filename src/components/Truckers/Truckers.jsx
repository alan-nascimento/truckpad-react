import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import AddTruckerForm from '../AddTruckerForm/AddTruckerForm';

import './Truckers.scss';

export default function Truckers() {
  const [truckers, setTruckers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8080/truckers');
      const data = await response.json();
      setTruckers(data.reverse());
    }
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

    setTruckers([trucker, ...truckers]);
  };

  const deleteTrucker = async (id) => {
    await fetch(`http://localhost:8080/truckers/${id}`, { method: 'DELETE' }).catch(err => console.log(err));
    setTruckers(truckers.filter(trucker => trucker._id !== id));
  };

  return (
    <div className="trucker-list">
      <AddTruckerForm addTrucker={addTrucker} />
      {truckers.map(trucker => (
        <article key={trucker._id}>
          <strong>{trucker.name}</strong>
          <p>
            Telefone:
            <span>{trucker.phone}</span>
          </p>
          <p>
            Data de nascimento:
            <span>{trucker.birthDate}</span>
          </p>
          <p>
            CNH:
            <span>{trucker.documents[0].number}</span>
          </p>
          <p>
            Categoria:
            <span>{trucker.documents[0].category}</span>
          </p>
          <p>
            CPF:
            <span>{trucker.documents[1].number}</span>
          </p>
          <Button type="button" onClick={() => deleteTrucker(trucker._id)}>
            <Delete />
          </Button>
        </article>
      ))}
    </div>
  );
}
