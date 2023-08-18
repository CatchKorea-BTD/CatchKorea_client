import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content({ selectedItem }) {
const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                let apiEndpoint = '';

                if (selectedItem === 0) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/14';
                } else if (selectedItem === 1) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/4';
                } else if (selectedItem === 2) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/24';
                }

                const response = await fetch(apiEndpoint);
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
            {menuData.map((menu, index) => {
            let category = 'Comprehensive';

            // id에 따라 카테고리 설정
            if (menu.id === 144 || menu.id === 224 || menu.id === 264 || menu.id === 284) {
                category = 'Comprehensive';
            } else if (menu.id === 534) {
                category = 'Certification';
            } else if (menu.id === 314) {
                category = 'Safety';
            }
            
            // 그 외의 id에 대한 카테고리 설정

            const link = `/InfoComponents/Public/${category}/${menu.imageLink.split("\\").pop()}`;

            return (
                <MenuBox
                    key={index}
                    link={link}
                    iconSrc={menu.imageLink}
                    text1={menu.title}
                    text2={menu.contents}
                    hashtag1={menu.hashtag}
                />
            );
        })}
        </>
    );
}

