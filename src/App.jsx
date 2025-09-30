import { useState } from "react";
import "./App.css";

import Form from "./components/Form.jsx";
import MovieDisplay from "./components/MovieDisplay.jsx";

export default function App() {

  const apiKey = import.meta.env.VITE_OMDB_KEY || "98e3fb1f";

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  // Fetch a movie by exact title (OMDb uses 't=' for title lookups).
  const getMovie = async (searchTerm) => {
    if (!searchTerm) return;

    try {
      const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
        searchTerm
      )}`;
      const res = await fetch(url);
      const data = await res.json();

      // OMDb returns { Response: "False", Error: "..." } for failures.
      if (data.Response === "False") {
        setMovie(null);
        setError(data.Error || "Movie not found.");
      } else {
        setMovie(data);
        setError("");
      }
    } catch (e) {
      // Network or parsing failure
      console.error(e);
      setMovie(null);
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h1>🎬 Simple React Movie Search (Vite)</h1>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} error={error} />
    </div>
  );
}