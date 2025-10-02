import { describe } from 'vitest';

import Home from '@app/page';

import {
  injectMocks,
  mockIntersectionObserver,
  testNextPage,
} from '@test/assets';

describe('MainPage tests', () => {
  injectMocks(() => {
    mockIntersectionObserver();
  });

  testNextPage(<Home />);
});
