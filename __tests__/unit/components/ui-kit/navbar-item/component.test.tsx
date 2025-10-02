import { cleanup } from '@testing-library/react';
import { afterEach, describe, test } from 'vitest';

import { NavbarItem } from '@/components/ui/kit';

import { assertRendering, injectMocks, mockRouter } from '@test/assets';

describe('UI Kit / Navbar item', () => {
  injectMocks(() => {
    mockRouter();
  });

  afterEach(() => cleanup());

  test('It renders', () => {
    assertRendering(
      <NavbarItem
        href='/'
        itemId='none'
      >
        Go home
      </NavbarItem>,
    );
  });
});
