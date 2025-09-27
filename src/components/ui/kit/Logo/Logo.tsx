import cn from 'classnames';
import Link from 'next/link';
import type { VariableFC } from 'xenopomp-essentials';

import { HStack } from '@/components/ui';

import { APP_NAME } from '@app/constants';

import type { LogoProps } from './Logo.props';
import LogoIcon from './LogoIcon';

/**
 * App`s logo component. Contains link to root
 * page (can be overwritten).
 * @constructor
 */
export const Logo: VariableFC<typeof Link, LogoProps, 'children' | 'href'> = ({
  href = '/',
  className,
  style,
  ...props
}) => {
  return (
    <HStack
      asChild
      spacing='1.0rem'
      className={cn('items-center')}
    >
      <Link
        href={href}
        className={cn('text-[2.0rem] !leading-[normal]', className)}
        style={{
          fontWeight: '800',
          ...style,
        }}
        {...props}
      >
        <LogoIcon />

        {APP_NAME}
      </Link>
    </HStack>
  );
};
