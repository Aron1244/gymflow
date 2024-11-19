"use client";

import { useState, useMemo, useEffect } from "react";
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
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/video");
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }
        const data: Video[] = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
