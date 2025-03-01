"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

interface Activity {
  id: number;
  name: string;
  responsible: string;
  date: string;
  category: string;
  description: string;
}

export default function EditActivityPage() {
  const params = useParams();
  const id = params?.id ? String(params.id) : null; // ✅ Corrigido

  const router = useRouter();
  const [formData, setFormData] = useState<Activity | null>(null);

  useEffect(() => {
    if (!id) return;

    const storedActivities = localStorage.getItem("activities");
    if (storedActivities) {
      const activities: Activity[] = JSON.parse(storedActivities);
      const foundActivity = activities.find((act) => act.id.toString() === id);
      if (foundActivity) setFormData(foundActivity);
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (formData) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    const storedActivities = localStorage.getItem("activities");
    if (storedActivities) {
      let activities: Activity[] = JSON.parse(storedActivities);
      activities = activities.map((act) =>
        act.id === formData.id ? formData : act
      );
      localStorage.setItem("activities", JSON.stringify(activities));
    }

    alert("Atividade atualizada!");
    router.push("/activities");
  };

  if (!formData) {
    return <p className="p-6 text-center">Atividade não encontrada.</p>;
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Editar Atividade
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Nome da Atividade</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Responsável</label>
          <input
            type="text"
            name="responsible"
            value={formData.responsible}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Data</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Categoria</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Descrição</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={3}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}
