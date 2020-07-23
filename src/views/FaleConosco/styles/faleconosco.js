import styled from 'styled-components';

export const Fundo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFDD0;
    height: 60rem;
    width: 100%;
    padding: 0 2rem;
`;

export const Principal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E6C574;
    width: 100%;
    height: 90%;
`;

export const Conteudo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 90%;
    font-family: 'Quicksand', sans-serif;
`;

export const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem;
    padding-top: 2rem;
    background-color: #FFFDD0;
    width: 47%;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.25);

    h1{
        color: #F2801E;
        font: bold;
    }
    form{
        display: flex;
        flex-direction:column;
        width: 100%;

        input{
            height: 3.5rem;
            margin-top: 2.5rem;
            background-color: #fff;
            border-radius: 0.5rem;
            padding-left: 1rem;
        }

        textarea{
            height: 14rem;
            margin-top: 2.5rem;
            background-color: #fff;
            border-radius: 0.5rem;
            padding-left: 1rem;
            padding-top: 1rem;
            min-height: 5rem;
            max-height: 16rem;
            resize: vertical;
        }
        .posicaoButton{
            display: flex;
            justify-content: flex-end;
            transition: opacity 0.2s;
            color: #F2801E;
            font-family: 'Quicksand', sans-serif;
            font-size: 1.5rem;
            font: bold;
            button{
                margin-top: 2rem;
                height: 3.5rem;
                width: 15%;
                background-color: #FFFDD0;
                cursor: pointer;
            }
            .imgButton{
                margin-top: 2.5rem;
                cursor: pointer;
            }
        }
        .posicaoButton:hover{
            opacity: 0.8;
            
        }
        
    }
`;

export const SocialPages = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 47%;
    font-size: 1.3rem;
    
    
    button{
        display:flex;
        flex-direction: row;
        margin-top: 3rem;
        background-color: #E6C574;
        transition: opacity 0.2s;
    }

    button:hover{
            opacity: 0.8;
            cursor: pointer;
    }
    
    h1{
        color: #FFF;
        font: bold;
        margin-left: 2rem;
    }
`;

