"use client";

import { useState } from "react";
import Link from "next/link";

type Exercise = {
  id: number;
  name: string;
  sets: number;
  reps: number;
};

type Routine = {
  id: number;
  name: string;
  exercises: Exercise[];
};

export default function RoutinesPage() {
  const [routines, setRoutines] = useState<Routine[]>([
    {
      id: 1,
      name: "Rutina de Fuerza",
      exercises: [
        { id: 1, name: "Sentadillas", sets: 3, reps: 10 },
        { id: 2, name: "Press de banca", sets: 3, reps: 8 },
        { id: 3, name: "Peso muerto", sets: 3, reps: 5 },
      ],
    },
    {
      id: 2,
      name: "Rutina de Cardio",
      exercises: [
        { id: 1, name: "Correr", sets: 1, reps: 1 },
        { id: 2, name: "Saltos de cuerda", sets: 3, reps: 50 },
        { id: 3, name: "Burpees", sets: 3, reps: 15 },
      ],
    },
  ]);

  const [newRoutine, setNewRoutine] = useState<Routine>({
    id: 0,
    name: "",
    exercises: [],
  });

  const [newExercise, setNewExercise] = useState<Exercise>({
    id: 0,
    name: "",
    sets: 0,
    reps: 0,
  });

  const handleAddExercise = () => {
    if (newExercise.name && newExercise.sets > 0 && newExercise.reps > 0) {
      setNewRoutine({
        ...newRoutine,
        exercises: [
          ...newRoutine.exercises,
          { ...newExercise, id: Date.now() },
        ],
      });
      setNewExercise({ id: 0, name: "", sets: 0, reps: 0 });
    }
  };

  const handleCreateRoutine = () => {
    if (newRoutine.name && newRoutine.exercises.length > 0) {
      setRoutines([...routines, { ...newRoutine, id: Date.now() }]);
      setNewRoutine({ id: 0, name: "", exercises: [] });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mis Rutinas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {routines.map((routine) => (
          <div key={routine.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{routine.name}</h2>
            <ul className="space-y-2">
              {routine.exercises.map((exercise) => (
                <li
                  key={exercise.id}
                  className="flex justify-between items-center"
                >
                  <span>{exercise.name}</span>
                  <span className="text-gray-600">
                    {exercise.sets} x {exercise.reps}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href={`/gymuser/routines/${routine.id}`}
              className="mt-4 inline-block text-blue-600 hover:text-blue-800"
            >
              Ver detalles
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Crear Nueva Rutina</h2>
        <div className="mb-4">
          <label
            htmlFor="routineName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre de la Rutina
          </label>
          <input
            type="text"
            id="routineName"
            value={newRoutine.name}
            onChange={(e) =>
              setNewRoutine({ ...newRoutine, name: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Agregar Ejercicio</h3>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 px-2 mb-2">
              <input
                type="text"
                placeholder="Nombre del ejercicio"
                value={newExercise.name}
                onChange={(e) =>
                  setNewExercise({ ...newExercise, name: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="w-full md:w-1/4 px-2 mb-2">
              <input
                type="number"
                placeholder="Series"
                value={newExercise.sets || ""}
                onChange={(e) =>
                  setNewExercise({
                    ...newExercise,
                    sets: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="w-full md:w-1/4 px-2 mb-2">
              <input
                type="number"
                placeholder="Repeticiones"
                value={newExercise.reps || ""}
                onChange={(e) =>
                  setNewExercise({
                    ...newExercise,
                    reps: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="w-full md:w-1/4 px-2 mb-2">
              <button
                onClick={handleAddExercise}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
        {newRoutine.exercises.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">
              Ejercicios en la nueva rutina:
            </h3>
            <ul className="list-disc list-inside">
              {newRoutine.exercises.map((exercise) => (
                <li key={exercise.id}>
                  {exercise.name} - {exercise.sets} x {exercise.reps}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          onClick={handleCreateRoutine}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Crear Rutina
        </button>
      </div>
    </div>
  );
}
