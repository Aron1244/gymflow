import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <span className="text-xl font-bold">GymFlow</span>
            <p className="text-gray-400 text-base">
              Tu compañero personal para alcanzar tus metas fitness.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Empresa
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Sobre nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Política de privacidad
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Términos de uso
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 GymFlow. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
