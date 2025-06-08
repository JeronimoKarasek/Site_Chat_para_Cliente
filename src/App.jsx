import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { useAuth } from './hooks/useAuth';

// Componente principal responsável por renderizar as páginas
export default function App() {
  const { user } = useAuth(); // Usuário autenticado

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Exibe a navegação lateral somente quando o usuário está logado */}
      {user && <Sidebar />}
      <div className="flex-1 flex flex-col">
        {/* Cabeçalho com saudação e botão de logout */}
        {user && <Header />}
        <main className="flex-1 p-4">
          <Routes>
            {/* Rotas protegidas simples */}
            <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/settings" element={user ? <Settings /> : <Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
