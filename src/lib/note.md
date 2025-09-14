# MovieApp

A Spring Boot application for managing movie playlists and fetching movie data from The Movie Database (TMDB) API. This project was developed as part of the Teads Summer School program.

## Features

- **Movie Discovery**: Fetch popular movies from TMDB API
- **Movie Search**: Search movies by name
- **Movie Details**: Get detailed information about specific movies
- **Streaming Providers**: Find where movies are available to stream
- **Movie Videos**: Get trailers and videos for movies
- **Playlist Management**: Create and manage movie playlists
- **Database Storage**: Save movies to playlists in PostgreSQL database
- **Monitoring & Observability**: Integrated with Prometheus, Grafana, and ELK stack

## Architecture

The application follows a layered architecture:

- **Controllers**: REST API endpoints for handling HTTP requests
- **Services**: Business logic for movie operations and data processing
- **Repositories**: Data access layer for database operations
- **Entities**: JPA entities for database mapping
- **Client**: External API client for TMDB integration

### Tech Stack

- **Backend**: Spring Boot 3.5.3, Java 21
- **Database**: PostgreSQL with pgvector extension
- **Monitoring**: Prometheus, Grafana, Elasticsearch, Kibana, Filebeat
- **Containerization**: Docker & Docker Compose
- **Build Tool**: Maven

## Quick Start

### Prerequisites

- Java 21
- Maven
- Docker & Docker Compose

### Running with Docker Compose

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd MovieApp
   ```

2. **Start all services**

   ```bash
   docker-compose up -d
   ```

3. **Build and run the application**
   ```bash
   mvn clean package
   java -jar target/MovieApp-0.0.1-SNAPSHOT.jar
   ```

The application will be available at `http://localhost:8080`

### Running Locally

1. **Start the database and monitoring stack**

   ```bash
   docker-compose up -d postgres prometheus grafana elasticsearch kibana filebeat
   ```

2. **Run the application**
   ```bash
   mvn spring-boot:run
   ```

## Monitoring & Observability

The application includes comprehensive monitoring:

- **Prometheus**: Metrics collection at `http://localhost:9090`
- **Grafana**: Dashboards at `http://localhost:3000` (admin/admin)
- **Elasticsearch**: Log aggregation at `http://localhost:9200`
- **Kibana**: Log visualization at `http://localhost:5601`

### Available Metrics

- `search_results`: Counter for movie searches
- `search_timer`: Timer for search operations
- Spring Boot actuator metrics

## API Endpoints

### Movies

- `GET /api/movies` - Get popular movies
- `GET /api/movies/n/{name}` - Search movies by name
- `GET /api/movies/{id}` - Get movie details
- `GET /api/movies/{id}/streaming` - Get streaming providers
- `GET /api/movies/{id}/videos` - Get movie videos
- `POST /api/movies/save/{id}?i={playlistId}` - Save movie to playlist

### Playlists

- `GET /api/playlists` - Get user playlists
- `POST /api/playlists` - Create new playlist
- `GET /api/playlists/{id}` - Get playlist by ID
- `GET /api/playlists/{id}/movies` - Get movies in playlist

### Health & Monitoring

- `GET /actuator/health` - Application health check
- `GET /actuator/metrics` - Application metrics
- `GET /actuator/prometheus` - Prometheus metrics endpoint

## Database Schema

The application uses PostgreSQL with the following main entities:

- **MovieEntity**: Stores movie information and metadata
- **PlaylistEntity**: Manages user playlists
- **Provider**: Streaming service information
- **MovieVideo**: Video content for movies

## Configuration

### Environment Variables

- `api.auth.key`: TMDB API authentication token
- `spring.datasource.url`: Database connection URL
- `spring.datasource.username`: Database username
- `spring.datasource.password`: Database password

### Profiles

- **default**: Development configuration with H2 database
- **production**: Production configuration with PostgreSQL

## Logging

The application uses structured logging with Logback and Logstash encoder. Logs are:

- Written to `logs/application.log`
- Archived daily to `logs/archived/`
- Forwarded to Elasticsearch via Filebeat

## Testing

Run tests with:

```bash
mvn test
```

## Docker

### Building the Image

```bash
docker build -t movieapp .
```

### Running the Container

```bash
docker run -p 8080:80 movieapp
```

## 📄 License

This project is part of the Teads Summer School program.

## External Dependencies

- **The Movie Database (TMDB) API**: For movie data and metadata
- **PostgreSQL**: Primary database
- **Prometheus**: Metrics collection
- **Grafana**: Metrics visualization
- **Elasticsearch**: Log aggregation
- **Kibana**: Log visualization

# Movie App Frontend

