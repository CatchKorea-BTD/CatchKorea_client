// 각 카테고리 클릭시 나오는 컨텐츠 파일 분리
import React, { useState, useEffect } from 'react';
import * as S from "./Body.styled";
import Comprehensive from './Category/Comprehensive';
import Safety from './Category/Safety';
import Link from 'next/link'

export default function Body({selectedItem, onItemClick}) {

    const ContentComponents = [Comprehensive, Safety];
    const menuItems = ['Comprehensive Certification', 'Safety'];
    let contentComponent;
        const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        // 백엔드 API에서 메뉴 데이터를 가져오는 함수를 호출하고 데이터를 설정합니다.
        const fetchMenuData = async () => {
            try {
                const response = await fetch('https://your-backend-api-url');
                const data = await response.json();
                setMenuData(data);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };
        
        fetchMenuData();
    }, [selectedItem]); // selectedItem이 변경될 때마다 데이터를 다시 가져옴

    if (selectedItem !== null) {
        contentComponent = ContentComponents[selectedItem]({ menuData }); // menuData를 컴포넌트로 전달
    } else {
        contentComponent = Comprehensive({ menuData }); // menuData를 컴포넌트로 전달
    }

    return (

        <S.Container>
            <S.Title>Public Service</S.Title>
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
             
            {contentComponent}
            <S.CopyrightContainer>
                <S.Copyright>@ Copyright</S.Copyright>
            </S.CopyrightContainer>
        </S.Container>
    );
};