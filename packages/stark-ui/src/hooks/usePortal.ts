import { useCallback, useEffect, useState } from 'react';

export const usePortal = () => {
  const [container, setContainer] = useState<Element | null>(null);

  const createPortalContainer = useCallback(() => {
    if (!container) {
      const newContainer = document.createElement('div');
      document.body.appendChild(newContainer);
      setContainer(newContainer);
    }
  }, [container]);

  const removePortalContainer = useCallback(() => {
    if (container) {
      container.remove();
      setContainer(null);
    }
  }, [container]);

  useEffect(() => {
    return () => {
      container?.remove();
    };
  }, [container]);

  return { container, createPortalContainer, removePortalContainer };
};
