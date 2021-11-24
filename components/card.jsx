
import { getImageUrl } from '../lib/url'
import styles from './card.module.css'

export default function Card({movie}) {
    return (
        <div className={styles.card}>
            <div className={styles.poster}>
                <img src={getImageUrl(movie.poster_path)} alt="poster"/> 
            </div>
            <div className={styles.score}>
            </div>
            <a>{movie.original_title}</a>
            <div className={styles.misc}>
            </div>
        </div>
    )
}

