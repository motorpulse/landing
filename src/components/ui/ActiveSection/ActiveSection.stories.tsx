import type { Meta } from '@storybook/react';

import { StoryBuilder } from '@/utils/storybook';

import { ActiveSection } from './ActiveSection';

const meta = {
  title: 'UI / ActiveSection',
  component: ActiveSection,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ActiveSection>;

export default meta;

const builder = new StoryBuilder<typeof ActiveSection>()
  .defineMeta(meta)
  .defineSharedProps({});

export const Base = builder.buildStory({});
