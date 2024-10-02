# Proyecto Portafolio: Página Web en React con Vite

## Descripción

Este proyecto es una página web de portafolio desarrollada en **React** y construida utilizando **Vite** como herramienta de compilación y empaquetado. El objetivo del proyecto es presentar trabajos previos y habilidades a través de una aplicación web moderna, rápida y eficiente. La página incluye secciones como una página de inicio (Landing Page), un portafolio de proyectos, y un formulario de contacto, entre otras funcionalidades.

## Características

- **Landing Page**: Una página de bienvenida con un diseño moderno que introduce al usuario al portafolio.
- **Navegación Dinámica**: Uso de `react-router-dom` para facilitar la navegación entre las diferentes secciones del sitio web.
- **Componentes Reutilizables**: Implementación de componentes modulares y reutilizables para mantener la organización y facilitar el mantenimiento.
- **Estilización Modular**: Uso de **CSS Modules** para asegurar un estilo único y evitar conflictos de nombres en los estilos.
- **Despliegue Rápido**: Gracias a **Vite**, el tiempo de carga y desarrollo es considerablemente más rápido que con otras herramientas.
- **Responsive Design**: El diseño es completamente adaptativo, optimizado tanto para dispositivos móviles como para pantallas de escritorio.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **Vite**: Herramienta de desarrollo y compilación que optimiza el rendimiento en la construcción de aplicaciones web.
- **React Router**: Para manejar la navegación entre las distintas páginas del sitio.
- **CSS Modules**: Estilos encapsulados para cada componente, asegurando modularidad.
- **JavaScript (ES6+)**: Lenguaje de programación para la lógica del sitio.
- **HTML5**: Estructura básica de las páginas.
- **Git**: Sistema de control de versiones utilizado para gestionar el desarrollo del proyecto.

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/usuario/proyecto-portafolio-vite-react.git
    ```

2. Navega a la carpeta del proyecto:

    ```bash
    cd proyecto-portafolio-vite-react
    ```

3. Instala las dependencias necesarias:

    ```bash
    npm install
    ```

4. Inicia la aplicación en modo de desarrollo:

    ```bash
    npm run dev
    ```

    La aplicación estará disponible en `http://localhost:5173`.

## Estructura del Proyecto

El proyecto sigue una estructura de carpetas organizada para facilitar su mantenimiento y escalabilidad:

```bash
proyecto-portafolio-vite-react/
│
├── public/             # Archivos públicos como index.html y favicon
├── src/                # Código fuente de la aplicación
│   ├── components/     # Componentes reutilizables de React
│   ├── pages/          # Páginas principales de la aplicación
│   ├── styles/         # Archivos CSS organizados por módulos
│   ├── App.jsx         # Componente principal de la aplicación
│   ├── main.jsx        # Punto de entrada de la aplicación
│   └── ...             # Otros archivos importantes
├── .gitignore          # Archivos y carpetas ignorados por Git
├── package.json        # Información del proyecto y dependencias
├── vite.config.js      # Configuración de Vite
└── README.md           # Documentación del proyecto
