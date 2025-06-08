import { useState } from 'react';

// Página de configurações com vários campos de exemplo
export default function Settings() {
  const [form, setForm] = useState({
    projectId: '',
    adminKey: '',
    llmKey: '',
    audioKey: '',
    tokenDataHunter: '',
    sector1: '',
    sector2: '',
    webhookFacta: '',
    webhookIcred: '',
    webhookVctex: '',
    webhookSimplix: '',
    companyDesc: '',
    debounce: '',
    crmUrl: '',
    phone: '',
    inactivity: false,
    audioEnabled: false,
    newCorban: false,
    logo: null,
  });

  const handleChange = e => {
    const { name, type, checked, value, files } = e.target;
    if (type === 'checkbox') {
      setForm({ ...form, [name]: checked });
    } else if (type === 'file') {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aqui integraríamos com o backend para salvar as configurações
    alert('Configurações salvas!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
      <div className="bg-white p-4 rounded shadow space-y-4">
        <h2 className="text-lg font-bold">Chaves</h2>
        <input name="projectId" className="w-full border p-2 rounded" placeholder="ID projeto LLM" value={form.projectId} onChange={handleChange} />
        <input name="adminKey" className="w-full border p-2 rounded" placeholder="Key admin LLM" value={form.adminKey} onChange={handleChange} />
        <input name="llmKey" className="w-full border p-2 rounded" placeholder="Key LLM" value={form.llmKey} onChange={handleChange} />
        <input name="audioKey" className="w-full border p-2 rounded" placeholder="Key de áudio" value={form.audioKey} onChange={handleChange} />
        <input name="tokenDataHunter" className="w-full border p-2 rounded" placeholder="Token DataHunter" value={form.tokenDataHunter} onChange={handleChange} />
      </div>

      <div className="bg-white p-4 rounded shadow space-y-4">
        <h2 className="text-lg font-bold">Setores</h2>
        <input name="sector1" className="w-full border p-2 rounded" placeholder="Setor 1" value={form.sector1} onChange={handleChange} />
        <input name="sector2" className="w-full border p-2 rounded" placeholder="Setor 2" value={form.sector2} onChange={handleChange} />
      </div>

      <div className="bg-white p-4 rounded shadow space-y-4">
        <h2 className="text-lg font-bold">Webhooks</h2>
        <input name="webhookFacta" className="w-full border p-2 rounded" placeholder="Facta" value={form.webhookFacta} onChange={handleChange} />
        <input name="webhookIcred" className="w-full border p-2 rounded" placeholder="Icred" value={form.webhookIcred} onChange={handleChange} />
        <input name="webhookVctex" className="w-full border p-2 rounded" placeholder="Vctex" value={form.webhookVctex} onChange={handleChange} />
        <input name="webhookSimplix" className="w-full border p-2 rounded" placeholder="Simplix" value={form.webhookSimplix} onChange={handleChange} />
      </div>

      <div className="bg-white p-4 rounded shadow space-y-4">
        <h2 className="text-lg font-bold">Outros</h2>
        <textarea name="companyDesc" className="w-full border p-2 rounded" placeholder="Descrição da Empresa" value={form.companyDesc} onChange={handleChange} />
        <input name="debounce" className="w-full border p-2 rounded" placeholder="Debounce" value={form.debounce} onChange={handleChange} />
        <input name="crmUrl" className="w-full border p-2 rounded" placeholder="URL CRM" value={form.crmUrl} onChange={handleChange} />
        <input name="phone" className="w-full border p-2 rounded" placeholder="Telefone de Contato" value={form.phone} onChange={handleChange} />
        <div className="flex items-center space-x-2">
          <label><input type="checkbox" name="inactivity" checked={form.inactivity} onChange={handleChange} /> Inatividade</label>
          <label><input type="checkbox" name="audioEnabled" checked={form.audioEnabled} onChange={handleChange} /> Áudio Ativado</label>
          <label><input type="checkbox" name="newCorban" checked={form.newCorban} onChange={handleChange} /> New Corban</label>
        </div>
        <div>
          <label className="block mb-1">Logo</label>
          <input type="file" name="logo" onChange={handleChange} />
          {form.logo && <p className="mt-2 text-sm">{form.logo.name}</p>}
        </div>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Atualizar</button>
    </form>
  );
}
