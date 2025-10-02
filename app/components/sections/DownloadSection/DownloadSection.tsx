import cn from 'classnames';
import type { FC } from 'react';

import { ActiveSection, VStack } from '@/components/ui';

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
      >
        <SectionHeading
          title='Download MotorPulse for free'
          subtitle='You can scan QR-code below to visit app`s page'
          subtitleProps={{
            className: cn('!text-primary-font'),
          }}
        />
      </ActiveSection>
    </VStack>
  );
};
