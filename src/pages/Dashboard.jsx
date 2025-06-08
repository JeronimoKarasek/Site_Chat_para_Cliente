import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { tokenUsage, conversations } from '../data/mockData';

// Página principal com gráfico e tabela de histórico
export default function Dashboard() {
  const [search, setSearch] = useState('');

  // Filtro simples de busca na tabela
  const filtered = conversations.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) || c.cpf.includes(search)
  );

  // Aqui poderíamos chamar uma API para exportar o CSV
  const exportCsv = () => {
    alert('Exportar CSV simulado.');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Tokens usados no mês</h2>
          <p className="text-2xl font-semibold">{tokenUsage.monthTotal}</p>
        </div>
        <div className="bg-white p-4 rounded shadow h-64">
          <h2 className="text-lg font-bold mb-2">Consumo de tokens diário</h2>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={tokenUsage.daily}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="tokens" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Histórico de conversas</h2>
          <div className="space-x-2">
            <input
              type="text"
              placeholder="Buscar..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="border p-2 rounded"
            />
            <button
              className="bg-blue-600 text-white px-3 py-2 rounded"
              onClick={exportCsv}
            >
              Exportar relatório
            </button>
          </div>
        </div>
        <div className="overflow-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 py-1 text-left">Data/Hora</th>
                <th className="px-2 py-1 text-left">Telefone</th>
                <th className="px-2 py-1 text-left">CPF</th>
                <th className="px-2 py-1 text-left">Nome</th>
                <th className="px-2 py-1 text-left">Mãe</th>
                <th className="px-2 py-1 text-left">Nascimento</th>
                <th className="px-2 py-1 text-left">Banco</th>
                <th className="px-2 py-1 text-left">Status</th>
                <th className="px-2 py-1 text-left">Valor</th>
                <th className="px-2 py-1 text-left">Valor final</th>
                <th className="px-2 py-1 text-left">Digitada</th>
                <th className="px-2 py-1 text-left">Id proposta</th>
                <th className="px-2 py-1 text-left">New Corban</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, idx) => (
                <tr key={idx} className="odd:bg-gray-50">
                  <td className="px-2 py-1 whitespace-nowrap">{c.date}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{c.phone}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{c.cpf}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{c.name}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{c.mother}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{c.birth}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{c.bank}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{c.status}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{c.value}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{c.finalValue}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{c.typed}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{c.proposalId}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{c.newCorban}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
