"use client";

import { useState } from "react";

type Gym = {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  membershipStatus: "pending" | "active" | "inactive";
};

export default function GymEspacioPage() {
  const [gyms, setGyms] = useState<Gym[]>([
    {
      id: "1",
      name: "FitZone",
      address: "Calle Principal 123",
      city: "Ciudad Ejemplo",
      phone: "123-456-7890",
      email: "info@fitzone.com",
      membershipStatus: "active",
    },
    {
      id: "2",
      name: "PowerLift Gym",
      address: "Avenida Fitness 456",
      city: "Villa Deportiva",
      phone: "098-765-4321",
      email: "contact@powerlift.com",
      membershipStatus: "pending",
    },
  ]);

  const [newGym, setNewGym] = useState<Omit<Gym, "id" | "membershipStatus">>({
    name: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewGym((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newGymWithId: Gym = {
      ...newGym,
      id: Date.now().toString(),
      membershipStatus: "pending",
    };
    setGyms((prev) => [...prev, newGymWithId]);
    setNewGym({
      name: "",
      address: "",
      city: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">GymEspacio</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Registrar Nuevo Gimnasio
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre del Gimnasio
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newGym.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Dirección
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={newGym.address}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Ciudad
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={newGym.city}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={newGym.phone}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={newGym.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Registrar Gimnasio
            </button>
          </div>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Gimnasios Registrados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gyms.map((gym) => (
            <div key={gym.id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{gym.name}</h3>
              <p className="mb-1">
                <strong>Dirección:</strong> {gym.address}, {gym.city}
              </p>
              <p className="mb-1">
                <strong>Teléfono:</strong> {gym.phone}
              </p>
              <p className="mb-1">
                <strong>Email:</strong> {gym.email}
              </p>
              <p className="mt-2">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-sm font-semibold ${
                    gym.membershipStatus === "active"
                      ? "bg-green-200 text-green-800"
                      : gym.membershipStatus === "pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {gym.membershipStatus === "active"
                    ? "Activo"
                    : gym.membershipStatus === "pending"
                    ? "Pendiente"
                    : "Inactivo"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
