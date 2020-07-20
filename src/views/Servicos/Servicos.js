import React from 'react';
import { Divexterna } from './styles/servicos';
import { Divsinternas } from './styles/servicos';
import { Divserv } from './styles/servicos';
import { Divfoto } from './styles/servicos';
import { Divtitulo } from './styles/servicos';
import { Divdescr } from './styles/servicos';


import imagem1 from "../../assets/Servicoss/servbanho.jpg";
import imagem2 from "../../assets/Servicoss/servhotel.jpg";
import imagem3 from "../../assets/Servicoss/servconsulta.jpeg";
import imagem4 from "../../assets/Servicoss/servtransporte.jpg";


export default function Servicos() {
    return(
        <Divexterna>
            <Divsinternas>
                <Divserv>
                    <Divfoto>
                        <img src={imagem1}/> 
                    </Divfoto>
                    <Divfoto>
                        <Divtitulo>
                            <h1>BANHO E TOSA</h1>
                        </Divtitulo>
                        <Divdescr>
                            <p>Profissionais treinados para garantir o bem-estar do seu pet com produtos que deixarão seu bichinhos perfumados e com o pelo macio.</p>
                        </Divdescr>
                    </Divfoto>
                </Divserv>
                
                <Divserv>
                    <Divfoto>
                        <img src={imagem2}/>
                    </Divfoto>
                    <Divfoto>
                       <Divtitulo>
                            <h1>HOTELZINHO PET</h1>
                       </Divtitulo>
                       <Divdescr>
                            <p>Local estruturado e aconchegante preparado especialmente para seu pet se divertir enquando você viaja com a família.</p>
                        </Divdescr>
                    </Divfoto>
                </Divserv>
            </Divsinternas>
            
            <Divsinternas>
                <Divserv>
                    <Divfoto>
                        <img src={imagem3}/>
                    </Divfoto>
                    <Divfoto>
                        <Divtitulo>
                            <h1>CONSULTAS</h1>
                        </Divtitulo>
                        <Divdescr>
                            <p>Cuidar da saúde do seu pet é cuidar da saúde e alegria da família. Agende uma consulta veterinária e dê ao seu pet a atenção que ele merece.</p>
                        </Divdescr>
                    </Divfoto>
                </Divserv>

                <Divserv>
                    <Divfoto>
                        <img src={imagem4}/>
                    </Divfoto>
                    <Divfoto>
                        <Divtitulo>
                            <h1>PET TRANSPORTE</h1>
                       </Divtitulo>
                       <Divdescr>
                            <p>Transportamos seu animal doméstico para onde e quando quiser com conforto e segurança.</p>
                        </Divdescr>
                    </Divfoto>
                </Divserv>
            </Divsinternas>

        </Divexterna>     
    );
}