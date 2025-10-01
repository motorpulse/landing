import { describe, test } from 'vitest';

import { useActiveSections } from '@/zustand';

import { assertHookRendering } from '@test/assets';

describe('SettingsStore', () => {
  test('It renders', () => {
    assertHookRendering(() => useActiveSections());
  });
});
