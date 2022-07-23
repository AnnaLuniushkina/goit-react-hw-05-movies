import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCredits } from "services/API";
import CastPage from "components/CastPage/CastPage";


export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        getMovieCredits(movieId).then(response => {
            setCast(response.data.cast);
        });
    }, [movieId]);

    return <>{cast && <CastPage cast={cast} />}</>;
};