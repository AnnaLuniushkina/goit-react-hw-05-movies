import { useState, useEffect } from "react";
import { getTrending } from "services/API";
import HomePage from "components/HomePage/HomePage";

export default function Home() {
    const [moviesTrending, setMoviesTrending] = useState(null);

    useEffect(() => {
        getTrending().then(response => {
            setMoviesTrending(response.data.results);
            console.log(response.data.results);
        });
    }, []);

    return (
        <> {moviesTrending && <HomePage moviesTrending={moviesTrending } /> }</>
    );
};