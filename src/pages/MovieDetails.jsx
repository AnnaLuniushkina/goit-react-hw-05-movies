import { useState, useEffect, Suspense } from "react";
import { useParams, Link,  useLocation, Outlet } from "react-router-dom";
import { getMovieDetails } from "services/API";
import MovieDetailsPage from "components/MovieDetailsPage/MovieDetailsPage";

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    
    const { movieId } = useParams();
    
    const location = useLocation();

    useEffect(() => {
        getMovieDetails(movieId).then(response => {
            setMovie(response.data);
        });
    }, [movieId]);

    const path = location?.state?.from ?? '/';

    const button = {
        cursor: 'pointer',
        padding: "7px",
        borderRadius: "5px",
        backgroundColor: "#2196f3",
        border: "none",
    }

    return (
        <>
            <Link to={path}><button style={button}>Go back</button></Link>
            {movie && <MovieDetailsPage movie={movie} />}
            <hr />
            <h3 className="additional_title">Additional information</h3>
            <ul className="additional_information">
                <li >
                    <Link className='additional_item' to="cast" state={{from: path}}>Cast</Link>
                </li>
                <li >
                    <Link className='additional_item' to="reviews" state={{from: path}}>Reviews</Link>
                </li>
            </ul>
            <hr />
            <Suspense>
                <Outlet/>
            </Suspense>
        </>
    );
}