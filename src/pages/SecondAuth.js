import React from "react";
import { useNavigate } from "react-router-dom";
//import axios from "axios";

const SecondAuth = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Veuillez saisir le code reçu dans votre boîte mail</h1>
      <input type="number" />
      <input type="number" />
      <input type="number" />
      <input type="number" />
      <input
        type="submit"
        value="Verifier"
        onClick={() => navigate("/connecte")}
      />
    </div>
  );
};

export default SecondAuth;
