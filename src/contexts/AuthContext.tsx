"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  name: string;
  email: string;
  selectedRoutines: number[];
} | null;

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateSelectedRoutines: (routines: number[]) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    // Aquí podrías verificar si hay una sesión guardada en localStorage o hacer una llamada a la API
    // Por ahora, simplemente inicializamos como no autenticado
    setUser(null);
  }, []);

  const login = async (email: string, password: string) => {
    // Verifica si el correo es "espacio@mail.com"
    if (email === "espacio@mail.com") {
      setUser({
        name: "Espacio Exclusivo",
        email: email,
        selectedRoutines: [], // Puedes personalizar las rutinas si es necesario
      });
    } else {
      // Lógica de inicio de sesión para otros usuarios
      setUser({
        name: "Usuario de Prueba",
        email: email,
        selectedRoutines: [],
      });
    }
  };

  const logout = () => {
    setUser(null);
    window.location.href = "/";
  };

  const updateSelectedRoutines = (routines: number[]) => {
    if (user) {
      setUser({ ...user, selectedRoutines: routines });
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, updateSelectedRoutines }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
