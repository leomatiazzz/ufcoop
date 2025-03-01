import Link from "next/link";
import { Home, Clipboard } from "lucide-react"; // Importando ícones

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-200 p-4 min-h-screen">
      <ul>
        <li className="mb-2 flex items-center gap-2">
          {/* Ícone de Início */}
          <Home className="text-gray-600" />
          <Link href="/" className="text-blue-600">
            Início
          </Link>
        </li>
        <li className="mb-2 flex items-center gap-2">
          {/* Ícone de Atividades */}
          <Clipboard className="text-gray-600" />
          <Link href="/activities" className="text-blue-600">
            Atividades
          </Link>
        </li>
      </ul>
    </aside>
  );
}
