import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-300 text-white p-4 flex justify-between items-center">
      {/* Logo e título à esquerda */}
      <div className="flex items-center gap-2">
        <Image
          src="/formatura.png"
          alt="Ícone de formatura"
          width={40}
          height={40}
        />
        <h1
          className="text-2xl font-bold"
          style={{ fontFamily: "Architects Daughter, sans-serif" }}
        >
          UFC Cooperation
        </h1>
      </div>

      {/* Texto e logo da formatura à direita */}
      <div className="flex items-center gap-2">
        <p
          className="text-sm"
          style={{ fontFamily: "Architects Daughter, sans-serif" }}
        >
          O inovador dashboard da UFC de Sobral!
        </p>
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </div>
    </nav>
  );
}
