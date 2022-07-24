import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSearchMovies } from "services/API";
import MoviesSearchPage from "components/MoviesSearchPage/MoviesSearchPage";
import NotFound from "./NotFound";


export default function Movies() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [moviesList, setMoviesList] = useState(null);

    const query = searchParams.get('query');

    useEffect(() => {
        if (query !== null) {
            setSearchQuery(query);
            getSearchMovies(query).then(response => {
                setMoviesList(response.data.results);
            });
        }
    }, [query]);
    
    const handleNameChange = (event) => {
        setSearchQuery(event.currentTarget.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        const normalizeSearchQuery = searchQuery.trim().toLowerCase();

    if (normalizeSearchQuery === '') {
        return alert('Введіть пошуковий запит.');
        }
        
        setSearchParams(`query=${searchQuery}`);

        getSearchMovies(searchQuery).then(response => {
            setMoviesList(response.data.results);
        });
        
    }
    const input = {
        padding: "5px",
        width: 250,
        borderRadius: "5px",
    }

    const button = {
        padding: "7px",
        borderRadius: "5px",
        backgroundColor: "#2196f3",
        border: "none",
        cursor: "pointer",
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    style={input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    name='searchQuery'
                    value={searchQuery}
                    onChange={handleNameChange} />
                <button type="submit" style={button}>Search</button>
            </form>
            <div>{moviesList && <MoviesSearchPage moviesList={moviesList} />}</div>
            <div>{moviesList && <NotFound /> }</div>
        </>
    );
};