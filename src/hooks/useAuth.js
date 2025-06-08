import { useState, useContext, createContext } from 'react';

// Contexto simples para controlar autenticação
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Função fake de login. Substituir por chamada real de API
  const login = ({ email, password }) => {
    if (email === 'admin@example.com' && password === 'password') {
      setUser({ name: 'Admin', email });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
