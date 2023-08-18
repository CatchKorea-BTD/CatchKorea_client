import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        // 백엔드 API에서 메뉴 데이터를 가져오는 함수를 호출하고 데이터를 설정합니다.
        const fetchMenuData = async () => {
            try {
                const response = await fetch('https://catchkorea-a5799a624288.herokuapp.com/post/34');
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

