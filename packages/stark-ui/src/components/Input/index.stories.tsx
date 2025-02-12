'use client';

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Check } from 'starkds-icons';

import { Input } from './index.stories';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', defaultValue: 'Label' },
    error: { control: 'boolean', defaultValue: false },
    helperText: { control: 'text' },
    rightIcon: { control: false },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

type InputConfig = {
  name: string;
  label: string;
  initial: string;
  controlled: boolean;
  error?: boolean;
  helperText?: string;
  rightIcon?: React.ReactElement;
};

const InputWrapper = (props: { config: InputConfig }) => {
  const { name, label, initial, controlled, error, helperText, rightIcon } = props.config;
  if (controlled) {
    const [value, setValue] = useState(initial);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <Input
        error={error}
        helperText={helperText}
        label={label}
        name={name}
        rightIcon={rightIcon}
        value={value}
        onChange={handleChange}
      />
    );
  } else {
    return (
      <Input
        defaultValue={initial}
        error={error}
        helperText={helperText}
        label={label}
        name={name}
        rightIcon={rightIcon}
      />
    );
  }
};

export const Group: Story = {
  render: () => {
    const variants: InputConfig[] = [
      {
        name: 'input1',
        label: 'Controlled - Default',
        initial: 'Controlled Input',
        controlled: true,
      },
      {
        name: 'input2',
        label: 'Controlled with Error',
        initial: 'Error Input',
        controlled: true,
        error: true,
        helperText: 'This is an error message',
      },
      {
        name: 'input3',
        label: 'Uncontrolled - Default',
        initial: 'Uncontrolled Input',
        controlled: false,
      },
      {
        name: 'input4',
        label: 'Uncontrolled with Helper',
        initial: 'Input with helper text',
        controlled: false,
        helperText: 'Some helper text here',
      },
      {
        name: 'input5',
        label: 'Controlled with Right Icon',
        initial: 'Search term',
        controlled: true,
        rightIcon: <Check stroke="black" />,
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {variants.map((config) => (
          <InputWrapper config={config} key={config.name} />
        ))}
      </div>
    );
  },
};
