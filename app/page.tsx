import cn from 'classnames';
import type { Metadata } from 'next';

import { GlobalContainer, Header, VStack } from '@/components/ui';

import { HeroSection } from '@app/components/sections';

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
      <GlobalContainer
        asChild
        className={cn('pt-[1.6rem]')}
      >
        <div>
          <Header />
          <HeroSection />

          <VStack
            spacing='1.6rem'
            className={cn('pt-[1.6rem]')}
          >
            {Array.from({ length: 50 }, () => (
              // eslint-disable-next-line react/no-missing-key
              <div>Content</div>
            ))}
          </VStack>
        </div>
      </GlobalContainer>
    </main>
  );
}
