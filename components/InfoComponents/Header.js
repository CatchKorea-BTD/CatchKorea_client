import React, { useState } from 'react';
import * as S from "./Header.styled";
import MenuBar from "../MenuComponents/MenuBar";
import Link from 'next/link'

export default function Header(){
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <S.Container>
      <Link href="/index">
        <S.Logo src="/img/CatchKorea.png" /></Link>
      <S.MenuBar src="/img/menubar.png" onClick={toggleMenu} menuVisible={menuVisible} />
      {menuVisible && <MenuBar menuVisible={menuVisible} onClick={toggleMenu} />}
    </S.Container>
  );
};

