import cn from 'classnames';
import type { LucideIcon } from 'lucide-react';
import type { FC } from 'react';

import { VStack } from '@/components/ui';
import { Heading } from '@/components/ui/kit';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

// eslint-disable-next-line jsdoc/require-jsdoc
export const FeatureCard: FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  desc,
}) => {
  return (
    <VStack
      asChild
      alignment='topLeading'
      spacing='2.4rem'
      className={cn('rounded-[1.6rem] p-[2.4rem]', 'bg-secondary-bg-main')}
    >
      <article>
        <VStack
          aria-hidden
          className={cn('size-[6.0rem] rounded-full')}
          style={{
            background: 'linear-gradient(135deg, #117BF4 0%, #70B3FF 100%)',
          }}
          alignment='center'
        >
          {Icon && <Icon size='3.0rem' />}
        </VStack>

        <VStack spacing='1.2rem'>
          <Heading
            level={2}
            exactLevel={3}
          >
            {title}
          </Heading>

          <p
            className={cn(
              'line-clamp-[3] h-[6.6rem] text-[1.6rem] text-primary-font-shallow',
            )}
          >
            {desc}
          </p>
        </VStack>
      </article>
    </VStack>
  );
};
