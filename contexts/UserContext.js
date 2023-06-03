import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [email, setEmail] = useState('');

  const updateUser = (newNomeUsuario, newEmail) => {
    setNomeUsuario(newNomeUsuario);
    setEmail(newEmail);
  };

  const user = {
    nomeUsuario,
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