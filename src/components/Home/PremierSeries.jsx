import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
import defaultImage from "../../assets/images/not-found.jpg";
import { Link } from 'react-router-dom';

const API_KEY = "5b4014b5fa2f5679a149e8391b24bba5";

const PremierSeries = () => {

    const [series, setSeries] = useState([]);

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/day`, {
                    params: {
                        api_key: API_KEY,
                        language: "es-ES",
                        page: 1
                    }
                });
                console.log(response.data.results); 
                setSeries(response.data.results.slice(0, 6));
            } catch (error) {
                console.error("Error al obtener las Series:", error);
            }
        };
    
        fetchSeries();
    }, []);
    


    return(
        <div className="font-Russo flex flex-col sm:w-[640px] md:w-[768px] lg:w-[1280px] items-center">

            <div className="w-full flex justify-between items-center sm:mb-2 md:mb-4 lg:mb-6 sm:px-11 md:px-4 lg:px-8">
                <p className="text-white text-[18px]">Series en Emisión</p>
                <Link to="/est-series">
                <p className="text-Gris-Claro hover:text-white transition">Ver todo</p>
                </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-4">
                    {series.map((serie) => (
                        <div 
                        key={serie.id} 
                        className="transform transition-transform duration-300 sm:scale-90 lg:scale-100 md:scale-95"
                    >
                        <Card
                            key={serie.id}
                            title={serie.name}
                            year={serie.first_air_date ? serie.first_air_date.split("-")[0] : "N/A"}
                            imageUrl={serie.poster_path ?
                                `https://image.tmdb.org/t/p/w200${serie.poster_path}`
                                : defaultImage}
                            movieData={serie}
                        />
                        </div>
                ))}
            
            </div>
        </div>
    )
}

export default PremierSeries;