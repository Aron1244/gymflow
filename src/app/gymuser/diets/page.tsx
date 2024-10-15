"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type Meal = {
  name: string;
  description: string;
};

type Diet = {
  name: string;
  description: string;
  routine: string;
  meals: Meal[];
  vegan: Meal[];
  glutenFree: Meal[];
};

export default function DietsPage() {
  const [diets, setDiets] = useState<Diet[]>([
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
        { name: "Merienda", description: "Yogur griego con frutas y nueces." },
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
          description: "Tortilla de claras con espinacas y batata hash browns.",
        },
        {
          name: "Almuerzo",
          description:
            "Pechuga de pavo a la plancha con quinoa y vegetales asados.",
        },
        { name: "Merienda", description: "Queso cottage con frutas y nueces." },
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
    },
    {
      name: "Dieta para Rutina de Definición",
      description:
        "Esta dieta está diseñada para apoyar la definición muscular, con un enfoque en alimentos bajos en grasa y ricos en proteínas para mantener la masa muscular mientras se reduce la grasa corporal.",
      routine: "Definición",
      meals: [
        {
          name: "Desayuno",
          description: "Claras de huevo con espinacas y avena integral.",
        },
        {
          name: "Almuerzo",
          description:
            "Pechuga de pavo a la plancha con ensalada mixta y quinoa.",
        },
        {
          name: "Merienda",
          description:
            "Batido de proteínas con frutas bajas en azúcar (como fresas o arándanos).",
        },
        {
          name: "Cena",
          description: "Pescado blanco al vapor con brócoli y batata al horno.",
        },
        {
          name: "Snack nocturno",
          description: "Yogur griego bajo en grasa con semillas de chía.",
        },
      ],
      vegan: [
        {
          name: "Desayuno",
          description: "Tofu revuelto con espinacas y pan integral tostado.",
        },
        {
          name: "Almuerzo",
          description:
            "Ensalada de garbanzos con verduras y aderezo de tahini.",
        },
        {
          name: "Merienda",
          description:
            "Batido de proteína de guisante con espinacas y frutos rojos.",
        },
        {
          name: "Cena",
          description:
            "Tempeh a la plancha con coliflor arroz y judías verdes.",
        },
        {
          name: "Snack nocturno",
          description: "Pudín de chía hecho con leche de almendras y canela.",
        },
      ],
      glutenFree: [
        {
          name: "Desayuno",
          description: "Tortilla de claras con champiñones y aguacate.",
        },
        {
          name: "Almuerzo",
          description: "Pollo a la parrilla con ensalada y arroz integral.",
        },
        {
          name: "Merienda",
          description: "Batido de proteínas con almendras y frutos rojos.",
        },
        {
          name: "Cena",
          description: "Salmón al horno con calabacín y quinoa.",
        },
        {
          name: "Snack nocturno",
          description: "Yogur griego sin grasa con nueces y canela.",
        },
      ],
    },
    {
      name: "Dieta para Rutina de Principiantes",
      description:
        "Esta dieta está diseñada para principiantes, proporcionando una nutrición equilibrada para apoyar el nuevo régimen de ejercicios y promover hábitos alimenticios saludables.",
      routine: "Principiantes",
      meals: [
        {
          name: "Desayuno",
          description:
            "Tostadas integrales con aguacate y huevo revuelto. Un vaso de zumo de naranja natural.",
        },
        {
          name: "Almuerzo",
          description:
            "Ensalada de pollo a la parrilla con verduras variadas y vinagreta ligera. Una pieza de fruta.",
        },
        {
          name: "Merienda",
          description: "Yogur natural con un puñado de nueces y miel.",
        },
        {
          name: "Cena",
          description:
            "Pescado al horno con patatas y verduras al vapor. Una pequeña porción de arroz integral.",
        },
        {
          name: "Snack nocturno (opcional)",
          description: "Un vaso de leche desnatada o una infusión de hierbas.",
        },
      ],
      vegan: [
        {
          name: "Desayuno",
          description:
            "Tostadas integrales con hummus y tomate. Un batido verde con espinacas y plátano.",
        },
        {
          name: "Almuerzo",
          description:
            "Ensalada de lentejas con verduras variadas y aderezo de limón. Una manzana.",
        },
        {
          name: "Merienda",
          description: "Yogur de soja con semillas de girasol y arándanos.",
        },
        {
          name: "Cena",
          description:
            "Curry de garbanzos con arroz integral y brócoli al vapor.",
        },
        {
          name: "Snack nocturno (opcional)",
          description: "Un puñado de almendras o una infusión de hierbas.",
        },
      ],
      glutenFree: [
        {
          name: "Desayuno",
          description:
            "Tortilla de huevo con espinacas y queso. Un vaso de zumo de naranja natural.",
        },
        {
          name: "Almuerzo",
          description:
            "Ensalada de quinoa con pollo a la parrilla y verduras. Una pera.",
        },
        {
          name: "Merienda",
          description: "Yogur natural con semillas de chía y fresas.",
        },
        {
          name: "Cena",
          description:
            "Salmón a la plancha con puré de patatas y judías verdes.",
        },
        {
          name: "Snack nocturno (opcional)",
          description: "Queso cottage con nueces o una infusión de hierbas.",
        },
      ],
    },
    {
      name: "Dieta para Rutina Full-Body",
      description:
        "Esta dieta está diseñada para proporcionar energía y nutrientes para una rutina full-body intensa, con un equilibrio de proteínas, carbohidratos complejos y grasas saludables.",
      routine: "Full-Body",
      meals: [
        {
          name: "Desayuno",
          description:
            "Batido de proteínas con plátano, espinacas, avena y mantequilla de almendras.",
        },
        {
          name: "Almuerzo",
          description:
            "Bowl de quinoa con pollo a la parrilla, aguacate, garbanzos y verduras asadas.",
        },
        {
          name: "Merienda pre-entrenamiento",
          description: "Tostada integral con hummus y rodajas de tomate.",
        },
        {
          name: "Cena post-entrenamiento",
          description:
            "Salmón al horno con batata y brócoli al vapor. Una porción de arroz integral.",
        },
        {
          name: "Snack nocturno",
          description: "Yogur griego con nueces y bayas.",
        },
      ],
      vegan: [
        {
          name: "Desayuno",
          description:
            "Batido de proteína vegetal con plátano, espinacas, avena y mantequilla de cacahuete.",
        },
        {
          name: "Almuerzo",
          description:
            "Bowl de quinoa con tofu salteado, aguacate, garbanzos y verduras asadas.",
        },
        {
          name: "Merienda pre-entrenamiento",
          description: "Tostada integral con hummus y rodajas de pepino.",
        },
        {
          name: "Cena post-entrenamiento",
          description:
            "Tempeh a la plancha con batata y brócoli al vapor. Una porción de arroz integral.",
        },
        {
          name: "Snack nocturno",
          description: "Yogur de soja con nueces y arándanos.",
        },
      ],
      glutenFree: [
        {
          name: "Desayuno",
          description:
            "Batido de proteínas con plátano, espinacas, copos de quinoa y mantequilla de almendras.",
        },
        {
          name: "Almuerzo",
          description:
            "Bowl de arroz integral con pollo a la parrilla, aguacate, lentejas y verduras asadas.",
        },
        {
          name: "Merienda pre-entrenamiento",
          description: "Galletas de arroz con hummus y rodajas de tomate.",
        },
        {
          name: "Cena post-entrenamiento",
          description:
            "Salmón al horno con batata y brócoli al vapor. Una porción de quinoa.",
        },
        {
          name: "Snack nocturno",
          description: "Yogur griego sin gluten con nueces y bayas.",
        },
      ],
    },
    {
      name: "Dieta para Rutina de Volumen",
      description:
        "Esta dieta está diseñada para apoyar el crecimiento muscular, proporcionando un excedente calórico y abundantes proteínas para la recuperación y el crecimiento muscular.",
      routine: "Volumen",
      meals: [
        {
          name: "Desayuno",
          description:
            "Batido de proteínas con avena, plátano, mantequilla de cacahuete y leche entera. 3 huevos revueltos con espinacas.",
        },
        {
          name: "Almuerzo",
          description:
            "Pechuga de pollo grande (200g) con arroz integral, aguacate y brócoli al vapor.",
        },
        {
          name: "Merienda pre-entrenamiento",
          description:
            "Yogur griego con granola y frutas. Un puñado de frutos secos.",
        },
        {
          name: "Cena post-entrenamiento",
          description:
            "Filete de ternera (200g) con patatas al horno y ensalada mixta. Un vaso de zumo de naranja.",
        },
        {
          name: "Snack nocturno",
          description:
            "Batido de caseína con leche entera y una cucharada de aceite de linaza.",
        },
      ],
      vegan: [
        {
          name: "Desayuno",
          description:
            "Batido de proteína vegetal con avena, plátano, mantequilla de cacahuete y leche de soja. Tofu revuelto con espinacas.",
        },
        {
          name: "Almuerzo",
          description:
            "Tempeh a la plancha (200g) con arroz integral, aguacate y brócoli al vapor.",
        },
        {
          name: "Merienda pre-entrenamiento",
          description:
            "Yogur de soja con granola sin miel y frutas. Un puñado de frutos secos.",
        },
        {
          name: "Cena post-entrenamiento",
          description:
            "Hamburguesa de lentejas con patatas al horno y ensalada mixta. Un vaso de batido de proteínas.",
        },
        {
          name: "Snack nocturno",
          description:
            "Batido de proteína de guisante con leche de almendras y una cucharada de aceite de linaza.",
        },
      ],
      glutenFree: [
        {
          name: "Desayuno",
          description:
            "Batido de proteínas con quinoa, plátano, mantequilla de almendras y leche sin lactosa. 3 huevos revueltos con espinacas.",
        },
        {
          name: "Almuerzo",
          description:
            "Pechuga de pollo grande (200g) con quinoa, aguacate y brócoli al vapor.",
        },
        {
          name: "Merienda pre-entrenamiento",
          description:
            "Yogur griego con nueces y frutas. Un puñado de frutos secos.",
        },
        {
          name: "Cena post-entrenamiento",
          description:
            "Filete de ternera (200g) con batata al horno y ensalada mixta. Un vaso de zumo de naranja.",
        },
        {
          name: "Snack nocturno",
          description:
            "Batido de proteínas sin gluten con leche sin lactosa y una cucharada de aceite de linaza.",
        },
      ],
    },
    {
      name: "Dieta para Rutina de Calistenia",
      description:
        "Esta dieta está diseñada para apoyar el entrenamiento de calistenia, proporcionando suficientes proteínas para la recuperación muscular y carbohidratos para la energía.",
      routine: "Calistenia",
      meals: [
        {
          name: "Desayuno",
          description:
            "Avena con plátano, almendras y una cucharada de mantequilla de maní. Un batido de proteínas con espinacas y bayas.",
        },
        {
          name: "Almuerzo",
          description:
            "Ensalada de quinoa con pollo a la parrilla, aguacate, tomates cherry y aderezo de limón.",
        },
        {
          name: "Merienda pre-entrenamiento",
          description: "Yogur griego con miel y nueces. Una manzana.",
        },
        {
          name: "Cena post-entrenamiento",
          description:
            "Salmón al horno con batata y brócoli al vapor. Una porción de arroz integral.",
        },
        {
          name: "Snack nocturno",
          description:
            "Cottage cheese con frutas del bosque y semillas de chía.",
        },
      ],
      vegan: [
        {
          name: "Desayuno",
          description:
            "Batido de proteína vegetal con plátano, espinacas, mantequilla de almendras y leche de soja. Tostadas de pan integral con hummus.",
        },
        {
          name: "Almuerzo",
          description:
            "Bowl de quinoa con tofu salteado, garbanzos, aguacate y verduras asadas.",
        },
        {
          name: "Merienda pre-entrenamiento",
          description: "Yogur de soja con granola sin miel y frutas frescas.",
        },
        {
          name: "Cena post-entrenamiento",
          description:
            "Curry de lentejas con arroz integral y brócoli al vapor. Ensalada de espinacas con nueces y semillas.",
        },
        {
          name: "Snack nocturno",
          description:
            "Pudín de chía hecho con leche de almendras y frutas del bosque.",
        },
      ],
      glutenFree: [
        {
          name: "Desayuno",
          description:
            "Tortilla de huevos con espinacas y queso. Batido de proteínas con plátano y mantequilla de almendras.",
        },
        {
          name: "Almuerzo",
          description:
            "Pechuga de pollo a la parrilla con quinoa y ensalada mixta.",
        },
        {
          name: "Merienda pre-entrenamiento",
          description: "Yogur griego con frutas y nueces.",
        },
        {
          name: "Cena post-entrenamiento",
          description:
            "Salmón al horno con batata y judías verdes. Arroz salvaje.",
        },
        {
          name: "Snack nocturno",
          description:
            "Queso cottage sin lactosa con frutas del bosque y semillas de chía.",
        },
      ],
    },
  ]);

  const [filters, setFilters] = useState({
    routine: "",
    mealType: "",
    dietType: "standard",
  });

  const filteredDiets = useMemo(() => {
    return diets.filter(
      (diet) => filters.routine === "" || diet.routine === filters.routine
    );
  }, [diets, filters.routine]);

  const routines = Array.from(new Set(diets.map((diet) => diet.routine)));
  const mealTypes = [
    "Desayuno",
    "Almuerzo",
    "Merienda",
    "(Merienda pre-entrenamiento)",
    "Cena",
    "(Cena post-entrenamiento)",
    "Snack nocturno",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Planes de Dieta</h1>

      <div className="mb-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="routine"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Rutina
            </label>
            <select
              id="routine"
              value={filters.routine}
              onChange={(e) =>
                setFilters({ ...filters, routine: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Todas las rutinas</option>
              {routines.map((routine) => (
                <option key={routine} value={routine}>
                  {routine}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="mealType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tipo de comida
            </label>
            <select
              id="mealType"
              value={filters.mealType}
              onChange={(e) =>
                setFilters({ ...filters, mealType: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Todas las comidas</option>
              {mealTypes.map((mealType) => (
                <option key={mealType} value={mealType}>
                  {mealType}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="dietType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tipo de dieta
            </label>
            <select
              id="dietType"
              value={filters.dietType}
              onChange={(e) =>
                setFilters({ ...filters, dietType: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="standard">Estándar</option>
              <option value="vegan">Vegana</option>
              <option value="glutenFree">Sin gluten</option>
            </select>
          </div>
        </div>
      </div>

      {filteredDiets.map((diet, index) => (
        <div
          key={index}
          className="mb-12 bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="bg-gray-100 px-6 py-4">
            <h2 className="text-2xl font-semibold">{diet.name}</h2>
            <p className="text-gray-600 mt-2">{diet.description}</p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">
              Plan de comidas{" "}
              {filters.dietType === "vegan"
                ? "vegano"
                : filters.dietType === "glutenFree"
                ? "sin gluten"
                : "estándar"}
            </h3>
            <ul className="space-y-4">
              {(filters.dietType === "vegan"
                ? diet.vegan
                : filters.dietType === "glutenFree"
                ? diet.glutenFree
                : diet.meals
              )
                .filter(
                  (meal) =>
                    filters.mealType === "" ||
                    meal.name.includes(filters.mealType)
                )
                .map((meal, mealIndex) => (
                  <li key={mealIndex}>
                    <span className="font-medium">{meal.name}:</span>{" "}
                    {meal.description}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}

      {filteredDiets.length === 0 && (
        <p className="text-center text-gray-600 mt-8">
          No se encontraron dietas que coincidan con los filtros seleccionados.
        </p>
      )}

      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Nota Importante</h2>
        <p className="text-gray-700">
          Estas dietas son recomendaciones generales y pueden no ser adecuadas
          para todos. Antes de hacer cambios significativos en tu dieta,
          especialmente si tienes condiciones médicas o alergias, consulta con
          un nutricionista o profesional de la salud. Las necesidades
          nutricionales varían según la persona, el nivel de actividad y los
          objetivos específicos.
        </p>
      </div>

      <div className="mt-8">
        <Link
          href="/gymuser/routines"
          className="text-blue-500 hover:text-blue-700"
        >
          &larr; Volver a Rutinas
        </Link>
      </div>
    </div>
  );
}
