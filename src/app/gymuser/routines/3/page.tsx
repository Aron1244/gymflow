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

export default function BeginnerRoutinePage() {
  const [routine, setRoutine] = useState<Routine>({
    id: 3,
    name: "Rutina para Principiantes",
    description:
      "Una rutina diseñada para personas que están comenzando su viaje fitness, con ejercicios básicos y énfasis en la técnica correcta.",
    difficulty: "Principiante",
    duration: 30,
    exercises: [
      {
        id: 1,
        name: "Sentadillas asistidas",
        sets: 2,
        reps: 10,
        restTime: 60,
        instructions:
          "Usa una silla o soporte para ayudarte a bajar y subir. Mantén la espalda recta.",
      },
      {
        id: 2,
        name: "Flexiones de rodillas",
        sets: 2,
        reps: 8,
        restTime: 60,
        instructions:
          "Apoya las rodillas en el suelo y mantén el cuerpo recto desde las rodillas hasta la cabeza.",
      },
      {
        id: 3,
        name: "Plancha",
        sets: 2,
        reps: 30,
        restTime: 60,
        instructions:
          "Mantén el cuerpo en línea recta, apoyándote en los antebrazos y los dedos de los pies.",
      },
      {
        id: 4,
        name: "Elevaciones de pantorrilla",
        sets: 2,
        reps: 15,
        restTime: 45,
        instructions:
          "Párate en el borde de un escalón y eleva los talones lo más alto posible.",
      },
      {
        id: 5,
        name: "Superman",
        sets: 2,
        reps: 10,
        restTime: 45,
        instructions:
          "Acostado boca abajo, levanta simultáneamente brazos y piernas del suelo.",
      },
    ],
    diet: {
      description:
        "Esta dieta está diseñada para principiantes, proporcionando una nutrición equilibrada para apoyar el nuevo régimen de ejercicios y promover hábitos alimenticios saludables.",
      meals: [
        {
          name: "Desayuno",
          description:
            "Tostadas integrales con aguacate y huevo revuelto. Un vaso de zumo de naranja natural.",
        },
        {
          name: "Almuerzo",
          description:
            "Ensalada de pollo a la parrilla con verduras variadas y vinagreta ligera. Una pieza de fruta.",
        },
        {
          name: "Merienda",
          description: "Yogur natural con un puñado de nueces y miel.",
        },
        {
          name: "Cena",
          description:
            "Pescado al horno con patatas y verduras al vapor. Una pequeña porción de arroz integral.",
        },
        {
          name: "Snack nocturno (opcional)",
          description: "Un vaso de leche desnatada o una infusión de hierbas.",
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
            Enfócate en realizar cada ejercicio con la técnica correcta, incluso
            si eso significa hacer menos repeticiones.
          </li>
          <li>
            No te presiones demasiado. Es mejor progresar lentamente que
            lesionarse por exceso de entusiasmo.
          </li>
          <li>
            Respira de manera constante durante los ejercicios. Exhala en el
            esfuerzo e inhala en la relajación.
          </li>
          <li>
            Escucha a tu cuerpo. Si sientes dolor agudo, detente y consulta a un
            profesional.
          </li>
          <li>
            Mantente hidratado antes, durante y después del entrenamiento.
          </li>
          <li>
            Sé consistente. La regularidad es clave para ver resultados y formar
            el hábito del ejercicio.
          </li>
          <li>
            Combina esta rutina con la dieta recomendada para obtener mejores
            resultados.
          </li>
          <li>
            No te saltes comidas. Es importante mantener un aporte constante de
            nutrientes a lo largo del día.
          </li>
        </ul>
      </div>
    </div>
  );
}
