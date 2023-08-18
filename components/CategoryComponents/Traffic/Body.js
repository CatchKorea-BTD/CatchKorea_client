// 각 카테고리 클릭시 나오는 컨텐츠 파일 분리
import React, { useState, useEffect } from 'react';
import * as S from "./Body.styled";
import TipBox from '../../../components/TipComponents/TipBox';
import Content from './Category/Content';
import Link from 'next/link'

export default function Body({selectedItem, onItemClick}) {

    const menuItems = ['Map', 'Public Transport', 'Navigation', 'Taxi'];

    let contentComponent;
    if (selectedItem !== null) {
        // 선택한 항목에 따라 Content 컴포넌트 렌더링
        contentComponent = <Content selectedItem={selectedItem} />;
    }

    return (

        <S.Container>
            <S.Title>Map / Traffic Service</S.Title>
            <S.MenuBar onItemClick={onItemClick}>
                {
                    menuItems.map((item, index) => (
                        <li
                            key={index}
                            isSelected={index === selectedItem}
                            onClick={() => onItemClick(index)}
                            style={{color: index === selectedItem ? '#007bff' : '#686868'}}>
                            {item}
                        </li>
                    ))
                }
            </S.MenuBar>
            <S.Line/>
            <TipBox/> 
            {contentComponent}
            <S.CopyrightContainer>
                <S.Copyright>@ Copyright</S.Copyright>
            </S.CopyrightContainer>

        </S.Container>

    );
};