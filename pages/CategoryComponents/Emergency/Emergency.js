import React, { useState } from 'react';
import * as S from '../../../styles/CategoryComponents/Emergency.styled'

import Header from '../../../components/InfoComponents/Header'

export default function Emergency(){
   const [isInfoVisible, setIsInfoVisible] = useState(false);
   const [numberMenuHeight, setNumberMenuHeight] = useState('33px');

   const handleToggleClick = () => {
      setIsInfoVisible(!isInfoVisible);
      setNumberMenuHeight(isInfoVisible ? '33px' : 'auto'); 

   };

   const initialEmergencyNumbers = [
      { number: '119', isInfoVisible: false },
      { number: '112', isInfoVisible: false },
      { number: '1339', isInfoVisible: false },
      { number: '1330', isInfoVisible: false },
      { number: '182', isInfoVisible: false },
    ];


   return (
      <S.Wrapper>
         <S.Container>
            <Header />
               <S.Menu>
                  <S.MenuIcon src='/img/free-icon-siren-883345.png' />
                  <S.MenuText>Emergency/Medical Hotline</S.MenuText>
                  
                  {/* 119 */}
                  <S.numberMenu style={{ height: numberMenuHeight }} onClick={handleToggleClick}>
                     <S.img src='/img/call.png'/>
                     <S.number>119 - Emergency (Fire & Ambulance)</S.number>
                     <S.toggle src='/img/toggle1.png' />
                     {isInfoVisible && (
                        <S.Info119>
                           This is the emergency number for various situations including fires, medical emergencies, and rescues.
                           It is used to request firefighting, emergency medical services, and rescue assistance.
                        </S.Info119>
                     )}
                  </S.numberMenu>

                  {/* 112 */}
                     <S.numberMenu style={{ height: numberMenuHeight }} onClick={handleToggleClick}>
                     <S.img src='/img/call.png'/>
                     <S.number>112 - Police</S.number>
                     <S.toggle src='/img/toggle1.png' />
                     {isInfoVisible && (
                        <S.Info112>
                           This number is used for a variety of emergencies including police, fire department, and emergency medical situations. It can be dialed from both landlines and mobile phones and serves multiple purposes.
                        </S.Info112>
                     )}
                  </S.numberMenu>
                  
                     {/* 1339 */}
                     <S.numberMenu style={{ height: numberMenuHeight }} onClick={handleToggleClick}>
                     <S.img src='/img/call.png'/>
                     <S.number>1339 - Medical Emergency</S.number>
                     <S.toggle src='/img/toggle1.png' />
                     {isInfoVisible && (
                        <S.Info1339>
                           This is the number for the Korean Center for Disease Control(KCDC). Korea established the hotline in response to the early bird flu out. English-speaking operators are on the line to help, 24/7.
                        </S.Info1339>
                     )}
                  </S.numberMenu>
                     {/* 1330 */}
                     <S.numberMenu style={{ height: numberMenuHeight }} onClick={handleToggleClick}>
                     <S.img src='/img/call.png'/>
                     <S.number>1330 - Foreign Traveler Hotline</S.number>
                     <S.toggle src='/img/toggle1.png' />
                     {isInfoVisible && (
                        <S.Info1330>
                           Need someont to translate? Call 1330. English-speaking operators are on the line to help. You can use 1330 in any other emergency number. Say you need an embulance, but the local 119 operator doesn’t speak English. Call 1330. They’ll contact a nearby hospital and set up a conference call. 1330 also acts as a tourist hotline.
                        </S.Info1330>
                     )}
                  </S.numberMenu>
                     {/* 182 */}
                     <S.numberMenu style={{ height: numberMenuHeight }} onClick={handleToggleClick}>
                     <S.img src='/img/call.png'/>
                     <S.number>182 - Missing Person & Property</S.number>
                     <S.toggle src='/img/toggle1.png' />
                     {isInfoVisible && (
                        <S.Info182>
 Phone number report missing persons and property in Korea. Call 182 to report a missing person or stolen property. It’s a non-emergency number to make police inquiries.                        </S.Info182>
                     )}
                  </S.numberMenu>

               </S.Menu>

         </S.Container>
      </S.Wrapper>
   );
};