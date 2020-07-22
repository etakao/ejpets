import React from 'react';

import {Fundo, Principal, Conteudo, Formulario, SocialPages} from './styles/faleconosco'

import { FiSend, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';


export default function FaleConosco(){
    return(
        <Fundo id="faleconosco">
            <Principal>
                <Conteudo>
                    <Formulario>
                        <h1>Entre em contato conosco</h1> 
                        <h3>Estamos prontos para falar com você</h3> 
                        <h3>Preencha o formulário para tirar suas dúvidas</h3>
                        <form >
                            <input placeholder="Nome"/>
                            <input type="email" placeholder="E-mail"/>
                            <textarea placeholder="Descrição"/>
                            <div className="posicaoButton">
                            <button className="button" type="submit">Enviar</button>
                            <div className="imgButton">
                                <FiSend size={24} color="#F2801E"/>
                            </div>
                            </div>
                        </form>
                    </Formulario>
                    <SocialPages>
                        <div>
                        <button type="submit"><FiFacebook size={32} color="#FFF"/><h1>EJ Pets</h1> </button>
                        <button type="submit"><FiInstagram size={32} color="#FFF"/><h1>@EJPets</h1> </button>
                        <button type="submit"><FiTwitter size={32} color="#FFF"/><h1>@EJPets</h1> </button>
                        <button type="submit"><FiYoutube size={32} color="#FFF"/><h1>EJ Pets</h1> </button>
                        </div>
                    </SocialPages>
                </Conteudo>                
            </Principal>
        </Fundo>
        
    );
}