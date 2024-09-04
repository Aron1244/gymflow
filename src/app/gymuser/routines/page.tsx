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
  description: string;
  type: string;
  exercises: Exercise[];
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
    },
  ]);

  const [newRoutine, setNewRoutine] = useState<Routine>({
    id: 0,
    name: "",
    description: "",
    type: "",
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
    if (newRoutine.name && newRoutine.type && newRoutine.exercises.length > 0) {
      setRoutines([...routines, { ...newRoutine, id: Date.now() }]);
      setNewRoutine({
        id: 0,
        name: "",
        description: "",
        type: "",
        exercises: [],
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mis Rutinas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {routines.map((routine) => (
          <div key={routine.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{routine.name}</h2>
            <p className="text-gray-600 mb-2">{routine.description}</p>
            <p className="text-sm text-blue-500 mb-4">Tipo: {routine.type}</p>
            <h3 className="font-semibold mb-2">Ejercicios:</h3>
            <ul className="space-y-1 mb-4">
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
              className="text-blue-600 hover:text-blue-800"
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
          <label
            htmlFor="routineDescription"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Descripción
          </label>
          <textarea
            id="routineDescription"
            value={newRoutine.description}
            onChange={(e) =>
              setNewRoutine({ ...newRoutine, description: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="routineType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tipo de Rutina
          </label>
          <select
            id="routineType"
            value={newRoutine.type}
            onChange={(e) =>
              setNewRoutine({ ...newRoutine, type: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Selecciona un tipo</option>
            <option value="Fuerza">Fuerza</option>
            <option value="Definición">Definición</option>
            <option value="Principiantes">Principiantes</option>
            <option value="Full-Body">Full-Body</option>
            <option value="Volumen">Volumen</option>
          </select>
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
