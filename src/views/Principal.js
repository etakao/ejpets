import React from 'react';


// import Navbar from '../components/menus/Navbar';
// import Inicio from './Inicio/Inicio';
import FaleConosco from './FaleConosco/FaleConosco';
import Servicos from './Servicos/Servicos';
import Especies from './Especies/Especies';
// import Sobre from './Sobre/Sobre';
// import Contato from './Contato/Contato';

      // <Inicio id="inicio" />
      // <Navbar />
      // <Servicos id="servicos" />  -> <Especies id="especies" /> virá após essa linha
      // <Sobre id="sobre" />
      // <Contato id="contato" />

export default function Principal() {
  return (
    <div>
      {/* <Inicio id="inicio" /> */}
      {/* <Navbar /> */}
      <FaleConosco id="faleconosco"/>
      <Servicos id="servicos" />
      <Especies id="especies" />
    </div>
  );
}
