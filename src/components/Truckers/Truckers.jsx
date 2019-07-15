import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Edit } from '@material-ui/icons/index';

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
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit" aria-label="Edit">
            <Fab className="edit-icon">
              <Edit />
            </Fab>
          </Tooltip>
        </article>
      ))}
    </div>
  );
}
