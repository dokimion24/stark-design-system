import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Checkbox } from '../Checkbox';
import { Dropdown } from '.';
import type { DropdownChangeEvent, DropdownProps } from './types';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '드롭다운은 여러 옵션 중 하나 또는 여러 개를 선택할 수 있는 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: '드롭다운의 비활성화 상태를 지정합니다.',
    },
    multiple: {
      control: 'boolean',
      description: '다중 선택 가능 여부를 지정합니다.',
    },
    isOpen: {
      control: 'boolean',
      description: '드롭다운의 열림/닫힘 상태를 제어합니다.',
    },
    onChange: {
      action: 'changed',
      description: '선택된 값이 변경될 때 호출되는 함수입니다.',
      table: {
        type: {
          summary: '(e: DropdownChangeEvent, value: string) => void',
        },
      },
    },
    onClose: {
      action: 'closed',
      description: '드롭다운이 닫힐 때 호출되는 함수입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  '의류/패션',
  '신발/잡화',
  '가방/액세서리',
  '화장품/뷰티',
  '디지털/가전',
  '식품/건강',
  '생활/주방',
  '스포츠/레저',
  '도서/취미',
  '유아동/출산',
];

const BasicDropdown = (props: Partial<DropdownProps>) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <div style={{ width: '320px' }}>
      <Dropdown
        {...props}
        onChange={(e, value) => {
          setSelectedValue(value);
          props.onChange?.(e, value);
        }}
      >
        <Dropdown.Trigger>
          <Dropdown.Bar value={selectedValue} />
        </Dropdown.Trigger>
        <Dropdown.OptionList>
          {options.map((value) => (
            <Dropdown.Option
              key={value}
              label={value}
              selected={value === selectedValue}
              value={value}
            />
          ))}
        </Dropdown.OptionList>
      </Dropdown>
    </div>
  );
};

export const Default: Story = {
  args: {
    disabled: false,
    multiple: false,
  },
  render: (args) => <BasicDropdown {...args} />,
  parameters: {
    docs: {
      description: {
        story: '기본적인 드롭다운 컴포넌트입니다. 단일 선택이 가능합니다.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <BasicDropdown {...args} />,
  parameters: {
    docs: {
      description: {
        story: '비활성화된 상태의 드롭다운입니다.',
      },
    },
  },
};

const MultipleDropdown = (props: Partial<DropdownProps>) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, option: string) => {
    const newSelected = selectedValues.includes(option)
      ? selectedValues.filter((v) => v !== option)
      : [...selectedValues, option];
    setSelectedValues(newSelected);
    props.onChange?.(e as unknown as DropdownChangeEvent, option);
  };

  return (
    <div style={{ width: '320px' }}>
      <Dropdown
        {...props}
        multiple
        onClose={props.onClose}
        onChange={
          props.onChange ||
          ((e, value) => {
            console.log(e, value);
          })
        }
      >
        <Dropdown.Trigger>
          <Dropdown.Bar
            placeholder="선택하세요"
            value={selectedValues.length > 0 ? selectedValues.join(', ') : ''}
          />
        </Dropdown.Trigger>
        <Dropdown.OptionList>
          {options.map((option) => (
            <div key={option} style={{ padding: '0.75rem 0.5rem' }}>
              <Checkbox
                checked={selectedValues.includes(option)}
                name={option}
                onChange={(e) => handleCheckboxChange(e, option)}
              >
                {option}
              </Checkbox>
            </div>
          ))}
        </Dropdown.OptionList>
      </Dropdown>
    </div>
  );
};

export const Multiple: Story = {
  args: {
    multiple: true,
  },
  render: (args) => <MultipleDropdown {...args} />,
  parameters: {
    docs: {
      description: {
        story: '체크박스를 사용하여 여러 항목을 선택할 수 있는 드롭다운입니다.',
      },
    },
  },
};

export const Group: Story = {
  render: () => {
    const examples = [
      { title: '기본', props: {} },
      { title: '비활성화', props: { disabled: true } },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem' }}>
        {examples.map(({ title, props }) => (
          <div key={title}>
            <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
            <BasicDropdown {...props} />
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '드롭다운의 모든 상태를 한눈에 볼 수 있는 그룹입니다.',
      },
      primary: true,
    },
  },
};
