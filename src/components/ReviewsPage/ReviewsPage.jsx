import PropTypes from 'prop-types';
import s from './ReviewsPage.module.css';

export default function ReviewsPage({ reviews }) {
    return reviews.length > 0 ? (
        <>
            <ul className={s.reviews_list}>
                {reviews.map(review => (
                    <li className={s.reviews_item}
                        key={review.id}>
                            <h3 className={s.reviews_author}>{review.author}</h3>
                            <p className={s.reviews_content}>{review.content}</p>
                        </li>
                ))}
            </ul>
        </>
    ) : (
        <span>We don't have any review for this movie</span>
    );
}

ReviewsPage.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
        )
}