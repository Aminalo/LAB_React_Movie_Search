import { useState } from "react";
export default function Form({ moviesearch }) {
  // Controlled input: React state is the single source of truth.
  const [formData, setFormData] = useState({ searchterm: "" });

  // Update state when the user types.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Prevent full page reload and forward the search term to parent.
  const handleSubmit = (e) => {
    e.preventDefault();
    const term = formData.searchterm.trim();
    if (term) moviesearch?.(term);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: ".5rem" }}>
      <input
        type="text"
        name="searchterm"
        placeholder="Search a movie (e.g., Godfather)"
        value={formData.searchterm}
        onChange={handleChange}
        autoComplete="off"
        style={{ flex: 1, padding: ".5rem .75rem" }}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}