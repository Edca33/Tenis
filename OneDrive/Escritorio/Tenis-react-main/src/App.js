import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/card/Card.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Video from './components/component-video/video.jsx';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Error from './components/404/404.jsx'
import Nike from './components/nike-mujer/Nike-mujer.jsx';
import Checkout from './components/Checkout/checkout.jsx'
import NikePegasus from './components/nike pegasus/nike-pegasus.jsx';
import NikeJordan from './components/nike-Jordan/nike-jordan.jsx'
import Nikeblazer from './components/nike-blazer/nike-blazer.jsx'
import CardVans from './components/Card-vans/card-Vans.jsx'
import VansPlataforma from './components/vans-plataforma/vans-Plataforma.jsx'
import VansOldSchool from './components/vans-old-school/vans-Old.jsx'
import Cards from  './components/Card-Todas/card-Todas.jsx'
import CardsAdidas from './components/cards-Adidas/cards-Adidas.jsx'
import VansOldSchool2 from './components/vans-old-school-2/vans-Old2.jsx'
import Adidas from './components/Adidas-ultra-boost/Adidas-Ultra.jsx';
import Adidas2 from  './components/adidas-superstar/adidasSuperstar.jsx'
import Adidas3 from './components/adidas-originals/adidasOriginals.jsx'
import CardsPuma from './components/card-Puma/cardPuma.jsx'
import PumaRebound from './components/Puma-rebound/pumaRebound.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path="/" element={<Video />} />
        <Route path="/404" element={<Error />}/>
        <Route path="/Nike" element={<Card />}/>
        <Route path="/nike-mujer" element={<Nike />} />
        <Route path='/nike-pegasus' element={<NikePegasus/>}/>
        <Route path='/nike-Jordan' element={<NikeJordan/>}/>
        <Route path='/nike-blazer' element={<Nikeblazer/>}/>
        <Route path="/Vans" element={<CardVans/>}/>
        <Route path='/Vans-plataforma' element={<VansPlataforma/>}/>
        <Route path='/Vans-Old-school' element={<VansOldSchool/>}/>
        <Route path='/Marcas' element={<Cards/>}/>
        <Route path="/Adidas" element={<CardsAdidas/>}/>
        <Route path="/Puma" element={<CardsPuma/>}/>
        <Route path='/Vans-Old-school2' element={<VansOldSchool2/>}/>
        <Route path='/adidas-ultra-boost' element={<Adidas/>}/>
        <Route path='/adidas-super-star' element={<Adidas2/>}/>
        <Route path='/adidas-originals' element={<Adidas3/>}/>
        <Route path='/puma-rebound' element={<PumaRebound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
