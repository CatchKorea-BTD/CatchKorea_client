 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuBox from '../../../../components/AppComponents/MenuBox';
/*
export default function Content() {
    const [menuData, setMenuData] = useState([]); // 메뉴 데이터를 저장할 상태

    useEffect(() => {
        // API에서 메뉴 데이터를 가져오는 함수
        const fetchMenuData = async () => {
            try {
                const response = await axios.get('https://catchkorea-a5799a624288.herokuapp.com/post/{category_id}'); // API 엔드포인트
                setMenuData(response.data); // API에서 받아온 데이터를 상태에 저장
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };

        fetchMenuData(); // 메뉴 데이터를 가져오는 함수 호출
    }, []);

    return (
        <>
        <MenuBox
            link="/InfoComponents/Public/Comprehensive/Goverment24"
            iconSrc='\AppIcon\Goverment24.png'
            text1='Goverment 24'
            text2='The most popular Korean Bus application'
            hashtag1={menuData.hashtag}
        />
        <MenuBox
            link="/InfoComponents/Public/Comprehensive/MobileID"
            iconSrc='\AppIcon\MobileID.png'
            text1='Mobile ID'
            text2='The most popular Korean Bus application'
            hashtag1={menuData.hashtag}
        />    
        <MenuBox 
            link = "/InfoComponents/Public/Comprehensive/Pass" 
            iconSrc = '\AppIcon\Pass.png' 
            text1 = 'Pass' 
            text2 = 'The most popular Korean subway application' 
            hashtag1={menuData.hashtag}
        /> 
        <MenuBox
            link="/InfoComponents/Public/Comprehensive/Hometax"
            iconSrc='\AppIcon\Hometax.png'
            text1='Hometax'
            text2='The most popular Korean Bus application'
            hashtag1={menuData.hashtag}
        />
        <MenuBox
            link="/InfoComponents/Public/Comprehensive/Jiro"
            iconSrc='\AppIcon\Jiro.png'
            text1='Mobile Jiro'
            text2='The most popular Korean Bus application'
            hashtag1={menuData.hashtag}
        />
    </>
    );
};
 
 */

export default function Content() {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        // 백엔드 API에서 메뉴 데이터를 가져오는 함수를 호출하고 데이터를 설정합니다.
        const fetchMenuData = async () => {
            try {
                const response = await fetch('https://catchkorea-a5799a624288.herokuapp.com/post/14');
                const data = await response.json();
                setMenuData(data);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };
        fetchMenuData();
    }, []);

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

