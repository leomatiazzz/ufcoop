"use client";

import Link from "next/link";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { useActivity } from "@/context/ActivityContext";

export default function ActivitiesPage() {
  const { activities, completeActivity, deleteActivity } = useActivity();

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
            {[...new Set(activities.map((activity) => activity.category))].map(
              (category) => {
                const filteredActivities = activities.filter(
                  (activity) =>
                    activity.category === category && !activity.completed
                );

                if (filteredActivities.length === 0) {
                  return null; // Não renderiza a categoria vazia
                }

                return (
                  <div key={category} className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-blue-500">
                      {category}
                    </h2>
                    <ul>
                      {filteredActivities.map((activity) => (
                        <li
                          key={activity.id}
                          className="border p-4 mb-2 rounded flex justify-between items-center"
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

                          <div className="flex gap-2">
                            <Link
                              href={`/activities/edit/${activity.id}`}
                              className="text-yellow-500 hover:text-yellow-700"
                            >
                              <FaEdit size={20} />
                            </Link>
                            <button
                              onClick={() => completeActivity(activity.id)}
                              className="text-green-500 hover:text-green-700"
                            >
                              <FaCheck size={20} />
                            </button>
                            <button
                              onClick={() => deleteActivity(activity.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <FaTrash size={20} />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
            )}
          </div>
        ) : (
          <p>Nenhuma atividade cadastrada.</p>
        )}
      </div>
    </div>
  );
}
