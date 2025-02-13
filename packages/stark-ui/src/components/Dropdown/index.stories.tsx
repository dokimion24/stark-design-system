import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Checkbox } from '../Checkbox';
import { Dropdown } from '.';
import type { DropdownChangeEvent } from './types';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean', defaultValue: false },
    multiple: { control: 'boolean', defaultValue: false },
    isOpen: { control: 'boolean', defaultValue: false },
    onChange: { action: 'changed' },
    onClose: { action: 'closed' },
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

export const Default: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    return (
      <Dropdown
        disabled={args.disabled}
        isOpen={args.isOpen}
        multiple={args.multiple}
        onClose={args.onClose}
        onChange={(e, value) => {
          setSelectedValue(value);
          console.log('Changed:', value);
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
    );
  },
  parameters: {
    docs: { disable: false },
  },
};

export const MultipleWithCheckbox: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, option: string) => {
      let newSelected: string[];
      if (selectedValues.includes(option)) {
        newSelected = selectedValues.filter((v) => v !== option);
      } else {
        newSelected = [...selectedValues, option];
      }
      setSelectedValues(newSelected);

      args.onChange?.(e as unknown as DropdownChangeEvent, option);
    };

    return (
      <Dropdown {...args} multiple={true} onClose={args.onClose}>
        <Dropdown.Trigger>
          <Dropdown.Bar value={selectedValues.join(', ') || ''} />
        </Dropdown.Trigger>
        <Dropdown.OptionList>
          {options.map((option) => (
            <div key={option} style={{ padding: '0.75rem 0.5rem' }}>
              <Checkbox
                checked={selectedValues.includes(option) ? 'checked' : false}
                name={option}
                onChange={(e) => handleCheckboxChange(e, option)}
              >
                {option}
              </Checkbox>
            </div>
          ))}
        </Dropdown.OptionList>
      </Dropdown>
    );
  },
};
