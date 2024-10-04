"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold">GymFlow</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Inicio
              </Link>
              {user ? (
                <>
                  <Link
                    href="/gymuser/routines"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    Rutinas
                  </Link>
                  <Link
                    href="/gymuser/diets"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    Dietas
                  </Link>
                  <Link
                    href="/gymuser/tutorials"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                  >
                    Tutoriales
                  </Link>
                  <Link
                    href="/gymuser/progress"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                  >
                    Progreso
                  </Link>
                  <Link
                    href="/gymuser/profile"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    Perfil
                  </Link>
                  <button
                    onClick={logout}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    Iniciar sesión
                  </Link>
                  <Link
                    href="/register"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    Registrarse
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Inicio
            </Link>
            {user ? (
              <>
                <Link
                  href="/gymuser/routines"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  Rutinas
                </Link>
                <Link
                  href="/gymuser/diets"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  Dietas
                </Link>
                <Link
                  href="/gymuser/tutorials"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  Tutoriales
                </Link>
                <Link
                  href="/gymuser/progress"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  Progreso
                </Link>
                <Link
                  href="/gymuser/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  Perfil
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  Iniciar sesión
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
