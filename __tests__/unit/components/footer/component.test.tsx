import { describe, test } from 'vitest';

import { Footer } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('Footer component', () => {
  test('It renders', () => {
    assertRendering(<Footer />);
  });
});
