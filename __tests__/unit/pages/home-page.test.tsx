import { describe } from 'vitest';

import Home from '@app/page';

import {
  injectMocks,
  mockIntersectionObserver,
  testNextPage,
} from '@test/assets';

describe('Index page', () => {
  injectMocks(() => {
    mockIntersectionObserver();
  });

  testNextPage(<Home />);
});
