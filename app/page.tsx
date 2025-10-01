import cn from 'classnames';

import { GlobalContainer, Header, VStack } from '@/components/ui';

import { FeaturesSection, HeroSection } from '@app/components/sections';

import styles from './main-page.module.scss';

/**
 * Home page at url/
 * @constructor
 */
export default function Home() {
  return (
    <GlobalContainer
      asChild
      className={cn('pt-[1.6rem]')}
    >
      <main className={cn(styles.mainPage)}>
        <Header />
        <HeroSection />

        <VStack
          spacing='1.6rem'
          className={cn('pt-[1.6rem]')}
        >
          <FeaturesSection />
        </VStack>
      </main>
    </GlobalContainer>
  );
}
