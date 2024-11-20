# Frontend Básico con React

Este proyecto es una aplicación web desarrollada con **React** y diseñada para adaptarse a diferentes necesidades de frontend. El proyecto se implementa en **Vercel** y utiliza **Docker** para facilitar la portabilidad y el despliegue en distintos entornos. Además, está pensado para ser fácilmente ampliable, con la posibilidad de agregar un backend y una base de datos en el futuro.

# Configuración de Tailwind CSS

Este proyecto utiliza Tailwind CSS como framework de diseño. Las clases de Tailwind están preconfiguradas en el proyecto y listas para usarse en cualquier componente de React. Si necesitas personalizar la configuración de Tailwind, puedes hacerlo en el archivo tailwind.config.js.

## Características

- **Frontend Responsivo**: La aplicación se adapta a diferentes tamaños de pantalla y dispositivos.
- **Despliegue en Vercel**: La aplicación está optimizada para el despliegue en la plataforma Vercel, permitiendo actualizaciones rápidas y sin complicaciones.
- **Estilos con Tailwind CSS**: Se utiliza **Tailwind CSS** como framework de diseño para facilitar el desarrollo de estilos de manera rápida y eficiente.
- **Estructura Modular**: El proyecto tiene una estructura organizada para facilitar la expansión y el mantenimiento del código.
- **Preparado para Docker**: Configurado para ejecutarse en contenedores Docker, permitiendo una fácil replicación y despliegue en otros entornos de desarrollo o producción.
- **Escalabilidad**: Diseñado para integrar un backend y una base de datos en el futuro, permitiendo una expansión hacia funcionalidades más complejas.

## Tecnologías Utilizadas

- **React**: Librería principal para el desarrollo del frontend.
- **Tailwind CSS**: Framework de diseño para la creación rápida de estilos.
- **Vercel**: Plataforma de despliegue utilizada.
- **Docker**: Para contenedorización y fácil despliegue en diferentes entornos.

## Requisitos

- **Node.js** y **npm** para el desarrollo local.
- **Docker** (opcional) para ejecutar la aplicación en contenedores.

## Estructura del Proyecto

```plaintext

├── public/             # Archivos públicos (index.html, iconos, etc.)
├── src/                # Código fuente de la aplicación
│   ├── assets/         # Componentes multimedia
│   ├── components/     # Componentes reutilizables de la UI
│   ├── pages/          # Páginas principales de la aplicación y archivos CSS 
│   ├── App.jsx         # Componente principal de la aplicación
├── .dockerignore       # Archivos ignorados por Docker
├── Dockerfile          # Configuración para crear la imagen Docker
├── package.json        # Dependencias y scripts del proyecto
├── tailwind.config.js  # Configuración de los estilos CSS
└── README.md           # Descripción del proyecto

```

## Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/DPExRC/front.git
   
## Contribuciones

Si deseas contribuir al proyecto, por favor realiza un fork del repositorio, crea una rama para tus cambios y luego envía un pull request. Las contribuciones son bienvenidas y apreciadas.

