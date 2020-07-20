import styled from 'styled-components';


export const Apresentacao = styled.div`
position: relative;
width: 100%;
height: 70rem;
box-sizing: border-box;
margin: 0;
padding: 0;
display: flex;
align-items: center;
overflow: hidden;
background-color: #FFFDD0;
`;

export const Slides = styled.div`
min-width: 100%;
padding-top: 15rem;
height: 63rem;
transition: 0.5s;
overflow: hidden;
display: flex;
justify-content: center;
`;

export const Esquerda = styled.button`
position: absolute;
top: 45rem;
left: 0;
transform: translateY(-50%);
width: 3rem;
height: 10rem;
background: #FFFDD0;
`;

export const Direita = styled.button`
position: absolute;
top: 45rem;
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
    flex-direction: row;
    justify-content: center;
`;

export const Lista = styled.li`
    color: #FFFDD0;
    border: none;
    padding-right: 2rem;
`;

export const Bolinha = styled.button`
    outline:0;
    background: #F2761E;
    height: 1rem;
    width: 1rem;
    border-radius: 50rem;
`;
