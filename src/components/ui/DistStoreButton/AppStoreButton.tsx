import cn from 'classnames';
import Link from 'next/link';
import type { ComponentProps } from 'react';
import type { VariableFC } from 'xenopomp-essentials';

import { DistStoreButton } from '@/components/ui';

type DistStoreButtonProps = Pick<
  ComponentProps<typeof DistStoreButton>,
  'inverted'
>;

export const APP_STORE_PAGE_LINK =
  'https://apps.apple.com/ru/app/motorpulse/id6749870612';

/**
 *
 */
export const AppStoreButton: VariableFC<
  'button',
  {} & DistStoreButtonProps,
  'children'
> = ({ className, ...props }) => {
  return (
    <Link
      href={APP_STORE_PAGE_LINK}
      target='_blank'
    >
      <DistStoreButton
        topTitle='Download on the'
        title='App Store'
        className={cn(className)}
        icon={() => (
          <svg
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_2215_4234)'>
              <path
                d='M15.19 8.62C14.005 8.62 12.1712 7.2725 10.24 7.32C7.68999 7.35375 5.35249 8.79875 4.03874 11.0875C1.39249 15.6813 3.35624 22.4663 5.93749 26.2C7.20374 28.0175 8.69749 30.0625 10.6775 29.9988C12.5775 29.9175 13.29 28.765 15.5962 28.765C17.885 28.765 18.5337 29.9988 20.5462 29.95C22.5925 29.9175 23.8912 28.1 25.1412 26.265C26.5862 24.155 27.1862 22.1088 27.2187 21.9963C27.17 21.98 23.2412 20.47 23.1937 15.925C23.1612 12.125 26.2937 10.3075 26.44 10.2263C24.6537 7.61375 21.9112 7.32125 20.9525 7.25625C18.4525 7.06125 16.3587 8.62 15.19 8.62ZM19.4125 4.7875C20.4662 3.5225 21.1625 1.75375 20.9687 0C19.46 0.065 17.6412 1.00625 16.5537 2.2725C15.5787 3.3925 14.7362 5.195 14.9625 6.915C16.635 7.045 18.3562 6.055 19.4112 4.78875'
                fill='currentColor'
              />
            </g>
            <defs>
              <clipPath id='clip0_2215_4234'>
                <rect
                  className={cn('size-[3.0rem]')}
                  fill='white'
                />
              </clipPath>
            </defs>
          </svg>
        )}
        {...props}
      />
    </Link>
  );
};
