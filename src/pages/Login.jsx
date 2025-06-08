import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

// Tela de login fake para demonstrar autenticação
export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (login(form)) {
      // Redireciona para o dashboard após login
      navigate('/dashboard');
    } else {
      setError('Credenciais inválidas');
    }
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80 space-y-4">
        <h1 className="text-2xl font-bold text-center">Bem-vindo de volta!</h1>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          className="w-full border p-2 rounded"
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          type="password"
          name="password"
          placeholder="Senha"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded" type="submit">
          Entrar
        </button>
        <a href="#" className="text-sm text-center block text-blue-600 hover:underline">
          Crie uma conta!
        </a>
      </form>
    </div>
  );
}
