import { useAuth } from '../hooks/useAuth';

// Cabeçalho simples com saudação e botão de logout
export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="bg-white border-b p-4 flex justify-end items-center">
      <span className="mr-4">Olá, {user.name}</span>
      <button
        className="text-sm text-blue-600 hover:underline"
        onClick={logout}
      >
        Sair
      </button>
    </header>
  );
}
