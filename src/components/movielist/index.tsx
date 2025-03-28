
import { Movie } from '../../types';
import CardMovie from '../cardmovie';
import styles from './MovieList.module.css'


interface MovieListProps{
    movies: Movie[];
}

const MovieList = ({movies}: MovieListProps) => {
  return (
    <ul className={styles.lista}>
        {movies.map((movie) => (<CardMovie key={movie.id} {...movie}/>))}
    </ul>
  )
}

export default MovieList