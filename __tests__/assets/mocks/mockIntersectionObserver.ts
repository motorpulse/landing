import { vi } from 'vitest';

/**
 * Mock native IntersectionObserver class.
 */
export function mockIntersectionObserver() {
  const IntersectionObserverMock = vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(() => []), // Return an empty array by default
    unobserve: vi.fn(),
  }));

  vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
}
