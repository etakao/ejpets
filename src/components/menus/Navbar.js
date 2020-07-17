import React from 'react';

import { HashLink as NavLink } from 'react-router-hash-link'

import { Navbar, Menu } from './styles/menus';

export default function Nav() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <Navbar id="navbar">
      <Menu>
        <NavLink smooth to={"/#inicio"} >Início</NavLink>
        <NavLink smooth to={"/#servicos"} >Serviços</NavLink>
        <NavLink smooth to={"/#especies"} >Espécies</NavLink>
        <NavLink smooth to={"/#sobre"} >Sobre Nós</NavLink>
        <NavLink smooth to={"/#contato"} >Fale Conosco</NavLink>
      </Menu>
    </Navbar>
  );
}