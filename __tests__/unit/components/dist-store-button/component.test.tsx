import { describe, test } from 'vitest';

import { DistStoreButton } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('DistStoreButton component', () => {
  test('It renders', () => {
    assertRendering(<DistStoreButton />);
  });
});
