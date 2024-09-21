import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputProps } from './Input';
import { JSX } from 'react/jsx-runtime';

const meta = {
    title: 'Components/Input',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<InputProps>;

/** Basic Input with placeholder */
export const Basic: Story = {
    args: {
        placeholder: 'Enter text',
    },
};

/** Input with a label */
export const WithLabel: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter your username',
    },
};

/** Disabled input */
export const Disabled: Story = (args: JSX.IntrinsicAttributes & InputProps) => <Input {...args} />;
Disabled.args = {
    placeholder: 'Cannot type here',
    disabled: true,
};

/** Password input */
export const PasswordInput: Story = {
    args: {
        placeholder: 'Enter your password',
        type: 'password',
    },
};

/** Read-only input */
export const ReadOnly: Story = {
    args: {
        placeholder: 'Read-only input',
        value: 'Cannot change this',
        readOnly: true,
    },
};

/** Input with custom inline styles */
export const CustomStyles: Story = {
    args: {
        placeholder: 'Custom styled input',
        style: { borderColor: 'purple', borderWidth: 2 },
    },
};

/** Input with maxLength */
export const MaxLength: Story = {
    args: {
        placeholder: 'Max length of 10',
        maxLength: 10,
    },
};
