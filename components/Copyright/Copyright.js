import React, {useState} from 'react';
import * as S from "./Copyright.styled";

export default function Copyright() {

    return (
        <S.CopyrightContainer>
            <S.Copyright>© [2023] CatchKorea.
            </S.Copyright>
            <S.text>All rights reserved. Reproduction, distribution, transmission, storage,
                or printing of this document, in part or in whole, without prior written consent
                is prohibited.
            </S.text>
        </S.CopyrightContainer>
    );
}
