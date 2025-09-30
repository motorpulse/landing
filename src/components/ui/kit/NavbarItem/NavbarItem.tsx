'use client';

import cn from 'classnames';
import Link from 'next/link';
import type { VariableFC } from 'xenopomp-essentials';

import type { NavbarItemProps } from './NavbarItem.props.ts';

/**
 * @constructor
 */
export const NavbarItem: VariableFC<typeof Link, NavbarItemProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Link
      className={cn(className)}
      data-is-active={false}
      {...props}
    >
      {children}
    </Link>
  );
};
