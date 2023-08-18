
import React from 'react';
import * as S from "../components/MainComponents/Main.styled";
import Header from '../components/MainComponents/Header';
import Body from '../components/MainComponents/Body';

export default function Main() {
  return (
      <S.Wrapper>
         <S.Container>
            <Header />
            <Body />
        </S.Container>
      </S.Wrapper>
  );
}

