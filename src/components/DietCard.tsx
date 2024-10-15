import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";

type Meal = {
  name: string;
  description: string;
};

type Diet = {
  name: string;
  description: string;
  meals: Meal[];
  vegan: Meal[];
  glutenFree: Meal[];
};

type DietCardProps = {
  diet: Diet;
  dietType: string;
  mealType: string;
  onToggleFavorite: (dietName: string) => void;
  isFavorite: boolean;
};

export default function DietCard({
  diet,
  dietType,
  mealType,
  onToggleFavorite,
  isFavorite,
}: DietCardProps) {
  const meals =
    dietType === "vegan"
      ? diet.vegan
      : dietType === "glutenFree"
      ? diet.glutenFree
      : diet.meals;

  const filteredMeals = meals.filter(
    (meal) => mealType === "" || meal.name.includes(mealType)
  );

  return (
    <div className="mb-12 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-gray-100 px-6 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">{diet.name}</h2>
          <p className="text-gray-600 mt-2">{diet.description}</p>
        </div>
        <button
          onClick={() => onToggleFavorite(diet.name)}
          className="focus:outline-none"
        >
          {isFavorite ? (
            <StarIconSolid className="h-6 w-6 text-yellow-500" />
          ) : (
            <StarIcon className="h-6 w-6 text-gray-400" /> // Usar StarIcon para el estado no favorito
          )}
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">
          Plan de comidas{" "}
          {dietType === "vegan"
            ? "vegano"
            : dietType === "glutenFree"
            ? "sin gluten"
            : "estándar"}
        </h3>
        <ul className="space-y-4">
          {filteredMeals.map((meal, mealIndex) => (
            <li key={mealIndex} className="flex items-start">
              <span className="font-medium text-lg">{meal.name}:</span>
              <p className="ml-2">{meal.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
