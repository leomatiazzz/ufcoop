"use client";
import { useEffect, useState } from "react";

interface Activity {
  id: number;
  title: string;
  description: string;
}

export default function CompletedActivities() {
  const [completedActivities, setCompletedActivities] = useState<Activity[]>(
    []
  );

  // Carregar atividades concluídas do localStorage ao montar o componente
  useEffect(() => {
    const storedActivities = localStorage.getItem("completedActivities");
    if (storedActivities) {
      setCompletedActivities(JSON.parse(storedActivities));
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tarefas Concluídas</h1>
      {completedActivities.length === 0 ? (
        <p>Não há novas atividades anunciadas no momento.</p>
      ) : (
        <ul>
          {completedActivities.map((activity) => (
            <li
              key={activity.id}
              className="border p-4 rounded mb-2 bg-green-100"
            >
              <h2 className="text-lg font-semibold">{activity.title}</h2>
              <p>{activity.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
