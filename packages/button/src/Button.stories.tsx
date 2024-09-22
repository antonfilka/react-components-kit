import type { Meta } from '@storybook/react';

import { Button } from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;

export const Basic = () => {
    return (
        <div style={{ display: 'grid', gap: '5px' }}>
            <Button />
        </div>
    );
};
