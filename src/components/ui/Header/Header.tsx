import cn from 'classnames';
import type { FC } from 'react';

import { HStack } from '@/components/ui';

// eslint-disable-next-line jsdoc/require-jsdoc
export const Header: FC<unknown> = () => {
  return (
    <HStack asChild>
      <header className={cn('items-center px-[3.2rem] py-[2.0rem]')}></header>
    </HStack>
  );
};
