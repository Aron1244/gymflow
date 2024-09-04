"use client";

import { useState } from "react";

type Tutorial = {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  category: string;
};

export default function TutorialsPage() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([
    {
      id: 1,
      title: "Cómo hacer sentadillas correctamente",
      description:
        "Aprende la técnica correcta para realizar sentadillas y evitar lesiones.",
      videoUrl: "https://www.youtube.com/embed/aclHkVaku9U",
      category: "Piernas",
    },
    {
      id: 2,
      title: "Guía completa de press de banca",
      description:
        "Domina el press de banca para desarrollar tu pecho y tríceps.",
      videoUrl: "https://www.youtube.com/embed/rT7DgCr-3pg",
      category: "Pecho",
    },
    {
      id: 3,
      title: "Técnica perfecta para dominadas",
      description:
        "Mejora tu fuerza de agarre y espalda con dominadas perfectas.",
      videoUrl: "https://www.youtube.com/embed/eGo4IYlbE5g",
      category: "Espalda",
    },
    {
      id: 4,
      title: "Rutina de abdominales en casa",
      description:
        "Fortalece tu core con esta rutina de abdominales sin equipo.",
      videoUrl: "https://www.youtube.com/embed/zzD80vCLq0Y",
      category: "Abdominales",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(tutorials.map((tutorial) => tutorial.category))
  );

  const filteredTutorials = selectedCategory
    ? tutorials.filter((tutorial) => tutorial.category === selectedCategory)
    : tutorials;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Videos Tutoriales</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Categorías</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === null
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTutorials.map((tutorial) => (
          <div
            key={tutorial.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={tutorial.videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                title={tutorial.title}
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
              <p className="text-gray-600 mb-2">{tutorial.description}</p>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {tutorial.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
