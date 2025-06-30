import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@styled-system/jsx';

import { Button } from '../Button';
import { Toast, toast } from '.';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toast 컴포넌트는 사용자에게 일시적인 알림을 표시하는 데 사용됩니다.',
      },
    },
  },
  argTypes: {
    duration: {
      description: '토스트가 표시되는 시간 (ms)',
      control: 'number',
      defaultValue: 30000,
    },
    position: {
      description: '토스트가 표시되는 위치',
      control: 'radio',
      options: ['top', 'bottom'],
      defaultValue: 'top',
    },
    gap: {
      description: '토스트 간의 간격',
      control: 'number',
      defaultValue: 8,
    },
    zIndex: {
      description: '토스트의 z-index 값',
      control: 'number',
      defaultValue: 'toast',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    duration: 30000,
    position: 'top',
    gap: 8,
  },
  render: (args) => {
    const showToast = () => {
      toast.success('작업이 완료되었습니다.', '알림');
    };

    return (
      <Flex direction="column" gap="md">
        <Toast {...args} />
        <Button onClick={showToast}>기본 토스트 표시</Button>
      </Flex>
    );
  },
};

export const AllTypes: Story = {
  args: {
    duration: 3000,
    position: 'top',
    gap: 8,
  },
  render: (args) => {
    const showSuccessToast = () => {
      toast.success('파일이 성공적으로 업로드되었습니다.', '성공');
    };

    const showErrorToast = () => {
      toast.error('작업 중 문제가 발생했습니다.', '오류');
    };

    const showWarningToast = () => {
      toast.warning('저장되지 않은 변경사항이 있습니다.', '주의');
    };

    const showInfoToast = () => {
      toast.info('제목 없는 토스트 메시지입니다.');
    };

    return (
      <Flex direction="column" gap="md">
        <Toast {...args} />
        <Button onClick={showSuccessToast}>성공 토스트</Button>
        <Button onClick={showErrorToast}>오류 토스트</Button>
        <Button onClick={showWarningToast}>주의 토스트</Button>
        <Button onClick={showInfoToast}>제목 없는 토스트</Button>
      </Flex>
    );
  },
};

export const BottomPosition: Story = {
  args: {
    duration: 3000,
    position: 'bottom',
    gap: 8,
    zIndex: 1000,
  },
  render: (args) => {
    const showBottomToast = () => {
      toast.info('화면 하단에 표시되는 토스트입니다.', '하단 토스트');
    };

    return (
      <Flex direction="column" gap="md">
        <Toast {...args} />
        <Button onClick={showBottomToast}>하단 토스트 표시</Button>
      </Flex>
    );
  },
};
