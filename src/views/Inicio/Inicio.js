import React, {useState} from 'react';
import ImgComp from "./imgComponents";
import i1 from "../../assets/Inicio/Slide01.jpg";
import i2 from "../../assets/Inicio/Slide02.png";
import i3 from "../../assets/Inicio/Slide03.jpg";
import i4 from "../../assets/Inicio/Slide04.jpg";
import i5 from "../../assets/Inicio/Slide05.png";
import {Esquerda} from './styles/inicio'
import {Direita} from './styles/inicio'
import dir from "../../assets/Inicio/SetaDireita.jpg";
import esq from "../../assets/Inicio/SetaEsquerda.jpeg";
import {Bolinha} from './styles/inicio'
import {Lista} from './styles/inicio'
import {Inferior} from './styles/inicio'
import {Lateral} from './styles/inicio'
import {Slides} from './styles/inicio'
import {Apresentacao} from './styles/inicio'
import {DivExterna} from './styles/inicio'

export default function Inicio(){
    let arrayImg = [<ImgComp src={i1}/>, 
                    <ImgComp src={i2}/>, 
                    <ImgComp src={i3}/>, 
                    <ImgComp src={i4}/>, 
                    <ImgComp src={i5}/>]

        const [x, setX] = useState(0)
    
        const first=()=>{  setX(0)  }

        const second=()=>{  setX(-100)  }
        
        const third=()=>{  setX(-200)  }

        const fourth=()=>{  setX(-300)  }

        const Fifth=()=>{  setX(-400)  }

        const goRight=()=>{
            if(x === -100 * (arrayImg.length -1)){
                setX(0)
            }
            else{
                setX(x-100)
            }
        };

        const goLeft=()=>{
            if(x === 0){            
                setX(-100 * (arrayImg.length -1))
            }
            else{
                setX(x+100)
            }
        };

        
        return(
            <DivExterna id="inicio">
                <Apresentacao>
                {
                arrayImg.map((item,index) => {
                    return(
                        <Slides key={index} style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </Slides>
                        ); 
                    })
                }
                    <Esquerda onClick={goLeft}>
                        <Lateral src={esq} alt ="botaoEsquerdo">
                        </Lateral>
                    </Esquerda>
                    <Direita onClick={goRight}>
                        <Lateral src={dir} alt="botaoDireito">
                        </Lateral>
                    </Direita>
                </Apresentacao>
                
                <Inferior>
                    <Lista>
                        <Bolinha onClick={first}>
                        </Bolinha>
                    </Lista>
                    <Lista>
                        <Bolinha onClick={second}> 
                        </Bolinha>
                    </Lista>
                    <Lista>
                        <Bolinha onClick={third}>
                        </Bolinha>
                    </Lista>
                    <Lista>
                        <Bolinha onClick={fourth}>
                        </Bolinha>
                    </Lista>
                    <Lista> 
                        <Bolinha onClick={Fifth}>
                        </Bolinha>
                    </Lista>
                </Inferior>
            </DivExterna>

        );
}