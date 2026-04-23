# IMDb Clone

A front-end clone of the IMDb website built with React and Vite, powered by [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api). Browse trending movies, upcoming releases, popular TV shows, and now-playing titles — all in a responsive, carousel-driven layout.

![Screenshot](public/Screenshot%202024-04-17%20075025.png)

## Features

- **Trending Today** — Horizontal carousel of upcoming movies with backdrop and poster images
- **Popular TV Shows** — Cards displaying currently airing TV shows with ratings and overviews
- **Top 10 This Week** — Ranked carousel of the most popular movies
- **Now Playing** — Carousel of movies currently in theaters
- **Navigation Bar** — IMDb-styled navbar with search dropdown and category filters

## Tech Stack

| Layer | Technology |
|-------|------------|
| UI Library | React 18 |
| Build Tool | Vite 5 |
| Styling | Bootstrap 5.3 + Custom CSS |
| Icons | Font Awesome |
| API | TMDb API v3 |
| Linting | ESLint with React plugins |

## Project Structure

```
src/
├── main.jsx                    # React DOM entry point
├── App.jsx                     # Root component, API config
├── App.css                     # Layout and carousel styles
├── index.css                   # Global styles
├── Components/
│   ├── Navbar.jsx              # Navigation bar
│   ├── FeaturedToday.jsx       # Trending movies carousel
│   ├── People.jsx              # Popular TV shows section
│   ├── WhatToWatch.jsx         # Reusable ranked carousel
│   ├── Featured/
│   │   └── Card.jsx            # Featured movie card
│   ├── People/
│   │   └── Card.jsx            # TV show card
│   └── WhatToWatch/
│       ├── Card.jsx            # Ranked movie card
│       └── card.css            # Card-specific styles
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- A free [TMDb API key](https://www.themoviedb.org/settings/api)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshit391/ImDb-Clone-Singla.git
   cd ImDb-Clone-Singla
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the project root:
   ```
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**

   Visit the URL shown in the terminal (usually `http://localhost:5173`).

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle to `/dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks on all JS/JSX files |

## API Endpoints Used

| Endpoint | Description |
|----------|-------------|
| `/3/movie/upcoming` | Trending / upcoming movies |
| `/3/tv/airing_today` | Currently airing TV shows |
| `/3/movie/popular` | Most popular movies (Top 10) |
| `/3/movie/now_playing` | Movies currently in theaters |

## License

This project is for educational purposes. Movie data is provided by [TMDb](https://www.themoviedb.org/). This project is not endorsed or certified by TMDb.
