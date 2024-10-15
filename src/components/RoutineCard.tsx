"use client";

import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";
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
  favorite: boolean;
};

type RoutineCardProps = {
  routine: Routine;
  onToggleFavorite: (id: number) => void;
};

const RoutineCard = ({ routine, onToggleFavorite }: RoutineCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-2">{routine.name}</h2>
        <button onClick={() => onToggleFavorite(routine.id)}>
          {routine.favorite ? (
            <StarIconSolid className="h-6 w-6 text-yellow-500" />
          ) : (
            <StarIcon className="h-6 w-6 text-gray-300" />
          )}
        </button>
      </div>
      <p className="text-gray-600 mb-2">{routine.description}</p>
      <p className="text-sm text-blue-500 mb-4">Tipo: {routine.type}</p>
      <h3 className="font-semibold mb-2">Ejercicios:</h3>
      <ul className="space-y-1 mb-4">
        {routine.exercises.map((exercise) => (
          <li key={exercise.id} className="flex justify-between items-center">
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
  );
};

export default RoutineCard;
