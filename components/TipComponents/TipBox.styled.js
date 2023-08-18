import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(90deg);
    }
`;

export const Container = styled.div`
`;

export const TipBox = styled.div`
  width: 271px;
  min-height: 37px; /* Add a minimum height */
  left: 41px;
  top: 242px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  margin: 10px;
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: ${props => props.expanded ? 'column' : 'row'}; 
  transition: min-height 0.3s ease-in-out; 
`;

export const TipIcon = styled.img`
  position: absolute;
  width: 21px;
  height: 21px;
  text-align: center;
  margin: 4px 10px 7px 10px;
`;

export const TipTitle = styled.div`
   color: #535353;
   font-size: 12px;
   font-weight: 500;
   text-align: left;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 10px 40px 5px; 
`;

export const TipText = styled.div`
color: #535353;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: center;
margin: 5px;

`;

export const MoveImg = styled.img`
    width: 9px;
    height: 9px;
    right: 55px;
    cursor: pointer;
    position: absolute;
    margin: -18px 10px;

    &.rotate-animation {
        animation: ${rotateAnimation} 0.3s linear forwards;
    }
`;
