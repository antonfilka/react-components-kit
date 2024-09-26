import React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import { Icon } from '@antonfilka/icon';

export interface ButtonProps extends AntButtonProps {}

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
    return (
        <AntButton {...props}>
            This is icon button
            <Icon icon="FaAngular" />
        </AntButton>
    );
};
