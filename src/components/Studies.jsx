import React from "react";
import './Studies.css'

const Studies = () => {
  return (
    <div className="jumbotronContainer">
      <div className="container">
        <hr />
        <h1 className="display-4">Henry bootcamp</h1>
        <p className="lead">
          <p>Title obtained: Full stack web developer</p>
          <p>Graduation year: Completing final project</p>
        </p>
        <hr />
      </div>

      <div className="container">
        <hr />
        <h1 className="display-4">Universidad de Oriente</h1>
        <p className="lead">
          <p>Title obtained: Agronomist Engineer</p>
          <p>Graduation year: 01/01/2014</p>
        </p>
        <hr />
      </div>
    </div>
  );
};

export default Studies;
