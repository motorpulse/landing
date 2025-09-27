import cn from 'classnames';
import type { FC } from 'react';

import { Logo } from '@/components/ui/kit';

import styles from './Header.module.scss';

// eslint-disable-next-line jsdoc/require-jsdoc
export const Header: FC<unknown> = () => {
  return (
    <header
      className={cn('items-center px-[3.2rem] py-[2.0rem]', styles.appHeader)}
    >
      <article>
        <Logo />
      </article>

      <article>Navbar</article>

      <article>Right article</article>
    </header>
  );
};
