import { describe, test } from 'vitest';

import { GlobalContainer } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('GlobalContainer component', () => {
  test('It renders', () => {
    assertRendering(<GlobalContainer />);
  });
});
