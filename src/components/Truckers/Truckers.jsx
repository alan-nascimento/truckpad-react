import React, { useState, useEffect } from 'react';

import './Truckers.scss';

export default function Truckers() {
  const [truckers, setTruckers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3333/truckers');
      const data = await response.json();
      setTruckers(data);
    }
    fetchData();
  }, []);

  return (
    <div className="trucker-list">
      {truckers.map(trucker => (
        <article key={trucker.id}>
          <strong>{trucker.name}</strong>
          <p>{trucker.birthDate}</p>
        </article>
      ))}
    </div>
  );
}
