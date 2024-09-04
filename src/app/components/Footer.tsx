import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">GymFlow</h2>
            <p className="text-gray-300">
              Tu compañero personal para alcanzar tus metas fitness.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/gymuser/routines"
                  className="hover:text-blue-400 transition-colors"
                >
                  Rutinas
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="hover:text-blue-400 transition-colors"
                >
                  Tutoriales
                </Link>
              </li>
              <li>
                <Link
                  href="/gymuser/progress"
                  className="hover:text-blue-400 transition-colors"
                >
                  Progreso
                </Link>
              </li>
              <li>
                <Link
                  href="/gymuser/diet"
                  className="hover:text-blue-400 transition-colors"
                >
                  Dieta
                </Link>
              </li>
              <li>
                <Link
                  href="/gym"
                  className="hover:text-blue-400 transition-colors"
                >
                  GymEspacio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <p className="text-gray-300 mb-2">Email: info@gymflow.com</p>
            <p className="text-gray-300">Teléfono: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} GymFlow. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 mt-2">
            Desarrollado por{" "}
            <a
              href="https://byteforge.com"
              className="hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Byteforge
            </a>{" "}
            y{" "}
            <a
              href="https://zeustech.com"
              className="hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zeustech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
