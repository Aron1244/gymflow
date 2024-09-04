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

export default function VolumeRoutinePage() {
  const [routine, setRoutine] = useState<Routine>({
    id: 5,
    name: "Rutina de Volumen",
    description:
      "Una rutina diseñada para aumentar la masa muscular, con énfasis en ejercicios compuestos y altos volúmenes de entrenamiento.",
    difficulty: "Avanzado",
    duration: 75,
    exercises: [
      {
        id: 1,
        name: "Press militar",
        sets: 4,
        reps: 8,
        weight: 50,
        restTime: 90,
        instructions:
          "Empuja la barra directamente sobre tu cabeza, manteniendo el core apretado.",
      },
      {
        id: 2,
        name: "Curl de bíceps",
        sets: 4,
        reps: 10,
        weight: 20,
        restTime: 60,
        instructions:
          "Mantén los codos cerca del cuerpo y curl las mancuernas hacia los hombros.",
      },
      {
        id: 3,
        name: "Extensiones de tríceps",
        sets: 4,
        reps: 10,
        weight: 25,
        restTime: 60,
        instructions:
          "Extiende los brazos sobre la cabeza, manteniendo los codos cerca de las orejas.",
      },
      {
        id: 4,
        name: "Remo inclinado",
        sets: 4,
        reps: 8,
        weight: 60,
        restTime: 90,
        instructions:
          "Inclínate hacia adelante, tira de la barra hacia tu abdomen manteniendo los codos cerca del cuerpo.",
      },
      {
        id: 5,
        name: "Sentadillas frontales",
        sets: 4,
        reps: 8,
        weight: 70,
        restTime: 120,
        instructions:
          "Mantén la barra en la parte frontal de los hombros, baja hasta que los muslos estén paralelos al suelo.",
      },
    ],
    diet: {
      description:
        "Esta dieta está diseñada para apoyar el crecimiento muscular, proporcionando un excedente calórico y abundantes proteínas para la recuperación y el crecimiento muscular.",
      meals: [
        {
          name: "Desayuno",
          description:
            "Batido de proteínas con avena, plátano, mantequilla de cacahuete y leche entera. 3 huevos revueltos con espinacas.",
        },
        {
          name: "Almuerzo",
          description:
            "Pechuga de pollo grande (200g) con arroz integral, aguacate y brócoli al vapor.",
        },
        {
          name: "Merienda pre-entrenamiento",
          description:
            "Yogur griego con granola y frutas. Un puñado de frutos secos.",
        },
        {
          name: "Cena post-entrenamiento",
          description:
            "Filete de ternera (200g) con patatas al horno y ensalada mixta. Un vaso de zumo de naranja.",
        },
        {
          name: "Snack nocturno",
          description:
            "Batido de caseína con leche entera y una cucharada de aceite de linaza.",
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
            Asegúrate de calentar adecuadamente antes de comenzar, ya que
            estarás manejando pesos considerables.
          </li>
          <li>
            Enfócate en la técnica correcta para maximizar el crecimiento
            muscular y prevenir lesiones.
          </li>
          <li>
            Aumenta gradualmente el peso a medida que te vuelves más fuerte,
            pero mantén siempre una buena forma.
          </li>
          <li>
            Consume suficientes proteínas y calorías para apoyar el crecimiento
            muscular.
          </li>
          <li>
            Descansa adecuadamente entre sesiones para permitir la recuperación
            y el crecimiento muscular.
          </li>
          <li>
            Considera trabajar con un entrenador personal para asegurarte de que
            estás realizando los ejercicios correctamente.
          </li>
          <li>
            Mantén un registro de tus progresos para ajustar la rutina y la
            dieta según sea necesario.
          </li>
          <li>
            No descuides el descanso y el sueño, son cruciales para el
            crecimiento muscular.
          </li>
        </ul>
      </div>
    </div>
  );
}
