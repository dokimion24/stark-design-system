import type { Meta, StoryObj } from '@storybook/react';
import { ChevronDown, User } from 'starkds-icons';

import { Button } from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '다양한 상황에서 사용할 수 있는 버튼 컴포넌트입니다. 크기, 변형, 아이콘 등을 지원합니다.',
      },
    },
  },
  argTypes: {
    variant: {
      description: '버튼의 스타일 변형을 지정합니다.',
      control: 'radio',
      options: ['primary', 'secondary', 'ghost', 'outline'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: '버튼의 크기를 지정합니다.',
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
    as: {
      description: '렌더링될 HTML 요소 타입',
      control: 'select',
      options: ['div', 'span', 'button', 'a', 'label'],
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    disabled: {
      description: '버튼의 비활성화 상태를 지정합니다.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      description: '버튼 내부에 들어갈 콘텐츠입니다.',
      control: 'text',
    },
    icon: {
      description: '버튼에 표시될 아이콘입니다.',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Group: Story = {
  args: {
    children: 'Button',
  },
  render: () => {
    const examples = [
      { title: '기본', props: {} },
      { title: '아이콘', props: { icon: <User /> } },
      { title: '비활성화', props: { disabled: true } },
      {
        title: '아이콘 + 비활성화',
        props: { icon: <User />, disabled: true },
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem' }}>
        {examples.map(({ title, props }) => (
          <div key={title}>
            <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
            {variants.map((variant) => (
              <div key={variant} style={{ marginBottom: '1rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>{variant}</h4>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  {sizes.map((size) => (
                    <Button key={`${variant}-${size}`} size={size} variant={variant} {...props}>
                      {props.icon ? 'With Icon' : 'Button'}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '모든 크기, 변형, 상태를 한눈에 볼 수 있는 그룹입니다.',
      },
      primary: true,
    },
  },
};

export const Default: Story = {
  args: {
    children: '버튼',
    size: 'lg',
    variant: 'primary',
  },
};

export const Variants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '버튼은 4가지 변형을 지원합니다: primary, secondary, outline, ghost',
      },
    },
  },
};

export const Sizes: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="2xl">2X Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '버튼은 5가지 크기를 지원합니다: sm, md, lg, xl, 2xl',
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button icon={<User />}>사용자 추가</Button>
      <Button icon={<ChevronDown />} variant="secondary">
        더보기
      </Button>
      <Button icon={<User />} variant="outline">
        프로필
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '버튼에 아이콘을 추가할 수 있습니다. 아이콘은 텍스트의 왼쪽에 위치합니다.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button disabled variant="primary">
        비활성화
      </Button>
      <Button disabled variant="secondary">
        비활성화
      </Button>
      <Button disabled variant="outline">
        비활성화
      </Button>
      <Button disabled variant="ghost">
        비활성화
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '버튼은 비활성화 상태를 지원합니다. 비활성화된 버튼은 클릭할 수 없습니다.',
      },
    },
  },
};

export const AsLink: Story = {
  args: {
    as: 'a',
    href: 'https://www.google.com',
    children: '링크로 사용',
    target: '_blank',
  },
  parameters: {
    docs: {
      description: {
        story:
          '버튼은 다른 HTML 요소로 렌더링될 수 있습니다. 예를 들어 a 태그로 렌더링하여 링크로 사용할 수 있습니다.',
      },
    },
  },
};

const sizes: Array<'sm' | 'md' | 'lg' | 'xl' | '2xl'> = ['sm', 'md', 'lg', 'xl', '2xl'];
const variants: Array<'primary' | 'secondary' | 'ghost' | 'outline'> = [
  'primary',
  'secondary',
  'ghost',
  'outline',
];
