import React from 'react';

import './Trucker.scss';

export default function Trucker() {
  return (
    <div className="trucker-list">
      <ul className="trucker">
        <li className="trucker__name">Pouca Tripa</li>
        <li>Telefone: 11 98452 1254</li>
        <li>Data de Nascimento: 22/09/1976</li>
        <li>CNH: 21355468465</li>
        <li>CPF: 21354456888</li>
      </ul>
    </div>
  );
}
