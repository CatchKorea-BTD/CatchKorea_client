import React from 'react';
import * as S from './Body.styled';
import Link from 'next/link';

export default function Body({ iconSrc1, appName, text1, handleDownload, handleShare, AppInfo }) {
    const fullIconSrc = `${iconSrc1}.png`;
    return (
        <S.Container>
            <S.Title>
                <S.Icon src={fullIconSrc} />
                <S.AppName>{appName}</S.AppName>
                <S.Line />
            </S.Title>
            <S.Info>{text1}</S.Info>
            {/* <S.AppInfo src={AppInfo} /> */}
            <S.BtnZone>
                <S.Download onClick={handleDownload}>
                    <S.Icon src="/img/Download.svg" />
                    Link / Download
                </S.Download>
                <S.Share onClick={handleShare}>
                    <S.Icon src="/img/Share.svg" />
                    Share
                </S.Share>
            </S.BtnZone>
        </S.Container>
    );
}
