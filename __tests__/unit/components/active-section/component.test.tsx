import { describe, test } from 'vitest';

import { ActiveSection } from '@/components/ui';

import {
  assertRendering,
  injectMocks,
  mockIntersectionObserver,
} from '@test/assets';

describe('ActiveSection component', () => {
  injectMocks(() => {
    mockIntersectionObserver();
  });

  test('It renders', () => {
    assertRendering(<ActiveSection />);
  });
});
