import { describe, test } from 'vitest';

import { ActiveSection } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('ActiveSection component', () => {
  test('It renders', () => {
    assertRendering(<ActiveSection />);
  });
});
