import type { Meta } from '@storybook/react';

import { StoryBuilder } from '@/utils/storybook';

import { Footer } from './Footer';

const meta = {
  title: 'UI / Footer',
  component: Footer,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Footer>;

export default meta;

const builder = new StoryBuilder<typeof Footer>()
  .defineMeta(meta)
  .defineSharedProps({});

export const Base = builder.buildStory({});
