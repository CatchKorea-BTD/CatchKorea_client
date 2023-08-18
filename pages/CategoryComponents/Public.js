import React, { useState } from 'react';
import * as S from '../../styles/CategoryComponents/Public.styled';
import Header from '../../components/MainComponents/Header';
import Body from '../../components/CategoryComponents/Public/Body';

export default function Public(){

   const [selectedItem, setSelectedItem] = useState(0);

   const handleItemClick = (index) => {
      setSelectedItem(index);
   };

   return (
      <S.Wrapper>
         <S.Container>
            <Header />
            <Body selectedItem={selectedItem} onItemClick={handleItemClick}/>
         </S.Container>
      </S.Wrapper>
   );
};

