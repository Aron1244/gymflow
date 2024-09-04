"use client";

import { useState } from "react";
import Link from "next/link";

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

export default function StrengthRoutinePage() {
  const [routine, setRoutine] = useState<Routine>({
    id: 1,
    name: "Rutina de Fuerza",
    description:
      "Una rutina diseñada para aumentar la fuerza general del cuerpo, enfocándose en los principales grupos musculares.",
    difficulty: "Intermedio",
    duration: 60,
    exercises: [
      {
        id: 1,
        name: "Sentadillas",
        sets: 3,
        reps: 10,
        weight: 70,
        restTime: 90,
        instructions:
          "Mantén la espalda recta y baja hasta que tus muslos estén paralelos al suelo.",
      },
      {
        id: 2,
        name: "Press de banca",
        sets: 3,
        reps: 8,
        weight: 60,
        restTime: 120,
        instructions:
          "Baja la barra hasta tocar ligeramente el pecho y luego empuja hacia arriba.",
      },
      {
        id: 3,
        name: "Peso muerto",
        sets: 3,
        reps: 5,
        weight: 100,
        restTime: 150,
        instructions:
          "Mantén la espalda recta y levanta la barra usando las piernas y la espalda.",
      },
      {
        id: 4,
        name: "Remo con barra",
        sets: 3,
        reps: 8,
        weight: 50,
        restTime: 90,
        instructions:
          "Inclínate hacia adelante, mantén la espalda recta y tira de la barra hacia tu abdomen.",
      },
      {
        id: 5,
        name: "Press militar",
        sets: 3,
        reps: 10,
        weight: 40,
        restTime: 90,
        instructions:
          "Empuja la barra directamente sobre tu cabeza, manteniendo el core apretado.",
      },
    ],
    diet: {
      description:
        "Esta dieta está diseñada para apoyar el crecimiento muscular y la recuperación, proporcionando suficientes proteínas y calorías para soportar el entrenamiento de fuerza.",
      meals: [
        {
          name: "Desayuno",
          description:
            "Avena con plátano y almendras, huevos revueltos, y un batido de proteínas.",
        },
        {
          name: "Almuerzo",
          description:
            "Pechuga de pollo a la parrilla, arroz integral, y vegetales al vapor.",
        },
        {
          name: "Merienda",
          description: "Yogur griego con frutas y nueces.",
        },
        {
          name: "Cena",
          description: "Salmón al horno, batata asada, y ensalada verde.",
        },
        {
          name: "Snack nocturno",
          description: "Batido de caseína o cottage cheese con frutas.",
        },
      ],
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/gymuser/routines"
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        &larr; Volver a Rutinas
      </Link>

      <h1 className="text-3xl font-bold mb-6">{routine.name}</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <p className="text-gray-600 mb-4">{routine.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <span className="font-semibold">Dificultad:</span>{" "}
            {routine.difficulty}
          </div>
          <div>
            <span className="font-semibold">Duración:</span> {routine.duration}{" "}
            minutos
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Ejercicios</h2>

      <div className="space-y-6 mb-8">
        {routine.exercises.map((exercise) => (
          <div key={exercise.id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <span className="font-semibold">Series:</span> {exercise.sets}
              </div>
              <div>
                <span className="font-semibold">Repeticiones:</span>{" "}
                {exercise.reps}
              </div>
              <div>
                <span className="font-semibold">Peso:</span> {exercise.weight}{" "}
                kg
              </div>
              <div>
                <span className="font-semibold">Descanso:</span>{" "}
                {exercise.restTime} seg
              </div>
            </div>
            <p className="text-gray-600">{exercise.instructions}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Dieta Recomendada</h2>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <p className="text-gray-600 mb-4">{routine.diet.description}</p>
        <div className="space-y-4">
          {routine.diet.meals.map((meal, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold">{meal.name}</h3>
              <p className="text-gray-600">{meal.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Consejos para esta rutina
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>
            Asegúrate de calentar adecuadamente antes de comenzar la rutina.
          </li>
          <li>
            Mantén una buena forma durante todos los ejercicios para evitar
            lesiones.
          </li>
          <li>Ajusta los pesos según tu nivel de fuerza actual.</li>
          <li>
            Respeta los tiempos de descanso entre series para una recuperación
            adecuada.
          </li>
          <li>Hidrátate bien durante toda la sesión de entrenamiento.</li>
          <li>
            Si sientes dolor o molestia inusual, detén el ejercicio y consulta a
            un profesional.
          </li>
          <li>
            Combina esta rutina con la dieta recomendada para obtener mejores
            resultados.
          </li>
          <li>
            Asegúrate de consumir suficientes proteínas para apoyar la
            recuperación muscular.
          </li>
        </ul>
      </div>
    </div>
  );
}
