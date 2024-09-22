import type { Meta } from '@storybook/react';

import { Input } from './Input';

const meta = {
    title: 'Components/Input',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;

export const Basic = () => {
    return (
        <div style={{ display: 'grid', gap: '5px' }}>
            <p>Basic Input</p>
            <Input placeholder="Enter text" />
            <p>Disabled Input</p>
            <Input placeholder="Cannot type here" disabled />
            <p>Password Input</p>
            <Input placeholder="Enter your password" type="password" />
            <p>Input with custom inline styles</p>
            <Input
                placeholder="Custom styled input"
                style={{ borderColor: 'purple', borderWidth: 2 }}
            />
            <p>Input with maxLength</p>
            <Input placeholder="Max length of 10" maxLength={10} />
        </div>
    );
};
