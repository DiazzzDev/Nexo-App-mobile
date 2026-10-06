# Planetas

Aplicación móvil desarrollada con React Native y Expo. Permite consultar los planetas del universo de Dragon Ball mediante la API pública de Dragon Ball.

## Información del estudiante

- Nombre: Edwin Adrian Diaz Henriquez
- Carnet: 20220281
- Sección y grupo: 1A

## Funcionalidades

- Pantalla de bienvenida con perfil del estudiante.
- Navegación entre pantallas usando Expo Router.
- Consulta remota de planetas mediante `fetch` y `async/await`.
- Estado de carga, manejo de errores y opción para reintentar la consulta.
- Catálogo reutilizable con imagen, descripción y estado de cada planeta.
- Ícono y pantalla de inicio personalizados.

## Tecnologías

- Expo SDK 54
- React Native 0.81
- Expo Router
- JavaScript
- Dragon Ball API: <https://dragonball-api.com/api/planets>

## Requisitos

- Node.js LTS
- npm
- Expo CLI mediante `npx`

## Instalación y ejecución

```bash
npm install
npx expo start -c
```

Desde el menú de Expo puedes abrir la aplicación en un emulador Android, un dispositivo físico o Expo Go.

## Generar el APK

El perfil `preview` está configurado para generar un APK instalable de Android:

```bash
npx eas build --platform android --profile preview
```

El APK se genera en los servidores de Expo/EAS. Al finalizar, el comando muestra el enlace de descarga.

## Estructura principal

```text
src/
├── app/
│   ├── _layout.js       # Navegación raíz
│   ├── index.js         # Pantalla de bienvenida
│   └── catalog.js       # Catálogo de planetas
├── components/
│   └── CatalogCard.js   # Tarjeta reutilizable
└── hooks/
    └── useCatalog.js    # Consulta y estado de la API
```

## Enlaces de entrega

- APK: se agregará al finalizar la compilación de EAS.
- Video demostrativo: pendiente de agregar.
