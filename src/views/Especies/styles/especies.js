import styled from 'styled-components'

export const Content = styled.div`
    width: 100%;
    height: 80rem;
    background-color: #FFFDD0;
`;

export const Texto = styled.ul`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
    padding-left: 12rem;
    padding-top: 23.6rem;
    column-gap: 16.2rem;
    row-gap: 20.2rem;
    position: absolute;
    font-size: 4rem;
    font-family: Quicksand;
    font-weight: bolder;
    color: #FFFFFF;
`;    

export const Imagens = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-left: 11.5rem;
    padding-top: 15rem;
    row-gap: 7rem;

    li {
        list-style: none;

        img {
            width: 23.435rem;
            border-radius: 50%;
        }
    }
`;