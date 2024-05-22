import React, { useState } from 'react';
import './AddMovie.css';

function AddMovie() {
  const [movie, setMovie] = useState({
    title: '',
    image: '',
    description: '',
    rating: '',
    created_at: ''
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // คุณสามารถเพิ่มฟังก์ชันการส่งข้อมูลไปยัง backend ที่นี่
    console.log(movie);
  };

  return (
    <div>
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={movie.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={movie.image}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={movie.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={movie.rating}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="created_at"
          value={movie.created_at}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;