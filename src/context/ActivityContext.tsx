"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Tipo para uma atividade
type Activity = {
  id: number;
  name: string;
  responsibleType: string;
  responsible: string;
  registrationNumber?: string;
  date: string;
  category: string;
  subcategory: string;
  description: string;
};

// Tipo do contexto
type ActivityContextType = {
  activities: Activity[];
  addActivity: (activity: Activity) => void;
};

const ActivityContext = createContext<ActivityContextType | undefined>(
  undefined
);

export const ActivityProvider = ({ children }: { children: ReactNode }) => {
  const [activities, setActivities] = useState<Activity[]>([]);

  const addActivity = (activity: Activity) => {
    setActivities((prev) => [...prev, { ...activity, id: prev.length + 1 }]);
  };

  return (
    <ActivityContext.Provider value={{ activities, addActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivity = () => {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error("useActivity deve ser usado dentro de um ActivityProvider");
  }
  return context;
};
