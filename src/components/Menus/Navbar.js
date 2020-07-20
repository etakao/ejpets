import React from 'react';

import {HashLink as Navlink} from "react-router-hash-link";
import { Content, Top, Logo, Pesquisa, CaixaBusca, IconBusca, Botoes, Botao, Link} from './styles/navbar';

import Lupa from "../../assets/Navbar/iconSearch.png";
import ImgLogo from "../../assets/Navbar/logo4.png";

export default function Navbar(){
    return(
        //AQUI VAI O DESENVOLVIMENTO

        <Content>
            <Top>
                <Logo src={ImgLogo}></Logo>
                <Pesquisa>
                    <CaixaBusca type="text" placeholder="Pesquisar..."></CaixaBusca>
                    <IconBusca type="image" src={Lupa} alt="Pesquisar"></IconBusca>
                </Pesquisa>
            </Top>
            <Botoes>
                <Navlink smooth to={"/"}><Botao>Início</Botao></Navlink>
                <Navlink smooth to={"/"}><Botao>Serviços</Botao></Navlink>
                <Navlink smooth to={"/#especies"}><Botao>Espécies</Botao></Navlink>
                <Navlink smooth to={"/"}><Botao>Sobre Nós</Botao></Navlink>
                <Navlink smooth to={"/"}><Botao>Fale Conosco</Botao></Navlink>
            </Botoes>
      </Content>

    );
}