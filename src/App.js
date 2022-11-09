import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { CountrySelector } from "./pages/country-selector/CountrySelector";
import { Homepage } from "./pages/homepage/Homepage";
import { StoreGames } from "./pages/storeGames/StoreGames";
import Support from "./pages/support/Support";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/store-games" element={<StoreGames />} />
        <Route path="/country-selector" element={<CountrySelector />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;
