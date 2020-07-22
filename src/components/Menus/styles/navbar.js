import styled from 'styled-components';

//NO LUGAR DE CONTENT COLOCAMOS O NOME DO COMPONENTE
//NO LUGAR DO DIV COLOCAMOS O TIPO DO COMPONENTE

export const Content = styled.nav`
    //AQUI VAI O CSS

    position: fixed;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    outline: none;
    font-size: 17px;
    text-decoration: none;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 14rem;
    background-color: #FFFDD0;
`;

export const Top = styled.div`
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #F2801E;
`;

export const Logo = styled.img`
    width: 9rem;
    height: 9rem;
    margin: 0 6rem 0 8rem;
`;

export const Pesquisa = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 2rem;
    margin: 0 6rem 0 6rem;
    padding: 0 3rem 0 3rem;
    height: 3.4rem;
    width: 35rem;
    background-color: #fcd9ba;
`;

export const CaixaBusca = styled.input`
    border: none;
    box-shadow: none;
    outline: none;
    width: 30rem;
    height: 2.4rem;
    background-color: #fcd9ba;
`;

export const IconBusca = styled.input`
    height: 18px;
    width: 18px;
`;

export const Botoes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: initial;
    height: 6rem;
    border-bottom: 0.2rem solid #f2811ebd;
    padding: 0 5rem 0 5rem;
    margin: 0 1rem 0 1rem;
`;

export const Botao = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14rem;
    height: 3.4rem;
    border-radius: 10rem;
    background-color: #FFE699;
    color: #b85600;
    font-weight: bold;
    :hover{
        box-shadow: 0 0 5px 0 rgba(0,0,0,0.24),0 5px 10px 0 rgba(0,0,0,0.19);
    }
`;