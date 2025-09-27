import cn from 'classnames';
import type { FC } from 'react';

// eslint-disable-next-line jsdoc/require-jsdoc
export const HeroSection: FC<unknown> = () => {
  return (
    <section className={cn('border', 'border-top-border')}>
      Hero section
    </section>
  );
};
