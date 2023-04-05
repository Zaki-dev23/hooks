import React from 'react'
import './MovieCard.css';
export default function MovieCard() {
    const data = {
        title: 'The Shawshank Redemption',
        description:
          'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterURL:
          'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
        rating: 9.3,
      }
  return (
    <div>
        <div className='movieCard'>
            <img src={data.posterURL} alt="movie_1" className='movieImg'/>
            <h1 className='movieTitle'>{data.title}</h1>
            <p className="movieDescreption">{data.description}</p>
            <span className='movieRating'>{data.rating}</span>
        </div>
    </div>
  )
}
