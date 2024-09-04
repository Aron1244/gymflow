"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  selectedRoutines: number[];
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
  updateSelectedRoutines: (routineIds: number[]) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you would validate credentials here
    const newUser: User = {
      id: "1",
      name: "John Doe",
      email,
      selectedRoutines: [],
    };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const register = async (name: string, email: string, password: string) => {
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you would create a new user here
    const newUser: User = { id: "1", name, email, selectedRoutines: [] };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const updateSelectedRoutines = (routineIds: number[]) => {
    if (user) {
      const updatedUser = { ...user, selectedRoutines: routineIds };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, updateSelectedRoutines }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
