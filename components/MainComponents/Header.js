// import React, { useState } from 'react';
// import * as S from "./Header.styled";
// import MenuBar from "../MenuComponents/MenuBar";
// import Link from 'next/link'

// export default function Header(){
//   const [menuVisible, setMenuVisible] = useState(false);

//   const toggleMenu = () => {
//     setMenuVisible(!menuVisible);
//   };

//   return (
//     <S.Container>
//       <Link href="/index">
//         <S.Logo src="/img/CatchKorea.png" /></Link>
//       <S.MenuBar src="/img/menubar.png" onClick={toggleMenu} menuVisible={menuVisible} />
//       <S.Search type="text" placeholder="map" />
//       <S.Hash src="/img/free-icon-hashtag-7710731.png" />
//       <S.SearchImg src="/img/Search.svg" />
//       {menuVisible && <MenuBar menuVisible={menuVisible} onClick={toggleMenu} />}
//     </S.Container>
//   );
// };


import React, { useState } from 'react';
import * as S from "./Header.styled";
import MenuBar from "../MenuComponents/MenuBar";
import Link from 'next/link'

export default function Header({ onSearch }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleSearch = () => {
    if (typeof onSearch === 'function') {
      onSearch(searchQuery);
    }
  };
  

  return (
    <S.Container>
      <Link href="/index">
        <S.Logo src="/img/CatchKorea.png" />
      </Link>
      <S.MenuBar src="/img/menubar.png" onClick={toggleMenu} menuVisible={menuVisible} />
      <S.Search 
        type="text" 
        placeholder="map"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <S.Hash src="/img/free-icon-hashtag-7710731.png" />
      <S.SearchImg src="/img/Search.svg" onClick={handleSearch} />
      {menuVisible && <MenuBar menuVisible={menuVisible} onClick={toggleMenu} />}
    </S.Container>
  );
};