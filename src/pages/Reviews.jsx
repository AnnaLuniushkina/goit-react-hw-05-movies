import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/API";
import ReviewsPage from "components/ReviewsPage/ReviewsPage";

export default function Reviews() {
    const [reviews, setReviews] = useState(null);

    const { movieId } = useParams();

    useEffect(() => {
        getMovieReviews(movieId).then(response => {
            setReviews(response.data.results);
        });
    }, [movieId]);

    return (
        <>{reviews && <ReviewsPage reviews={reviews}/>} </>
    )
}