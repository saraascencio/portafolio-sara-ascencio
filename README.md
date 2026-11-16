# Portfolio — Sara Ascencio

Portafolio personal desarrollado con React + CSS (sin dependencias de UI).

## 🚀 Cómo correrlo localmente

```bash
npm install
npm start
```

Abre http://localhost:3000

## 🏗️ Cómo construir para producción

```bash
npm run build
```

Sube la carpeta `build/` a Vercel, Netlify o GitHub Pages.

## 📸 Agregar tu foto

En `src/App.jsx`, busca el comentario:
```
{/* Replace this div with <img src="tu-foto.jpg" ... */}
```
Reemplaza el `<div className="hero-photo-placeholder">` por:
```jsx
<img src="/tu-foto.jpg" alt="Sara Ascencio" className="hero-photo-img"/>
```
Y coloca tu foto en la carpeta `public/`.

## ✏️ Personalizar datos

Todos los textos, proyectos y certificaciones están en el objeto `T` al inicio de `src/App.jsx`.
Los 3 idiomas (es/en/fr) se actualizan ahí.

## 🎨 Cambiar colores

Las variables principales están en `src/index.css`:
- `#5B4FCF` → violeta principal
- `#F5F2ED` → crema base
- `#1C1917` → tinta oscura

## 📁 Estructura

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx       ← componentes + datos + i18n
│   ├── index.css     ← todos los estilos
│   └── index.js      ← entry point
├── package.json
└── README.md
```
