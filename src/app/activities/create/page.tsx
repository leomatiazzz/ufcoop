"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useActivity } from "@/context/ActivityContext";

export default function CreateActivity() {
  const router = useRouter();
  const { addActivity } = useActivity();

  const [formData, setFormData] = useState({
    name: "",
    responsibleType: "",
    responsible: "",
    registrationNumber: "",
    date: "",
    activityType: "",
    category: "",
    subcategory: "",
    description: "",
  });

  const subcategories: Record<string, string[]> = {
    "Engenharia Elétrica": ["Circuitos", "Energias Renováveis", "Automação"],
    "Engenharia de Computação": [
      "Programação",
      "Redes",
      "Inteligência Artificial",
    ],
    Música: ["Canto", "Instrumentos", "Composição"],
    Psicologia: ["Clínica", "Organizacional", "Neuropsicologia"],
    "Ciências Econômicas & Finanças": [
      "Macroeconomia",
      "Mercado Financeiro",
      "Empreendedorismo",
    ],
    "Odontologia & Medicina": ["Ortodontia", "Pediatria", "Cardiologia"],
  };

  const activityTypes = [
    "Workshop",
    "Monitoria",
    "Palestra",
    "Minicurso",
    "Capacitação",
    "Maratona",
    "Apresentação",
    "Outro",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      formData.responsibleType === "Aluno" &&
      !/^\d{6}$/.test(formData.registrationNumber)
    ) {
      alert("O número de matrícula deve conter exatamente 6 dígitos.");
      return;
    }

    const newActivity = {
      id: Date.now(),
      name: formData.name,
      responsibleType: formData.responsibleType,
      responsible: formData.responsible,
      registrationNumber:
        formData.responsibleType === "Aluno" ? formData.registrationNumber : "",
      date: formData.date,
      activityType: formData.activityType,
      category: formData.category,
      subcategory: formData.subcategory,
      description: formData.description,
      completed: false,
    };

    addActivity(newActivity);
    router.push("/activities");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Criar Nova Atividade
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
          <label className="block font-medium">Tipo de Responsável</label>
          <select
            name="responsibleType"
            value={formData.responsibleType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Selecione</option>
            <option value="Aluno">Aluno</option>
            <option value="Professor">Professor</option>
          </select>
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

        {formData.responsibleType === "Aluno" && (
          <div>
            <label className="block font-medium">Número de Matrícula</label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

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
          <label className="block font-medium">Tipo de Atividade</label>
          <select
            name="activityType"
            value={formData.activityType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Selecione um tipo</option>
            {activityTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium">Curso</label>
          <select
            name="category"
            value={formData.category}
            onChange={(e) => {
              setFormData({
                ...formData,
                category: e.target.value,
                subcategory: "",
              });
            }}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Selecione um curso</option>
            {Object.keys(subcategories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium">Subcategoria</label>
          <select
            name="subcategory"
            value={formData.subcategory}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            disabled={!formData.category}
          >
            <option value="">Selecione uma subcategoria</option>
            {formData.category &&
              subcategories[formData.category]?.map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
          </select>
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
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Criar Atividade
        </button>
      </form>
    </div>
  );
}
