import Image from "next/image";
import "@/styles/globals.css";

export default function HomePage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/campus.jpg')" }}
    >
      {/* Container com fundo azul claro */}
      <div className="bg-purple-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
        {/* Imagem centralizada acima do título */}
        <Image
          src="/formatura.png" // Caminho para a imagem na pasta public
          alt="Imagem de formatura" // Descrição alternativa para a imagem
          width={200} // Largura da imagem (ajuste conforme necessário)
          height={200} // Altura da imagem (ajuste conforme necessário)
          className="mb-4" // Classe para adicionar margem abaixo da imagem
        />

        <h1 className="text-3xl font-bold text-gray-800">Bem-vindo à UFCooP</h1>
        <p className="text-gray-600 mt-2">
          Gerencie e acompanhe atividades acadêmicas da UFC de forma simples e
          eficiente.
        </p>
      </div>
    </div>
  );
}
