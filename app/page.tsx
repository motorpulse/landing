import cn from 'classnames';
import type { Metadata } from 'next';

import { GlobalContainer, VStack } from '@/components/ui';

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
      <GlobalContainer asChild>
        <VStack
          spacing='1.6rem'
          className={cn('pt-[1.6rem]')}
        >
          <HeroSection />
        </VStack>
      </GlobalContainer>
    </main>
  );
}
