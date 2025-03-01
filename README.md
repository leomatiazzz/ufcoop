# 🎓 UFCoop - UFC Cooperation - Gerenciamento de Atividades Acadêmicas

Este projeto é uma plataforma web desenvolvida em **React com TypeScript** para o **cadastro e monitoramento de atividades acadêmicas** dentro do campus da **UFC Sobral**.

A aplicação permite que alunos e professores registrem e acompanhem **workshops, monitorias, palestras, minicursos, capacitações, maratonas, apresentações** e outras atividades acadêmicas.

Os dados são armazenados no **Local Storage** do navegador, garantindo que as atividades sejam preservadas mesmo após o usuário fechar e reabrir a página.

---

## 🚀 **Funcionalidades**

✅ Cadastro de atividades com **tipo, categoria e subcategoria**  
✅ Definição do **responsável (Aluno ou Professor)**  
✅ Validação do **número de matrícula** para alunos  
✅ Listagem de atividades cadastradas  
✅ **Marcação de atividades como concluídas**, movendo-as para a seção de "Atividades Concluídas"  
✅ Armazenamento de todas as atividades no **Local Storage**  

---

## 🏗 **Tecnologias Utilizadas**

- **React + TypeScript** ⚛️  
- **Tailwind CSS** 🎨  
- **Local Storage para persistência de dados** 💾  

---

## 🔧 **Instalação e Uso**

### 1️⃣ Clone o repositório  
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2️⃣ Instale as dependências  
```bash
npm install
```

### 3️⃣ Inicie o projeto  
```bash
npm run dev
```

O projeto estará rodando em **http://localhost:3000/**. 🚀

---

## 💾 **Uso do Local Storage**

Para garantir a persistência dos dados, todas as atividades são armazenadas no **Local Storage** do navegador.

### 🗄 **Estrutura dos dados**
As atividades são salvas no formato JSON dentro do Local Storage, organizadas da seguinte maneira:

```json
{
  "id": 1700000000000,
  "name": "Workshop de Inteligência Artificial",
  "responsibleType": "Professor",
  "responsible": "Dr. João Silva",
  "date": "2025-03-10",
  "activityType": "Workshop",
  "category": "Engenharia de Computação",
  "subcategory": "Inteligência Artificial",
  "description": "Um workshop prático sobre aprendizado de máquina.",
  "completed": false
}
```

### 🔄 **Principais operações**

- **Salvar atividades:**  
  ```ts
  localStorage.setItem("activities", JSON.stringify(activities));
  ```

- **Carregar atividades salvas:**  
  ```ts
  const storedActivities = localStorage.getItem("activities");
  const activities = storedActivities ? JSON.parse(storedActivities) : [];
  ```

- **Mover para atividades concluídas:**  
  ```ts
  localStorage.setItem("completedActivities", JSON.stringify(completed));
  ```

Dessa forma, mesmo que o usuário feche o navegador, os dados continuarão disponíveis quando ele retornar. ✅

---

## 📌 **Próximos Passos**

🔹 Implementação de um **banco de dados real (Firebase, Supabase, PostgreSQL, etc.)** para sincronização entre dispositivos  
🔹 Melhorias na interface com mais recursos visuais  
🔹 Filtro e busca de atividades cadastradas  

---

## 📄 **Licença**

Este projeto é de código aberto e pode ser utilizado livremente.

📢 **Dúvidas ou sugestões?** Fique à vontade para contribuir! 🚀


