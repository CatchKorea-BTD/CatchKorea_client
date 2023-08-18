import styled from "@emotion/styled";

export const MenuBottom = styled.div`
  width: 299px;
  height: 63px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  overflow-y: scoll;
`;

export const MenuBoxIcon = styled.img`
   width: 41px;
   height: 38px;
   position: absolute;
   margin: 0 10px;
   border-radius: 5px;
`;

export const MenuBox = styled.div`
   width: 299px;
   height: 63px;
   position: absolute;
   display: flex;
`;

// 앱 이름
export const MenuBottom1Text1 = styled.div`
  position: absolute;
  width: 137px;
  height: 8px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 12px;
  color: #535353;
  text-align: left;
  margin: 10px 60px;
`;

// 앱 간단설명
export const MenuBottom1Text2 = styled.div`
  position: absolute;
  height: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  color: #737373;
  text-align: left;
  margin-top: 28px;
  margin-left: 60px;
  overflow: hidden;  
`;

// 해시태그
export const MenuBottom1Text3 = styled.div`
  position: absolute;
  height: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  color: #A3A1A1;
  font-family: Inter;
  text-align: left;
  margin-top: 45px;
  margin-left: 60px;
`;