import cn from 'classnames';
import type { FC } from 'react';

import { ActiveSection } from '@/components/ui';

import { SectionHeading } from '@app/components/components';

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
      className={cn('px-[3.2rem] py-[5.0rem]', 'max-sm:px-[0rem]')}
    >
      <SectionHeading
        title='Everything you need. Nothing You Don`t'
        subtitle='Comprehensive car history management with simplicity.'
        className={cn('pb-[4.0rem]')}
      />
    </ActiveSection>
  );
};
