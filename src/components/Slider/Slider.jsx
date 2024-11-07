import React from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import './Slider.css'; 

const Slider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider">
            <div
                className="slider-content"
                style={{
                    backgroundImage: `url(${slides[currentSlide].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '69.3vh' // Ajusta según lo necesario
                }}
            >
                <div className="slider-overlay"></div>
                <div className="slider-text text-center p-4">
                    <h2 className="text-2xl font-bold">{slides[currentSlide].title}</h2>
                    <p>{slides[currentSlide].description}</p>
                </div>
            </div>
            
            {/* Botón Previo */}
            <button className="slider-button prev-button" onClick={prevSlide}>
                <BsFillArrowLeftCircleFill size={30} />
            </button>
            
            {/* Botón Siguiente */}
            <button className="slider-button next-button" onClick={nextSlide}>
                <BsFillArrowRightCircleFill size={30} />
            </button>
        </div>
    );
};

export default Slider;
