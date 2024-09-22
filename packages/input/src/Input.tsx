import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';

export interface InputProps extends AntInputProps {
    /** The current value of the input */
    value?: string;
    /** Placeholder text displayed when the input is empty */
    placeholder?: string;
    /** The type of input (e.g., 'text', 'password', 'email') */
    type?: string;
    /** The label displayed above the input */
    label?: string;
    /** Helper text displayed below the input */
    helperText?: string;
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Whether the input is read-only */
    readOnly?: boolean;
    /** Whether the input is required */
    required?: boolean;
    /** Name attribute of the input  element */
    name?: string;
    /** The maximum length of the input value */
    maxLength?: number;
    /** The minimum length of the input value */
    minLength?: number;
}

export const Input: React.FC<InputProps> = ({
    placeholder = 'Default placeholder',
    label = 'Input label',
    ...props
}) => {
    return <AntInput placeholder={placeholder} {...props} />;
};
