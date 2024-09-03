import Header from "../components/Header";
import user from "../assets/icons/user2.svg"
import film from "../assets/icons/film.svg"

const Profile = () => {
    return (
        <div className="bg-Gris-Oscuro w-full lg:h-screen 2xl:h-screen right-0 left-0 mx-auto flex flex-col font-Roboto"> 
            <Header />
            <div className="flex items-center justify-center gap-9 md:mt-[60px] lg:mt-[50px] 2xl:mt-[100px]">
                <div className="flex flex-col items-center justify-center bg-Gris-Menos-Oscuro md:h-[700px] md:w-[250px] lg:h-[630px] lg:w-[220px] h-[630px] w-[200px] text-white rounded-xl">
                <img src={user} alt="User Icon" className="w-[100px] h-[100px]" />
                <div className="text-[14px] mt-4">Usuario</div>
                <div className="text-[10px] text-Gris-Claro">Correo</div>
                <div className="text-[10px] mt-3">Fecha de registro: </div>
                <img src={film} alt="Film Icon" className="w-[150px] h-[150px] mt-[200px]" />
                </div>

                <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col justify-center bg-Gris-Menos-Oscuro md:w-[380px] md:h-[470px] lg:h-[300px] lg:w-[800px] 2xl:h-[300px] 2xl:w-[800px] text-white rounded-xl">
                <div className="mb-4 ml-8 mt-[-35px] font-semibold">Tus favoritos</div>

                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-14 md:w-[380px] lg:w-[800px] 2xl:w-[800px]">
                <div className=" md:h-[136px] md:w-[95px] lg:h-[200px] lg:w-[130px] 2xl:h-[200px] 2xl:w-[130px]">
                <div className="md:h-[136px] md:w-[95px] lg:h-[180px] lg:w-[130px] 2xl:h-[180px] 2xl:w-[130px] bg-white"></div>
                <div className="font-Roboto text-white text-[12px] mt-2">titulo</div>
                <div className="font-Roboto text-Gris-Claro text-[12px]" >Anno</div>
                </div>

                <div className="md:h-[136px] md:w-[95px] lg:h-[200px] lg:w-[130px] 2xl:h-[200px] 2xl:w-[130px]">
                <div className="md:h-[136px] md:w-[95px] lg:h-[180px] lg:w-[130px] 2xl:h-[180px] 2xl:w-[130px] bg-white"></div>
                <div className="font-Roboto text-white text-[12px] mt-2">titulo</div>
                <div className="font-Roboto text-Gris-Claro text-[12px]" >Anno</div>
                 </div>

                 <div className="md:h-[136px] md:w-[95px] lg:h-[200px] lg:w-[130px] 2xl:h-[200px] 2xl:w-[130px]">
                <div className="md:h-[136px] md:w-[95px] lg:h-[180px] lg:w-[130px] 2xl:h-[180px] 2xl:w-[130px] bg-white"></div>
                <div className="font-Roboto text-white text-[12px] mt-2">titulo</div>
                <div className="font-Roboto text-Gris-Claro text-[12px]" >Anno</div>
                 </div>

                 <div className="md:h-[136px] md:w-[95px] lg:h-[200px] lg:w-[130px] 2xl:h-[200px] 2xl:w-[130px]">
                <div className="md:h-[136px] md:w-[95px] lg:h-[180px] lg:w-[130px] 2xl:h-[180px] 2xl:w-[130px] bg-white"></div>
                <div className="font-Roboto text-white text-[12px] mt-2">titulo</div>
                <div className="font-Roboto text-Gris-Claro text-[12px]" >Anno</div>
                 </div>

                 <div className="md:h-[136px] md:w-[95px] lg:h-[200px] lg:w-[130px] 2xl:h-[200px] 2xl:w-[130px]">
                <div className="md:h-[136px] md:w-[95px] lg:h-[180px] lg:w-[130px] 2xl:h-[180px] 2xl:w-[130px] bg-white"></div>
                <div className="font-Roboto text-white text-[12px] mt-2">titulo</div>
                <div className="font-Roboto text-Gris-Claro text-[12px]" >Anno</div>
                 </div>
                 </div>
                </div>

                <div className="flex flex-col justify-center bg-Gris-Menos-Oscuro md:w-[380px] md:h-[470px] lg:h-[300px] 2xl:h-[300px] lg:w-[800px] 2xl:w-[800px] text-white rounded-xl">
                <div className="mb-4 ml-8 mt-[-35px] font-semibold">Lista de espera</div>

                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-14 md:w-[380px] lg:w-[800px] 2xl:w-[800px]">
                <div className="md:h-[136px] md:w-[95px] lg:h-[200px] lg:w-[130px] 2xl:h-[200px] 2xl:w-[130px]">
                <div className=" md:h-[136px] md:w-[95px] lg:h-[180px] lg:w-[130px] 2xl:h-[180px] 2xl:w-[130px]b bg-white"></div>
                <div className="font-Roboto text-white text-[12px] mt-2">titulo</div>
                <div className="font-Roboto text-Gris-Claro text-[12px]" >Anno</div>
                </div>

                <div className="md:h-[136px] md:w-[95px] lg:h-[200px] lg:w-[130px] 2xl:h-[200px] 2xl:w-[130px]">
                <div className="md:h-[136px] md:w-[95px] lg:h-[180px] lg:w-[130px] 2xl:h-[180px] 2xl:w-[130px] bg-white"></div>
                <div className="font-Roboto text-white text-[12px] mt-2">titulo</div>
                <div className="font-Roboto text-Gris-Claro text-[12px]" >Anno</div>
                 </div>

                 <div className="md:h-[136px] md:w-[95px] lg:h-[200px] lg:w-[130px] 2xl:h-[200px] 2xl:w-[130px]">
                <div className="md:h-[136px] md:w-[95px] lg:h-[180px] lg:w-[130px] 2xl:h-[180px] 2xl:w-[130px] bg-white"></div>
                <div className="font-Roboto text-white text-[12px] mt-2">titulo</div>
                <div className="font-Roboto text-Gris-Claro text-[12px]" >Anno</div>
                 </div>

                 <div className="md:h-[136px] md:w-[95px] lg:h-[200px] lg:w-[130px] 2xl:h-[200px] 2xl:w-[130px]">
                <div className="md:h-[136px] md:w-[95px] lg:h-[180px] lg:w-[130px] 2xl:h-[180px] 2xl:w-[130px] bg-white"></div>
                <div className="font-Roboto text-white text-[12px] mt-2">titulo</div>
                <div className="font-Roboto text-Gris-Claro text-[12px]" >Anno</div>
                 </div>

                 <div className="md:h-[136px] md:w-[95px] lg:h-[200px] lg:w-[130px] 2xl:h-[200px] 2xl:w-[130px]">
                <div className="md:h-[136px] md:w-[95px] lg:h-[180px] lg:w-[130px] 2xl:h-[180px] 2xl:w-[130px] bg-white"></div>
                <div className="font-Roboto text-white text-[12px] mt-2">titulo</div>
                <div className="font-Roboto text-Gris-Claro text-[12px]" >Anno</div>
                 </div>
                 </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;