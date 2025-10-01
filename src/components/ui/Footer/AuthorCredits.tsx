'use client';

import cn from 'classnames';
import type { FC } from 'react';
import { useMemo } from 'react';

// eslint-disable-next-line jsdoc/require-jsdoc
const AuthorCredits: FC<unknown> = () => {
  const year: number = useMemo(() => {
    const date = new Date();
    return date.getFullYear();
  }, []);

  return (
    <span className={cn('text-[1.4rem] opacity-60')}>
      Made by XenoPOMP, {year}
    </span>
  );
};

export default AuthorCredits;
