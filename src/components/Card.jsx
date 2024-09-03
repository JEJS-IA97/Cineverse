import { useNavigate } from 'react-router-dom';

const Card = ({ title, year, imageUrl, movieData }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/reproducir', { state: { movieData } });
    };

    return (
        <div 
            className="h-[350px] w-[190px] cursor-pointer" 
            onClick={handleClick}
        >
            <div className="h-[280px] w-[190px] bg-Gris-Menos-Oscuro">
                <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
            </div>
            <div className="font-Roboto text-white text-[14px] mt-2">{title}</div>
            <div className="font-Roboto text-Gris-Claro">{year}</div>
        </div>
    );
}

export default Card;
