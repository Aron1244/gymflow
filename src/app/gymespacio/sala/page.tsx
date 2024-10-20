"use client"; // Indica que este componente se ejecuta en el cliente

import { useEffect } from "react";

declare global {
  interface Window {
    JitsiMeetExternalAPI: any;
  }
}

const SalaPage = () => {
  useEffect(() => {
    const loadJitsiScript = () => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://meet.jit.si/external_api.js";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Error loading Jitsi script"));
        document.body.appendChild(script);
      });
    };

    const initializeJitsi = async () => {
      await loadJitsiScript();

      const roomName = "EntrenamientoPersonal"; // Nombre de la sala
      let api;

      if (roomName) {
        api = new window.JitsiMeetExternalAPI("meet.jit.si", {
          roomName: roomName,
          parentNode: document.getElementById("jitsi-meet"),
          width: "100%",
          height: 600,
          configOverwrite: {
            requireDisplayName: true,
            startWithAudioMuted: true,
            startWithVideoMuted: true,
          },
          userInfo: {
            displayName: "Benjamin", // Nombre de usuario
            email: "be.herrerap@duocuc.cl", // Email del usuario
          },
        });
      } else {
        alert("Por favor ingrese un nombre de sala.");
      }

      return api;
    };

    const apiInstance = initializeJitsi();

    return () => {
      if (apiInstance) {
        apiInstance.then((api) => api.dispose()); // Cierra la reunión al salir de la página
      }
    };
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Videollamada con Personal Trainer
      </h1>
      <div id="jitsi-meet" className="mt-4 bg-black rounded-lg shadow-lg"></div>
    </div>
  );
};

export default SalaPage;
