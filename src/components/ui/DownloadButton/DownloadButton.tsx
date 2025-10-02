import cn from 'classnames';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { VariableFC } from 'xenopomp-essentials';

import { HStack } from '@/components/ui';

import { DOWNLOAD_SECTION_ID } from '@app/components/sections';

// eslint-disable-next-line jsdoc/require-jsdoc
export const DownloadButton: VariableFC<'button', unknown, 'children'> = ({
  type = 'button',
  className,
  ...props
}) => {
  return (
    <Link href={`/#${DOWNLOAD_SECTION_ID}`}>
      <HStack
        asChild
        spacing='0.4285714286em'
        className={cn('items-center')}
      >
        <button
          type={type}
          className={cn(
            'px-[1.4285714286em] py-[0.8571428571em]',
            'max-sm:!p-[0.8571428571em]',
            'rounded-full bg-primary-font text-primary-bg',
            'text-[1.4rem]',
            className,
          )}
          {...props}
        >
          <span className={cn('max-sm:hidden')}>Download App</span>
          <div
            aria-hidden
            className={cn(
              'p-[0.2857142857em]',
              'bg-primary-bg text-primary-font',
              'rounded-full',
            )}
          >
            <ArrowRight size='1.1428571429em' />
          </div>
        </button>
      </HStack>
    </Link>
  );
};
