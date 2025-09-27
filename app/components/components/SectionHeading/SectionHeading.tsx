import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import { Container, VStack } from '@/components/ui';
import { Heading } from '@/components/ui/kit';

interface SectionHeadingProps {
  main?: boolean;
  title: string;
  subtitle: string;
}

/**
 * Generic landing page section header.
 */
export const SectionHeading: VariableFC<
  'header',
  SectionHeadingProps,
  'children'
> = ({ main = false, title, subtitle, className, ...props }) => {
  return (
    <VStack
      asChild
      spacing='1.6rem'
    >
      <Container
        maxSize='50.0rem'
        insets='3.2rem'
        asChild
      >
        <header
          className={cn('items-center text-center', className)}
          {...props}
        >
          <Heading
            level={main ? 1 : 2}
            className={cn('!text-[3.8rem]')}
          >
            {title}
          </Heading>

          <p className={cn('text-[1.6rem]', 'text-primary-font-shallow')}>
            {subtitle}
          </p>
        </header>
      </Container>
    </VStack>
  );
};
