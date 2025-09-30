import { useState } from "react";
import "./App.css";

import Form from "./components/Form.jsx";
import MovieDisplay from "./components/MovieDisplay.jsx";

export default function App() {
  // Lifted state: child components receive what they need via props.
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  // Placeholder; we'll implement real fetching later.
  const getMovie = (searchTerm) => {
    // clear error and clear any previous movie.
    setError("");
    setMovie(null);
    // We'll add real fetch logic in the next commit.
  };

  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h1>🎬 Simple React Movie Search (Vite)</h1>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} error={error} />
    </div>
  );
}