import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connexion from "./pages/Connexion";
import Accueil from "./pages/Accueil";
import HomeAcess from "./pages/HomeAccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/connecte" element={<HomeAcess />} />
        <Route element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
