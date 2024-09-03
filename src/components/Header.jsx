import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import UserIcon from '../assets/icons/user2.svg';
import SearchIcon from '../assets/icons/Search.svg';
import Password from "../assets/icons/password2.svg";
import User from "../assets/icons/user2.svg";


const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user] = useState({
        username: 'user123',
        email: 'user@example.com'
    });
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate(); 

    const handleLogin = () => {
        setIsLoggedIn(true);
        setModalOpen(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setModalOpen(false);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            e.preventDefault(); 
            navigate(`/buscar?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className="sm:h-[50px] md:h-[60px] lg:h-[70px] sm:w-[640px] md:w-[768px] lg:w-[1280px] justify-between right-0 left-0 z-10 font-medium font-Russo text-white flex items-center bg-black px-4 sm:px-2 md:px-3 lg:px-4 mx-auto 2xl:w-full">
            <div className="flex items-center">
                <Link to="/">
                    <img className=" sm:h-[40px] md:h-[50px] lg:h-[60px] w-auto" src={logo} alt="home" />
                </Link>
            </div>
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 items-center sm:text-[12px] md:text-[14px] lg:text-[16px]">
                <Link to="/peliculas">
                    <div className="hover:text-Azul-Claro">Películas</div>
                </Link>
                <Link to="/series">
                    <div className="hover:text-Azul-Claro">Series</div>
                </Link>
                <Link to="/animes">
                    <div className="hover:text-Azul-Claro">Animes</div>
                </Link>
                <div className="bg-Gris-Oscuro sm:h-[20px] md:h-[25px] lg:h-[30px] sm:w-[140px] md:w-[160px] lg:w-[180px] border-2 border-Azul-Claro rounded-full flex items-center gap-2 sm:gap-1 px-2">
                    <img src={SearchIcon} alt="Search" className="w-3 sm:w-2 h-3 sm:h-2" />
                    <input
                        className="bg-transparent font-Roboto text-Gris-Claro focus:outline-none w-full sm:text-[10px] md:text-[12px] lg:text-[14px]"
                        type="search"
                        placeholder="Buscar"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onKeyDown={handleSearchKeyDown} 
                    />
                </div>
                <img
                    src={UserIcon}
                    alt="Perfil"
                    className="w-7 sm:w-5 md:w-6 h-7 sm:h-5 md:h-6 cursor-pointer"
                    onClick={() => setModalOpen(!modalOpen)}
                />
            </div>

            {modalOpen && (
                <div className="absolute top-[60px] sm:top-[70px] md:top-[80px] lg:top-[90px] right-3 bg-Gris-Menos-Oscuro text-white text-center w-[200px] sm:w-[210px] md:w-[230px] rounded-xl shadow-lg font-Roboto">
                    {!isLoggedIn ? (
                        <div className="p-3">
                            <h2 className="text-[14px] sm:text-[16px] mb-2">Iniciar Sesión</h2>
                            <div className="flex items-center mb-3 p-2 border-b-2 border-white">
                                <img src={User} alt="User Icon" className="w-3 h-3 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Usuario"
                                    className="bg-transparent text-[12px] sm:text-[14px] w-full focus:outline-none"
                                />
                            </div>
                            <div className="flex items-center mb-4 p-2 border-b-2 border-white">
                                <img src={Password} alt="Password Icon" className="w-3 h-3 mr-2" />
                                <input
                                    type="password"
                                    placeholder="Contraseña"
                                    className="bg-transparent text-[12px] sm:text-[14px] w-full focus:outline-none"
                                />
                            </div>
                            <button
                                onClick={handleLogin}
                                className="w-full h-[30px] sm:h-[35px] bg-Azul-Claro text-white rounded"
                            >
                                Iniciar Sesión
                            </button>
                            <div className="flex justify-between mt-2">
                                <Link to='/registrar-cuenta'>
                                    <p className="text-[10px] sm:text-[12px]">Registrate</p>
                                </Link>
                                <p className="text-[10px] sm:text-[12px]">¿Olvidaste la contraseña?</p>
                            </div>
                        </div>
                    ) : (
                        <div className="p-3 flex flex-col items-center">
                            <h2 className="text-[14px] sm:text-[16px] mb-1">Hola, {user.username}</h2>
                            <p className="text-[12px] sm:text-[14px] text-Gris-Claro">Correo: {user.email}</p>
                            <div className="bg-Azul-Claro w-[150px] h-[1px] mt-3"></div>
                            <Link to="/perfil">
                                <div className="mt-4 cursor-pointer hover:text-Azul-Claro">Perfil</div>
                            </Link>
                            <Link to="/favoritos">
                                <div className="mt-2 cursor-pointer hover:text-Azul-Claro">Favoritos</div>
                            </Link>
                            <Link to="/lista-espera">
                                <div className="mt-2 cursor-pointer hover:text-Azul-Claro">Lista de Espera</div>
                            </Link>
                            <div className="bg-Azul-Claro w-[150px] h-[1px] mt-3"></div>
                            <button
                                onClick={handleLogout}
                                className="mt-2 w-full text-white rounded"
                            >
                                Cerrar Sesión
                            </button>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;

