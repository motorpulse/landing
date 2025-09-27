import { describe, test } from 'vitest';

import { Header } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('Header component', () => {
  test('It renders', () => {
    assertRendering(<Header />);
  });
});
