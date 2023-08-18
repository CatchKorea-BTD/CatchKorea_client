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
            let category = 'BookStore';

            // id에 따라 카테고리 설정
                if (menu.id === 44 || menu.id === 54) {
                    category = 'Book';
                } else if (menu.id === 64 || menu.id === 84 || menu.id === 124) {
                    category = 'Movie';
                } else if (menu.id === 164 || menu.id === 184) {
                    category = 'Restaurants';
                } else if (menu.id === 204 || menu.id === 234 || menu.id === 244) {
                    category = 'KickBoard';
                } else if (menu.id === 294 || menu.id === 344 || menu.id === 414 || menu.id === 444 || menu.id === 364) {
                    category = 'Music';
                } else if (menu.id === 494 || menu.id === 564 || menu.id === 524 || menu.id === 544) {
                    category = 'Travel';
                } else if (menu.id === 654) {
                    category = 'Present';
                } else if (menu.id === 584) {
                    category = 'Sns';
                } else if (menu.id === 574) {
                    category = 'Search'
                } else if (menu.id === 594 || menu.id === 624 || menu.id === 634 || menu.id === 644 || menu.id === 664) {
                    category = 'Finance';
                } else if (menu.id === 24 || menu.id === 614) {
                    category = 'Food';
                } else if (menu.id === 154 || menu.id === 174 || menu.id === 194 || menu.id === 214 || menu.id === 254 || menu.id === 274) {
                    category = 'Ecommerce';
                } else if (menu.id === 384 || menu.id === 404 || menu.id === 424 ) {
                    category = 'Used';
                } else if (menu.id === 484 || menu.id === 514 || menu.id === 554 ) {
                    category = 'Home';
                } else if (menu.id === 104 || menu.id === 114 ) {
                    category = 'PartTime';
                } else if (menu.id === 464) {
                    category = 'Trendy';
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
