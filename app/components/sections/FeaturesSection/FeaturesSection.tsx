import cn from 'classnames';
import { Car, Database, Fuel } from 'lucide-react';
import type { FC } from 'react';

import { ActiveSection, FeatureCard } from '@/components/ui';

import { SectionHeading } from '@app/components/components';

import styles from './FeaturesSection.module.scss';

export const FEATURES_SECTION_ID = 'features';

// eslint-disable-next-line jsdoc/require-jsdoc
export const FeaturesSection: FC<unknown> = () => {
  return (
    <ActiveSection
      itemId={FEATURES_SECTION_ID}
      id={FEATURES_SECTION_ID}
      style={{
        scrollMarginTop: 'calc(8.8rem + 1.6rem * 2)',
      }}
      className={cn(
        'px-[3.2rem] py-[5.0rem]',
        'max-sm:px-[0rem]',
        styles.features,
      )}
    >
      <SectionHeading
        title='Everything you need. Nothing You Don`t'
        subtitle='Comprehensive car history management with simplicity.'
        className={cn('pb-[4.0rem]')}
      />

      <div className={cn(styles.grid)}>
        <FeatureCard
          icon={Car}
          title='Track mileage'
          desc='Make mileage records to track mileage history. You can see charts, statistics etc.'
        />

        <FeatureCard
          icon={Database}
          title='Car health'
          desc='Get recommendations for car health (when to change oil inside engine etc.).'
        />

        <FeatureCard
          icon={Fuel}
          title='Fuel consumption per 100 km'
          desc='Automatic calculation of fuel consumption per 100 km.'
        />
      </div>
    </ActiveSection>
  );
};
