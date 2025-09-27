import cn from 'classnames';
import type { FC } from 'react';

import { Header } from '@/components/ui';

import styles from './HeroSection.module.scss';

// eslint-disable-next-line jsdoc/require-jsdoc
export const HeroSection: FC<unknown> = () => {
  return (
    <section
      className={cn(
        styles.hero,
        'border',
        // 'border-top-border'
        // styles.gradient,
      )}
    >
      <Header />
    </section>
  );
};
