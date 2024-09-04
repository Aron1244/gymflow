import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a GymFlow</h1>
      <p className="mb-4">
        Tu compañero personal para alcanzar tus metas fitness.
      </p>
      <div className="space-x-4">
        <Link
          href="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Iniciar sesión
        </Link>
        <Link
          href="/register"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Registrarse
        </Link>
      </div>
    </div>
  );
}
