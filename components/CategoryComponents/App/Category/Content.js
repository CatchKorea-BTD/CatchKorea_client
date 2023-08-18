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
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/74';
                } else if (selectedItem === 1) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/84';
                } else if (selectedItem === 2) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/94';
                } else if (selectedItem === 3) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/104';
                } else if (selectedItem === 4) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/114';
                } else if (selectedItem === 5) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/124';
                } else if (selectedItem === 6) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/134';
                } else if (selectedItem === 7) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/154';
                } else if (selectedItem === 8) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/144';
                } else if (selectedItem === 9) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/164';
                } else if (selectedItem === 10) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/174';
                } else if (selectedItem === 11) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/194';
                } else if (selectedItem === 12) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/204';
                } else if (selectedItem === 13) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/234';
                } else if (selectedItem === 14) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/184';
                } else if (selectedItem === 15) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/224';
                } else if (selectedItem === 16) {
                    apiEndpoint = 'https://catchkorea-a5799a624288.herokuapp.com/post/214';
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

            const link = `/InfoComponents/App/${category}/${menu.imageLink.split("\\").pop()}`;

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
