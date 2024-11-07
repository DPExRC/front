import React from 'react';
import './proveedores.css';
import images from "../../assets/home/index"; // Importar las imágenes desde el archivo correspondiente

const Proveedores = () => {
    return (
        <div className="productos-container flex flex-col items-center p-6">
            {/* Imagen en la parte superior con fondo */}
            <div 
                className="productos-image" 
                style={{ 
                    backgroundImage: `url(${images.imagen3})`, // Usando la imagen importada
                }}
            >
                {/* Aquí puedes agregar un overlay si es necesario */}
            </div>

            {/* Título centrado */}
            <h2 className="productos-title">Título del Producto</h2>
            <h3 className='productos-subtitle'> Subtitulo del producto</h3>

            {/* Contenedor de columnas de texto en la parte inferior */}
            <div className="productos-text flex flex-col md:flex-row w-full md:space-x-6">
                {/* Primera Columna */}
                <div className="columna1 w-full md:w-1/2 text-left p-4">
                    <h3 className="text-xl font-semibold mb-2">Título de la primera columna</h3>
                    <p>
                        Aquí va el texto de la primera columna. Puedes agregar una descripción detallada 
                        de la primera parte del producto o cualquier información relevante.
                    </p>
                </div>
                
                {/* Segunda Columna */}
                <div className="columna2 w-full md:w-1/2 text-left p-4">
                    <h3 className="text-xl font-semibold mb-2">Título de la segunda columna</h3>
                    <p>
                        Aquí va el texto de la segunda columna. Esto puede ser una descripción adicional 
                        o información complementaria sobre el producto.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Proveedores;
