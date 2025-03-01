"use client";
import { useEffect, useState } from "react";

interface Activity {
  id: number;
  name: string; // Era title, corrigido para name
  description: string;
}

export default function CompletedActivities() {
  const [completedActivities, setCompletedActivities] = useState<Activity[]>(
    []
  );

  useEffect(() => {
    const storedActivities = localStorage.getItem("completedActivities");
    if (storedActivities) {
      setCompletedActivities(JSON.parse(storedActivities));
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Atividades Concluídas</h1>
      {completedActivities.length === 0 ? (
        <p>Não há novas atividades concluídas no momento.</p>
      ) : (
        <ul>
          {completedActivities.map((activity) => (
            <li
              key={activity.id}
              className="border p-4 rounded mb-2 bg-green-100"
            >
              <h2 className="text-lg font-semibold">{activity.name}</h2>
              <p>{activity.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
