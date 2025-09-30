export default function MovieDisplay({ movie, error }) {
  // Render when movie data exists.
  const loaded = () => (
    <>
      <h2 style={{ marginTop: "1rem" }}>{movie.Title}</h2>
      <h3 style={{ color: "#666" }}>{movie.Genre}</h3>

      {movie.Poster && movie.Poster !== "N/A" ? (
        <img
          src={movie.Poster}
          alt={movie.Title}
          style={{
            maxWidth: 320,
            borderRadius: 8,
            boxShadow: "0 6px 18px rgba(0,0,0,.15)",
          }}
        />
      ) : (
        <div
          style={{
            width: 320,
            height: 480,
            display: "grid",
            placeItems: "center",
            border: "1px solid #ddd",
            borderRadius: 8,
          }}
        >
          No Poster
        </div>
      )}

      <h4 style={{ marginTop: ".5rem" }}>{movie.Year}</h4>
      {movie.Plot && (
        <p style={{ maxWidth: 600, lineHeight: 1.6 }}>{movie.Plot}</p>
      )}
    </>
  );

  // Render when no movie yet.
  const empty = () => <h2>No Movie to Display</h2>;

  // Prioritize an explicit error state if any.
  if (error) return <h2 style={{ color: "crimson" }}>Error: {error}</h2>;
  return movie ? loaded() : empty();
}