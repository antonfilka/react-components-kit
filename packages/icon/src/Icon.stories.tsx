import type { Meta } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
    title: 'Components/Icon',
    component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

export const Basic = () => {
    return (
        <div style={{ display: 'grid', gap: '5px' }}>
            <p>Heart Icon (Favorite)</p>
            <Icon icon="FaRegHeart" size="3em" color="red" />

            <p>Star Icon (Featured)</p>
            <Icon icon="FaStar" size="3em" color="gold" />

            <p>Tree Icon (Nature)</p>
            <Icon icon="FaTree" size="3em" color="green" />

            <p>Camera Icon (Photography)</p>
            <Icon icon="FaCameraRetro" size="3em" color="black" />

            <p>Plane Icon (Travel)</p>
            <Icon icon="FaPlane" size="3em" color="dodgerblue" />
        </div>
    );
};
