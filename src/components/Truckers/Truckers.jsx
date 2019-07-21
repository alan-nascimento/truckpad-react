import React from 'react';
import { Button } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

import './Truckers.scss';

export default function Truckers(props) {
  return (
    <div className="trucker-list">
      {props.truckers.map(trucker => (
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
          <Button type="button" onClick={() => props.editRow(trucker)}>
            <Edit />
          </Button>
          <Button type="button" onClick={() => props.deleteTrucker(trucker._id)}>
            <Delete />
          </Button>
        </article>
      ))}
    </div>
  );
}
