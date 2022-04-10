import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Accueil</NavLink>
      <br></br>
      <NavLink to="connexion">Connexion</NavLink>
    </div>
  );
};

export default Navigation;
