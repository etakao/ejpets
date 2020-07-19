import React from 'react';

import Lupa from "../../assets/Navbar/iconSearch.png";
import ImgLogo from "../../assets/Navbar/logo4.png";

import { Content, Top, Logo, Pesquisa, CaixaBusca, IconBusca, Botoes, Botao, Link} from './styles/navbar';

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
                <Botao alt="Inicio">Início</Botao>
                <Botao>Serviços</Botao>
                <Botao>Espécies</Botao>
                <Botao>Sobre Nós</Botao>
                <Botao>Fale Conosco</Botao>
            </Botoes>
      </Content>

    );
}