import Logo from '../assets/images/Logo.png';

const Footer =() =>{
    return(
        <div className='flex flex-col items-center sm:w-[640px] md:w-[768px] lg:w-[1280px] 2xl:w-full'>
            <img className="h-[100px] w-auto mt-12" src={Logo} alt="home" />
            <div className='bg-Azul-Claro sm:w-[640px] md:w-[768px] lg:w-[1280px] h-4 mt-10 2xl:w-full'></div>
        </div>
    )
}

export default Footer;