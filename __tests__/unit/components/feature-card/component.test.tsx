import { describe, test } from 'vitest';

import { FeatureCard } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('FeatureCard component', () => {
  test('It renders', () => {
    assertRendering(<FeatureCard />);
  });
});
