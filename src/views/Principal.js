import React from 'react';

import Navbar from '../components/Menus/Navbar';
import Inicio from './Inicio/Inicio';
import Servicos from './Servicos/Servicos';
import Especies from './Especies/Especies';
import SobreNos from './SobreNos/SobreNos';
import FaleConosco from './FaleConosco/FaleConosco';

export default function Principal() {
  return (
    <div>
      <Navbar/>
      <Inicio id="inicio" />
      <Servicos id="servicos" />
      <Especies id="especies" />
      <SobreNos id="sobrenos" />
      <FaleConosco id="faleconosco" />
    </div>
  );
}
