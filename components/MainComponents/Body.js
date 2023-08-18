import React from 'react';
import * as S from "./Body.styled";
import Link from 'next/link'
import Copyright from '../Copyright/Copyright';

export default function Body(){
  return (
   
      <S.Container>
         <S.Intro />
         <S.IntroText1>How to use HelloKorea</S.IntroText1>
         <S.IntroText2><br></br>You guys are trying to adapt in Korea! <br></br>
                        In Korea, most administrative tasks and works are done digitally 
                        or automatically over the Internet.<br></br>
                        The apps we introduce will be of great help to your life in Korea!</S.IntroText2>
         <S.MenuTabImg>
         <a href="/CategoryComponents/Public"><S.MenuTab1 src='img/Public_service.png'/></a>
         <a href="/CategoryComponents/Traffic"><S.MenuTab2 src='img/Traffic_service.png'/></a>
         <a href="/CategoryComponents/App"><S.MenuTab3 src='img/Application.png'/></a>

            <S.MenuTabTitle>
            <Link href="/CategoryComponents/Public"><S.MenuTitle1>public service</S.MenuTitle1></Link>
            <Link href="/CategoryComponents/Traffic"><S.MenuTitle2>traffic service</S.MenuTitle2></Link>
            <Link href="/CategoryComponents/App"><S.MenuTitle3>Application</S.MenuTitle3></Link>
            </S.MenuTabTitle>
         </S.MenuTabImg>

         <S.Line />
         <S.MenuBottom1>

        <Link href="/CategoryComponents/Emergency/Emergency">
            <a>
               <S.MenuBottom1Icon src='img/free-icon-siren-883345.png' />
               <S.MenuBottom1Text>Emergency/Medical Hotline</S.MenuBottom1Text>
            </a>
         </Link>
         </S.MenuBottom1>

         <S.MenuBottom2>
         <Link href="/CategoryComponents/FAQ/FAQ">
            <a>
               <S.MenuBottom2Icon src='img/Question answer.png' />
               <S.MenuBottom1Text>FAQ</S.MenuBottom1Text>
            </a>
         </Link>
         </S.MenuBottom2>

         <Copyright />

        

      </S.Container>
      
   
  );
};