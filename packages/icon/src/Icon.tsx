import React from 'react';
import { IconType } from 'react-icons';

export interface IconProps {
    /** The icon component from react-icons */
    icon: IconType;
    /** The size of the icon */
    size?: number | string;
    /** The color of the icon */
    color?: string;
    /** Additional CSS classes */
    className?: string;
    /** Inline styles for the  icon */
    style?: React.CSSProperties;
    /** ARIA label for accessibility */
    'aria-label'?: string;
}

export const Icon: React.FC<IconProps> = ({
    icon: IconComponent,
    size = '1em',
    color = 'currentColor',
    ...props
}) => {
    return <IconComponent size={size} color={color} {...props} />;
};
