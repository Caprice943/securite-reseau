import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connexion from "./pages/Connexion";
import Accueil from "./pages/Accueil";
import HomeAcess from "./pages/HomeAccess";
import SecondAuth from "./pages/SecondAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/connecte" element={<HomeAcess />} />
        <Route path="/secondauth" element={<SecondAuth />} />
        <Route element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
