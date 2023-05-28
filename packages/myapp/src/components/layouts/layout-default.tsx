import { ReactNode } from 'react';

import { Navigation } from '../navigation/navigation';

interface LayoutDefaultProps {
  children: ReactNode;
}

export const LayoutDefault = (props: LayoutDefaultProps) => {
  const { children } = props;

  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};
