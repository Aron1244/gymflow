import React from "react";

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Términos de Uso</h1>

      <div className="p-4 bg-white shadow-md rounded-lg mb-4">
        <p className="mb-4">
          Bienvenido a GymFlow. Estos términos y condiciones describen las
          reglas y regulaciones para el uso del sitio web de GymFlow.
        </p>
      </div>

      <div className="p-4 bg-white shadow-md rounded-lg mb-4">
        <h2 className="text-2xl font-semibold mb-2">1. Introducción</h2>
        <p className="mb-4">
          Al acceder a este sitio web, asumimos que aceptas estos términos y
          condiciones en su totalidad. No continúes usando el sitio web de
          GymFlow si no aceptas todos los términos y condiciones establecidos en
          esta página.
        </p>
      </div>

      <div className="p-4 bg-white shadow-md rounded-lg mb-4">
        <h2 className="text-2xl font-semibold mb-2">2. Cookies</h2>
        <p className="mb-4">
          Empleamos el uso de cookies. Al utilizar el sitio web de GymFlow,
          consientes el uso de cookies de acuerdo con la política de privacidad
          de GymFlow.
        </p>
      </div>

      <div className="p-4 bg-white shadow-md rounded-lg mb-4">
        <h2 className="text-2xl font-semibold mb-2">3. Licencia</h2>
        <p className="mb-4">
          A menos que se indique lo contrario, GymFlow y/o sus licenciantes
          poseen los derechos de propiedad intelectual de todo el material en
          GymFlow. Todos los derechos de propiedad intelectual están reservados.
        </p>
      </div>

      <div className="p-4 bg-white shadow-md rounded-lg mb-4">
        <h2 className="text-2xl font-semibold mb-2">
          4. Hipervínculos a nuestro contenido
        </h2>
        <p className="mb-4">
          Las siguientes organizaciones pueden enlazar a nuestro sitio web sin
          aprobación previa por escrito:
          <ul className="list-disc list-inside">
            <li>Agencias gubernamentales;</li>
            <li>Motores de búsqueda;</li>
            <li>Organizaciones de noticias;</li>
          </ul>
        </p>
      </div>

      <div className="p-4 bg-white shadow-md rounded-lg mb-4">
        <h2 className="text-2xl font-semibold mb-2">
          5. Responsabilidad del contenido
        </h2>
        <p className="mb-4">
          No nos responsabilizamos de ningún contenido que aparezca en tu sitio
          web. Aceptas protegernos y defendernos contra todas las reclamaciones
          que suban en tu sitio web.
        </p>
      </div>

      <div className="p-4 bg-white shadow-md rounded-lg mb-4">
        <h2 className="text-2xl font-semibold mb-2">6. Reserva de derechos</h2>
        <p className="mb-4">
          Nos reservamos el derecho de solicitar que elimines todos los enlaces
          o cualquier enlace en particular a nuestro sitio web. Apruebas
          eliminar de inmediato todos los enlaces a nuestro sitio web a
          solicitud.
        </p>
      </div>

      <div className="p-4 bg-white shadow-md rounded-lg mb-4">
        <h2 className="text-2xl font-semibold mb-2">
          7. Eliminación de enlaces de nuestro sitio web
        </h2>
        <p className="mb-4">
          Si encuentras algún enlace en nuestro sitio web que sea ofensivo por
          cualquier motivo, eres libre de contactarnos e informarnos en
          cualquier momento. Consideraremos solicitudes para eliminar enlaces,
          pero no estamos obligados a hacerlo ni a responder directamente.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
