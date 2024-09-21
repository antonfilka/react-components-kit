import type { Meta } from '@storybook/react';

import { Input } from '.';

const meta = {
    title: 'Input',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;

export const Basic = () => {
    return (
        <div style={{ padding: 30 }}>
            <Input />
        </div>
    );
};
