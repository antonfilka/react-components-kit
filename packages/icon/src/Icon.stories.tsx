import type { Meta } from '@storybook/react';
import { Icon } from './Icon';
import {
    AiFillAlert,
    AiFillAmazonCircle,
    AiFillAndroid,
    AiFillApi,
    AiFillApple,
} from 'react-icons/ai'; // Example icons from react-icons

const meta = {
    title: 'Components/Icon',
    component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

export const Basic = () => {
    return (
        <div style={{ display: 'grid', gap: '5px' }}>
            <p>Basic Icon</p>
            <Icon icon={AiFillAlert} size="2em" color="goldenrod" />

            <p>Icon with custom size</p>
            <Icon icon={AiFillAmazonCircle} size="3em" color="brown" />

            <p>Icon with custom color</p>
            <Icon icon={AiFillAndroid} size="2em" color="blue" />

            <p>Icon with custom styles</p>
            <Icon
                icon={AiFillApi}
                size="2em"
                style={{ border: '1px solid black', borderRadius: '50%' }}
                aria-label="Coffee icon with border"
            />

            <p>Icon with ARIA label for accessibility</p>
            <Icon icon={AiFillApple} size="2em" color="green" aria-label="Beer icon" />
        </div>
    );
};
