import styled from "@emotion/styled";


export const Container = styled.div`
  width: 100%;
  height: 100%;
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


export const Search = styled.input`
  width: 310px;
  height: 30px;
  outline: none;
  border: 0;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 80px;
  left: 50%; 
  transform: translateX(-50%); 
  padding-left: 53px; 
  ::placeholder {
   color: #DADADA;
   font-size: 12px;
  }
`;

export const Hash = styled.img`
  width: 12px;
  height: 12px;
   position: absolute;
   top: 89px;
   left: 50px;
`

/* 검색버튼 */
export const SearchImg = styled.img`
   width: 21px;
   height: 20px;
   position: absolute;
   top: 85px;
   right: 45px;
   cursor: pointer;
`
