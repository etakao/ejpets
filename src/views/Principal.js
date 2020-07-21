import React from 'react';

import Navbar from '../components/Menus/Navbar';
import Inicio from './Inicio/Inicio';
import Servicos from './Servicos/Servicos';
import Especies from './Especies/Especies';
// import Sobre from './Sobre/Sobre';
import FaleConosco from './FaleConosco/FaleConosco';

export default function Principal() {
  return (
    <div>
      <Navbar/>
      <Inicio id="inicio" />
      <Servicos id="servicos" />
      <Especies id="especies" />
      <FaleConosco id="faleconosco" />
    </div>
  );
}
