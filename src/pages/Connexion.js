import React from "react";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";

const Connexion = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Navigation />
      <h2>Pour accéder aux services veuillez vous identifier</h2>
      <div className="content">
        <input type="text" placeholder="identifiant ou adresse mail" />
        <input type="password" placeholder="mot de passe" />
        <button onClick={() => navigate("/connecte")}>Se connecter</button>
      </div>
    </div>
  );
};

export default Connexion;
