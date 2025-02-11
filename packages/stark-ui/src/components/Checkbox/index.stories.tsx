'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Checkbox } from '.';
import type { CheckboxProps } from './types';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', defaultValue: '체크박스' },
    onChange: { action: 'changed' },
    disabled: { control: 'boolean', defaultValue: false },
    checked: {
      control: { type: 'radio' },
      options: [true, false, 'checked', 'unchecked', 'intermediate'],
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

type CheckboxConfig = {
  name: string;
  label: string;
  initial: boolean | 'checked' | 'unchecked' | 'intermediate' | undefined;
  controlled: boolean;
};

const CheckboxWrapper = (props: { config: CheckboxConfig }) => {
  const { name, label, initial, controlled } = props.config;
  if (controlled) {
    const [state, setState] = useState<CheckboxProps['checked']>(initial);

    const toggle = () => {
      setState((prev) => (prev === false || prev === 'unchecked' ? 'checked' : false));
    };

    return <Checkbox checked={state} children={label} name={name} onChange={toggle} />;
  } else {
    return <Checkbox children={label} defaultChecked={Boolean(initial)} name={name} />;
  }
};

export const Group: Story = {
  render: () => {
    const variants: CheckboxConfig[] = [
      { name: 'cb1', label: 'Controlled (false)', initial: false, controlled: true },
      { name: 'cb2', label: 'Controlled (checked)', initial: 'checked' as const, controlled: true },
      {
        name: 'cb3',
        label: 'Controlled (intermediate)',
        initial: 'intermediate' as const,
        controlled: true,
      },
      { name: 'cb4', label: 'Uncontrolled (false)', initial: false, controlled: false },
      { name: 'cb5', label: 'Uncontrolled (checked)', initial: true, controlled: false },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {variants.map((config) => (
          <CheckboxWrapper config={config} key={config.name} />
        ))}
      </div>
    );
  },
};
