import { useEffect, useState } from "react";
import "./App.css";

import Form from "./components/Form.jsx";
import MovieDisplay from "./components/MovieDisplay.jsx";

export default function App() {
  const apiKey = import.meta.env.VITE_OMDB_KEY || "98e3fb1f";

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  const getMovie = async (searchTerm) => {
    if (!searchTerm) return;
    try {
      const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
        searchTerm
      )}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "False") {
        setMovie(null);
        setError(data.Error || "Movie not found.");
      } else {
        setMovie(data);
        setError("");
      }
    } catch (e) {
      console.error(e);
      setMovie(null);
      setError("Network error. Please try again.");
    }
  };

  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h1>🎬 Simple React Movie Search (Vite)</h1>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} error={error} />
    </div>
  );
}