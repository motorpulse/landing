import type { Meta } from '@storybook/react';

import { StoryBuilder } from '@/utils/storybook';

import { GlobalContainer } from './GlobalContainer';

const meta = {
  title: 'UI / GlobalContainer',
  component: GlobalContainer,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GlobalContainer>;

export default meta;

const builder = new StoryBuilder<typeof GlobalContainer>()
  .defineMeta(meta)
  .defineSharedProps({});

export const Base = builder.buildStory({});
