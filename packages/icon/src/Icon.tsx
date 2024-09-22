import React from 'react';
import * as Icons from 'react-icons/fa';

export interface IconProps {
    /** The name of the icon from react-icons */
    icon: keyof typeof Icons;
    /** The size of the icon */
    size?: string;
    /** The color of the  icon */
    color?: string;
    /** Additional CSS classes */
    className?: string;
    /** Inline styles for the icon */
    style?: React.CSSProperties;
    /** ARIA label for accessibility */
    'aria-label'?: string;
}
export const Icon: React.FC<IconProps> = ({
    icon,
    size = '1em',
    color = 'currentColor',
    ...props
}) => {
    const IconComponent = Icons[icon];

    if (!IconComponent) {
        return null;
    }

    return <IconComponent size={size} color={color} {...props} />;
};
