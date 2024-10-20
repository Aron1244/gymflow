import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Sobre Nosotros</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
                    <p>
                        En GymFlow, nuestra misión es proporcionar un ambiente acogedor y motivador para que todos puedan alcanzar sus metas de fitness.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Nuestros Valores</h2>
                    <p>
                        Valoramos la dedicación, la perseverancia y el bienestar de nuestros miembros. Creemos en el poder del ejercicio para transformar vidas.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Nuestro Equipo</h2>
                    <p>
                        Contamos con un equipo de profesionales altamente capacitados y apasionados por el fitness, listos para ayudarte en cada paso de tu camino.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Nuestras Instalaciones</h2>
                    <p>
                        Nuestras instalaciones están equipadas con la última tecnología en equipos de gimnasio, ofreciendo un espacio seguro y cómodo para entrenar.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
                    <p>
                        Ofrecemos una variedad de servicios que incluyen clases grupales, entrenamiento personal, y programas de nutrición para apoyar tu bienestar integral.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
                    <p>
                        Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. Estamos aquí para ayudarte a alcanzar tus objetivos.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;