"use client";

import { useEffect } from "react";
import { useAuth, Routine, Diet, Video } from "../../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import RoutineCard from "@/components/RoutineCard";
import VideoCard from "@/components/VideoCard";
import DietCard from "@/components/DietCard";

type Exercise = {
  id: number;
  name: string;
  sets: number;
  reps: number;
};

// Removed local Routine type definition as it is imported from AuthContext

// Removed local Video type definition as it is imported from AuthContext

type Meal = {
  name: string;
  description: string;
};

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  // Asumimos que estos datos vendrían de la base de datos o de un estado global
  const favoriteRoutines: Routine[] = user.favoriteRoutines || [];
  const favoriteDietPlans: Diet[] = user.favoriteDietPlans || [];
  const favoriteVideos: Video[] = user.favoriteVideos || [];

  const handleToggleFavorite = (
    id: number | string,
    type: "routine" | "diet" | "video"
  ) => {
    // Implementar la lógica para alternar el estado de favorito
    console.log(`Toggled favorite for ${type} with id: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Sección de datos del usuario */}
            <div className="md:w-1/3 p-8 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-blue-500 text-white rounded-full flex items-center justify-center text-4xl font-bold mb-4">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <h1 className="text-2xl font-semibold text-center">
                  {user.name}
                </h1>
                <p className="text-gray-600 text-center">{user.email}</p>
              </div>
            </div>

            {/* Sección de rutinas y favoritos */}
            <div className="md:w-2/3 p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Rutinas Favoritas
                  </h2>
                  {favoriteRoutines.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {favoriteRoutines.map((routine) => (
                        <RoutineCard
                          routine={{
                            id: 0,
                            name: "",
                            description: "",
                            type: "",
                            exercises: [],
                            favorite: false,
                          }}
                          onToggleFavorite={function (id: number): void {
                            throw new Error("Function not implemented.");
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">
                      No tienes rutinas favoritas.
                    </p>
                  )}
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Planes de Dietas Favoritos
                  </h2>
                  {favoriteDietPlans.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {favoriteDietPlans.map((diet) => (
                        <DietCard
                          diet={{
                            name: "",
                            description: "",
                            meals: [],
                            vegan: [],
                            glutenFree: [],
                          }}
                          dietType={""}
                          mealType={""}
                          onToggleFavorite={function (dietName: string): void {
                            throw new Error("Function not implemented.");
                          }}
                          isFavorite={false}
                        ></DietCard>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No tienes dietas favoritas.</p>
                  )}
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Videos Favoritos
                  </h2>
                  {favoriteVideos.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {favoriteVideos.map((video) => (
                        <VideoCard
                          video={{
                            id: 0,
                            title: "",
                            description: "",
                            url: "",
                            withMachine: false,
                            exercise: "",
                            difficulty: "Principiante",
                            isFavorite: false,
                          }}
                          toggleFavorite={function (id: number): void {
                            throw new Error("Function not implemented.");
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No tienes videos favoritos.</p>
                  )}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
