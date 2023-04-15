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
            <span className='text-gray-500'>
              Release Date:
              {new Date(movie.release_date)}
            </span>{" "}
          </div>
          <div className='mt-4'>
            <span className='text-gray-500'>
              Runtime:
              {movie.runtime} min
            </span>
          </div>
          <div className='mt-4'>
            <span className='text-gray-500'>
              Genres:
              {movie.genres.map((genre) => genre.name).join(", ")}
            </span>{" "}
          </div>
          <div className='mt-4'>
            <span className='text-gray-500'>
              Production Companies:
              {movie.production_companies
                .map((company) => company.name)
                .join(", ")}
            </span>{" "}
          </div>
          <div className='mt-4'>
            <span className='text-gray-500'>
              Budget:
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(movie.budget)}
            </span>{" "}
          </div>
          <div className='mt-4'>
            <span className='text-gray-500'>
              Revenue:
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(movie.revenue)}
            </span>{" "}
          </div>
          <div className='mt-4'>
            <span className='text-gray-500'>
              Rating:
              {movie.vote_average}
              /10 ({movie.vote_count} votes)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
