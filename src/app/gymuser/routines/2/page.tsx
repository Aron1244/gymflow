"use client";

import { useState } from "react";
import Link from "next/link";

type Exercise = {
  id: number;
  name: string;
  sets: number;
  reps: number;
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

export default function DefinitionRoutinePage() {
  const [routine, setRoutine] = useState<Routine>({
    id: 2,
    name: "Rutina de Definición",
    description:
      "Una rutina diseñada para tonificar y definir los músculos, con énfasis en ejercicios de alta repetición y poco descanso.",
    difficulty: "Intermedio",
    duration: 45,
    exercises: [
      {
        id: 1,
        name: "Zancadas",
        sets: 3,
        reps: 12,
        restTime: 45,
        instructions:
          "Alterna las piernas, manteniendo el torso recto y los abdominales contraídos.",
      },
      {
        id: 2,
        name: "Flexiones",
        sets: 3,
        reps: 15,
        restTime: 45,
        instructions:
          "Mantén el cuerpo en línea recta y baja el pecho casi hasta tocar el suelo.",
      },
      {
        id: 3,
        name: "Abdominales",
        sets: 3,
        reps: 20,
        restTime: 45,
        instructions:
          "Eleva los hombros del suelo, manteniendo la parte baja de la espalda presionada contra el suelo.",
      },
      {
        id: 4,
        name: "Burpees",
        sets: 3,
        reps: 10,
        restTime: 60,
        instructions:
          "Realiza el movimiento completo: flexión, salto y palmada por encima de la cabeza.",
      },
      {
        id: 5,
        name: "Mountain Climbers",
        sets: 3,
        reps: 30,
        restTime: 45,
        instructions:
          "Mantén las caderas bajas y alterna las rodillas hacia el pecho rápidamente.",
      },
    ],
    diet: {
      description:
        "Esta dieta está diseñada para apoyar la definición muscular, con un enfoque en alimentos bajos en grasa y ricos en proteínas para mantener la masa muscular mientras se reduce la grasa corporal.",
      meals: [
        {
          name: "Desayuno",
          description: "Claras de huevo con espinacas y avena integral.",
        },
        {
          name: "Almuerzo",
          description:
            "Pechuga de pavo a la plancha con ensalada mixta y quinoa.",
        },
        {
          name: "Merienda",
          description:
            "Batido de proteínas con frutas bajas en azúcar (como fresas o arándanos).",
        },
        {
          name: "Cena",
          description: "Pescado blanco al vapor con brócoli y batata al horno.",
        },
        {
          name: "Snack nocturno",
          description: "Yogur griego bajo en grasa con semillas de chía.",
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              <div>
                <span className="font-semibold">Series:</span> {exercise.sets}
              </div>
              <div>
                <span className="font-semibold">Repeticiones:</span>{" "}
                {exercise.reps}
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
            Mantén un ritmo constante y controla tu respiración durante los
            ejercicios.
          </li>
          <li>
            Enfócate en la contracción muscular en cada repetición para
            maximizar la definición.
          </li>
          <li>
            Minimiza los tiempos de descanso para mantener la intensidad alta.
          </li>
          <li>
            Combina esta rutina con la dieta recomendada para mejores resultados
            de definición.
          </li>
          <li>Hidrátate bien antes, durante y después del entrenamiento.</li>
          <li>Escucha a tu cuerpo y ajusta la intensidad si es necesario.</li>
          <li>
            Considera incorporar ejercicio cardiovascular adicional para
            aumentar la quema de grasa.
          </li>
          <li>
            Mantén un déficit calórico moderado para promover la pérdida de
            grasa mientras mantienes la masa muscular.
          </li>
        </ul>
      </div>
    </div>
  );
}
