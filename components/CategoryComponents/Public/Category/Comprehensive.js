import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        // 백엔드 API에서 메뉴 데이터를 가져오는 함수를 호출하고 데이터를 설정합니다.
        const fetchMenuData = async () => {
            try {
                const response = await fetch('ht');
                const data = await response.json();
                setMenuData(data);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };
        if (selectedItem !== null) {
            fetchMenuData();
        }
    }, [selectedItem]);

    return (
        <>
            {menuData.map((menu, index) => (
                <MenuBox
                    key={index}
                    link='/InfoComponents/Public/Comprehensive/MobileID'
                    iconSrc={menu.imageLink}
                    text1={menu.title}
                    text2={menu.contents}
                    hashtag1={menu.hashtag}
                />
            ))}
        </>
    );
}

