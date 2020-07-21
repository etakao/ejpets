import styled from 'styled-components';


export const Apresentacao = styled.div`
position: relative;
padding-top: 7rem;
width: 100%;
height: 58rem;
box-sizing: border-box;
margin: 0;
display: flex;
align-items: center;
overflow: hidden;
background-color: #FFFDD0;
`;

export const Slides = styled.div`
min-width: 100%;
padding-top: 7rem;
height: 58rem;
transition: 0.5s;
overflow: hidden;
display: flex;
justify-content: center;
background-color: #FFFDD0;
`;

export const Esquerda = styled.button`
position: absolute;
top: 30rem;
left: 0;
transform: translateY(-50%);
width: 3rem;
height: 10rem;
background: #FFFDD0;
`;

export const Direita = styled.button`
position: absolute;
top: 30rem;
right: 0;
transform: translateY(-50%);
width: 3rem;
height: 10rem;
background: #FFFDD0;
`;

export const Lateral = styled.img`
    position: relative;
    width: 2rem;
    height: 5rem;
`;

export const Inferior = styled.ul`
    display: flex;
    height: 1rem;
    padding-top: 2rem;
    flex-direction: row;
    justify-content: center;
    background-color: #FFFDD0;
`;

export const Lista = styled.li`
    color: #FFFDD0;
    border: none;
    padding-right: 2rem;
    background-color: #FFFDD0;
`;

export const Bolinha = styled.button`
    outline:0;
    background: #F2761E;
    height: 1rem;
    width: 1rem;
    border-radius: 50rem;
    
`;
