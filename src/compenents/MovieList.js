import {useState} from "react";
import React from 'react'

function MovieList() {
    const [movies, setMovies] = useState([
        {
          title: 'The Shawshank Redemption',
          description:
            'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
          posterURL:
            'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
          rating: 9.3,
        },
        {
          title: 'The Godfather',
          description:
            'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
          posterURL:
            'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
          rating: 9.2,
        },
        {
          title: 'The Dark Knight',
          description:
            'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept',
            rating: 9.0,
          },
          ]);
          
  return (
    <div>

    </div>
  )
}

export default MovieList