A modern Angular application for browsing, searching, and managing movie collections with playlist functionality. This frontend interfaces with the [MovieApp backend](https://github.com/teads-sess-2025/MovieApp), which is built using Java and Spring Boot. It provides an intuitive experience for movie enthusiasts to discover films and organize them into custom playlists.

This project was developed as part of the Teads Summer School program.

## Features

- **Movie Browsing**: Browse through a comprehensive collection of movies
- **Advanced Search**: Search for movies by title with real-time results
- **Movie Details**: View detailed information about individual movies including:
  - Movie metadata (title, release date, genres, etc.)
  - Production details (budget, revenue, production companies)
  - Ratings and reviews (vote average, vote count)
  - Movie overview and tagline
- **Playlist Management**:
  - Create custom playlists
  - Add movies to playlists
  - View playlist contents
  - Organize your favorite movies
- **Responsive Design**: Modern, mobile-friendly interface built with Angular Material
- **Real-time Updates**: Dynamic content loading with Angular signals

## Technology Stack

- **Framework**: Angular 20.1.0
- **UI Components**: Angular Material 20.1.0
- **HTTP Client**: Angular HttpClient for API communication
- **State Management**: Angular Signals for reactive state management
- **Routing**: Angular Router with component input binding
- **Styling**: CSS with Angular Material theming
- **Build Tool**: Angular CLI with modern build system
- **Testing**: Jasmine & Karma for unit testing

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js**: Version 20.19 or higher
- **npm**: Comes with Node.js
- **Angular CLI**: Install globally with `npm install -g @angular/cli`

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd movie_app_frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Backend URL

The application is configured to connect to a backend API. You can modify the backend URL in `src/app/app.config.ts`:

```typescript
// For local development
export const BACKEND_BASE_URL = "http://localhost:8080";

// For production (uncomment and modify as needed)
// export const BACKEND_BASE_URL = 'https://your-backend-url.com';
```

### 4. Start the Development Server

```bash
npm start
# or
ng serve
```

The application will be available at `http://localhost:4200/`. The app will automatically reload when you make changes to the source files.

## Project Structure

```
src/
├── app/
│   ├── browse-view/          # Movie browsing interface
│   ├── home-view/            # Landing page
│   ├── movie-view/           # Individual movie details
│   ├── playlist-view/        # Playlist management
│   ├── playlist-movie-view/  # Movies within a playlist
│   ├── playlist-dialog/      # Playlist selection dialog
│   ├── search-view/          # Movie search functionality
│   ├── header/               # Navigation header
│   ├── footer/               # Application footer
│   ├── types/                # TypeScript type definitions
│   │   ├── movie.ts          # Movie data model
│   │   └── playlist.ts       # Playlist data model
│   ├── app.config.ts         # Application configuration
│   ├── app.routes.ts         # Routing configuration
│   └── app.ts                # Main application component
├── styles.css                # Global styles
└── index.html                # Main HTML template
```

## Available Routes

- `/` - Home page
- `/browse` - Browse all movies
- `/search` - Search for movies
- `/movie/:id` - View movie details
- `/playlists` - Manage playlists
- `/playlists/:id` - View playlist contents

## Development Commands

### Start Development Server

```bash
npm start
# or
ng serve
```

### Build for Production

```bash
npm run build
# or
ng build
```

### Build with Watch Mode

```bash
npm run watch
# or
ng build --watch --configuration development
```

### Run Unit Tests

```bash
npm test
# or
ng test
```

### Code Generation

```bash
# Generate a new component
ng generate component component-name

# Generate a new service
ng generate service service-name

# See all available schematics
ng generate --help
```

## API Integration

The application integrates with a backend API for the following operations:

### Movies

- `GET /api/movies` - Fetch all movies
- `GET /api/movies/n/{name}` - Search movies by name

### Playlists

- `GET /api/playlists` - Fetch user playlists
- `POST /api/playlists` - Create new playlist
- `GET /api/playlists/{id}` - Fetch playlist contents

## UI Components

The application uses Angular Material components for a consistent and modern user experience:

- Material Design components
- Responsive layout
- Dark/Light theme support
- Accessible interface

## Testing

The project includes comprehensive testing setup:

- **Unit Tests**: Jasmine framework with Karma test runner
- **Component Testing**: Angular testing utilities
- **Coverage Reports**: Built-in code coverage reporting

Run tests with:

```bash
ng test
```

## Build and Deployment

### Production Build

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory, optimized for production with:

- Minified code
- Tree shaking
- AOT compilation
- Bundle optimization

### Deployment

The `dist/` folder contains all files needed to deploy the application to any static hosting service.

## License

This project is part of the Teads Summer School program.

## Support

For support and questions:

- Check the [Angular Documentation](https://angular.dev)
- Review the [Angular CLI Documentation](https://angular.dev/tools/cli)
- Open an issue in the repository
