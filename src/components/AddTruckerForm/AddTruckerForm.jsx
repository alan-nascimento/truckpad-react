import React, { useState } from 'react';

import './AddTruckerForm.scss';

export default function AddTruckerForm(props) {
  const initialFormState = {
    id: null,
    name: '',
    phone: '',
    birthDate: '',
    cnhNumber: '',
    category: '',
    cpfNumber: '',
  };

  const [trucker, setTrucker] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTrucker({ ...trucker, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.addTrucker({
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
        setTrucker(initialFormState);
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
      <button type="submit" className="add-trucker">
        Adicionar
      </button>
    </form>
  );
}
