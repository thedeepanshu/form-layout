import React from 'react';
import { Branding } from './Branding';
import ButtonContainer from './ButtonContainer';
import Form from './Form';
import { SignInLine } from './SignInLine';

const ContentBox = () => {
    return (
        <div className="content__box">
            <div>
            <Branding />
            <ButtonContainer />
            <SignInLine />
            <Form />
            </div>
        </div>
    )
}

export default ContentBox
