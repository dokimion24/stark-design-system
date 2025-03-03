import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Switch, type SwitchProps } from '.';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '스위치는 단일 설정의 켜기/끄기 상태를 전환할 수 있는 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: '스위치의 선택 상태를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '스위치의 비활성화 상태를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' },
      description: '스위치의 크기를 지정합니다.',
      table: {
        type: { summary: '"sm" | "md"' },
      },
    },
    onChange: {
      action: 'changed',
      description: '스위치의 상태가 변경될 때 호출되는 함수입니다.',
      table: {
        type: {
          summary: '(event: ChangeEvent<HTMLInputElement>) => void',
        },
      },
    },
    ref: {
      description: '스위치 컴포넌트에 대한 참조를 전달합니다.',
      table: {
        type: {
          summary: 'Ref<HTMLInputElement>',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

const SwitchWithState = (args: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(args.checked);
  return (
    <Switch
      {...args}
      checked={isChecked}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        args.onChange?.(e);
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => <SwitchWithState {...args} />,
  args: {
    checked: false,
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: '기본적인 스위치 컴포넌트입니다.',
      },
    },
  },
};

export const Group: Story = {
  render: () => {
    const examples = [
      { title: '기본', props: {} },
      { title: '작은 크기', props: { size: 'sm' as const } },
      { title: '선택됨', props: { checked: true } },
      { title: '비활성화', props: { disabled: true } },
      { title: '선택됨 + 비활성화', props: { checked: true, disabled: true } },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {examples.map(({ title, props }) => (
          <div key={title}>
            <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
            <SwitchWithState {...props} />
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '스위치의 모든 상태를 한눈에 볼 수 있는 그룹입니다.',
      },
    },
  },
};
