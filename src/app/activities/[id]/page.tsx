"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Activity {
  id: number;
  name: string;
  responsible: string;
  date: string;
  category: string;
  description: string;
}

export default function ActivityDetailPage() {
  const { id } = useParams();
  const [activity, setActivity] = useState<Activity | null>(null);

  useEffect(() => {
    // Simulação de um banco de dados ou API
    const activities: Activity[] = [
      {
        id: 1,
        name: "Hackathon de Inovação Tecnológica",
        responsible: "Prof. Fernando Rodrigues",
        date: "2025-03-10",
        category: "Engenharia de Computação",
        description:
          "Um evento para desafiar estudantes a resolverem problemas reais através da tecnologia.",
      },
      {
        id: 2,
        name: "Palestra de Inteligência Artificial e Machine Learning",
        responsible: "Prof. Thiago Iachiley",
        date: "2025-03-15",
        category: "Engenharia de Computação & Engenharia Elétrica",
        description:
          "Uma palestra aprofundada sobre o impacto da Inteligência Artificial no mundo moderno.",
      },
      {
        id: 3,
        name: "Apresentação da Orquestra Universitária",
        responsible: "Prof. Fernando Souza",
        date: "2025-04-01",
        category: "Música",
        description:
          "Uma bela apresentação musical realizada pelos alunos do curso de Música da UFC.",
      },
      {
        id: 4,
        name: "Grupo de Apoio Psicológico para Estudantes",
        responsible: "Dra. Fernanda",
        date: "2025-04-05",
        category: "Psicologia",
        description:
          "Sessões de apoio psicológico voltadas ao bem-estar dos estudantes.",
      },
      {
        id: 5,
        name: "Curso de Educação Financeira para Universitários",
        responsible: "Prof. Ricardo",
        date: "2025-04-10",
        category: "Ciências Econômicas & Finanças",
        description:
          "Aprenda a gerenciar suas finanças pessoais e planejamento financeiro.",
      },
      {
        id: 6,
        name: "Treinamento de Primeiros Socorros e Atendimento Emergencial",
        responsible: "Dr. Gustavo Moraes",
        date: "2025-04-15",
        category: "Odontologia & Medicina",
        description:
          "Capacitação para primeiros socorros e atendimentos emergenciais.",
      },
      {
        id: 7,
        name: "Capacitação de Instalação Elétrica em Redes Residenciais",
        responsible: "Prof. Danillo Fernandes",
        date: "2025-04-16",
        category: "Engenharia Elétrica",
        description:
          "Ensinamentos iniciais para capacitar alunos em instalação elétrica em residências.",
      },
    ];

    const foundActivity = activities.find((act) => act.id === Number(id));
    setActivity(foundActivity || null);
  }, [id]);

  if (!activity) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          Atividade não encontrada
        </h1>
        <Link href="/activities" className="text-blue-600 underline">
          Voltar para atividades
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600">{activity.name}</h1>
      <p className="text-gray-500 mt-2">{activity.category}</p>
      <p className="mt-4">
        <strong>Responsável:</strong> {activity.responsible}
      </p>
      <p>
        <strong>Data:</strong> {activity.date}
      </p>
      <p className="mt-4">{activity.description}</p>
      <Link
        href="/activities"
        className="mt-6 inline-block text-blue-600 underline"
      >
        Voltar para atividades
      </Link>
    </div>
  );
}
