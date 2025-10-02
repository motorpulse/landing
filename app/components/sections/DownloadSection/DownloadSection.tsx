import cn from 'classnames';
import { QRCodeSVG } from 'qrcode.react';
import type { FC } from 'react';

import {
  APP_STORE_PAGE_LINK,
  ActiveSection,
  AppStoreButton,
  VStack,
} from '@/components/ui';

import { SectionHeading } from '@app/components/components';

export const DOWNLOAD_SECTION_ID = 'download-qr-code';

// eslint-disable-next-line jsdoc/require-jsdoc
export const DownloadSection: FC<unknown> = () => {
  return (
    <VStack
      asChild
      alignment='center'
      spacing='3.2rem'
    >
      <ActiveSection
        itemId={DOWNLOAD_SECTION_ID}
        id={DOWNLOAD_SECTION_ID}
        className={cn(
          'px-[3.2rem] py-[5.0rem] max-sm:px-[1.6rem]',
          'rounded-[2.0rem] bg-accent-color',
        )}
        style={{
          scrollMarginTop: 'calc(8.8rem + 1.6rem * 2)',
        }}
      >
        <SectionHeading
          title='Download MotorPulse for free'
          subtitle='You can scan QR-code below to visit app`s page'
          subtitleProps={{
            className: cn('!text-primary-font'),
          }}
        />

        <div className={cn('rounded-[0.8rem] bg-white p-[0.8rem]')}>
          <QRCodeSVG
            value={APP_STORE_PAGE_LINK}
            size={100}
            className={cn(
              '[&>path:first-of-type]:fill-white [&>path:last-of-type]:fill-black',
            )}
            aria-label='QR-code for downloading mobile version of MotorPulse.'
          />
        </div>

        <AppStoreButton inverted />
      </ActiveSection>
    </VStack>
  );
};
