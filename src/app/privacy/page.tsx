import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-4">Política de Privacidad de Gymflow</h1>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-2xl font-semibold mb-2">Recopilación de Información</h2>
                <p className="mb-4">
                    Recopilamos información que nos proporcionas directamente, como tu nombre, dirección de correo electrónico y cualquier otra información que decidas compartir con nosotros. También recopilamos información automáticamente a través de tu uso de la aplicación, como tu dirección IP, tipo de dispositivo y datos de uso.
                </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-2xl font-semibold mb-2">Uso de la Información</h2>
                <p className="mb-4">
                    Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios, así como para comunicarnos contigo. También podemos usar tu información para personalizar tu experiencia en la aplicación y para fines de marketing y publicidad.
                </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-2xl font-semibold mb-2">Compartir Información</h2>
                <p className="mb-4">
                    No compartimos tu información personal con terceros, excepto en las siguientes circunstancias:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Con tu consentimiento.</li>
                    <li>Para cumplir con leyes y regulaciones aplicables.</li>
                    <li>Para proteger nuestros derechos y propiedad.</li>
                    <li>En caso de una fusión, adquisición o venta de activos.</li>
                </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-2xl font-semibold mb-2">Seguridad</h2>
                <p className="mb-4">
                    Tomamos medidas razonables para proteger tu información personal contra pérdida, robo y uso no autorizado. Sin embargo, ninguna transmisión de datos por Internet o almacenamiento electrónico es completamente segura, por lo que no podemos garantizar la seguridad absoluta.
                </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-2xl font-semibold mb-2">Cambios a esta Política</h2>
                <p className="mb-4">
                    Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos sobre cualquier cambio publicando la nueva política en esta página. Te recomendamos revisar esta política periódicamente para estar informado sobre cómo protegemos tu información.
                </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-2xl font-semibold mb-2">Contacto</h2>
                <p>
                    Si tienes alguna pregunta o inquietud sobre esta política de privacidad, no dudes en contactarnos a través de nuestro correo electrónico de soporte.
                    <br />
                    <span>gymflow@mail.com</span>
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;