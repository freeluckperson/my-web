import React from "react";
import "./Home.css";

const Home = () => {
  return (
    // <div className="jumbotron">
    //   <h1 className="display-4">
    //     Hi, I'm <span style={{ color: "#8bc34a" }}>Erick </span>Segura.
    //   </h1>
    //   <p className="lead">
    //     +58 (412) 103 6964 ·{" "}
    //     <span style={{ color: "#8bc34a" }}>gestionecesaria@gmail.com </span> ·
    //     Maturin, Monagas, Vzla
    //   </p>

    //   <a className="btn btn-primary btn-lg" href="#" role="button">
    //     Learn more
    //   </a>
    // </div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-4">
          Hi, I'm <span style={{ color: "#8bc34a" }}>Erick </span>Segura.
        </h1>
        <p class="lead">
          +58 (412) 103 6964 ·
          <span style={{ color: "#8bc34a" }}>gestionecesaria@gmail.com </span> ·
          Maturin, Monagas, Vzla
        </p>
      </div>
    </div>
  );
};

export default Home;
