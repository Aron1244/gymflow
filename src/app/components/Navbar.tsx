import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          GymFlow
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/gymuser/routines">Rutinas</Link>
          </li>
          <li>
            <Link href="/tutorials">Tutoriales</Link>
          </li>
          <li>
            <Link href="/gymuser/progress">Progreso</Link>
          </li>
          <li>
            <Link href="/gymuser/diet">Dieta</Link>
          </li>
          <li>
            <Link href="/gym">GymEspacio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
