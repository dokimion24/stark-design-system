'use client';

import type { Meta, StoryObj } from '@storybook/react';

import { Modal, modal } from './index';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Modal Container Component (항상 렌더링됨)
const ModalStory = () => {
  return (
    <div>
      <div style={{ padding: '20px' }}>
        <h1>Modal 예제</h1>
        <p>아래 버튼들을 클릭하여 다양한 Modal을 테스트해보세요.</p>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            style={{ padding: '10px 20px', cursor: 'pointer' }}
            onClick={() =>
              modal.show({
                title: '기본 Modal',
                content: <div>이것은 기본 Modal입니다.</div>,
              })
            }
          >
            기본 Modal
          </button>

          <button
            style={{ padding: '10px 20px', cursor: 'pointer' }}
            onClick={() =>
              modal.show({
                title: '큰 Modal',
                content: (
                  <div>
                    <p>이것은 큰 크기의 Modal입니다.</p>
                    <p>더 많은 내용을 포함할 수 있습니다.</p>
                  </div>
                ),
                size: 'lg',
              })
            }
          >
            큰 Modal
          </button>

          <button
            style={{ padding: '10px 20px', cursor: 'pointer' }}
            onClick={() =>
              modal.show({
                title: '닫기 불가 Modal',
                content: <div>ESC나 배경 클릭으로 닫을 수 없습니다.</div>,
                closeOnBackdropClick: false,
                closeOnEscape: false,
                showCloseButton: true,
              })
            }
          >
            닫기 불가 Modal
          </button>

          <button
            style={{ padding: '10px 20px', cursor: 'pointer' }}
            onClick={() =>
              modal.show({
                content: <div>제목이 없는 Modal입니다.</div>,
                showCloseButton: false,
              })
            }
          >
            제목 없는 Modal
          </button>

          <button
            style={{ padding: '10px 20px', cursor: 'pointer' }}
            onClick={async () => {
              const result = await modal.confirm({
                title: '확인',
                content: '정말로 삭제하시겠습니까?',
                confirmText: '삭제',
                cancelText: '취소',
              });
              if (result) {
                modal.show({
                  title: '완료',
                  content: <div>삭제되었습니다!</div>,
                  size: 'sm',
                });
              }
            }}
          >
            확인 Modal
          </button>

          <button
            style={{ padding: '10px 20px', cursor: 'pointer' }}
            onClick={() => {
              modal.show({
                title: 'Modal 1',
                content: (
                  <button
                    onClick={() =>
                      modal.show({
                        title: 'Modal 2',
                        content: <div>두 번째 Modal입니다!</div>,
                      })
                    }
                  >
                    두 번째 Modal 열기
                  </button>
                ),
              });
            }}
          >
            중첩 Modal
          </button>

          <button
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              backgroundColor: '#ff4444',
              color: 'white',
            }}
            onClick={() => modal.hideAll()}
          >
            모든 Modal 닫기
          </button>
        </div>
      </div>

      {/* Modal Container - 항상 렌더링 */}
      <Modal />
    </div>
  );
};

export const Default: Story = {
  render: () => <ModalStory />,
};

export const BasicUsage: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h2>기본 사용법</h2>
      <pre style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        {`// 기본 Modal 표시
import { modal } from '@starkds/ui';

modal.show({
  title: '제목',
  content: <div>내용</div>,
  size: 'md',
});

// 확인 Modal
const result = await modal.confirm({
  title: '확인',
  content: '정말로 삭제하시겠습니까?',
});

// Modal 닫기
modal.hide(modalId);
modal.hideAll();`}
      </pre>

      <button
        style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '10px' }}
        onClick={() =>
          modal.show({
            title: '예제 Modal',
            content: <div>이것은 예제 Modal입니다!</div>,
          })
        }
      >
        Modal 열기
      </button>

      <Modal />
    </div>
  ),
};
