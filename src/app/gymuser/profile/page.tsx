"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Routine = {
  id: number;
  name: string;
  description: string;
};

export default function ProfilePage() {
  const { user, logout, updateSelectedRoutines } = useAuth();
  const router = useRouter();
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [selectedRoutines, setSelectedRoutines] = useState<number[]>([]);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      setSelectedRoutines(user.selectedRoutines);
    }
  }, [user, router]);

  useEffect(() => {
    // Simulating fetching routines from an API
    const fetchedRoutines = [
      {
        id: 1,
        name: "Rutina de Fuerza",
        description: "Enfocada en aumentar la fuerza general.",
      },
      {
        id: 2,
        name: "Rutina de Definición",
        description: "Para tonificar y definir los músculos.",
      },
      {
        id: 3,
        name: "Rutina para Principiantes",
        description: "Ideal para quienes están comenzando.",
      },
      {
        id: 4,
        name: "Rutina Full-Body",
        description: "Trabaja todos los grupos musculares.",
      },
      {
        id: 5,
        name: "Rutina de Volumen",
        description: "Diseñada para aumentar la masa muscular.",
      },
    ];
    setRoutines(fetchedRoutines);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const handleRoutineToggle = (routineId: number) => {
    setSelectedRoutines((prev) =>
      prev.includes(routineId)
        ? prev.filter((id) => id !== routineId)
        : [...prev, routineId]
    );
  };

  const handleSaveRoutines = () => {
    updateSelectedRoutines(selectedRoutines);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Perfil de {user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-xl font-semibold">Tus Rutinas</h2>
                {routines.map((routine) => (
                  <div key={routine.id} className="flex items-start">
                    <input
                      type="checkbox"
                      id={`routine-${routine.id}`}
                      checked={selectedRoutines.includes(routine.id)}
                      onChange={() => handleRoutineToggle(routine.id)}
                      className="mt-1"
                    />
                    <label htmlFor={`routine-${routine.id}`} className="ml-2">
                      <span className="font-medium">{routine.name}</span>
                      <p className="text-sm text-gray-500">
                        {routine.description}
                      </p>
                    </label>
                  </div>
                ))}
                <button
                  onClick={handleSaveRoutines}
                  className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Guardar Selección
                </button>
              </div>
            </div>
            <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
              <Link
                href="/gymuser/routines"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Ver todas las rutinas &rarr;
              </Link>
            </div>
            <button
              onClick={handleLogout}
              className="mt-8 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
