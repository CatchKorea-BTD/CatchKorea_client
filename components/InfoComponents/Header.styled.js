import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 120px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto; 
  position: absolute; 
  top: 23px; 
  left: 50%; 
  transform: translateX(-50%); 
  cursor: pointer;
`;

export const MenuBar = styled.img`
  width: 17px;
  position: absolute;
  top: 30px;
  right: 25px;
  cursor: pointer;
`;
