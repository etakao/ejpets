import React from 'react';

import {Content, Texto, Imagens} from './styles/especies';

import cachorro from '../../assets/Especies/cachorro.jpg';
import gato from '../../assets/Especies/gato.jpg'; 
import ave from '../../assets/Especies/ave.jpg'; 
import roedor from '../../assets/Especies/roedor.jpg'; 
import reptil from '../../assets/Especies/reptil.jpg'; 
import cavalo from '../../assets/Especies/cavalo.jpg'; 
import peixe from '../../assets/Especies/peixe.jpg'; 
import ovino from '../../assets/Especies/ovino.jpg';

export default function Especies() {
    
    return(
        <Content id="especies">
            <Texto>
                <p> Cachorros </p>
                <p> Gatos </p>
                <p> Aves </p>
                <p> Roedores </p>
                <p> Répteis </p>
                <p> Cavalos </p>
                <p> Peixes </p>
                <p> Ovinos </p>
            </Texto>
            <Imagens>
                <li><img src={cachorro} alt="" /></li>
                <li><img src={gato} alt="" /></li>
                <li><img src={ave} alt="" /></li>
                <li><img src={roedor} alt="" /></li>
                <li><img src={reptil} alt="" /></li>
                <li><img src={cavalo} alt="" /></li>
                <li><img src={peixe} alt="" /></li>
                <li><img src={ovino} alt="" /></li>
            </Imagens>
        </Content>
    );
}