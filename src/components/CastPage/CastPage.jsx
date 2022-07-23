import s from './CastPage.module.css';
import defaultImg from '../../images/defaultImg.jpg';

// export default function CastPage({ cast }) {
//     return (
//         <ul className={s.cast_page}>
//             {cast.map(item => (
//                 <li key={item.id} className={s.cast_page_item}>
//                     <img
//                         src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
//                         alt={item.original_name}
//                         width='200px'
//                     />
//                     <h3 className={s.cast_name}>{item.name}</h3>
//                     <p className={s.cast_character}>{item.character}</p>
//                 </li>
//             ))}
//         </ul>
//     );
// };

export default function CastPage({ cast }) {
    return (
        <ul className={s.cast_page}>
            {cast.map(({ id, profile_path, original_name, name, character }) => {
                return (
                    <li key={id} className={s.cast_page_item}>
                        {profile_path ? <img
                        src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                        alt={original_name}
                        width='200px'
                        /> : <img
                                className={s.cast_img}
                        src={defaultImg}
                        alt={original_name}
                        width='200px'
                    />}
                    <h3 className={s.cast_name}>{name}</h3>
                    <p className={s.cast_character}>{character}</p>
                </li>
                )
                
            })
            }
        </ul>
    );
};