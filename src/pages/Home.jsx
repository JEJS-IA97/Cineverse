import Header from '../components/Header'
import Carousel from '../components/Home/Carousel';
import TopMovies from '../components/Home/TopMovies';
import PremierMovies from '../components/Home/PremierMovies';
import TopSeries from '../components/Home/TopSeries';
import PremierSeries from '../components/Home/PremierSeries';
import TopAnimes from '../components/Home/TopAnimes';
import PremierAnimes from '../components/Home/PremierAnimes';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="w-full bg-Gris-Oscuro flex flex-col  right-0 left-0 mx-auto items-center overflow-hidden">
      <Header />
      <Carousel />
      <div className='font-Russo text-white text-[24px] sm:mt-7 sm:mb-5 md:mt-9 md:mb-4 lg:mt-12 lg:mb-6'>Películas</div>
      <TopMovies />
      <PremierMovies />
      <div className='font-Russo text-white text-[24px] sm:mt-7 sm:mb-5 md:mt-9 md:mb-4 lg:mt-12 lg:mb-6'>Series</div>
      <TopSeries />
      <PremierSeries />
      <div className='font-Russo text-white text-[24px] sm:mt-7 sm:mb-5 md:mt-9 md:mb-4 lg:mt-12 lg:mb-6'>Animes</div>
      <TopAnimes />
      <PremierAnimes />
      <Footer />
    </div>
  );
};

export default Home;

