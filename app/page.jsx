import { Montserrat } from "next/font/google";
import Movie from "./movie";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default async function Home() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const data = await response.json();

  return (
    <div>
      <div className='container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10'>
        {data.results.map((movie) => (
          <Movie {...movie} />
        ))}
      </div>
    </div>
  );
}
