import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const updateUser = (newNomeUsuario, newEmail) => {
    setNome(newNomeUsuario);
    setEmail(newEmail);
  };

  const user = {
    nome,
    email,
    updateUser,
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;