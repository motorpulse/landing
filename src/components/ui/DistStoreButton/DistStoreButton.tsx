import cn from 'classnames';
import type { FC } from 'react';
import type { VariableFC } from 'xenopomp-essentials';

import { HStack, VStack } from '@/components/ui';

import type { DistStoreButtonVariantsType } from './DistStoreButton.variants';
import { distStoreButtonVariants } from './DistStoreButton.variants';

/**
 *
 */
export const DistStoreButton: VariableFC<
  'button',
  DistStoreButtonVariantsType & {
    icon?: FC<{ className?: string }>;
    topTitle: string;
    title: string;
  },
  'children'
> = ({ inverted, className, icon: Icon, topTitle, title, ...props }) => {
  return (
    <HStack
      spacing='1.0rem'
      className={cn('items-center')}
      asChild
    >
      <button
        type='button'
        className={cn(
          distStoreButtonVariants({
            inverted,
          }),
          'py-[1.0rem] pl-[1.0rem] pr-[3.5rem]',
          'rounded-[1.0rem]',
          'h-[6.0rem]',
          className,
        )}
        {...props}
      >
        <div
          aria-hidden
          className={cn('size-[3.0rem]')}
        >
          {Icon !== undefined ? (
            <Icon className={cn('size-full')} />
          ) : undefined}
        </div>

        <VStack
          spacing='0.4rem'
          className={cn('items-start')}
        >
          <p className={cn('text-[1.2rem] !leading-[100%] opacity-60')}>
            {topTitle}
          </p>

          <p
            className={cn('text-[2.4rem] font-medium !leading-[100%]')}
            style={{
              letterSpacing: '2%',
            }}
          >
            {title}
          </p>
        </VStack>
      </button>
    </HStack>
  );
};
