import React from 'react';
import * as S from './Menubar.styled';
import Link from 'next/link'

export default function MenuBar({menuVisible, onClick}) {
    return (
        <S.Wrapper menuVisible={menuVisible}>
            <S.Container>

                <S.CloseButton onClick={onClick} src='/img/free-icon-x-657059.png'></S.CloseButton>

                {/*              <a href="/MainComponents/Main/Main"><S.MenuIcon src='/img/Home.p
 *  ng' /></a>

 */
                }
                <Link href="/index">
                    <S.MenuText src='/img/CatchKorea.png'/></Link>
            </S.Container>

            <S.CategoryContainer>
                {/* 카테고리 : Public Service */}
                <S.PublicS>Public Service</S.PublicS>
                <S.ShortBorder/> {/* Comprehensive certification */}
                <S.PublicApp1>
                    <S.Publicimg1 src='/img/정부icon.png'/>
                    <S.ComprehensiveCertification>Comprehensive</S.ComprehensiveCertification>
                </S.PublicApp1>

                <S.PublicApp1>
                    <S.Publicimg3 src='/img/certification.png'/>
                    <S.ComprehensiveCertification>Certification</S.ComprehensiveCertification>
                </S.PublicApp1>

                {/* Safety */}
                <S.PublicApp2>
                    <S.Publicimg2 src='/img/safety.png'/>
                    <S.Safety>Safety</S.Safety>
                </S.PublicApp2>

                {/* ----------------------------------------------------- */}

                {/* 카테고리 : Map / Traffic Service */}
                <S.PublicS>Map / Traffic Service</S.PublicS>
                <S.ShortBorder/> {/* Map */}
                <S.PublicApp3>
                    <S.Publicimg3 src='/img/map.svg'/>
                    <S.Map>Map</S.Map>
                </S.PublicApp3>

                {/* Public Transport */}
                <S.PublicApp4>
                    <S.Publicimg4 src='/img/public.svg'/>
                    <S.publictransport>Public transport</S.publictransport>
                </S.PublicApp4>

                {/* Taxi */}
                <S.PublicApp5>
                    <S.Publicimg5 src='/img/taxi.svg'/>
                    <S.Taxi>Taxi</S.Taxi>
                </S.PublicApp5>

                {/* Navigation */}
                <S.PublicApp6>
                    <S.Publicimg6 src='/img/Navi.svg'/>
                    <S.Navigation>Navigation</S.Navigation>
                </S.PublicApp6>

                {/* ----------------------------------------------------- */}

                {/* 카테고리 : Application Service */}
                <S.PublicS>Application Service</S.PublicS>
                <S.ShortBorder/> {/* Cultural life */}
                <S.PublicApp7>
                    <S.Publicimg7 src='/img/Book.png'/>
                    <S.Navigation>BookStore</S.Navigation>
                </S.PublicApp7>

                {/* SNS */}
                <S.PublicApp8>
                    <S.Publicimg8 src='/img/Movie.png'/>
                    <S.SNS>Movie</S.SNS>
                </S.PublicApp8>

                {/* Search Engine */}
                <S.PublicApp9>
                    <S.Publicimg9 src='/img/Restaurants.png'/>
                    <S.SearchEngine>Restaurant</S.SearchEngine>
                </S.PublicApp9>

                {/* Finance */}
                <S.PublicApp10>
                    <S.Publicimg10 src='/img/KickBoard.png'/>
                    <S.Finance>KickBoard</S.Finance>
                </S.PublicApp10>

                {/* Food Delivery */}
                <S.PublicApp11>
                    <S.Publicimg11 src='/img/Music.png'/>
                    <S.FoodDelivery>Music</S.FoodDelivery>
                </S.PublicApp11>

                {/* E-commerce */}
                <S.PublicApp12>
                    <S.Publicimg12 src='/img/Travel.png'/>
                    <S.ECommerce>Travel</S.ECommerce>
                </S.PublicApp12>

                {/* Used Item */}
                <S.PublicApp13>
                    <S.Publicimg13 src='/img/Present.png'/>
                    <S.UsedItem>Present</S.UsedItem>
                </S.PublicApp13>

                {/* Interior */}
                <S.PublicApp14>
                    <S.Publicimg14 src='/img/SNS.png'/>
                    <S.Interior>SNS</S.Interior>
                </S.PublicApp14>

                {/* Part-time */}
                <S.PublicApp15>
                    <S.Publicimg15 src='/img/Search.png'/>
                    <S.PartTime>Search Engine</S.PartTime>
                </S.PublicApp15>

                {/* Trendy App */}
                <S.PublicApp16>
                    <S.Publicimg16 src='/img/Finance.png'/>
                    <S.TrendyApp>Finance</S.TrendyApp>
                </S.PublicApp16>

                {/* Employment */}
                <S.PublicApp17>
                    <S.Publicimg17 src='/img/FoodDelivery.png'/>
                    <S.TrendyApp>FoodDelivery</S.TrendyApp>
                </S.PublicApp17>
                {/* E commerce */}
                <S.PublicApp17>
                    <S.Publicimg17 src='/img/eCommerce.png'/>
                    <S.TrendyApp>E-Commerce</S.TrendyApp>
                </S.PublicApp17>
                {/* usedId */}
                <S.PublicApp17>
                    <S.Publicimg17 src='/img/UsedItem.png'/>
                    <S.TrendyApp>Used Item</S.TrendyApp>
                </S.PublicApp17>
                {/* Employment */}
                <S.PublicApp17>
                    <S.Publicimg17 src='/img/Interior.png'/>
                    <S.TrendyApp>Home</S.TrendyApp>
                </S.PublicApp17>
                <S.PublicApp17>
                    <S.Publicimg17 src='/img/PartTime.png'/>
                    <S.TrendyApp>PartTime</S.TrendyApp>
                </S.PublicApp17>

                <S.PublicApp17>
                    <S.Publicimg17 src='/img/TrendyApp.png'/>
                    <S.TrendyApp>TrendyApp</S.TrendyApp>
                </S.PublicApp17>

            </S.CategoryContainer>
        </S.Wrapper>
    );
};
