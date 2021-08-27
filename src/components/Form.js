import React from 'react';
import Button from './Button';
import { Checkbox, Input } from './Input';

const Form = () => {
    return (
        <form>
            <Input type="email" title="example@gmail.com" name="email" labelTitle="Email address"  />
            <Input type="password" title="********" name="password" labelTitle="Password" />
            <Checkbox type="checkbox" name="checkbox" labelTitle="Remember me" />
            <Button formBtn="true" title="Sign In" />
        </form>
    )
}

export default Form
