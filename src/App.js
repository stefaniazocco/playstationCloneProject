import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { CountrySelector } from "./pages/country-selector/CountrySelector";
import { Homepage } from "./pages/homepage/Homepage";
import { StoreGames } from "./pages/storeGames/StoreGames";

import Support from "./pages/support/Support";
import { Login } from "./pages/login/Login";
import { Presentation } from "./pages/presentation/Presentation";
import { Product } from "./pages/product/Product";

import { NotFound } from "./pages/notFound/NotFound";
import { Suspense } from "react";
import Loading from "./pages/Loading";
// import i18n from "i18next";
// import LocaleContext from "./locales/LocaleContext";

function App() {
  
  // const [locale, setLocale] = useState(i18n.language);
  // i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  return (
    <div>
      {/* <LocaleContext.Provider value={{locale, setLocale}}> */}
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/store-games" element={<StoreGames />} />
        <Route path="/country-selector" element={<CountrySelector />} />
        <Route path="/product/:name" element={<Product />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      {/*</LocaleContext.Provider> */}
    </div>
  );
}

export default App;
