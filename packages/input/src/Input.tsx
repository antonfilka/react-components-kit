import React from 'react';
import { Input as NextInput, InputProps as NextInputProps } from '@nextui-org/react';

export interface InputProps extends NextInputProps {
    /** The current value of the input */
    value?: string;
    /** The default value of the input (uncontrolled component) */
    defaultValue?: string;
    /** Placeholder text displayed when the input is empty */
    placeholder?: string;
    /** The type of input (e.g., 'text', 'password', 'email') */
    type?: string;
    /** The label displayed above the  input */
    label?: string;
    /** Helper text displayed below the input */
    helperText?: string;
    /** The status of the input for validation styling */
    status?: 'default' | 'error' | 'success' | 'warning';
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Whether the input is read-only */
    readOnly?: boolean;
    /** Whether the input is required */
    required?: boolean;
    /** Name attribute of the input element */
    name?: string;
    /** The maximum length of the input value */
    maxLength?: number;
    /** The minimum length of the input value */
    minLength?: number;
}

export const Input: React.FC<InputProps> = ({ placeholder = 'Default placeholder', ...props }) => {
    return <NextInput placeholder={placeholder} {...props} />;
};
