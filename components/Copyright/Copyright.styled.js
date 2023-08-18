import styled from "@emotion/styled";

export const CopyrightContainer = styled.div`
  width: 358px;
  height: 70px;
  background: #4979D1;
  position: fixed;
  bottom: 0;
`;

export const Copyright = styled.div`
  width: 358px;
  height: 70px;
  color: #FFF;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-top: 12px;
  cursor: default;
`;

export const text = styled.div`
  width: 349px;
  height: auto;
  color: #FFF;
  font-family: Inter;
  font-size: 0.5px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 4px;
  margin-left: 3px;
  cursor: default;
  white-space: pre-line; /* 줄바꿈 및 공백 유지 */
`;