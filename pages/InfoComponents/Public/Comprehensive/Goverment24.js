import React, { useState, useEffect } from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Goverment() {
    const [data, setData] = useState(null); // API로부터 받아온 데이터를 저장할 상태

    useEffect(() => {
        // 백엔드 API에서 메뉴 데이터를 가져오는 함수를 호출하고 데이터를 설정합니다.
        const fetchData = async () => {
            try {
                const response = await fetch('https://catchkorea-a5799a624288.herokuapp.com/search/4');
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };
        fetchData();
    }, []);

  const handleDownload = () => {
    // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
    if (navigator.userAgent.match(/Android/i)) {
      window.location.href = 'https://play.google.com/store/search?q=%ED%99%88%ED%83%9D%EC%8A%A4&c=apps&hl=ko-KR';
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      window.location.href = 'https://apps.apple.com/kr/app/%EA%B5%AD%EC%84%B8%EC%B2%AD-%ED%99%88%ED%83%9D%EC%8A%A4-%EC%86%90%ED%83%9D%EC%8A%A4/id495157796';
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
        <Header />
        {data !== null && data.map((dataItem) => (
                <Body
                    key={dataItem.id}
                    iconSrc1={dataItem.imageLink || '/AppIcon/Cgv.png'}
                    appName={dataItem.title || 'Loading...'}
                    text1={dataItem.contents || '왜 암것도 안나와'}
                    handleDownload={handleDownload}
                    handleShare={handleShare}
                />
            ))}
      </S.Container>
    </S.Wrapper>
  );
}
