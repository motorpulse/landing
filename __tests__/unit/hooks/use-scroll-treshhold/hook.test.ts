import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { useScrollTreshhold } from '@/hooks';

import {
  assertHookRendering,
  createUseScrollTreshholdTest,
} from '@test/assets';

describe('useScrollTreshhold', () => {
  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    assertHookRendering(() => useScrollTreshhold());
  });

  test('Testing with test component', () => {
    const { getCurrentState } = createUseScrollTreshholdTest({
      trackedState: '12',
    });

    expect(getCurrentState()).toBe('12');
  });
});
