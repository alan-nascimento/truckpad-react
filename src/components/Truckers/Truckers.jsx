import React from 'react';
import { Button } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

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
            <span>
              {new Date(trucker.birthDate).getDate()}
/
              {new Date(trucker.birthDate).getMonth() + 1}
/
              {new Date(trucker.birthDate).getFullYear()}
            </span>
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
          <div className="trucker-buttons">
            <Button type="button" onClick={() => props.editRow(trucker)}>
              <Edit />
            </Button>
            <Button type="button" onClick={() => props.deleteTrucker(trucker._id)}>
              <Delete />
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}
