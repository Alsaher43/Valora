# VALORA Pro
### Plataforma Inteligente de Gestion Inmobiliaria

## Quick Start

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Estructura

```
valora-pro/
├── index.html          # App completa
├── src/
│   ├── main.js         # JavaScript
│   └── styles/
│       └── main.css    # Estilos
├── public/
│   └── favicon.svg
├── package.json
└── vite.config.js
```

## Personalizar logo

En `src/main.js`, busca BRAND CONFIG:

```js
const BRAND = {
  logo: {
    light: { icon: './assets/logo/valora-light.svg' },
    dark:  { icon: './assets/logo/valora-dark.svg'  }
  }
};
```

## Formato Excel

| Columna      | Descripcion                    |
|--------------|-------------------------------|
| lote_id      | Coincide con id del SVG       |
| estado       | Disponible, Vendido, etc.     |
| precio       | Valor numerico                |
| financiamiento | Directo, Contado            |

## Deploy

```bash
# Build para produccion
npm run build

# Previsualizar build
npm run preview
```

---
VALORA Pro v1.0.0 - Production Ready