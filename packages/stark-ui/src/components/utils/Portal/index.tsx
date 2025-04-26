import { createPortal } from 'react-dom';

export interface PortalProps {
  children: React.ReactElement;
  container: Element | null;
}

export const Portal = ({ children, container }: PortalProps) => {
  if (!container) return null;
  return createPortal(children, container);
};
