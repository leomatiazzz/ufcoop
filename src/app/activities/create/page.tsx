"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateActivity() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    responsibleType: "",
    responsible: "",
    registrationNumber: "",
    date: "",
    category: "",
    subcategory: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação da matrícula se for aluno
    if (
      formData.responsibleType === "Aluno" &&
      !/^\d{6}$/.test(formData.registrationNumber)
    ) {
      alert("O número de matrícula deve conter exatamente 6 dígitos.");
      return;
    }

    // Simula o envio da atividade
    console.log("Atividade criada:", formData);

    // Redireciona para a lista de atividades
    router.push("/activities");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Criar Nova Atividade
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome da Atividade */}
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

        {/* Tipo de Responsável */}
        <div>
          <label className="block font-medium">Responsável</label>
          <select
            name="responsibleType"
            value={formData.responsibleType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Selecione</option>
            <option value="Professor">Professor</option>
            <option value="Aluno">Aluno</option>
          </select>
        </div>

        {/* Nome do Responsável */}
        <div>
          <label className="block font-medium">Nome do Responsável</label>
          <input
            type="text"
            name="responsible"
            value={formData.responsible}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Número de Matrícula (Aparece apenas se for Aluno) */}
        {formData.responsibleType === "Aluno" && (
          <div>
            <label className="block font-medium">
              Número de Matrícula (6 dígitos)
            </label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              pattern="\d{6}"
              maxLength={6}
              required
            />
          </div>
        )}

        {/* Data */}
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

        {/* Categoria */}
        <div>
          <label className="block font-medium">Categoria</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Selecione uma categoria</option>
            <option value="Engenharia Elétrica">Engenharia Elétrica</option>
            <option value="Engenharia de Computação">
              Engenharia de Computação
            </option>
            <option value="Música">Música</option>
            <option value="Psicologia">Psicologia</option>
            <option value="Ciências Econômicas & Finanças">
              Ciências Econômicas & Finanças
            </option>
            <option value="Odontologia & Medicina">
              Odontologia & Medicina
            </option>
          </select>
        </div>

        {/* Subcategoria */}
        <div>
          <label className="block font-medium">Subcategoria</label>
          <select
            name="subcategory"
            value={formData.subcategory}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Selecione uma subcategoria</option>
            <option value="Monitoria">Monitoria</option>
            <option value="Palestra">Palestra</option>
            <option value="Workshop">Workshop</option>
            <option value="Apresentação">Apresentação</option>
            <option value="Capacitação">Capacitação</option>
            <option value="Minicurso">Minicurso</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        {/* Descrição */}
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

        {/* Botão de Envio */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Criar Atividade
        </button>
      </form>
    </div>
  );
}
