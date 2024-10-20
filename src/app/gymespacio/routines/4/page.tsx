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

export default function FullBodyRoutinePage() {
  const [routine, setRoutine] = useState<Routine>({
    id: 4,
    name: "Rutina Full-Body",
    description:
      "Una rutina completa que trabaja todos los grupos musculares principales en una sola sesión, ideal para quienes buscan eficiencia y variedad.",
    difficulty: "Intermedio",
    duration: 60,
    exercises: [
      {
        id: 1,
        name: "Burpees",
        sets: 3,
        reps: 10,
        restTime: 60,
        instructions:
          "Realiza el movimiento completo: flexión, salto y palmada por encima de la cabeza.",
      },
      {
        id: 2,
        name: "Remo con mancuernas",
        sets: 3,
        reps: 12,
        restTime: 60,
        instructions:
          "Inclínate hacia adelante, mantén la espalda recta y tira de las mancuernas hacia tu abdomen.",
      },
      {
        id: 3,
        name: "Sentadillas con salto",
        sets: 3,
        reps: 15,
        restTime: 60,
        instructions:
          "Realiza una sentadilla profunda y salta explosivamente al subir.",
      },
      {
        id: 4,
        name: "Push-ups con rotación",
        sets: 3,
        reps: 10,
        restTime: 60,
        instructions:
          "Después de cada flexión, gira tu cuerpo hacia un lado elevando un brazo hacia el techo.",
      },
      {
        id: 5,
        name: "Plancha con toques de hombro",
        sets: 3,
        reps: 20,
        restTime: 60,
        instructions:
          "En posición de plancha, toca tu hombro opuesto con cada mano alternadamente.",
      },
    ],
    diet: {
      description:
        "Esta dieta está diseñada para proporcionar energía y nutrientes para una rutina full-body intensa, con un equilibrio de proteínas, carbohidratos complejos y grasas saludables.",
      meals: [
        {
          name: "Desayuno",
          description:
            "Batido de proteínas con plátano, espinacas, avena y mantequilla de almendras.",
        },
        {
          name: "Almuerzo",
          description:
            "Bowl de quinoa con pollo a la parrilla, aguacate, garbanzos y verduras asadas.",
        },
        {
          name: "Merienda pre-entrenamiento",
          description: "Tostada integral con hummus y rodajas de tomate.",
        },
        {
          name: "Cena post-entrenamiento",
          description:
            "Salmón al horno con batata y brócoli al vapor. Una porción de arroz integral.",
        },
        {
          name: "Snack nocturno",
          description: "Yogur griego con nueces y bayas.",
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
            Realiza un calentamiento completo antes de comenzar, ya que estarás
            trabajando todo el cuerpo.
          </li>
          <li>
            Mantén una buena forma en cada ejercicio, incluso si eso significa
            reducir el número de repeticiones.
          </li>
          <li>
            Ajusta la intensidad según tu nivel de condición física. Puedes
            modificar los ejercicios si es necesario.
          </li>
          <li>
            Hidrátate bien durante toda la sesión, ya que es una rutina intensa.
          </li>
          <li>
            Escucha a tu cuerpo y toma descansos adicionales si los necesitas.
          </li>
          <li>
            Realiza esta rutina 2-3 veces por semana, dejando al menos un día de
            descanso entre sesiones.
          </li>
          <li>
            Asegúrate de consumir una comida rica en proteínas y carbohidratos
            dentro de las 2 horas posteriores al entrenamiento.
          </li>
          <li>
            Prioriza el descanso y el sueño para una recuperación adecuada.
          </li>
        </ul>
      </div>
    </div>
  );
}
