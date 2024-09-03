import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

const API_KEY = "5b4014b5fa2f5679a149e8391b24bba5";

const Carousel = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week`, {
                    params: {
                        api_key: API_KEY,
                        language: "es-ES"
                    }
                });
                setItems(response.data.results.slice(0, 5));
            } catch (error) {
                console.error("Error al obtener los datos del carrusel:", error);
            }
        };

        fetchData();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    return (
        <div className="sm:h-[320px] md:h-[384px] lg:h-[640px] sm:w-[640px] md:w-[768px] lg:w-[1280px] overflow-hidden mt-10">
            <Slider {...settings}>
                {items.map((item) => (
                    <div key={item.id} className="relative">
                        <img
                            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                            alt={item.title || item.name}
                            className="sm:w-[640px] md:w-[768px] lg:w-[1280px] sm:h-[320px] md:h-[384px] lg:h-[640px] object-cover"
                        />
                        <div className="absolute sm:h-[350px] md:h-[400px] lg:h-[450px] bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent sm:p-6 md:p-8 lg:p-10">
                            <h2 className="text-white sm:text-[30px] md:text-[34px] lg:text-[40px] font-bold sm:pt-[120px] md:pt-[160px] lg:pt-[210px]">
                                {item.title || item.name}
                            </h2>
                            <p className="text-white sm:text-[18px] md:text-[20px] lg:text-[22px]">
                                {(item.release_date?.split("-")[0]) || (item.first_air_date?.split("-")[0])}
                            </p>
                            <p className="text-white lg:text-[14px] md:text-[12px] sm:text-[10px] lg:w-[1000px] md:w-[700px] sm:w-[600px]">
                                {item.overview}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
