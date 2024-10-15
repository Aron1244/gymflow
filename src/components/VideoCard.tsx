import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";

type VideoCardProps = {
  video: {
    id: number;
    title: string;
    description: string;
    url: string;
    withMachine: boolean;
    exercise: string;
    difficulty: "Principiante" | "Intermedio" | "Avanzado";
    isFavorite: boolean; // Nueva propiedad para indicar si es favorito
  };
  toggleFavorite: (id: number) => void; // Prop para manejar el toggle
};

export default function VideoCard({ video, toggleFavorite }: VideoCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 relative">
      <h2 className="font-bold text-xl mb-2">{video.title}</h2>
      <p className="text-gray-700 mb-4">{video.description}</p>
      <iframe
        src={video.url}
        onError={() => console.error(`Error loading video: ${video.url}`)}
        title={video.title}
        className="w-full h-48 mb-4"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <button
        onClick={() => toggleFavorite(video.id)}
        className="absolute top-4 right-4"
        aria-label="Toggle favorite"
      >
        {video.isFavorite ? (
          <StarIconSolid className="w-6 h-6 text-yellow-500" /> // Estrella llena si es favorito
        ) : (
          <StarIcon className="w-6 h-6 text-gray-300" /> // Estrella vacía si no es favorito
        )}
      </button>
      <p className="text-sm text-gray-500">Ejercicio: {video.exercise}</p>
      <p className="text-sm text-gray-500">Dificultad: {video.difficulty}</p>
    </div>
  );
}
