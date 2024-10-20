'use client';

import React, { useState } from 'react';

type Exercise = {
  id: number;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  restTime: number;
  instructions: string;
};

type Meal = {
  name: string;
  description: string;
};

type Diet = {
  description: string;
  meals: Meal[];
};

type Routine = {
  id: number;
  name: string;
  description: string;
  difficulty: "Principiante" | "Intermedio" | "Avanzado";
  duration: number;
  exercises: Exercise[];
  diet: Diet;
};

const FormCreate: React.FC = () => {
  const [routines, setRoutines] = useState<Routine[]>([]);

  const [videos, setVideos] = useState<any[]>([]);

  const [diets, setDiets] = useState<any[]>([]);

  const addRoutine = (e: React.FormEvent) => {
    e.preventDefault();
    const newRoutine: Routine = {
      id: routines.length + 1,
      name: (e.target as any).name.value,
      description: (e.target as any).description.value,
      difficulty: (e.target as any).difficulty.value,
      duration: parseInt((e.target as any).duration.value),
      exercises: [],
      diet: {
        description: (e.target as any).dietDescription.value,
        meals: [],
      },
    };
    setRoutines([...routines, newRoutine]);
  };

  const addVideo = (e: React.FormEvent) => {
    e.preventDefault();
    const newVideo = {
      id: videos.length + 1,
      title: (e.target as any).title.value,
      description: (e.target as any).description.value,
      url: (e.target as any).url.value,
      withMachine: (e.target as any).withMachine.checked,
      exercise: (e.target as any).exercise.value,
      difficulty: (e.target as any).difficulty.value,
      isFavorite: false,
    };
    setVideos([...videos, newVideo]);
  };

  const addDiet = (e: React.FormEvent) => {
    e.preventDefault();
    const newDiet = {
      name: (e.target as any).name.value,
      description: (e.target as any).description.value,
      routine: (e.target as any).routine.value,
      meals: [],
      vegan: [],
      glutenFree: [],
      isFavorite: false,
    };
    setDiets([...diets, newDiet]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Rutinas, Videos y Dietas</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Agregar Rutina</h2>
        <form onSubmit={addRoutine} className="bg-white p-4 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input type="text" name="name" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Descripción</label>
            <input type="text" name="description" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Dificultad</label>
            <select name="difficulty" className="w-full p-2 border rounded" required>
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Duración (minutos)</label>
            <input type="number" name="duration" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Descripción de la Dieta</label>
            <input type="text" name="dietDescription" className="w-full p-2 border rounded" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Agregar Rutina</button>
        </form>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Agregar Video</h2>
        <form onSubmit={addVideo} className="bg-white p-4 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">Título</label>
            <input type="text" name="title" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Descripción</label>
            <input type="text" name="description" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">URL</label>
            <input type="text" name="url" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Con Máquina</label>
            <input type="checkbox" name="withMachine" className="mr-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Ejercicio</label>
            <input type="text" name="exercise" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Dificultad</label>
            <input type="text" name="difficulty" className="w-full p-2 border rounded" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Agregar Video</button>
        </form>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Agregar Dieta</h2>
        <form onSubmit={addDiet} className="bg-white p-4 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input type="text" name="name" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Descripción</label>
            <input type="text" name="description" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Rutina</label>
            <input type="text" name="routine" className="w-full p-2 border rounded" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Agregar Dieta</button>
        </form>
      </div>
    </div>
  );
};

export default FormCreate;