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
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/34';
                } else if (selectedItem === 1) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/44';
                } else if (selectedItem === 2) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/64';
                } else if (selectedItem === 3) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/54';
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
            {menuData.map((menu, index) => (
                <MenuBox
                    key={index}
                    link="/InfoComponents/Traffic/Map/KakaoMap"
                    iconSrc={menu.imageLink}
                    text1={menu.title}
                    text2={menu.contents}
                    hashtag1={menu.hashtag}
                />
            ))}
        </>
    );
}

