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
  const params = useParams() ?? {};
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [activity, setActivity] = useState<Activity | null>(null);

  useEffect(() => {
    if (!id) return;

    // Buscar atividades do localStorage
    const storedActivities = localStorage.getItem("activities");
    if (storedActivities) {
      const activities: Activity[] = JSON.parse(storedActivities);
      const foundActivity = activities.find((act) => act.id.toString() === id);
      setActivity(foundActivity || null);
    }
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
