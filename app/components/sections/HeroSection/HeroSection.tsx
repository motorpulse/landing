import cn from 'classnames';
import type { FC } from 'react';

import { SectionHeading } from '@app/components/components';

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
      <SectionHeading
        main
        title='Track your car history'
        subtitle='MotorPulse is tracker app that allows you to track things like mileage, car repairs etc.'
        className={cn('pt-[4.0rem]')}
      />
    </section>
  );
};
