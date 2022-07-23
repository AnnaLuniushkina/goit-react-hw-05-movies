import PropTypes from 'prop-types';
import { useLocation, Link } from "react-router-dom";

export default function MoviesSearchPage({ moviesList}) {
    const location = useLocation();

    return (
        <ul>
            {moviesList.map(item => (
                <li key={item.id}>
                    <Link to={`/movies/${item.id}`} state={{ from: location }}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

MoviesSearchPage.propTypes = {
    moviesList: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    })
    ),
};