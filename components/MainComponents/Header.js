import React, { useState } from 'react';
import * as S from "./Header.styled";
import MenuBar from "../MenuComponents/MenuBar";

export default function Header(){
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <S.Container>
      <Link href="/Main">
        <S.Logo src="/img/CatchKorea.png" /></Link>      
      <S.MenuBar src="/img/menubar.png" onClick={toggleMenu} menuVisible={menuVisible} />
      <S.Search type="text" placeholder="map" />
      <S.Hash src="/img/free-icon-hashtag-7710731.png" />
      <S.SearchImg src="/img/Search.svg" />
      {menuVisible && <MenuBar menuVisible={menuVisible} onClick={toggleMenu} />}
    </S.Container>
  );
};
