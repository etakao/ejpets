import styled from 'styled-components'

export const Content = styled.div`
    width: 100%;
    height: 80rem;
    padding-top: 2rem;
    background-color: #FFFDD0;
`;

export const Texto = styled.ul`
    display: grid;
    min-width: 130rem;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
    padding-left: 4rem;
    padding-top: 23.6rem;
    row-gap: 20.2rem;
    font-size: 4rem;
    font-family: Quicksand;
    font-weight: bolder;
    color: #FFFFFF;
    position: relative;
    z-index: 1
`;    

export const Imagens = styled.ul`
    display: grid;
    margin-top: -68rem;
    grid-template-columns: repeat(4, 1fr);
    padding-left: 11.5rem;
    padding-top: 15rem;
    column-gap: 6.5rem;
    row-gap: 7rem;

    li {
        list-style: none;

        img {
            width: 23.435rem;
            border-radius: 50%;
        }
    }
`;