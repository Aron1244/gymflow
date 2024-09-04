"use client";

import { useState } from "react";

type Meal = {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

type DietPlan = {
  goal: string;
  dailyCalories: number;
  macroSplit: {
    protein: number;
    carbs: number;
    fat: number;
  };
  meals: Meal[];
};

export default function DietPage() {
  const [dietPlan, setDietPlan] = useState<DietPlan>({
    goal: "Pérdida de peso",
    dailyCalories: 2000,
    macroSplit: {
      protein: 30,
      carbs: 40,
      fat: 30,
    },
    meals: [
      { name: "Desayuno", calories: 500, protein: 30, carbs: 50, fat: 20 },
      { name: "Almuerzo", calories: 700, protein: 40, carbs: 70, fat: 25 },
      { name: "Cena", calories: 600, protein: 35, carbs: 60, fat: 20 },
      { name: "Snack", calories: 200, protein: 10, carbs: 20, fat: 10 },
    ],
  });

  const [newMeal, setNewMeal] = useState<Meal>({
    name: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMeal((prev) => ({
      ...prev,
      [name]: name === "name" ? value : Number(value),
    }));
  };

  const handleAddMeal = (e: React.FormEvent) => {
    e.preventDefault();
    setDietPlan((prev) => ({
      ...prev,
      meals: [...prev.meals, newMeal],
    }));
    setNewMeal({
      name: "",
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    });
  };

  const totalCalories = dietPlan.meals.reduce(
    (sum, meal) => sum + meal.calories,
    0
  );
  const totalProtein = dietPlan.meals.reduce(
    (sum, meal) => sum + meal.protein,
    0
  );
  const totalCarbs = dietPlan.meals.reduce((sum, meal) => sum + meal.carbs, 0);
  const totalFat = dietPlan.meals.reduce((sum, meal) => sum + meal.fat, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mi Plan de Dieta</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resumen del Plan</h2>
        <p className="mb-2">
          <strong>Objetivo:</strong> {dietPlan.goal}
        </p>
        <p className="mb-2">
          <strong>Calorías Diarias:</strong> {dietPlan.dailyCalories}
        </p>
        <p className="mb-4">
          <strong>División de Macronutrientes:</strong> Proteínas{" "}
          {dietPlan.macroSplit.protein}% | Carbohidratos{" "}
          {dietPlan.macroSplit.carbs}% | Grasas {dietPlan.macroSplit.fat}%
        </p>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Totales Diarios</h3>
          <p className="mb-1">
            Calorías: {totalCalories} / {dietPlan.dailyCalories}
          </p>
          <p className="mb-1">
            Proteínas: {totalProtein}g (
            {(((totalProtein * 4) / totalCalories) * 100).toFixed(1)}%)
          </p>
          <p className="mb-1">
            Carbohidratos: {totalCarbs}g (
            {(((totalCarbs * 4) / totalCalories) * 100).toFixed(1)}%)
          </p>
          <p>
            Grasas: {totalFat}g (
            {(((totalFat * 9) / totalCalories) * 100).toFixed(1)}%)
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Comidas del Día</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dietPlan.meals.map((meal, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
              <p className="mb-1">Calorías: {meal.calories}</p>
              <p className="mb-1">Proteínas: {meal.protein}g</p>
              <p className="mb-1">Carbohidratos: {meal.carbs}g</p>
              <p>Grasas: {meal.fat}g</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Agregar Nueva Comida</h2>
        <form
          onSubmit={handleAddMeal}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre de la Comida
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newMeal.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="calories"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Calorías
            </label>
            <input
              type="number"
              id="calories"
              name="calories"
              value={newMeal.calories || ""}
              onChange={handleInputChange}
              required
              min="0"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="protein"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Proteínas (g)
            </label>
            <input
              type="number"
              id="protein"
              name="protein"
              value={newMeal.protein || ""}
              onChange={handleInputChange}
              required
              min="0"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="carbs"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Carbohidratos (g)
            </label>
            <input
              type="number"
              id="carbs"
              name="carbs"
              value={newMeal.carbs || ""}
              onChange={handleInputChange}
              required
              min="0"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="fat"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Grasas (g)
            </label>
            <input
              type="number"
              id="fat"
              name="fat"
              value={newMeal.fat || ""}
              onChange={handleInputChange}
              required
              min="0"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Agregar Comida
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
