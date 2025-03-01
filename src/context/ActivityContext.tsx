"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface Activity {
  id: number;
  name: string;
  responsible: string;
  date: string;
  category: string;
  subcategory: string;
  description: string;
  completed: boolean;
}

interface ActivityContextType {
  activities: Activity[];
  addActivity: (activity: Activity) => void;
  editActivity: (updatedActivity: Activity) => void;
  deleteActivity: (id: number) => void;
  completeActivity: (id: number) => void;
}

const ActivityContext = createContext<ActivityContextType | undefined>(
  undefined
);

export function ActivityProvider({ children }: { children: React.ReactNode }) {
  const [activities, setActivities] = useState<Activity[]>([]);

  // Carregar atividades do Local Storage ao iniciar
  useEffect(() => {
    const storedActivities = localStorage.getItem("activities");
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    }
  }, []);

  // Salvar atividades no Local Storage sempre que mudar
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const addActivity = (activity: Activity) => {
    setActivities((prev) => [...prev, activity]);
  };

  const editActivity = (updatedActivity: Activity) => {
    setActivities((prev) =>
      prev.map((act) => (act.id === updatedActivity.id ? updatedActivity : act))
    );
  };

  const deleteActivity = (id: number) => {
    setActivities((prev) => prev.filter((activity) => activity.id !== id));
  };

  const completeActivity = (id: number) => {
    setActivities((prev) =>
      prev.map((activity) =>
        activity.id === id ? { ...activity, completed: true } : activity
      )
    );
  };

  return (
    <ActivityContext.Provider
      value={{
        activities,
        addActivity,
        editActivity,
        deleteActivity,
        completeActivity,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
}

export function useActivity() {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error("useActivity deve ser usado dentro de um ActivityProvider");
  }
  return context;
}
