import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const verificationId = async (e) => {
    e.preventDefault();
    console.log("je suis dans la verif");

    const registered = {
      email: email,
      password: password,
    };

    console.log(registered);

    await axios({
      method: "post",
      url: `http://localhost:4001/api/user/login`,
      withCredentials: true,
      data: {
        email: registered.email,
        password: registered.password,
      },
    })
      .then((res) => {
        console.log(registered.email);
        if (res.data.errors) {
          console.log(res.data.errors);
        } else {
          console.log(res);
        }

        navigate("/secondauth");
      })
      .catch((err) => {
        console.log(registered.email);
        console.log(err.response);
      });
    /*
    await axios
      .post("http://localhost:4001/api/user/login", registered)
      .then((response) => console.log(response.data));

    

    setEmail("");
    setPassword("");
    */
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
