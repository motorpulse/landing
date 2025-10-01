'use client';

import cn from 'classnames';
import Link from 'next/link';
import type { ComponentProps } from 'react';
import type { VariableFC } from 'xenopomp-essentials';

import type { ActiveSection } from '@/components/ui';
import { HStack } from '@/components/ui';
import { useActiveSections } from '@/zustand';

import type { NavbarItemProps } from './NavbarItem.props.ts';

type ItemId = Required<Pick<ComponentProps<typeof ActiveSection>, 'itemId'>>;

/**
 * @constructor
 */
export const NavbarItem: VariableFC<typeof Link, NavbarItemProps & ItemId> = ({
  className,
  children,
  itemId,
  ...props
}) => {
  const { isLast } = useActiveSections();

  return (
    <HStack
      asChild
      className={cn('items-center')}
      alignment='center'
      spacing='0.6rem'
    >
      <Link
        className={cn('text-[1.4rem]', className)}
        {...props}
      >
        <div
          aria-hidden
          className={cn(
            'size-[0.6rem] rounded-full bg-accent-color',
            'transition-opacity',
            {
              'opacity-0': !isLast(itemId),
            },
          )}
        ></div>

        {children}
      </Link>
    </HStack>
  );
};
