import type { Meta } from '@storybook/react';

import { StoryBuilder } from '@/utils/storybook';

import { Header } from './Header';

const meta = {
  title: 'UI / Header',
  component: Header,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Header>;

export default meta;

const builder = new StoryBuilder<typeof Header>()
  .defineMeta(meta)
  .defineSharedProps({});

export const Base = builder.buildStory({});
