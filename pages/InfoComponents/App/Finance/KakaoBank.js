import React, { useState, useEffect } from 'react'
;import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function NaverPay() {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://catchkorea-a5799a624288.herokuapp.com/post/{category_id}');
            const jsonData = await response.json();

            if (jsonData) {
                setData(jsonData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'https://play.google.com/store/search?q=%EC%95%A0%EB%B0%98%EC%A3%BC%ED%98%B8&c=apps&hl=ko-KR';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'https://apps.apple.com/kr/app/%EC%95%A0%EB%B0%98%EC%A3%BC%ED%98%B8/id395800058';
        }
    };

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'catchKorea',
                    text: '내용...',
                    url: window.location.href,
                });
            } else {
                throw new Error('Web Share API not supported');
            }
        } catch (error) {
            console.error('Error sharing:', error);
            alert('Sharing failed. Please try again later.');
        }
    };
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                {data !== null && (
                <Body
                
                    iconSrc1='\AppIcon\NaverPay.png'
                    appName={data.title}
                    text1={data.contents} // API 응답 데이터에 있는 앱 설명 필드
                    handleDownload={handleDownload}
                    handleShare={handleShare}
                    />
                     )}
            </S.Container>
        </S.Wrapper>
    );
};