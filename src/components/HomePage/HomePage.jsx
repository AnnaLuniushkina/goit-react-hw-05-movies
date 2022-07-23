import { Link } from "react-router-dom";

export default function HomePage({moviesTrending}) {
    return (
        <>
        <h1>Trending today</h1>
            <ul>
                {moviesTrending.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
                </li>
                ))}
            </ul>
        </>
    );
};