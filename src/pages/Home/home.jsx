import React from 'react';
import './home.css';
import images from "../../assets/home/index";
import Carousel from '../../components/Slider/Slider';

const Home = () => {
    const Section = ({ title, description, backgroundImage, height, isFullSize }) => {
        return (
            <div 
                className="home-section text-white flex items-center justify-center"
                style={{ 
                    backgroundImage: `url(${backgroundImage})`, 
                    backgroundSize: isFullSize ? 'contain' : 'cover',
                    backgroundPosition: 'right center', /* Cambiar a center en caso de centrado */ 
                    height: height,
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="overlay"></div>
                <div className="content text-center p-4">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        );
    };

    const slides = [
        { image: images.imagen1, title: 'Ubicaciones de Almacenamiento', description: 'Descripción sobre las ubicaciones de almacenamiento.' },
        { image: images.imagen2, title: 'Inventario Actual', description: 'Descripción sobre el inventario actual.' },
    ];

    const sectionsPair= [
        {
            title: 'Hacemos las Cosas Bien',
            description: 'Descripción sobre el propósito de la empresa...',
            backgroundImage: images.imagen4,
            height: '500px',
            isFullSize: false,
        },
        {
            title: 'Una Visión Comprometida',
            description: 'Descripción sobre la visión comprometida...',
            backgroundImage: images.imagen5,
            height: '500px',
            isFullSize: false,
        },
    ];

    const sectionsup= [
        {
            title: 'Hacemos las Cosas Bien',
            description: 'Descripción sobre el propósito de la empresa...',
            backgroundImage: images.imagen3,
            height: '316px',
            isFullSize: false,
        },
    ];

    const sectionsback= [
        {
            title: 'Hacemos las Cosas Bien',
            description: 'Descripción sobre el propósito de la empresa...',
            backgroundImage: images.imagen6,
            height: '500px',
            isFullSize: false,
        },
        {
            title: 'Una Visión Comprometida',
            description: 'Descripción sobre la visión comprometida...',
            backgroundImage: images.imagen7,
            height: '930px',
            isFullSize: false, /* true, en caso de usar la totalidad de la imagen */
        },
    ];

    return (
        <div className="home-container">

            <Carousel slides={slides} />

            <div className="section">
                {sectionsup.map((section, index) => (
                    <Section 
                        key={index} 
                        title={section.title} 
                        description={section.description} 
                        backgroundImage={section.backgroundImage}
                        height={section.height}
                        isFullSize={section.isFullSize}
                    />
                ))}
            </div>
            
            <div className="section-pair">
                {sectionsPair.map((section, index) => (
                    <Section 
                        key={index} 
                        title={section.title} 
                        description={section.description} 
                        backgroundImage={section.backgroundImage}
                        height={section.height}
                        isFullSize={section.isFullSize}
                    />
                ))}
            </div>
           
            <div className="section">
                {sectionsback.map((section, index) => (
                    <Section 
                        key={index} 
                        title={section.title} 
                        description={section.description} 
                        backgroundImage={section.backgroundImage}
                        height={section.height}
                        isFullSize={section.isFullSize}
                    />
                ))}
            </div>


            
        </div>
    );
};

export default Home;
