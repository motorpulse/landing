import cn from 'classnames';
import type { Metadata } from 'next';

import { GlobalContainer } from '@/components/ui';

import styles from './main-page.module.scss';

export const metadata: Metadata = {
  title: 'Main',
};

/**
 * Home page at url/
 * @constructor
 */
export default function Home() {
  return (
    <main className={cn(styles.mainPage)}>
      <GlobalContainer>index page</GlobalContainer>
    </main>
  );
}
