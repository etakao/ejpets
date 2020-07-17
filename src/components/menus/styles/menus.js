import styled from 'styled-components';

export const Navbar = styled.div`
  position: fixed;
  top: 0;
  transition: top 0.3s;
  width: 100%;
  background-color: #FFF1C1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 2rem;

  a {
    font-weight: bold;
    font-size: 1.4rem;
    color: #000000;
    margin-right: 8rem;
  }

  a:last-child {
    margin-right: 0rem;
  }

  a:hover {
    border-bottom: 0.18rem solid #000000;
  }
`;