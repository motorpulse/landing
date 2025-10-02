import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { useIntersection } from '@/hooks';

import {
  assertHookRendering,
  createUseIntersectionTest,
  injectMatchMediaMock,
  injectMocks,
  mockIntersectionObserver,
} from '@test/assets';

describe('useIntersection', () => {
  injectMatchMediaMock();

  injectMocks(() => {
    mockIntersectionObserver();
  });

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
