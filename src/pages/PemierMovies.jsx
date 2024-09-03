import { useEffect, useState } from "react";
import axios from "axios";
import defaultImage from "../assets/images/not-found.jpg";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

const API_KEY = "5b4014b5fa2f5679a149e8391b24bba5";

const PremierMovies = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day`, {
                    params: {
                        api_key: API_KEY,
                        language: "es-ES",
                        sort_by: "release_date.desc", 
                        page: page,
                        with_genres: selectedGenre,
                        primary_release_year: selectedYear 
                    }
                });
                console.log(response.data.results); 
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error("Error al obtener las películas:", error);
            }
        };
    
        fetchMovies();
    }, [page, selectedGenre, selectedYear]);  

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    return (
        <div className="w-full bg-Gris-Oscuro flex flex-col items-center">
            <Header />
            <div className="font-Russo flex flex-col sm:w-[640px] md:w-[768px] lg:w-[1280px] sm:mt-[50px] md:mt-[70px] lg:mt-[90px] items-center">
                <p className="text-white text-[24px] sm:mt-5 md:mt-6 lg:mt-7 
                sm:mb-5 md:mb-6 lg:mb-7 text-center">Películas Estreno</p>
                <div className="flex space-x-4 mb-8">
                <select 
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)}
                    className=" w-[160px] md:w-[140px] sm:w-[120px] h-10 bg-Azul-Claro text-white rounded-xl font-Roboto placeholder-white text-center sm:text-[14px] md:text-[15px] lg:text-[16px]"
                >
                    <option value="">Género: Todos</option>
                    <option value="28">Acción</option>
                    <option value="35">Comedia</option>
                    <option value="18">Drama</option>
                    <option value="878">Ciencia Ficción</option>
                </select>
                <span className="absolute right-0 top-0 mt-2 mr-3 text-white pointer-events-none">
                    <i className="fas fa-chevron-down"></i>
                </span>
                
                <input 
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    placeholder="Año: Todos"
                    className="w-[140px] md:w-[120px] sm:w-[100px] h-10 bg-Azul-Claro text-white rounded-xl font-Roboto placeholder-white text-center sm:text-[14px] md:text-[15px] lg:text-[16px]"
                />
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-4">
                    {movies.map((movie) => (
                        <div 
                        key={movie.id} 
                        className="transform transition-transform duration-300 sm:scale-90 lg:scale-100 md:scale-95"
                    >
                        <Card
                            key={movie.id}
                            title={movie.title}
                            year={movie.release_date.split("-")[0]}
                            imageUrl={movie.poster_path ?
                                `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                                : defaultImage}
                                movieData={movie}
                        />
                        </div>
                    ))}
                </div>
    
                <div className="flex justify-center items-center mt-6 space-x-4">
                    <button 
                        onClick={handlePreviousPage} 
                        disabled={page === 1}
                        className={`px-4 py-2 bg-Azul-Claro text-white rounded ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:text-black'}`}
                    >
                        Anterior
                    </button>
                    <span className="bg-Gris-Claro w-10 h-10 rounded-full text-black flex justify-center items-center">{page}</span>
                    <button 
                        onClick={handleNextPage} 
                        disabled={page === totalPages}
                        className={`px-4 py-2 bg-Azul-Claro text-white rounded ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:text-black'}`}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PremierMovies;
