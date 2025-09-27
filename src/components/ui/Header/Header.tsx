'use client';

import { clamp } from '@floating-ui/utils';
import cn from 'classnames';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { DownloadButton } from '@/components/ui';
import { Glass, Logo } from '@/components/ui/kit';
import { useScrollTreshhold } from '@/hooks';

import styles from './Header.module.scss';

// eslint-disable-next-line jsdoc/require-jsdoc
export const Header: FC<unknown> = () => {
  const scroll = useScrollTreshhold();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const end = 88;
    const scrollAmount = clamp(0, scroll, end);
    const progress = scrollAmount / end;
    setProgress(progress);
  }, [scroll]);

  return (
    <Glass
      asChild
      className={cn('bg-secondary-bg-brutal', 'z-20')}
      blur={10 * progress}
      style={{
        '--tw-bg-opacity': `${0.9 * progress}`,
      }}
    >
      <header
        className={cn(
          'items-center px-[3.2rem] py-[2.0rem]',
          'h-[8.8rem]',
          'sticky left-[1.6rem] top-[1.6rem]',
          styles.appHeader,
          'rounded-[2.0rem]',
        )}
      >
        <article>
          <Logo />
        </article>

        <article>Navbar</article>

        <article>
          <DownloadButton />
        </article>
      </header>
    </Glass>
  );
};
