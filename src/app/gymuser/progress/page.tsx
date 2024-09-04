"use client";

import { useState } from "react";

type ProgressEntry = {
  date: string;
  weight: number;
  bodyFat: number;
  benchPress: number;
  squat: number;
  deadlift: number;
};

export default function ProgressPage() {
  const [progressData, setProgressData] = useState<ProgressEntry[]>([
    {
      date: "2023-01-01",
      weight: 80,
      bodyFat: 20,
      benchPress: 60,
      squat: 80,
      deadlift: 100,
    },
    {
      date: "2023-02-01",
      weight: 79,
      bodyFat: 19,
      benchPress: 65,
      squat: 85,
      deadlift: 105,
    },
    {
      date: "2023-03-01",
      weight: 78,
      bodyFat: 18,
      benchPress: 70,
      squat: 90,
      deadlift: 110,
    },
    {
      date: "2023-04-01",
      weight: 77,
      bodyFat: 17,
      benchPress: 75,
      squat: 95,
      deadlift: 115,
    },
  ]);

  const [newEntry, setNewEntry] = useState<ProgressEntry>({
    date: "",
    weight: 0,
    bodyFat: 0,
    benchPress: 0,
    squat: 0,
    deadlift: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({
      ...prev,
      [name]: name === "date" ? value : Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProgressData((prev) =>
      [...prev, newEntry].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )
    );
    setNewEntry({
      date: "",
      weight: 0,
      bodyFat: 0,
      benchPress: 0,
      squat: 0,
      deadlift: 0,
    });
  };

  const calculateProgress = (metric: keyof ProgressEntry) => {
    if (progressData.length < 2) return null;
    const latestValue = progressData[progressData.length - 1][metric];
    const previousValue = progressData[progressData.length - 2][metric];
    const difference = latestValue - previousValue;
    const percentageChange = (difference / previousValue) * 100;
    return { difference, percentageChange };
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mi Progreso</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resumen de Progreso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {["weight", "bodyFat", "benchPress", "squat", "deadlift"].map(
            (metric) => {
              const progress = calculateProgress(metric as keyof ProgressEntry);
              return (
                <div key={metric} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">
                    {metric === "bodyFat"
                      ? "Grasa Corporal"
                      : metric === "benchPress"
                      ? "Press de Banca"
                      : metric === "squat"
                      ? "Sentadilla"
                      : metric === "deadlift"
                      ? "Peso Muerto"
                      : "Peso"}
                  </h3>
                  <p className="text-2xl font-bold">
                    {
                      progressData[progressData.length - 1][
                        metric as keyof ProgressEntry
                      ]
                    }
                    {metric === "bodyFat" ? "%" : " kg"}
                  </p>
                  {progress && (
                    <p
                      className={`text-sm ${
                        progress.difference < 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {progress.difference.toFixed(2)} (
                      {progress.percentageChange.toFixed(2)}%)
                    </p>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Registrar Nuevo Progreso
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Fecha
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={newEntry.date}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Peso (kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={newEntry.weight || ""}
              onChange={handleInputChange}
              step="0.1"
              min="0"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="bodyFat"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Grasa Corporal (%)
            </label>
            <input
              type="number"
              id="bodyFat"
              name="bodyFat"
              value={newEntry.bodyFat || ""}
              onChange={handleInputChange}
              step="0.1"
              min="0"
              max="100"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="benchPress"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Press de Banca (kg)
            </label>
            <input
              type="number"
              id="benchPress"
              name="benchPress"
              value={newEntry.benchPress || ""}
              onChange={handleInputChange}
              step="0.5"
              min="0"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="squat"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Sentadilla (kg)
            </label>
            <input
              type="number"
              id="squat"
              name="squat"
              value={newEntry.squat || ""}
              onChange={handleInputChange}
              step="0.5"
              min="0"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="deadlift"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Peso Muerto (kg)
            </label>
            <input
              type="number"
              id="deadlift"
              name="deadlift"
              value={newEntry.deadlift || ""}
              onChange={handleInputChange}
              step="0.5"
              min="0"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Registrar Progreso
            </button>
          </div>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Historial de Progreso</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Fecha</th>
                <th className="border p-2 text-left">Peso (kg)</th>
                <th className="border p-2 text-left">Grasa Corporal (%)</th>
                <th className="border p-2 text-left">Press de Banca (kg)</th>
                <th className="border p-2 text-left">Sentadilla (kg)</th>
                <th className="border p-2 text-left">Peso Muerto (kg)</th>
              </tr>
            </thead>
            <tbody>
              {progressData.map((entry, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border p-2">{entry.date}</td>
                  <td className="border p-2">{entry.weight}</td>
                  <td className="border p-2">{entry.bodyFat}</td>
                  <td className="border p-2">{entry.benchPress}</td>
                  <td className="border p-2">{entry.squat}</td>
                  <td className="border p-2">{entry.deadlift}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
