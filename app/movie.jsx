import React from "react";
import Image from "next/image";
import styles from "./movies.module.css";
import Link from "next/link";

export default function Movie({
  id,
  title,
  poster_path,
  overview,
  release_date,
  vote_average,
}) {
  return (
    <div className={{ ...styles.movie }}>
      <h2 id='@!s'>{title}</h2>
      <Link href={`/${id}`} rel='noopener noreferrer'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
          width={300}
          height={450}
        />
      </Link>
      <p>{overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Rating: {vote_average}/10</p>
    </div>
  );
}
