
# Danone Hackaton México

Proyecto participante en "Danone Hackathon México 2023"

***
## USAGE

Este es un proyecto desarrollado en Next.js conectado a Contentful con integración Vercel. A continuación se presentan las ligas con las que podrás visualizar el proyecto en un navegador web.

### https://nextjs-blog-preview-mode-git-main-aurora1006.vercel.app/
### https://nextjs-blog-preview-mode-one-kohl.vercel.app/
### https://nextjs-blog-preview-mode-aurora1006.vercel.app/

***
## Technology Stack

Next.js

Node >= 16

Tailwind css

GraphQL

ContentFul

Vercel

***
## Instalación

```bash
$ npm install
```
***
## Variable de entorno

Crear archivo .env.local y agregar las siguientes variables

```bash
CONTENTFUL_SPACE_ID=<Id del espacio, se obtiene en Contentful>
CONTENTFUL_ACCESS_TOKEN=<Tocken para authorizar el acceso a GraphQL>
CONTENTFUL_PREVIEW_ACCESS_TOKEN=http://localhost:3000
CONTENTFUL_PREVIEW_SECRET=<Identificador de la app>
CONTENTFUL_REVALIDATE_SECRET=<Identificador de la app>
```

***
## Correr aplicación

```bash
$ npm run dev

```
***
## Background

```bash
.
├── README.md
├── package.json
├── next.config.js
├── assets
│   ├── (Images)
├── components
│   ├── (Componentes de uso general Ej. footer)
├── pages
│   ├── (Pantallas)
│       ├──── home (Pantalla de inicio)
│       ├──── diary (Calculadora de calorias)
│       ├──── products (Pantall de productos)
├── styles
│   ├── (Estilos)
├── types
│   ├── (Objetos json en GraphQL)
├── .gitignore
└── tailwind.config.js

```
***
## Despliegue

Despliegue de la app con vercel. Ver documentación en el siguiente link
https://vercel.com/templates/next.js/nextjs-blog-preview-mode

***
## Planeación (Toma de decisiones)

Objetivos del proyecto

* Página de inicio
* Página de configuración de calorías diarias
* Página de productos
* Página de detalle del producto
* Barra de búsqueda
* Página de perfil del usuario

Objetivos de configuración

* Contentful
* GraphQL
* Vercel
* Tailwind css
* Next.js

Día 1

| Spring 1 (5hrs)                
|--------------------------------
| Generar la base del proyecto           
| Toma de decisión CSS - Tailwind css ya que podía configurarla desde la creación del proyecto.
| Configurar gestor de contenido Contentful, siguiendo la documentación proporcionada en el Readme  de Front end
| Configurar de despligue

| Spring 2 (5hrs)                
|--------------------------------
| Página de inicio     
| Generación componente Header    
| Generar componente Footer
| Generar componente Menú
| Tailwind css
| Estructurando proyecto
| Ruteo y navegación en el proyecto

Día 2

| Spring 3 (5hrs)                
|--------------------------------
| Página de configuración de calorías diarias    
| Página de productos v1
| Uso GraphQL en Contentful
| Creación de ProductosCollection

| Spring 4 (5hrs)                
|--------------------------------
| Configuración para consumir API
| Página de productos v2. 
| Generar componente ALERT
| Pruebas en Navegador WEB
| Preparar documentación
