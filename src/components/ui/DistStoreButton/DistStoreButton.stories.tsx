import type { Meta } from '@storybook/react';

import { AppStoreButton } from '@/components/ui';
import { StoryBuilder } from '@/utils/storybook';

import { DistStoreButton } from './DistStoreButton';

const meta = {
  title: 'UI / DistStoreButton',
  component: DistStoreButton,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
  subcomponents: {
    AppStoreButton,
  },
} satisfies Meta<typeof DistStoreButton>;

export default meta;

const builder = new StoryBuilder<typeof DistStoreButton>()
  .defineMeta(meta)
  .defineSharedProps({
    inverted: false,
  });

export const Base = builder.buildStory({
  /**
   *
   */
  render: ({ inverted, ...props }) => (
    <>
      <AppStoreButton
        {...props}
        inverted={inverted}
      />
    </>
  ),
});
