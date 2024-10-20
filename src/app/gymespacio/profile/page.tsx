"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import RoutineCard from "@/components/RoutineCard";
import VideoCard from "@/components/VideoCard";
import DietCard from "@/components/DietCard";

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const [favoriteRoutines, setFavoriteRoutines] = useState<any[]>([]);
  const [favoriteVideos, setFavoriteVideos] = useState<any[]>([]);
  const [favoriteDietPlans, setFavoriteDietPlans] = useState<any[]>([]);
  const [isFavorite, setIsFavorite] = useState(true); // or false, depending on initial state

  const fetchData = async () => {
    // Simulando una llamada a una API que devuelve arreglos vacíos
    const routines: any[] = [
      {
        id: 1,
        name: "Rutina de Fuerza",
        description: "Enfocada en aumentar la fuerza general del cuerpo.",
        type: "Fuerza",
        exercises: [
          { id: 1, name: "Sentadillas", sets: 3, reps: 10 },
          { id: 2, name: "Press de banca", sets: 3, reps: 8 },
          { id: 3, name: "Peso muerto", sets: 3, reps: 5 },
        ],
        favorite: true,
      },
    ];

    const videos: any[] = [
      {
        id: 1,
        title: "Sentadillas con peso corporal",
        description:
          "Aprende la técnica correcta de las sentadillas sin equipo",
        url: "https://www.youtube.com/embed/aclHkVaku9U",
        withMachine: false,
        exercise: "Sentadillas",
        difficulty: "Principiante",
        isFavorite: true,
      },
      {
        id: 3,
        title: "Sentadillas en máquina Smith",
        description: "Guía para hacer sentadillas en la máquina Smith",
        url: "https://www.youtube.com/embed/IGKhneJqGko",
        withMachine: true,
        exercise: "Sentadillas",
        difficulty: "Intermedio",
        isFavorite: true,
      },
    ];
    const diets: any[] = [
      {
        name: "Dieta para Rutina de Fuerza",
        description:
          "Esta dieta está diseñada para apoyar el crecimiento muscular y la recuperación, proporcionando suficientes proteínas y calorías para soportar el entrenamiento de fuerza.",
        routine: "Fuerza",
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
        vegan: [
          {
            name: "Desayuno",
            description:
              "Batido de proteína vegetal con plátano, espinacas y mantequilla de almendras.",
          },
          {
            name: "Almuerzo",
            description: "Tofu salteado con quinoa y vegetales variados.",
          },
          { name: "Merienda", description: "Hummus con zanahorias y apio." },
          {
            name: "Cena",
            description: "Lentejas con arroz integral y brócoli al vapor.",
          },
          {
            name: "Snack nocturno",
            description: "Yogur de soja con semillas de chía y bayas.",
          },
        ],
        glutenFree: [
          {
            name: "Desayuno",
            description:
              "Tortilla de claras con espinacas y batata hash browns.",
          },
          {
            name: "Almuerzo",
            description:
              "Pechuga de pavo a la plancha con quinoa y vegetales asados.",
          },
          {
            name: "Merienda",
            description: "Queso cottage con frutas y nueces.",
          },
          {
            name: "Cena",
            description: "Filete de pescado con arroz salvaje y espárragos.",
          },
          {
            name: "Snack nocturno",
            description:
              "Batido de proteínas con leche sin lactosa y frutas del bosque.",
          },
        ],
        isFavorite: true,
      },
    ];

    setFavoriteRoutines(routines);
    setFavoriteVideos(videos);
    setFavoriteDietPlans(diets);
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      fetchData();
    }
  }, [user, router]);

  const onToggleFavoriteRoutine = () => {
    const updatedFavoriteRoutines = favoriteRoutines.filter(
      (favRoutine) => favRoutine.id !== favRoutine.id
    );
    setFavoriteRoutines(updatedFavoriteRoutines);
  };

  const onToggleFavoriteVideo = (video: any) => {
    // Filtrar el arreglo para eliminar el video por id
    const updatedFavoriteVideos = favoriteVideos.filter(
      (favVideo) => favVideo.id !== video.id
    );
    setFavoriteVideos(updatedFavoriteVideos);
  };

  const onToggleFavoriteDiet = () => {
    const updatedFavoriteDiet = favoriteRoutines.filter(
      (favDiet) => favDiet.id !== favDiet.id
    );
    setFavoriteDietPlans(updatedFavoriteDiet);
  };

  if (!user) return null;

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
                      {favoriteRoutines.map((routine, index) => (
                        <RoutineCard
                          key={index}
                          routine={routine}
                          onToggleFavorite={() => onToggleFavoriteRoutine()}
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
                    Videos Favoritos
                  </h2>
                  {favoriteVideos.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {favoriteVideos.map((video) => (
                        <VideoCard
                          key={video.id}
                          video={video}
                          toggleFavorite={() => onToggleFavoriteVideo(video)}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No tienes videos favoritos.</p>
                  )}
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Planes de Dietas Favoritos
                  </h2>
                  {favoriteDietPlans.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {favoriteDietPlans.map((diet, index) => (
                        <DietCard
                          key={index}
                          diet={diet}
                          dietType={""}
                          mealType={""}
                          onToggleFavorite={() => onToggleFavoriteDiet()}
                          isFavorite={isFavorite}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">
                      No tienes planes de dietas favoritos.
                    </p>
                  )}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
