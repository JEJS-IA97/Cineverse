import Header from "../components/Header";
import Background from "../assets/images/background.png"
import Background2 from "../assets/images/background2.png"
import Password from "../assets/icons/password2.svg"
import User from "../assets/icons/user2.svg"
import Mail from "../assets/icons/mail.svg"
import Logo from "../assets/images/Logo.png"
import { Link } from "react-router-dom";
import Footer from "../components/Footer"


const SignUp = () => {
    return(
        <div className=" bg-Gris-Oscuro w-full flex flex-col items-center left-0 right-0 mx-auto justify-center"  style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <Header/>
            <div className="sm:w-[580px] sm:h-[500px] md:w-[700px] md:h-[550px] lg:w-[860px] lg:h-[485px] 2xl:w-[900px] 2xl:h-[600px] shadow-md shadow-black flex sm:mt-[55px] md:mt-[100px] lg:mt-[50px] 2xl:mt-[70px] sm:mb-[1px] md:mb-[110px] lg:mb-[1px] 2xl:mb-[9px]">
                <div className="w-[400px] lg:h-[485px] 2xl:h-[600px]"  style={{
                backgroundImage: `url(${Background2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                }}></div>
                <div className="flex flex-col justify-center items-center bg-Gris-Oscuro w-[500px]">  
                    <div><img className="h-[80px] w-auto mb-1 left-0 right-0 mx-auto" src={Logo} alt="Logo" />
                    <h2 className="text-[26px] font-bold mb-4 text-white text-center">Crea una cuenta</h2>
                    <form className="grid grid-cols-1 gap-1 items-center">

                    <div className="text-white font-Roboto text-[12px]">Usuario</div>
                    <div className="flex items-center border border-Azul-Claro sm:w-[260px] sm:h-[30px] w-[320px] h-[35px] p-2 mb-2 rounded-md">
                    <img src={User} alt="User Icon" className="w-3 h-3 text-Rojo-Coral mr-2" />
                    <input
                        type="user"
                        placeholder="Usuario"
                        className="flex-1 border-none bg-transparent focus:outline-none text-white placeholder-gray-500 text-[14px]"
                    />
                    </div>

                    <div className="text-white font-Roboto text-[12px]">Correo</div>
                    <div className="flex items-center border border-Azul-Claro sm:w-[260px] sm:h-[30px] w-[320px] h-[35px] mb-2 p-2 rounded-md">
                    <img src={Mail} alt="E-Mail Icon" className="w-3 h-3 text-Rojo-Coral mr-2" />
                    <input
                        type="email"
                        placeholder="Correo"
                        className="flex-1 border-none bg-transparent focus:outline-none text-white placeholder-gray-500 text-[14px]"
                    />
                    </div>

                    <div className="text-white font-Roboto text-[12px]">Contraseña</div>
                    <div className="flex items-center border border-Azul-Claro sm:w-[260px] sm:h-[30px] w-[320px] h-[35px] mb-4 p-2 rounded-md">
                    <img src={Password} alt="Password Icon" className="w-3 h-3 mr-2" />
                        <input
                        type="password"
                        placeholder="Contraseña"
                        className="flex-1 border-none bg-transparent focus:outline-none text-white placeholder-gray-500 text-[14px]"
                        />
                        </div>

                        <div className="w-full flex justify-center mb-2">
                        <button type="submit" className=" sm:w-[230px] sm:h-[30px] w-[250px] h-[35px] bg-Azul-Claro text-white  font-Russo text-[14px] rounded-md">
                        Registrate
                        </button>
                        </div>
                       
                        <div className="w-full flex justify-center">
                        <Link to="/iniciar-sesion">
                        <button type="submit" className="sm:w-[230px] sm:h-[30px] w-[250px] h-[35px] bg-Gris-Menos-Oscuro text-white font-Russo text-[14px] rounded-md">
                            Inicia Sesion
                        </button>
                        </Link>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp;