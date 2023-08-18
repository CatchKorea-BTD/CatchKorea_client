import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 73px;
`;


export const Title = styled.div`
  display: flex;
  padding: 0 30px;
`;

export const Icon = styled.img`
  height: 22px;
  margin-right:10px;
`;

export const AppName = styled.div`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #686868;
  display: flex;
`;


export const Line = styled.div`
  position: absolute;
  width: 274px;
  height: 0px;
  border-width: 1px;
  border-style: solid;
  border-color: #949494;
  margin-top: 25px;
`;

export const Info = styled.div`
  margin: 10px 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  white-space: pre-line;
  font-size: 15px;
  line-height: 1.5;
  color: #737373;
  padding: 0 30px;
`;

export const AppInfo = styled.img`
  width: 267px;
  height: 451px;
  z-index: 3;
  margin-top: 20px; 
`;

export const BtnZone = styled.div`
  flex-direction: row;
  padding: 10px 20px;
  justify-content: space-between;
  display: flex;
  position: fixed;
  bottom: 30px;
`;

export const Download = styled.button`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  color: #737373;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  border: none;
  width: 139px;
  height: 31px;
  margin: 5px;
  cursor: pointer;

  & > img {
    width: 10px;
    height: 12px;
  }
`;

export const Share = styled.button`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  color: #737373;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  border: none;
  width: 139px;
  height: 31px;
  margin: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;

  & > img {
    width: 15px;
    height: 15px;
    margin: 0 33px 0 10px;
  }
`;