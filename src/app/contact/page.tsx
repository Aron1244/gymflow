import React from 'react';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-8">Contáctanos</h1>
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
                    <p className="text-gray-700">Teléfono: (123) 456-7890</p>
                    <p className="text-gray-700">Correo Electrónico: gymflow@mail.com</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Horario de Atención</h2>
                    <p className="text-gray-700">Lunes - Viernes: 6am - 10pm</p>
                    <p className="text-gray-700">Sábado - Domingo: 8am - 8pm</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Síguenos</h2>
                    <p className="text-gray-700">Facebook: @gymflow</p>
                    <p className="text-gray-700">Instagram: @gymflow</p>
                    <p className="text-gray-700">Twitter: @gymflow</p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;