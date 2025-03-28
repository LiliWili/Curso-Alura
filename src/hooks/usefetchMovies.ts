import { useEffect, useState } from "react";
import { getMovies } from "../api";
import { Movie } from "../types";


const usefetchMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoanding, setIsLoanding] = useState<boolean>(false)
    const [error, setError] = useState<string| null>(null)

    const fetchMovies = async () => {
        setIsLoanding(true)
        setError(null)
        try{
            const movies = await getMovies();
            setMovies(movies);
        }catch(erro){
            setError("Erro ao buscar filmes. Tente novamente")
            console.error( erro)
        }finally{
            setIsLoanding(false)
        }
    }

    useEffect(()=>{
        fetchMovies();
    },[]);

  return {movies, isLoanding, error}
}

export default usefetchMovies