import styled from 'styled-components';

export const Divexterna = styled.div`
    width: 100%;
    height: 80rem;
    padding-top: 14rem;
    background-color: #FFFDD0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const Divsinternas = styled.div`
    width: 65rem;
    height: 60rem;
    background-color: #FFFDD0;  
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Divserv = styled.div`
    width: 60rem;
    height: 26rem;
    background-color: rgba(230, 197, 116, 1);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 3rem;
    :hover {
        background-color: rgba(255, 230, 153, 1);
    }
`;

export const Divfoto = styled.div`
    width: 30rem;
    height: 22rem;
    margin: 2rem 2rem 2rem 2rem;
    background-color: rgba(230, 197, 116, 1);
    border-radius: 3rem;
    flex-direction: row;
    justify-content: space-between;
    img{
        width: 22rem;
        height: 22rem;
        border-radius: 3rem;
    }
`;

export const Divtitulo = styled.div`
    width: 28rem;
    height: 4rem;
    margin: 1rem 1rem 1rem 1rem;
    background-color: rgba(230, 197, 116, 1);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    h1{
        padding: 0.5rem 0 0 0.5;
        font-family: 'Quicksand', sans-serif;
        font-size: 2rem;
        font-weight: bolder;
        text-align: center;
    }
`;

export const Divdescr = styled.div`
    width: 28rem;
    height: 13rem;
    margin: 1rem 1rem 1rem 1rem;
    background-color: rgba(230, 197, 116, 1);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    p{
        padding: 0.5rem 0 0 0.5;
        font-family: 'Quicksand', sans-serif;
        font-size: 1.8rem;
        font-weight: normal;
        text-align: center;
    }
`;