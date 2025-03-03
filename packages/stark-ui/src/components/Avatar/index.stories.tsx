import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Avatar 컴포넌트는 사용자 프로필 이미지를 표시하는데 사용됩니다. 다양한 크기와 이미지 타입을 지원하며, 배지 아이콘을 추가할 수 있습니다.',
      },
    },
  },
  argTypes: {
    size: {
      description: 'Avatar의 크기를 지정합니다.',
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
    imageUrl: {
      description: '표시할 이미지의 URL',
      control: 'text',
    },
    ImageComponent: {
      description: '커스텀 이미지 컴포넌트',
      control: false,
    },
    badgeIcon: {
      description: '우측 하단에 표시될 배지 아이콘',
      control: false,
    },
    as: {
      description: '렌더링될 HTML 요소 타입',
      control: 'select',
      options: ['div', 'span', 'button', 'a', 'label'],
      table: {
        defaultValue: { summary: 'div' },
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizes: Array<'sm' | 'md' | 'lg' | 'xl'> = ['sm', 'md', 'lg', 'xl'];

export const Group: Story = {
  render: () => {
    const examples = [
      { title: '기본', props: {} },
      { title: '이미지', props: { imageUrl: 'https://picsum.photos/200' } },
      {
        title: '배지',
        props: {
          badgeIcon: (
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: '#2563eb',
              }}
            />
          ),
        },
      },
      {
        title: '이미지 + 배지',
        props: {
          imageUrl: 'https://picsum.photos/200',
          badgeIcon: (
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: '#2563eb',
              }}
            />
          ),
        },
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem' }}>
        {examples.map(({ title, props }) => (
          <div key={title}>
            <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              {sizes.map((size) => (
                <Avatar key={`${title}-${size}`} size={size} {...props} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '모든 크기와 변형을 한눈에 볼 수 있는 그룹입니다.',
      },
    },
  },
};

export const Default: Story = {
  args: {
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story:
          '기본 Avatar는 이미지가 없을 때 기본 사용자 아이콘을 표시합니다. size prop으로 크기를 조절할 수 있습니다.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar size="sm" />
      <Avatar size="md" />
      <Avatar size="lg" />
      <Avatar size="xl" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar는 sm(32px), md(40px), lg(48px), xl(56px) 네 가지 크기를 지원합니다.',
      },
    },
  },
};

export const WithImage: Story = {
  args: {
    size: 'lg',
    imageUrl: 'https://picsum.photos/200',
  },
  parameters: {
    docs: {
      description: {
        story: 'imageUrl prop을 통해 이미지를 표시할 수 있습니다.',
      },
    },
  },
};

export const WithCustomComponent: Story = {
  args: {
    size: 'lg',
    ImageComponent: () => (
      <svg
        fill="currentColor"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'ImageComponent prop을 통해 커스텀 컴포넌트(SVG 아이콘 등)를 렌더링할 수 있습니다.',
      },
    },
  },
};

export const AsButton: Story = {
  args: {
    as: 'button',
    size: 'sm',
    onClick: () => alert('Avatar clicked!'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'as prop을 사용하여 다른 HTML 요소로 렌더링할 수 있습니다. 이 예시에서는 클릭 가능한 버튼으로 렌더링됩니다.',
      },
    },
  },
};

export const WithBadge: Story = {
  args: {
    size: 'lg',
    badgeIcon: (
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: '#2563eb',
        }}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          '오른쪽 하단에 배지 아이콘을 표시할 수 있습니다. 배지는 온라인 상태나 알림 등을 표시하는 데 사용됩니다.',
      },
    },
  },
};

export const WithImageAndBadge: Story = {
  args: {
    size: 'lg',
    imageUrl: 'https://picsum.photos/200',
    badgeIcon: (
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: '#2563eb',
        }}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          '이미지와 배지를 함께 사용하여 사용자의 프로필 이미지와 상태를 동시에 표시할 수 있습니다.',
      },
    },
  },
};
