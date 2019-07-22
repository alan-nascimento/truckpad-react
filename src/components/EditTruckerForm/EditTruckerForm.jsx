import React, { useState, useEffect } from 'react';

import './EditTruckerForm.scss';

export default function EditUserForm(props) {
  const [trucker, setTrucker] = useState(props.currentTrucker);

  useEffect(() => {
    setTrucker(props.currentTrucker);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTrucker({ ...trucker, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateTrucker(trucker._id, {
          name: trucker.name,
          phone: trucker.phone,
          birthDate: trucker.birthDate,
          documents: [
            {
              number: trucker.cnhNumber,
              category: trucker.category,
            },
            {
              number: trucker.cpfNumber,
            },
          ],
        });
      }}
    >
      <label>Nome</label>
      <input type="text" name="name" value={trucker.name} onChange={handleInputChange} />
      <label>Telefone</label>
      <input type="text" name="phone" value={trucker.phone} onChange={handleInputChange} />
      <label>Data de Nascimento</label>
      <input type="date" name="birthDate" value={trucker.birthDate} onChange={handleInputChange} />
      <label>CNH</label>
      <input type="text" name="cnhNumber" value={trucker.cnhNumber} onChange={handleInputChange} />
      <label>Categoria</label>
      <input type="text" name="category" value={trucker.category} onChange={handleInputChange} />
      <label>CPF</label>
      <input type="text" name="cpfNumber" value={trucker.cpfNumber} onChange={handleInputChange} />
      <div className="edit-buttons">
        <button type="submit" className="add-trucker">
          Editar
        </button>
        <button type="button" onClick={() => props.setEditing(false)} className="cancel-button">
          Cancelar
        </button>
      </div>
    </form>
  );
}
