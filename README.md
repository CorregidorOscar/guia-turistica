# Guía Turística de Cafayate

Sitio web desarrollado con React para la materia Programación Web II. El proyecto presenta información climática y turística sobre Cafayate, Salta.

## Enlaces

- **Sitio web:** https://guia-turistica-cafayate.vercel.app

## Contenido del proyecto

El sitio está dividido en tres secciones principales según las pautas del trabajo:

1. **Inicio (`/`)**: Consume datos en tiempo real de WeatherAPI para mostrar el ícono del clima, temperatura, viento y humedad actual en Cafayate, acompañado de una postal/ imagen que varía según el estado del día.
2. **Destinos (`/destinations`)**: Muestra un catálogo de circuitos y atractivos locales obtenidos desde un array de objetos local (`src/data/tours.js`), incluyendo imagen, descripción, duración.
3. **Contacto (`/contact`)**: Incluye un formulario conectado con EmailJS para el envío directo de consultas por correo y un mapa embebido de Google Maps con la ubicación de Dirección de Turismo.

## Tecnologías usadas

- React 19 (Vite)
- React Router v8
- Tailwind CSS v4
- WeatherAPI y EmailJS
