import type { Meta } from '@storybook/react';

import { HStack } from '@/components/ui';
import { StoryBuilder } from '@/utils/storybook';

import { DownloadButton } from './DownloadButton';

const meta = {
  title: 'UI / DownloadButton',
  component: DownloadButton,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
  subcomponents: {
    HStack,
  },
} satisfies Meta<typeof DownloadButton>;

export default meta;

const builder = new StoryBuilder<typeof DownloadButton>()
  .defineMeta(meta)
  .defineSharedProps({});

export const Base = builder.buildStory({});
