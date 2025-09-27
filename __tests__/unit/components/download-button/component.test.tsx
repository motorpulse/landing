import { describe, test } from 'vitest';

import { DownloadButton } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('DownloadButton component', () => {
  test('It renders', () => {
    assertRendering(<DownloadButton />);
  });
});
