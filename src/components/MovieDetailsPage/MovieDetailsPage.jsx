import PropTypes from 'prop-types';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage({ movie }) {
    const { poster_path, title, release_date, vote_average, overview, genres } = movie;

    return (
        <div className={s.movie_details_page}>
            <div className={s.img_wrapper}>
                <img
                    src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
                    alt={title}
                    width="400px" />
            </div>

            <div>
                <h2 className={s.movie_title}>{title} ({release_date.slice(0, 4)})</h2>
                <p className={s.user_score}>User score: <span className={s.span}>{vote_average * 10}%</span></p>
                <h3 className={s.overview}>Overview</h3>
                <p className={s.movie_overview}>{overview}</p>
                <h3 className={s.genres}>Genres</h3>
                <p className={s.genres_text}>{genres.map(movie =>
                    movie.name).join(', ')}</p>
                
            </div>
        </div> 
    );
};

MovieDetailsPage.propTypes = {
    movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        })
    ),
    }),
};