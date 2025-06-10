'use client';

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Check } from 'starkds-icons';

import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '사용자로부터 텍스트 입력을 받을 수 있는 기본적인 입력 필드입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Label',
      description: '입력 필드의 레이블을 지정합니다.',
    },
    value: {
      control: 'text',
      description: '입력 필드의 값을 지정합니다. (제어 컴포넌트에서 사용)',
    },
    defaultValue: {
      control: 'text',
      description: '입력 필드의 초기 값을 지정합니다. (비제어 컴포넌트에서 사용)',
    },
    placeholder: {
      control: 'text',
      description: '입력 필드의 플레이스홀더를 지정합니다.',
    },
    type: {
      control: 'text',
      description: '입력 필드의 타입을 지정합니다. (예: text, password, email 등)',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    error: {
      control: 'boolean',
      defaultValue: false,
      description: '오류 상태를 표시합니다.',
    },
    helperText: {
      control: 'text',
      description: '입력 필드 아래에 표시되는 도움말 텍스트입니다.',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: '입력 필드의 비활성화 상태를 지정합니다.',
    },
    rightIcon: {
      control: false,
      description: '입력 필드 오른쪽에 표시되는 아이콘입니다.',
    },
    onChange: {
      action: 'changed',
      description: '입력값이 변경될 때 호출되는 함수입니다.',
    },
    ref: {
      description: '입력 필드 컴포넌트에 대한 참조를 전달합니다.',
      table: {
        type: {
          summary: 'Ref<HTMLInputElement>',
        },
      },
    },
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
  disabled?: boolean;
};

const ControlledInputWrapper = (props: { config: InputConfig }) => {
  const { name, label, initial, error, helperText, rightIcon, disabled } = props.config;
  const [value, setValue] = useState(initial);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      disabled={disabled}
      error={error}
      helperText={helperText}
      label={label}
      name={name}
      rightIcon={rightIcon}
      value={value}
      onChange={handleChange}
    />
  );
};

const UncontrolledInputWrapper = (props: { config: InputConfig }) => {
  const { name, label, initial, error, helperText, rightIcon, disabled } = props.config;

  return (
    <Input
      defaultValue={initial}
      disabled={disabled}
      error={error}
      helperText={helperText}
      label={label}
      name={name}
      rightIcon={rightIcon}
    />
  );
};

const InputWrapper = (props: { config: InputConfig }) => {
  const { controlled } = props.config;

  if (controlled) {
    return <ControlledInputWrapper config={props.config} />;
  } else {
    return <UncontrolledInputWrapper config={props.config} />;
  }
};

export const Default: Story = {
  args: {
    label: '기본 입력 필드',
    name: 'default-input',
    placeholder: '내용을 입력하세요',
  },
  parameters: {
    docs: {
      description: {
        story:
          '기본적인 입력 필드입니다. 상단의 컨트롤을 통해 다양한 상태를 테스트해볼 수 있습니다.',
      },
    },
  },
};

export const WithError: Story = {
  args: {
    label: '오류 상태',
    name: 'error-input',
    error: true,
    helperText: '올바른 값을 입력해주세요.',
  },
  parameters: {
    docs: {
      description: {
        story: '오류가 발생했을 때의 상태를 보여줍니다.',
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    label: '아이콘 포함',
    name: 'icon-input',
    rightIcon: <Check stroke="black" />,
    placeholder: '검색어를 입력하세요',
  },
  parameters: {
    docs: {
      description: {
        story: '우측에 아이콘이 포함된 입력 필드입니다.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성화',
    name: 'disabled-input',
    disabled: true,
    value: '수정할 수 없는 입력 필드',
  },
  parameters: {
    docs: {
      description: {
        story: '비활성화된 상태의 입력 필드입니다.',
      },
    },
  },
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
        helperText: '에러가 발생했습니다.',
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
        rightIcon: <Check height={16} stroke="black" width={16} />,
      },
      {
        name: 'input6',
        label: 'disabled',
        initial: 'Search term',
        controlled: true,
        disabled: true,
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '320px' }}>
        {variants.map((config) => (
          <InputWrapper config={config} key={config.name} />
        ))}
      </div>
    );
  },
};
