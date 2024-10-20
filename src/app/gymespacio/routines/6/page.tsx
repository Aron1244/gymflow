"use client";

import { useState } from "react";
import Link from "next/link";

type Exercise = {
  id: number;
  name: string;
  sets: number;
  reps: string;
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

export default function CalisthenicRoutinePage() {
  const [routine, setRoutine] = useState<Routine>({
    id: 6,
    name: "Rutina de Calistenia",
    description:
      "Una rutina diseñada para desarrollar fuerza y control corporal utilizando principalmente el peso del cuerpo.",
    difficulty: "Intermedio",
    duration: 60,
    exercises: [
      {
        id: 1,
        name: "Dominadas",
        sets: 3,
        reps: "5-8",
        restTime: 90,
        instructions:
          "Agarra la barra con las palmas hacia afuera, cuelga con los brazos extendidos y tira de tu cuerpo hacia arriba hasta que tu barbilla esté por encima de la barra.",
      },
      {
        id: 2,
        name: "Flexiones",
        sets: 3,
        reps: "10-15",
        restTime: 60,
        instructions:
          "Mantén el cuerpo recto, baja el pecho casi hasta tocar el suelo y empuja de vuelta a la posición inicial.",
      },
      {
        id: 3,
        name: "Dips en paralelas",
        sets: 3,
        reps: "8-12",
        restTime: 90,
        instructions:
          "Soporta tu peso en las barras paralelas, baja el cuerpo flexionando los codos y luego empuja hacia arriba hasta extender los brazos completamente.",
      },
      {
        id: 4,
        name: "Pistol squats",
        sets: 3,
        reps: "5-8 por pierna",
        restTime: 90,
        instructions:
          "Párate en una pierna, baja tu cuerpo hasta que el muslo de la pierna de apoyo esté paralelo al suelo, luego empuja hacia arriba para volver a la posición inicial.",
      },
      {
        id: 5,
        name: "Plancha",
        sets: 3,
        reps: "30-60 segundos",
        restTime: 60,
        instructions:
          "Mantén el cuerpo recto y apoyado en los antebrazos y los dedos de los pies, contrayendo el core durante todo el tiempo.",
      },
    ],
    diet: {
      description:
        "Esta dieta está diseñada para apoyar el entrenamiento de calistenia, proporcionando suficientes proteínas para la recuperación muscular y carbohidratos para la energía.",
      meals: [
        {
          name: "Desayuno",
          description:
            "Avena con plátano, almendras y una cucharada de mantequilla de maní. Un batido de proteínas con espinacas y bayas.",
        },
        {
          name: "Almuerzo",
          description:
            "Ensalada de quinoa con pollo a la parrilla, aguacate, tomates cherry y aderezo de limón.",
        },
        {
          name: "Merienda pre-entrenamiento",
          description: "Yogur griego con miel y nueces. Una manzana.",
        },
        {
          name: "Cena post-entrenamiento",
          description:
            "Salmón al horno con batata y brócoli al vapor. Una porción de arroz integral.",
        },
        {
          name: "Snack nocturno",
          description:
            "Cottage cheese con frutas del bosque y semillas de chía.",
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
            Enfócate en la técnica correcta antes de aumentar la dificultad o el
            número de repeticiones.
          </li>
          <li>
            Progresa gradualmente, añadiendo repeticiones o series a medida que
            te fortaleces.
          </li>
          <li>
            Asegúrate de calentar adecuadamente antes de comenzar la rutina para
            prevenir lesiones.
          </li>
          <li>
            Mantén una respiración constante y controlada durante todos los
            ejercicios.
          </li>
          <li>
            Escucha a tu cuerpo y descansa cuando sea necesario. La recuperación
            es crucial para el progreso.
          </li>
          <li>
            Complementa esta rutina con una dieta equilibrada rica en proteínas
            y carbohidratos complejos.
          </li>
          <li>
            Considera incorporar ejercicios de movilidad y flexibilidad en tus
            días de descanso.
          </li>
          <li>
            Si eres principiante, comienza con versiones más fáciles de los
            ejercicios y progresa con el tiempo.
          </li>
        </ul>
      </div>
    </div>
  );
}
