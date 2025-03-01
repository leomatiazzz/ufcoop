import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-purple-300 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        {/* Imagem */}
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        {/* Título maior */}
        <h1
          className="text-2xl font-bold" // Alterado de text-lg para text-2xl
          style={{ fontFamily: "Architects Daughter, sans-serif" }}
        >
          UFC Cooperation
        </h1>
      </div>
      <p
        className="text-sm"
        style={{ fontFamily: "Architects Daughter, sans-serif" }}
      >
        O inovador dashboard da UFC de Sobral!
      </p>
    </nav>
  );
}
