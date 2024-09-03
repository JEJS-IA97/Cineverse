import Header from "../components/Header";
import Background from "../assets/images/background.png"
import Background2 from "../assets/images/background2.png"
import Password from "../assets/icons/password2.svg"
import User from "../assets/icons/user2.svg"
import Logo from "../assets/images/Logo.png"
import { Link } from "react-router-dom";

const SignIn = () => {
    return(
        <div className="w-[1280px] h-screen flex flex-col items-center left-0 right-0 mx-auto justify-center"  style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <Header/>
            <div className="w-[900px] h-[600px] shadow-md shadow-black flex">
                <div className="w-[400px] h-[600px]"  style={{
                backgroundImage: `url(${Background2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                }}></div>
                <div className="flex flex-col justify-center items-center bg-Gris-Oscuro w-[500px]">  
                    <div><img className="h-[80px] w-auto mb-1 left-0 right-0 mx-auto" src={Logo} alt="Logo" />
                    <h2 className="text-[26px] font-bold mb-4 text-white text-center">Inicia Sesion</h2>
                    <form className="grid grid-cols-1 gap-1 items-center">

                    <div className="text-white font-Roboto text-[12px]">Usuario</div>
                    <div className="flex items-center border border-Azul-Claro w-[320px] h-[35px] p-2 mb-2 rounded-md">
                    <img src={User} alt="User Icon" className="w-3 h-3 text-Rojo-Coral mr-2" />
                    <input
                        type="user"
                        placeholder="Usuario"
                        className="flex-1 border-none bg-transparent focus:outline-none text-white placeholder-gray-500 text-[14px]"
                    />
                    </div>

                    <div className="text-white font-Roboto text-[12px]">Contraseña</div>
                    <div className="flex items-center border border-Azul-Claro w-[320px] h-[35px] mb-2 p-2 rounded-md">
                    <img src={Password} alt="Password Icon" className="w-3 h-3 mr-2" />
                        <input
                        type="password"
                        placeholder="Contraseña"
                        className="flex-1 border-none bg-transparent focus:outline-none text-white placeholder-gray-500 text-[14px]"
                        />
                        </div>
                        <div className='flex justify-between mb-3'> 
                        <div className='grid grid-cols-2 mb-3'>
                        <input
                            type="checkbox"
                            id="remember"
                            className="appearance-none w-4 h-4 checked:bg-Azul-Claro checked:border-Azul-Claro border border-white"
                        />
                        <p className='text-[12px] ml-[-22px] font-Roboto text-white'>Recuerdame</p>
                        </div>
                        <p className='text-[12px] font-Roboto text-white'>Olvide la contraseña</p>
                        </div>
                        <div className="w-full flex justify-center mb-2">
                        <button type="submit" className="w-[250px] h-[35px] bg-Azul-Claro text-white  font-Russo text-[14px] rounded-md">
                            Iniciar Sesion
                        </button>
                        </div>
                        <div className="w-full flex justify-center">
                        <Link to="/registrar-cuenta">
                        <button type="submit" className="w-[250px] h-[35px] bg-Gris-Menos-Oscuro text-white font-Russo text-[14px] rounded-md">
                            Registrate
                        </button>
                        </Link>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;