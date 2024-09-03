import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import defaultImage from '../assets/images/not-found.jpg';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const API_KEY = "5b4014b5fa2f5679a149e8391b24bba5";

const Busqueda = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(useLocation().search).get('query');

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/multi`, {
          params: {
            api_key: API_KEY,
            language: 'es-ES',
            query: query,
            page: page,
          }
        });
        setResults(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error al obtener los resultados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className="w-full bg-Gris-Oscuro flex flex-col items-center">
      <Header />
      <div className="font-Russo flex flex-col sm:w-[640px] md:w-[768px] lg:w-[1280px] sm:mt-[50px] md:mt-[70px] lg:mt-[90px] items-center">
        <p className="text-white text-[24px] sm:mt-5 md:mt-6 lg:mt-7 
                sm:mb-5 md:mb-6 lg:mb-7 text-center">Resultados de Búsqueda</p>

        {loading ? (
          <p className="text-white">Cargando...</p>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-4">
              {results.length > 0 ? (
                results.map((item) => {
                  const releaseYear = item.release_date ? item.release_date.split("-")[0] : item.first_air_date ? item.first_air_date.split("-")[0] : "N/A";
                  return (

                    <div 
                        key={item.id} 
                        className="transform transition-transform duration-300 sm:scale-90 lg:scale-100 md:scale-95"
                    >
                    <Card
                      key={item.id}
                      title={item.title || item.name}
                      year={releaseYear}
                      imageUrl={item.poster_path ? `https://image.tmdb.org/t/p/w200${item.poster_path}` : defaultImage}
                      movieData={item}
                    />
                    </div>
                  );
                })
              ) : (
                <p className="text-white">No se encontraron resultados.</p>
              )}
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
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Busqueda;
