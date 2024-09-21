import React from 'react';
import { Input as NextInput } from '@nextui-org/react';

export interface InputProps {
    /** Placeholder text for the input */
    placeholder?: string;
    /** Type of the input*/
    type?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder, type = 'text' }) => {
    return <NextInput placeholder={placeholder} type={type} />;
};
