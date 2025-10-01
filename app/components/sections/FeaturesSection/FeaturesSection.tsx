import type { FC } from 'react';

import { ActiveSection } from '@/components/ui';

export const FEATURES_SECTION_ID = 'features';

// eslint-disable-next-line jsdoc/require-jsdoc
export const FeaturesSection: FC<unknown> = () => {
  return (
    <ActiveSection
      itemId={FEATURES_SECTION_ID}
      id={FEATURES_SECTION_ID}
    >
      Features
    </ActiveSection>
  );
};
