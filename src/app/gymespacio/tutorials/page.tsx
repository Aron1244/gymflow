"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import VideoCard from "@/components/VideoCard";

type Video = {
  id: number;
  title: string;
  description: string;
  url: string;
  withMachine: boolean;
  exercise: string;
  difficulty: "Principiante" | "Intermedio" | "Avanzado";
  isFavorite: boolean;
};

export default function TutorialsPage() {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: 1,
      title: "Sentadillas con peso corporal",
      description: "Aprende la técnica correcta de las sentadillas sin equipo",
      url: "https://www.youtube.com/embed/aclHkVaku9U",
      withMachine: false,
      exercise: "Sentadillas",
      difficulty: "Principiante",
      isFavorite: false,
    },
    {
      id: 2,
      title: "Sentadillas con barra",
      description: "Cómo realizar sentadillas con barra de forma segura",
      url: "https://www.youtube.com/embed/SW_C1A-rejs",
      withMachine: false,
      exercise: "Sentadillas",
      difficulty: "Intermedio",
      isFavorite: false,
    },
    {
      id: 3,
      title: "Sentadillas en máquina Smith",
      description: "Guía para hacer sentadillas en la máquina Smith",
      url: "https://www.youtube.com/embed/IGKhneJqGko",
      withMachine: true,
      exercise: "Sentadillas",
      difficulty: "Intermedio",
      isFavorite: false,
    },
    {
      id: 4,
      title: "Flexiones (alternativa sin equipo)",
      description:
        "Cómo hacer flexiones correctamente como alternativa al press de banca",
      url: "https://www.youtube.com/embed/IODxDxX7oi4",
      withMachine: false,
      exercise: "Press de banca",
      difficulty: "Principiante",
      isFavorite: false,
    },
    {
      id: 5,
      title: "Press de banca con barra",
      description: "Técnica correcta para el press de banca con barra libre",
      url: "https://www.youtube.com/embed/vcBig73ojpE",
      withMachine: false,
      exercise: "Press de banca",
      difficulty: "Intermedio",
      isFavorite: false,
    },
    {
      id: 6,
      title: "Press de banca en máquina",
      description: "Cómo usar la máquina de press de banca",
      url: "https://www.youtube.com/embed/xUm0BiZCWlQ",
      withMachine: true,
      exercise: "Press de banca",
      difficulty: "Principiante",
      isFavorite: false,
    },
    {
      id: 7,
      title: "Peso muerto con mancuernas",
      description: "Técnica de peso muerto usando mancuernas",
      url: "https://www.youtube.com/embed/lJ3QwaXNJfw",
      withMachine: false,
      exercise: "Peso muerto",
      difficulty: "Intermedio",
      isFavorite: false,
    },
    {
      id: 8,
      title: "Peso muerto con barra",
      description: "Cómo realizar el peso muerto con barra de forma segura",
      url: "https://www.youtube.com/embed/op9kVnSso6Q",
      withMachine: false,
      exercise: "Peso muerto",
      difficulty: "Avanzado",
      isFavorite: false,
    },
    {
      id: 9,
      title: "Peso muerto en máquina",
      description: "Guía para hacer peso muerto en máquina",
      url: "https://www.youtube.com/embed/AvCt5_u_3Rk",
      withMachine: true,
      exercise: "Peso muerto",
      difficulty: "Principiante",
      isFavorite: false,
    },
    {
      id: 10,
      title: "Curl de bíceps con banda elástica",
      description: "Cómo hacer curl de bíceps con una banda elástica",
      url: "https://www.youtube.com/embed/OAH9Aj7pCSs",
      withMachine: false,
      exercise: "Curl de bíceps",
      difficulty: "Principiante",
      isFavorite: false,
    },
    {
      id: 11,
      title: "Curl de bíceps con barra",
      description: "Técnica correcta para el curl de bíceps con barra",
      url: "https://www.youtube.com/embed/ykJmrZ5v0Oo",
      withMachine: false,
      exercise: "Curl de bíceps",
      difficulty: "Intermedio",
      isFavorite: false,
    },
    {
      id: 12,
      title: "Curl de bíceps en máquina",
      description: "Cómo usar la máquina de curl de bíceps",
      url: "https://www.youtube.com/embed/RFg1FZQ1YBM",
      withMachine: true,
      exercise: "Curl de bíceps",
      difficulty: "Principiante",
      isFavorite: false,
    },
    {
      id: 13,
      title: "Fondos de tríceps (sin equipo)",
      description: "Cómo hacer fondos de tríceps usando una silla o banco",
      url: "https://www.youtube.com/embed/6kALZikXxLc",
      withMachine: false,
      exercise: "Extensiones de tríceps",
      difficulty: "Principiante",
      isFavorite: false,
    },
    {
      id: 14,
      title: "Extensiones de tríceps con mancuerna",
      description: "Técnica para extensiones de tríceps con mancuerna",
      url: "https://www.youtube.com/embed/_gsUck-7M74",
      withMachine: false,
      exercise: "Extensiones de tríceps",
      difficulty: "Intermedio",
      isFavorite: false,
    },
    {
      id: 15,
      title: "Extensiones de tríceps en polea",
      description:
        "Cómo realizar extensiones de tríceps en la máquina de poleas",
      url: "https://www.youtube.com/embed/2-LAMcpzODU",
      withMachine: true,
      exercise: "Extensiones de tríceps",
      difficulty: "Intermedio",
      isFavorite: false,
    },
    {
      id: 16,
      title: "Dominadas para principiantes",
      description:
        "Aprende la técnica correcta para hacer dominadas desde cero",
      url: "https://www.youtube.com/embed/eGo4IYlbE5g",
      withMachine: false,
      exercise: "Dominadas",
      difficulty: "Principiante",
      isFavorite: false,
    },
    {
      id: 17,
      title: "Flexiones perfectas",
      description:
        "Guía completa para realizar flexiones con la técnica correcta",
      url: "https://www.youtube.com/embed/IODxDxX7oi4",
      withMachine: false,
      exercise: "Flexiones",
      difficulty: "Principiante",
      isFavorite: false,
    },
    {
      id: 18,
      title: "Dips en paralelas",
      description:
        "Cómo realizar dips en barras paralelas para fortalecer pecho y tríceps",
      url: "https://www.youtube.com/embed/2z8JmcrW-As",
      withMachine: false,
      exercise: "Dips",
      difficulty: "Intermedio",
      isFavorite: false,
    },
    {
      id: 19,
      title: "Muscle-ups para principiantes",
      description: "Progresión para aprender a hacer muscle-ups",
      url: "https://www.youtube.com/embed/Gpny7WAAZ44",
      withMachine: false,
      exercise: "Muscle-ups",
      difficulty: "Avanzado",
      isFavorite: false,
    },
    {
      id: 20,
      title: "Pistol squats: guía completa",
      description:
        "Aprende a realizar sentadillas a una pierna (pistol squats)",
      url: "https://www.youtube.com/embed/vq5-vdgJc0I",
      withMachine: false,
      exercise: "Pistol squats",
      difficulty: "Avanzado",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (id: number) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) => {
        if (video.id === id) {
          return { ...video, isFavorite: !video.isFavorite };
        }
        return video;
      })
    );
  };

  const [filters, setFilters] = useState({
    search: "",
    exercise: "",
    difficulty: "",
    withMachine: "",
  });

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      return (
        (video.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          video.description
            .toLowerCase()
            .includes(filters.search.toLowerCase())) &&
        (filters.exercise === "" || video.exercise === filters.exercise) &&
        (filters.difficulty === "" ||
          video.difficulty === filters.difficulty) &&
        (filters.withMachine === "" ||
          (filters.withMachine === "true" && video.withMachine) ||
          (filters.withMachine === "false" && !video.withMachine))
      );
    });
  }, [videos, filters]);

  const favoriteVideos = videos.filter((video) => video.isFavorite);
  const nonFavoriteVideos = filteredVideos.filter((video) => !video.isFavorite);

  const exercises = Array.from(new Set(videos.map((video) => video.exercise)));
  const difficulties = ["Principiante", "Intermedio", "Avanzado"];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tutoriales de Ejercicios</h1>

      <div className="mb-8 space-y-4">
        <div>
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Buscar
          </label>
          <input
            id="search"
            type="text"
            placeholder="Buscar por título o descripción"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="exercise"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Ejercicio
            </label>
            <select
              id="exercise"
              value={filters.exercise}
              onChange={(e) =>
                setFilters({ ...filters, exercise: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Todos los ejercicios</option>
              {exercises.map((exercise) => (
                <option key={exercise} value={exercise}>
                  {exercise}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="difficulty"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Dificultad
            </label>
            <select
              id="difficulty"
              value={filters.difficulty}
              onChange={(e) =>
                setFilters({ ...filters, difficulty: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Todas las dificultades</option>
              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="withMachine"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Equipo
            </label>
            <select
              id="withMachine"
              value={filters.withMachine}
              onChange={(e) =>
                setFilters({ ...filters, withMachine: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Con o sin máquina</option>
              <option value="true">Con máquina</option>
              <option value="false">Sin máquina</option>
            </select>
          </div>
        </div>
      </div>

      {/* Videos Favoritos */}
      {favoriteVideos.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Videos Favoritos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </div>
      )}

      {/* Todos los videos (no favoritos) */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Todos los Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nonFavoriteVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      {nonFavoriteVideos.length === 0 && (
        <p className="text-center text-gray-600 mt-8">
          No se encontraron videos que coincidan con los filtros seleccionados.
        </p>
      )}

      {/* Nota Importante */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Nota Importante</h2>
        <p className="text-gray-700">
          Estos videos son guías generales. Asegúrate de realizar los ejercicios
          con la técnica adecuada para evitar lesiones. Si eres principiante o
          tienes alguna condición médica, consulta con un profesional antes de
          comenzar cualquier rutina de ejercicios.
        </p>
      </div>

      <div className="mt-8">
        <Link
          href="/gymuser/routines"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          &larr; Volver a Rutinas
        </Link>
      </div>
    </div>
  );
}
