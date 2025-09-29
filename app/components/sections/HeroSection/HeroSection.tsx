import cn from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';

import { AppStoreButton } from '@/components/ui';

import { SectionHeading } from '@app/components/components';

import heroImg from '@public/images/iOS Screens Hero.png';

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
        'border-top-border',
        styles.gradient,
        'pt-[8.8rem]',
        '-mt-[8.8rem]',
        'px-[3.2rem] max-sm:px-[1.6rem]',
      )}
    >
      <SectionHeading
        main
        title='Track your car history'
        subtitle='MotorPulse is tracker app that allows you to track things like mileage, car repairs etc.'
        className={cn('pt-[4.0rem]')}
      />

      <article className={cn('flex-center w-full pb-[5.0rem] pt-[3.2rem]')}>
        <AppStoreButton />
      </article>

      <article className={cn('flex-center w-full')}>
        <div
          style={{
            width: 'min(100%, 814px)',
            aspectRatio: '814/374',
          }}
        >
          <Image
            src={heroImg}
            alt='iOS Screenshots'
            // 1,496×688
            width={1496}
            height={688}
            className={cn('object-fill')}
            priority
          />
        </div>
      </article>
    </section>
  );
};
