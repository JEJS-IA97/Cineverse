import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Animes from './pages/Animes';

import TopMovies from './pages/TopMovies';
import TopSeries from './pages/TopSeries';
import TopAnimes from './pages/TopAnimes';

import PremierMovies from './pages/PemierMovies';
import PremierSeries from './pages/PremierSeries';
import PremierAnimes from './pages/PremierAnimes';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Busqueda from './pages/Busqueda';
import Play from './pages/Play';
import Perfil from './pages/Perfil'


function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="/top-peliculas" element={<TopMovies />} />
        <Route path="/top-series" element={<TopSeries />} />
        <Route path="/est-peliculas" element={<PremierMovies />} />
        <Route path="/est-series" element={<PremierSeries />} />
        <Route path="/top-animes" element={<TopAnimes />} />
        <Route path="/est-animes" element={<PremierAnimes />} />
        <Route path="/iniciar-sesion" element={<SignIn />} />
        <Route path="/registrar-cuenta" element={<SignUp />} />
        <Route path="/buscar" element={<Busqueda />} />
        <Route path="/reproducir" element={<Play/>} />
        <Route path="/perfil" element={<Perfil/>} />
      </Routes>
    </Router>
  )
}

export default App
