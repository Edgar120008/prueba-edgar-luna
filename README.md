¡Por supuesto! Aquí tienes un ejemplo de un archivo `README.md` en formato Markdown que explica cómo ejecutar el código desde el contenedor Docker y cómo funcionan los endpoints:

```markdown
# Proyecto API de Películas con NestJS

Este proyecto es una API desarrollada con NestJS para gestionar películas y categorías, ejecutándose dentro de un contenedor Docker.

## Requisitos previos

Antes de comenzar, asegúrate de tener Docker y Docker Compose instalados en tu máquina.

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Configuración del Proyecto

### 1. Clonar el Repositorio

Clona este repositorio en tu máquina local.

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### 2. Configurar las Variables de Entorno

Asegúrate de tener un archivo `.env` en la raíz de tu proyecto con las siguientes variables de entorno:

```plaintext
AWS_REGION=tu-aws-region
AWS_ACCESS_KEY_ID=tu-aws-access-key-id
AWS_SECRET_ACCESS_KEY=tu-aws-secret-access-key
AWS_BUCKET_NAME=tu-nombre-del-bucket
DB_HOST=mysqldb
DB_PORT=3306
DB_USER=user
DB_PASSWORD=RooT1234
DB_NAME=moviesDB
```

### 3. Construir y Ejecutar los Contenedores

Construye y ejecuta los contenedores usando Docker Compose.

```bash
docker-compose up --build
```

Esto levantará tanto la aplicación NestJS como la base de datos MySQL en contenedores Docker.

### 4. Acceder a la Aplicación

La API estará disponible en `http://localhost:3000`.

## Endpoints de la API

### Crear una Película

```http
POST /movies
```

**Body**:
```json
{
  "title": "The Dark Knight",
  "description": "A superhero crime drama",
  "release_date": "2008-07-18",
  "categories": [2, 3]
}
```

### Buscar Películas

```http
GET /movies?name=The%20Dark%20Knight&category=3
```

### Obtener Detalles de una Película

```http
GET /movies/:id
```

### Subir Poster de una Película

```http
POST /movies/:id/upload
```

**Body**:
- Form Data:
  - Key: `file`
  - Value: [Selecciona el archivo de imagen]

---

¡Gracias por usar este proyecto! Si tienes alguna pregunta o problema, no dudes en abrir un `issue` en el repositorio.
```

Con este archivo `README.md`, los usuarios podrán configurar y ejecutar tu proyecto NestJS dentro de contenedores Docker de manera sencilla, además de entender cómo funcionan los principales endpoints de la API. ¡Espero que te sea útil! 😊📦🚀