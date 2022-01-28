import { FaStar, FaRegStar } from 'react-icons/fa'

import { getImageUrl } from '../lib/url'
import styles from './card.module.css'

export default function Card({movie}) {
    return (
        <div className={styles.card}>
            <div className={styles.posterWrapper}>
                <img src={getImageUrl(movie.poster_path)} alt="poster"/> 
            </div>
            <div className={styles.scoreWrapper}>
                <span className={styles.actualScore}>
                    <FaStar className={styles.scoreIcon}/> {movie.vote_average}
                </span>
                <FaRegStar/>
            </div>
            <a>{movie.original_title}</a>
            <div className={styles.misc}>
            </div>
        </div>
    )
}

