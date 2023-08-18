import React, { useState, useEffect } from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function MarooAi() {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://catchkorea-a5799a624288.herokuapp.com/search/464');
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
    if (data && data.serviceLink) {
      window.location.href = data.serviceLink;
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
                    iconSrc1={data.imageLink}
                    appName={data.title}
                    text1={data.content} // API 응답 데이터에 있는 앱 설명 필드
                    handleDownload={handleDownload}
                    handleShare={handleShare}
                    />
                    )}
            </S.Container>
        </S.Wrapper>
    );
};