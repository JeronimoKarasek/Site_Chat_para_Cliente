import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Settings, LifeBuoy } from 'lucide-react';

// Navegação lateral fixa com ícones
const navItemClass = ({ isActive }) =>
  `flex items-center p-2 rounded-md hover:bg-gray-200 ${isActive ? 'bg-gray-200 font-semibold' : ''}`;

export default function Sidebar() {
  return (
    <aside className="w-60 bg-white border-r hidden sm:block">
      <div className="p-4 text-xl font-bold">InovaChat</div>
      <nav className="space-y-2">
        <NavLink to="/dashboard" className={navItemClass}>
          <LayoutDashboard className="mr-2 w-5 h-5" /> Dashboard
        </NavLink>
        <NavLink to="/settings" className={navItemClass}>
          <Settings className="mr-2 w-5 h-5" /> Configurações
        </NavLink>
        <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-200">
          <LifeBuoy className="mr-2 w-5 h-5" /> Suporte
        </a>
      </nav>
    </aside>
  );
}
