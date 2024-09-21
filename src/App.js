import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './screens/Home';
import GalleryPage from './screens/GaleryPage';
import GalleryPagenine from './screens/GaleryP19';
import GalleryPagezero from './screens/GaleryP20';
import GalleryPageone from './screens/GaleryP21';
import GalleryPagetwo from './screens/GaleryP22';
import GalleryPagetree from './screens/GaleryP23';
import GalleryPagefour from './screens/GaleryP24';
import GalleryPagefive from './screens/GaleryP25';
import GalleryPagesix from './screens/GaleryP26';



function App() {

  
 

  return (
    <div className='App' > 
      <Router>
        <Routes>
          {/* Rota para a Página Inicial */}
          <Route path="/" element={<Home />} />
          
          {/* Rota para a Página da Galeria */}
          <Route path="/gallery" element={<GalleryPage />} />

          <Route path="/gallery/19" element={<GalleryPagenine />} />

          <Route path="/gallery/20" element={<GalleryPagezero />} />

          <Route path="/gallery/21" element={<GalleryPageone />} />

          <Route path="/gallery/22" element={<GalleryPagetwo />} />
          <Route path="/gallery/23" element={<GalleryPagetree />} />
          <Route path="/gallery/24" element={<GalleryPagefour />} />
          <Route path="/gallery/25" element={<GalleryPagefive />} />
          <Route path="/gallery/26" element={<GalleryPagesix />} />
        </Routes>
    </Router>
      </div>
  );
}

export default App;
