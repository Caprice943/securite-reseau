import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const verificationId = (e) => {
    e.preventDefault();
    console.log("je suis dans la verif");

    const registered = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:4001/api/user/login", registered)
      .then((response) => console.log(response.data));

    if (email === email && password === password) {
      console.log("Yesssss");
      navigate("/secondauth");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Navigation />
      <h2>Pour accéder aux services veuillez vous identifier</h2>
      <div className="content">
        <form onSubmit={verificationId}>
          <input
            type="text"
            name="email"
            placeholder="adresse mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value="Se connecter" />
        </form>
      </div>
    </div>
  );
};

export default Connexion;
