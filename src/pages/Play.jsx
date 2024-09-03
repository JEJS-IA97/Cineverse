import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import defaultImage from '../assets/images/not-found.jpg';
import heart from '../assets/icons/heart.svg';
import star from '../assets/icons/star.svg';
import tag from '../assets/icons/tag.svg';
import user from '../assets/icons/user2.svg';
import play from '../assets/icons/Play.svg';

const Play = () => {
    const location = useLocation();
    const movieData = location.state?.movieData;

    if (!movieData) {
        return <div>No se han recibido datos.</div>;
    }

    const backdropUrl = movieData.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`
        : defaultImage;

    const posterUrl = movieData.poster_path
        ? `https://image.tmdb.org/t/p/w200${movieData.poster_path}`
        : defaultImage;

    const title = movieData.title || movieData.name;
    const year = movieData.release_date?.split("-")[0] || movieData.first_air_date?.split("-")[0];

    const genres = movieData.genres?.map(genre => genre.name).join(", ") || "Género no disponible";
    const runtime = movieData.runtime
        ? `${movieData.runtime} min`
        : `${movieData.episode_run_time?.[0] || 'Desconocido'} min`;

    return (
        <div className="bg-Gris-Oscuro sm:w-[640px] md:w-[768px] lg:w-[1280px] 2xl:w-full min-h-screen flex flex-col items-center right-0 left-0 mx-auto justify-center">
            <Header />
 
            <div className="relative sm:w-[550px] md:w-[680px] lg:w-[1000px] 2xl:w-[1300px] h-[500px] w-[1000px] sm:h-[275px] md:h-[340px] lg:h-[500px] 2xl:h-[650px] bg-white sm:mt-[60px] md:mt-[80px] mt-[100px] border-8 border-Azul-Claro flex justify-center items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${backdropUrl})`, opacity: 0.8 }}
                />
                <div className="relative z-10 flex justify-center items-center h-fullc cursor-pointer">
                    <img src={play} alt="Play Icon" className="sm:w-[60px] sm:h-[60px] dm:w-[80px] dm:h-[80px] w-[100px] h-[100px]" />
                </div>
            </div>


            <div className="flex sm:mt-6 sm:w-[550px] md:mt-8 md:w-[680px] mt-10 lg:w-[1000px] 2xl:w-[1300px] ">

                <div
                    className="relative sm:h-[240px] sm:w-[170px] md:h-[260px] md:w-[180px] h-[280px] w-[190px] bg-Gris-Menos-Oscuro"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${posterUrl})` }}
                    />
                </div>

                <div className="flex flex-col pl-5 sm:w-[370px] md:w-[500px] lg:w-[800px] 2xl:w-[1050px]">

                    <div className="text-white font-Roboto flex gap-3 sm:text-[14px] md:text-[15px] text-[16px]">
                        <div className="font-bold">{title}</div>
                        <div className="text-Gris-Claro">{year}</div>
                    </div>

                    <div className="sm:text-[10px] md:text-[11px] text-[12px] text-Gris-Claro font-Roboto flex gap-2">
                        <div>{genres}</div>
                        <p>-</p>
                        <div>{runtime}</div>
                    </div>

                
                    <div className="text-white font-Roboto flex flex-col mt-4">
                        <div className="sm:text-[12px] md:text-[13px] text-[14px] font-semibold">Resumen</div>
                        <div className="sm:text-[10px] md:text-[11px] text-[12x]">{movieData.overview}</div>
                    </div>

           
                    <div className="text-black font-Roboto flex mt-4 gap-7">
                        <ActionButton icon={heart} text="Agregar a favoritos" />
                        <ActionButton icon={star} text="Calificar" />
                        <ActionButton icon={tag} text="Lista de espera" />
                    </div>

     
                    <div className="text-white font-Roboto flex flex-col mt-4">
                        <div className="text-[14px] font-semibold">Comentarios</div>
                        <div className="mt-2 flex flex-col gap-y-2 scroll-m-1">
      
                            {['Nombre', 'Nombre'].map((name, index) => (
                                <Comment key={index} name={name} comment="Comentario" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-12 bg-Azul-Claro h-2 w-full"></div>
        </div>
    );
};


const ActionButton = ({ icon, text }) => (
    <div className="flex items-center bg-white w-[85px] h-[35px] justify-center rounded-lg gap-1">
        <div className="bg-Azul-Claro flex items-center justify-center rounded-full w-7 h-7 text-center">
            <img src={icon} alt={`${text} Icon`} className="w-4 h-4" />
        </div>
        <p className="text-[8px] w-[35px] font-semibold text-center">{text}</p>
    </div>
);


const Comment = ({ name, comment }) => (
    <div className="flex gap-2">
        <div className="flex items-center bg-Azul-Claro w-[30px] h-[30px] justify-center">
            <img src={user} alt="User Icon" className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
            <div className="text-[10px]">{name}</div>
            <div className="text-[10px] text-Gris-Claro">{comment}</div>
        </div>
    </div>
);

export default Play;
