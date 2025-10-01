import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { useIntersection } from '@/hooks';

import { assertHookRendering, createUseIntersectionTest } from '@test/assets';

describe('useIntersection', () => {
  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    assertHookRendering(() => useIntersection());
  });

  test('Testing with test component', () => {
    const { getCurrentState } = createUseIntersectionTest({
      trackedState: '12',
    });

    expect(getCurrentState()).toBe('12');
  });
});
