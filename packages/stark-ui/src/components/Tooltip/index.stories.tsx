import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '.';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Tooltip 컴포넌트는 요소에 마우스를 올렸을 때 추가 정보를 표시하는 데 사용됩니다.',
      },
    },
    chromatic: {
      delay: 300,
      diffThreshold: 0.2,
    },
  },
  argTypes: {
    content: {
      description: '툴팁에 표시될 내용',
      control: 'text',
    },
    placement: {
      description: '툴팁이 표시될 위치',
      control: 'radio',
      options: ['top', 'bottom', 'left', 'right'],
      defaultValue: 'top',
    },
    delay: {
      description: '툴팁이 표시되기까지의 지연 시간 (ms)',
      control: 'number',
      defaultValue: 200,
    },
    disabled: {
      description: '툴팁 비활성화 여부',
      control: 'boolean',
      defaultValue: false,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: '이것은 툴팁입니다',
    children: <button>마우스를 올려보세요</button>,
  },
};

export const Placements: Story = {
  args: {
    children: <div />,
    content: '',
  },
  render: () => (
    <div style={{ display: 'grid', gap: '2rem', padding: '4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Tooltip content="위쪽 툴팁" placement="top">
          <button>Top</button>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tooltip content="왼쪽 툴팁" placement="left">
          <button>Left</button>
        </Tooltip>
        <Tooltip content="오른쪽 툴팁" placement="right">
          <button>Right</button>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Tooltip content="아래쪽 툴팁" placement="bottom">
          <button>Bottom</button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    content: '이것은 긴 내용을 가진 툴팁입니다. 내용이 길어지면 자동으로 줄바꿈되어 표시됩니다.',
    children: <button>긴 내용 보기</button>,
  },
};

export const CustomDelay: Story = {
  args: {
    content: '지연 시간이 1초로 설정된 툴팁입니다.',
    delay: 1000,
    children: <button>천천히 나타나는 툴팁</button>,
  },
};

export const TooltipVisible: Story = {
  decorators: [
    (Story) => (
      <div
        data-testid="tooltip-wrapper"
        onMouseEnter={(e) => {
          const target = e.currentTarget.querySelector('button');
          if (target) {
            target.dispatchEvent(
              new MouseEvent('mouseenter', {
                bubbles: true,
                cancelable: true,
                view: window,
              }),
            );
          }
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    content: '이것은 툴팁입니다',
    children: <button>마우스를 올려보세요</button>,
  },
  parameters: {
    chromatic: {
      delay: 1000,
      pauseAnimationAtEnd: true,
    },
  },
};
