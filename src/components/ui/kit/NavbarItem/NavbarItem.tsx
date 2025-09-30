'use client';

import cn from 'classnames';
import Link from 'next/link';
import type { VariableFC } from 'xenopomp-essentials';

import { HStack } from '@/components/ui';

import type { NavbarItemProps } from './NavbarItem.props.ts';

/**
 * @constructor
 */
export const NavbarItem: VariableFC<typeof Link, NavbarItemProps> = ({
  className,
  children,
  active = false,
  ...props
}) => {
  return (
    <HStack
      asChild
      className={cn('items-center')}
    >
      <Link
        className={cn(className)}
        {...props}
      >
        {children}
      </Link>
    </HStack>
  );
};
