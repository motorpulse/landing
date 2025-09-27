import cn from 'classnames';
import type { FC } from 'react';

import styles from './HeroSection.module.scss';

// eslint-disable-next-line jsdoc/require-jsdoc
export const HeroSection: FC<unknown> = () => {
  return (
    <section
      className={cn(
        styles.hero,
        'border',
        'rounded-[2.0rem]',
        'overflow-hidden',
        // TODO Return gradient
        // 'border-top-border',
        // styles.gradient,
        'pt-[8.8rem]',
        '-mt-[8.8rem]',
      )}
    >
      Hero section
    </section>
  );
};
