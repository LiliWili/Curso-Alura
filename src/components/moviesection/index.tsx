import { FaSearch } from 'react-icons/fa'
import Button from '../button'
import FildSet from '../fieldset'
import InputText from '../inputText'
import styles from './MovieSection.module.css'
import MovieList from '../movielist'
import usefetchMovies from '../../hooks/usefetchMovies'
import usefilterMovies from '../../hooks/usefilterMovies'

const MovieSection = () => {
    const{movies, error, isLoanding} =usefetchMovies();
    const {searchTerm, handleSearch, setSearchTerm, filteredMovies} = usefilterMovies(movies)
    
  return (
    <main>
        <section className=
        {styles.container}>
          <FildSet variant='secondary'>
            <InputText value={searchTerm} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)} placeholder='Buscar filmes...'/>
            <Button variant='icon' onClick={handleSearch}>
                <FaSearch/>
            </Button>
          </FildSet>
          <h1 className={styles.titulo}>Em Cartaz</h1>
          {isLoanding && <p>Carregando filmes...</p>}
          {error && <p className={styles.error}>{error}</p>}
          <MovieList movies={filteredMovies}/>
        </section>
    </main>
  )
}

export default MovieSection