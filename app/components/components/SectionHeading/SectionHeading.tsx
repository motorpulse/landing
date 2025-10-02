import cn from 'classnames';
import type { FCProps, VariableFC } from 'xenopomp-essentials';

import { Container, VStack } from '@/components/ui';
import { Heading } from '@/components/ui/kit';

interface SectionHeadingProps {
  main?: boolean;
  title: string;
  subtitle: string;
  subtitleProps?: FCProps<VariableFC<'p', unknown, 'children'>>;
}

/**
 * Generic landing page section header.
 */
export const SectionHeading: VariableFC<
  'header',
  SectionHeadingProps,
  'children'
> = ({ main = false, title, subtitle, className, subtitleProps, ...props }) => {
  return (
    <VStack
      asChild
      spacing='1.6rem'
    >
      <Container
        maxSize='50.0rem'
        // insets='3.2rem'
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

          <p
            {...subtitleProps}
            className={cn(
              'text-[1.6rem]',
              'text-primary-font-shallow',
              subtitleProps?.className,
            )}
          >
            {subtitle}
          </p>
        </header>
      </Container>
    </VStack>
  );
};
