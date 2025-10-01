'use client';

import { clamp } from '@floating-ui/utils';
import cn from 'classnames';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { DownloadButton, HStack } from '@/components/ui';
import { Glass, Logo, NavbarItem } from '@/components/ui/kit';
import { useScrollTreshhold } from '@/hooks';

import { HERO_SECTION_ID } from '@app/components/sections';

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
          'max-sm:px-[1.6rem]',
          'h-[8.8rem]',
          'sticky left-[1.6rem] top-[1.6rem]',
          styles.appHeader,
          'rounded-[2.0rem]',
          'max-sm:!grid-cols-2',
        )}
      >
        <article className={cn(styles.cell)}>
          <Logo />
        </article>

        <HStack
          asChild
          spacing='3.2rem'
        >
          <nav className={cn('max-sm:!hidden', styles.cell, 'items-center')}>
            <NavbarItem
              href={`/#${HERO_SECTION_ID}`}
              itemId={HERO_SECTION_ID}
            >
              Home
            </NavbarItem>
          </nav>
        </HStack>

        <article className={cn(styles.cell)}>
          <DownloadButton />
        </article>
      </header>
    </Glass>
  );
};
