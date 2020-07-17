import React from 'react';

import Navbar from '../components/menus/Navbar';
import Inicio from './Inicio/Inicio';
import Servicos from './Servicos/Servicos';
import Especies from './Especies/Especies';
import Sobre from './Sobre/Sobre';
import Contato from './Contato/Contato';

export default function Principal() {
  return (
    <div>
      <Inicio id="inicio" />
      <Navbar />
      <Servicos id="servicos" />
      <Especies id="especies" />
      <Sobre id="sobre" />
      <Contato id="contato" />
    </div>
  );
}
