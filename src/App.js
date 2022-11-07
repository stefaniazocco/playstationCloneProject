import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Homepage } from './pages/homepage/Homepage';
import { StoreGames } from './pages/storeGames/StoreGames';
import Navbar from './components/navbar/Navbar';




function App() {

  
  return (
    <div>
      <Navbar />
     
      <Routes>
      
      
        <Route path='/' element={<Homepage />} />
        <Route path='/store-games' element={<StoreGames />} />

      </Routes>
      
      
    </div>
  );
}

export default App;
