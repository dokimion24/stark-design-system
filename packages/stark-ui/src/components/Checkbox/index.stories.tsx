'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Checkbox } from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '체크박스는 사용자가 여러 옵션 중에서 하나 이상을 선택할 수 있게 해주는 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      options: ['checked', 'unchecked', 'intermediate', true, false],
      control: {
        type: 'select',
      },
      description:
        '체크박스의 선택 상태를 지정합니다. "checked", "unchecked", "intermediate" 문자열 또는 boolean 값을 사용할 수 있습니다.',
      table: {
        type: {
          summary: '"checked" | "unchecked" | "intermediate" | boolean',
        },
      },
    },
    defaultChecked: {
      control: 'boolean',
      description: '체크박스의 초기 선택 상태를 지정합니다.',
    },
    disabled: {
      control: 'boolean',
      description: '체크박스의 비활성화 상태를 지정합니다.',
    },
    onChange: {
      action: 'changed',
      description: '체크박스의 상태가 변경될 때 호출되는 함수입니다.',
      table: {
        type: {
          summary: '(event: ChangeEvent<HTMLInputElement>) => void',
        },
      },
    },
    children: {
      control: 'text',
      description: '체크박스 옆에 표시될 레이블 내용입니다.',
    },
    ref: {
      description: '체크박스 컴포넌트에 대한 참조를 전달합니다.',
      table: {
        type: {
          summary: 'Ref<HTMLInputElement>',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '체크박스',
  },
  parameters: {
    docs: {
      description: {
        story: '기본적인 체크박스입니다.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: '비활성화된 체크박스',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: '비활성화된 상태의 체크박스입니다.',
      },
    },
  },
};

export const Group: Story = {
  args: {
    name: 'checkbox-group',
    children: 'Checkbox',
  },
  render: () => {
    const [checkedStates, setCheckedStates] = useState<Record<string, boolean | 'intermediate'>>(
      {},
    );

    const handleChange = (title: string) => {
      setCheckedStates((prev) => ({
        ...prev,
        [title]: !prev[title],
      }));
    };

    const examples = [
      { title: '기본', props: {} },
      { title: '선택됨', props: { checked: true } },
      { title: 'Intermediate', props: { checked: 'intermediate' as const } },
      { title: '비활성화', props: { disabled: true } },
      { title: '선택됨 + 비활성화', props: { checked: true, disabled: true } },
      {
        title: 'Intermediate + 비활성화',
        props: { checked: 'intermediate' as const, disabled: true },
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
        {examples.map(({ title, props }) => (
          <div key={title}>
            <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
            <Checkbox
              name="checkbox-example"
              {...props}
              checked={props.disabled ? props.checked : checkedStates[title] ?? props.checked}
              onChange={() => !props.disabled && handleChange(title)}
            >
              체크박스 {title}
            </Checkbox>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '체크박스의 모든 상태를 한눈에 볼 수 있는 그룹입니다.',
      },
      primary: true,
    },
  },
};

export const WithOnChange: Story = {
  args: {
    name: 'with-onchange',
    children: '이벤트 핸들링',
  },
  render: () => (
    <Checkbox name="with-onchange" onChange={(e) => alert(`체크박스 상태: ${e.target.checked}`)} />
  ),
};
