"use client";

import { useState } from "react";
import RoutineCard from "@/components/RoutineCard";

type Exercise = {
  id: number;
  name: string;
  sets: number;
  reps: number;
};

type Routine = {
  id: number;
  name: string;
  description: string;
  type: string;
  exercises: Exercise[];
  favorite: boolean;
};

export default function RoutinesPage() {
  const [routines, setRoutines] = useState<Routine[]>([
    {
      id: 1,
      name: "Rutina de Fuerza",
      description: "Enfocada en aumentar la fuerza general del cuerpo.",
      type: "Fuerza",
      exercises: [
        { id: 1, name: "Sentadillas", sets: 3, reps: 10 },
        { id: 2, name: "Press de banca", sets: 3, reps: 8 },
        { id: 3, name: "Peso muerto", sets: 3, reps: 5 },
      ],
      favorite: false,
    },
    {
      id: 2,
      name: "Rutina de Definición",
      description: "Diseñada para tonificar y definir los músculos.",
      type: "Definición",
      exercises: [
        { id: 1, name: "Zancadas", sets: 3, reps: 12 },
        { id: 2, name: "Flexiones", sets: 3, reps: 15 },
        { id: 3, name: "Abdominales", sets: 3, reps: 20 },
      ],
      favorite: false,
    },
    {
      id: 3,
      name: "Rutina para Principiantes",
      description: "Ideal para quienes están comenzando su viaje fitness.",
      type: "Principiantes",
      exercises: [
        { id: 1, name: "Sentadillas asistidas", sets: 2, reps: 10 },
        { id: 2, name: "Flexiones de rodillas", sets: 2, reps: 8 },
        { id: 3, name: "Plancha", sets: 2, reps: 30 },
      ],
      favorite: false,
    },
    {
      id: 4,
      name: "Rutina Full-Body",
      description: "Trabaja todo el cuerpo en una sola sesión.",
      type: "Full-Body",
      exercises: [
        { id: 1, name: "Burpees", sets: 3, reps: 10 },
        { id: 2, name: "Remo con mancuernas", sets: 3, reps: 12 },
        { id: 3, name: "Sentadillas con salto", sets: 3, reps: 15 },
      ],
      favorite: false,
    },
    {
      id: 5,
      name: "Rutina de Volumen",
      description: "Enfocada en aumentar la masa muscular.",
      type: "Volumen",
      exercises: [
        { id: 1, name: "Press militar", sets: 4, reps: 8 },
        { id: 2, name: "Curl de bíceps", sets: 4, reps: 10 },
        { id: 3, name: "Extensiones de tríceps", sets: 4, reps: 10 },
      ],
      favorite: false,
    },
    {
      id: 6,
      name: "Rutina de calistenia",
      description: "Rutina con peso corporal.",
      type: "Calistenia",
      exercises: [
        { id: 1, name: "Sentadillas con peso corporal", sets: 4, reps: 12 },
        { id: 2, name: "Sentadillas con barra", sets: 4, reps: 10 },
        { id: 3, name: "Sentadillas en máquina Smith", sets: 4, reps: 8 },
      ],
      favorite: false,
    },
  ]);

  const [newRoutine, setNewRoutine] = useState<Routine>({
    id: 0,
    name: "",
    description: "",
    type: "",
    exercises: [],
    favorite: false, // Añadido
  });

  const handleToggleFavorite = (id: number) => {
    setRoutines((prevRoutines) =>
      prevRoutines.map((routine) =>
        routine.id === id
          ? { ...routine, favorite: !routine.favorite }
          : routine
      )
    );
  };

  const favoriteRoutines = routines.filter((routine) => routine.favorite);
  const allRoutines = routines.filter((routine) => !routine.favorite);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mis Rutinas</h1>

      {favoriteRoutines.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Rutinas Favoritas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteRoutines.map((routine) => (
              <RoutineCard
                key={routine.id}
                routine={routine}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-2xl font-semibold mb-4">Todas las Rutinas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allRoutines.map((routine) => (
            <RoutineCard
              key={routine.id}
              routine={routine}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
