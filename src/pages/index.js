import React from "react";
import { Link } from "gatsby";
import "../styles/styles.css"; // Importar estilos

const IndexPage = () => {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>Página Principal</h1>
      <p>Selecciona una página para visitar:</p>

      <div className="button-container">
        <Link to="/page1" className="button">Bienvenida de la Presidenta</Link>
        <Link to="/page2" className="button">Conoce nuestra historia</Link>
        <Link to="/page3" className="button">Consejo de Administración</Link>
        <Link to="/page4" className="button">Actos oficiales e institucionales</Link>
        <Link to="/page5" className="button">Casa de S.M. el Rey</Link>
        <Link to="/page6" className="button">Retratos oficiales</Link>
        <Link to="/page7" className="button">Ministerio de la Presidencia</Link>
      </div>

            




    </div>
  );
};

export default IndexPage;
