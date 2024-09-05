"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type Video = {
  id: number;
  title: string;
  description: string;
  url: string;
  withMachine: boolean;
  exercise: string;
  difficulty: "Principiante" | "Intermedio" | "Avanzado";
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
    },
    {
      id: 2,
      title: "Sentadillas con barra",
      description: "Cómo realizar sentadillas con barra de forma segura",
      url: "https://www.youtube.com/embed/SW_C1A-rejs",
      withMachine: false,
      exercise: "Sentadillas",
      difficulty: "Intermedio",
    },
    {
      id: 3,
      title: "Sentadillas en máquina Smith",
      description: "Guía para hacer sentadillas en la máquina Smith",
      url: "https://www.youtube.com/embed/IGKhneJqGko",
      withMachine: true,
      exercise: "Sentadillas",
      difficulty: "Intermedio",
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
    },
    {
      id: 5,
      title: "Press de banca con barra",
      description: "Técnica correcta para el press de banca con barra libre",
      url: "https://www.youtube.com/embed/vcBig73ojpE",
      withMachine: false,
      exercise: "Press de banca",
      difficulty: "Intermedio",
    },
    {
      id: 6,
      title: "Press de banca en máquina",
      description: "Cómo usar la máquina de press de banca",
      url: "https://www.youtube.com/embed/xUm0BiZCWlQ",
      withMachine: true,
      exercise: "Press de banca",
      difficulty: "Principiante",
    },
    {
      id: 7,
      title: "Peso muerto con mancuernas",
      description: "Técnica de peso muerto usando mancuernas",
      url: "https://www.youtube.com/embed/lJ3QwaXNJfw",
      withMachine: false,
      exercise: "Peso muerto",
      difficulty: "Intermedio",
    },
    {
      id: 8,
      title: "Peso muerto con barra",
      description: "Cómo realizar el peso muerto con barra de forma segura",
      url: "https://www.youtube.com/embed/op9kVnSso6Q",
      withMachine: false,
      exercise: "Peso muerto",
      difficulty: "Avanzado",
    },
    {
      id: 9,
      title: "Peso muerto en máquina",
      description: "Guía para hacer peso muerto en máquina",
      url: "https://www.youtube.com/embed/AvCt5_u_3Rk",
      withMachine: true,
      exercise: "Peso muerto",
      difficulty: "Principiante",
    },
    {
      id: 10,
      title: "Curl de bíceps con banda elástica",
      description: "Cómo hacer curl de bíceps con una banda elástica",
      url: "https://www.youtube.com/embed/OAH9Aj7pCSs",
      withMachine: false,
      exercise: "Curl de bíceps",
      difficulty: "Principiante",
    },
    {
      id: 11,
      title: "Curl de bíceps con barra",
      description: "Técnica correcta para el curl de bíceps con barra",
      url: "https://www.youtube.com/embed/ykJmrZ5v0Oo",
      withMachine: false,
      exercise: "Curl de bíceps",
      difficulty: "Intermedio",
    },
    {
      id: 12,
      title: "Curl de bíceps en máquina",
      description: "Cómo usar la máquina de curl de bíceps",
      url: "https://www.youtube.com/embed/RFg1FZQ1YBM",
      withMachine: true,
      exercise: "Curl de bíceps",
      difficulty: "Principiante",
    },
    {
      id: 13,
      title: "Fondos de tríceps (sin equipo)",
      description: "Cómo hacer fondos de tríceps usando una silla o banco",
      url: "https://www.youtube.com/embed/6kALZikXxLc",
      withMachine: false,
      exercise: "Extensiones de tríceps",
      difficulty: "Principiante",
    },
    {
      id: 14,
      title: "Extensiones de tríceps con mancuerna",
      description: "Técnica para extensiones de tríceps con mancuerna",
      url: "https://www.youtube.com/embed/_gsUck-7M74",
      withMachine: false,
      exercise: "Extensiones de tríceps",
      difficulty: "Intermedio",
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
    },
  ]);

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

  const exercises = [...new Set(videos.map((video) => video.exercise))];
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={video.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                title={video.title}
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
              <p className="text-gray-600 mb-2">{video.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                  {video.exercise}
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                  {video.difficulty}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    video.withMachine
                      ? "bg-purple-100 text-purple-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {video.withMachine ? "Con máquina" : "Sin máquina"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <p className="text-center text-gray-600 mt-8">
          No se encontraron videos que coincidan con los filtros seleccionados.
        </p>
      )}

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
