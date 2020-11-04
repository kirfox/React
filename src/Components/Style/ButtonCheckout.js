import styled from 'styled-components';

export const ButtonCheckout = styled.button`
  display: block;
  width: 250px;
  height: 65px;
  background-color: #299B01;
  font-size: inherit;
  font-family: inherit;
  color: white;
  margin: 0 auto; 
  border-color: transparent;
  transition-property: color, background-color, border-color;
  transition-duration: .3s;
  :hover {
    background-color: #fff;
    color: #229B01;
    border-color: #229B01;
  }
  :active, :focus {
    outline: none;
  }
  :disabled {
    color: #bbb;
    background-color: #ccc;
    border-color: #aaa;
  }
`;