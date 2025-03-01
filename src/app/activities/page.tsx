"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

interface Activity {
  id: number;
  name: string;
  responsible: string;
  date: string;
  category: string;
  completed: boolean; // Novo estado para marcar como concluída
}

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    setActivities([
      {
        id: 1,
        name: "Hackathon de Inovação Tecnológica",
        responsible: "Prof. Fernando Rodrigues",
        date: "2025-03-10",
        category: "Engenharia de Computação",
        completed: false,
      },
      {
        id: 2,
        name: "Palestra de Inteligência Artificial e Machine Learning",
        responsible: "Prof. Thiago Iachiley",
        date: "2025-03-15",
        category: "Engenharia de Computação & Engenharia Elétrica",
        completed: false,
      },
      {
        id: 3,
        name: "Apresentação da Orquestra Universitária",
        responsible: "Prof. Fernando Souza",
        date: "2025-04-01",
        category: "Música",
        completed: false,
      },
      {
        id: 4,
        name: "Grupo de Apoio Psicológico para Estudantes",
        responsible: "Dra. Fernanda",
        date: "2025-04-05",
        category: "Psicologia",
        completed: false,
      },
      {
        id: 5,
        name: "Curso de Educação Financeira para Universitários",
        responsible: "Prof. Ricardo",
        date: "2025-04-10",
        category: "Ciências Econômicas & Finanças",
        completed: false,
      },
      {
        id: 6,
        name: "Treinamento de Primeiros Socorros e Atendimento Emergencial",
        responsible: "Dr. Gustavo Moraes",
        date: "2025-04-15",
        category: "Odontologia & Medicina",
        completed: false,
      },
      {
        id: 7,
        name: "Capacitação de Instalação Elétrica em Redes Residenciais",
        responsible: "Prof. Danillo Fernandes",
        date: "2025-04-16",
        category: "Engenharia Elétrica",
        completed: false,
      },
    ]);
  }, []);

  // Função para apagar atividade
  const handleDelete = (id: number) => {
    setActivities((prev) => prev.filter((activity) => activity.id !== id));
  };

  // Função para marcar como concluída
  const handleComplete = (id: number) => {
    setActivities((prev) =>
      prev.map((activity) =>
        activity.id === id
          ? { ...activity, completed: !activity.completed }
          : activity
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">
        Atividades Acadêmicas
      </h1>
      <Link
        href="/activities/create"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Criar Nova Atividade
      </Link>

      <div className="mt-4">
        {activities.length > 0 ? (
          <div>
            {[
              "Engenharia de Computação",
              "Engenharia de Computação & Engenharia Elétrica",
              "Música",
              "Psicologia",
              "Ciências Econômicas & Finanças",
              "Odontologia & Medicina",
              "Engenharia Elétrica",
            ].map((category) => (
              <div key={category} className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-500">
                  {category}
                </h2>
                <ul>
                  {activities
                    .filter((activity) => activity.category === category)
                    .map((activity) => (
                      <li
                        key={activity.id}
                        className={`border p-4 mb-2 rounded flex justify-between items-center ${
                          activity.completed ? "bg-gray-200 text-gray-500" : ""
                        }`}
                      >
                        <div>
                          <Link
                            href={`/activities/${activity.id}`}
                            className="text-blue-600 font-semibold"
                          >
                            {activity.name}
                          </Link>
                          <p>Responsável: {activity.responsible}</p>
                          <p>Data: {activity.date}</p>
                        </div>

                        {/* Botões de ação */}
                        <div className="flex gap-2">
                          <Link
                            href={`/activities/edit/${activity.id}`}
                            className="text-yellow-500 hover:text-yellow-700"
                          >
                            <FaEdit size={20} />
                          </Link>
                          <button
                            onClick={() => handleComplete(activity.id)}
                            className="text-green-500 hover:text-green-700"
                          >
                            <FaCheck size={20} />
                          </button>
                          <button
                            onClick={() => handleDelete(activity.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTrash size={20} />
                          </button>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p>Nenhuma atividade cadastrada.</p>
        )}
      </div>
    </div>
  );
}
