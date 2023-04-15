import React from "react";

async function MovieDetails({ params }) {
  console.log({ params });
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.API_KEY}`
  );

  const movie = await response.json();
  console.log(movie);

  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='md:flex'>
        <div className='md:flex-shrink-0'>
          <img
            style={{ objectFit: "contain" }}
            className='h-48 w-full object-cover md:w-48'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            {movie.tagline}
          </div>
          <a href={movie.homepage} target='_blank' rel='noreferrer'>
            <div className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
              {movie.title}
            </div>
          </a>
          <div className='mt-2 text-gray-500'>{movie.overview}</div>
          <div className='mt-4'>
            <span className='text-gray-500'>Release Date:</span>{" "}
            {new Date(movie.release_date)}
          </div>
          <div className='mt-4'>
            <span className='text-gray-500'>Runtime:</span> {movie.runtime} min
          </div>
          <div className='mt-4'>
            <span className='text-gray-500'>Genres:</span>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </div>
          <div className='mt-4'>
            <span className='text-gray-500'>Production Companies:</span>{" "}
            {movie.production_companies
              .map((company) => company.name)
              .join(", ")}
          </div>
          <div className='mt-4'>
            <span className='text-gray-500'>Budget:</span>{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(movie.budget)}
          </div>
          <div className='mt-4'>
            <span className='text-gray-500'>Revenue:</span>{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(movie.revenue)}
          </div>
          <div className='mt-4'>
            <span className='text-gray-500'>Rating:</span> {movie.vote_average}
            /10 ({movie.vote_count} votes)
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
