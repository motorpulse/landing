import cn from 'classnames';
import type { FC } from 'react';

import { HStack, Spacer } from '@/components/ui';
import { Logo } from '@/components/ui/kit';

import Credits from './AuthorCredits';

// eslint-disable-next-line jsdoc/require-jsdoc
export const Footer: FC<unknown> = () => {
  return (
    <HStack
      asChild
      alignment='leading'
    >
      <footer
        className={cn('bleed-bg bleed-secondary-bg-brutal', 'py-[1.6rem]')}
      >
        <Logo />
        <Spacer />
        <Credits />
      </footer>
    </HStack>
  );
};
