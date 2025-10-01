import type { Meta } from '@storybook/react';
import { Database } from 'lucide-react';

import { VStack } from '@/components/ui';
import { StoryBuilder } from '@/utils/storybook';

import { FeatureCard } from './FeatureCard';

const meta = {
  title: 'UI / FeatureCard',
  component: FeatureCard,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
  subcomponents: {
    VStack,
  },
} satisfies Meta<typeof FeatureCard>;

export default meta;

const builder = new StoryBuilder<typeof FeatureCard>()
  .defineMeta(meta)
  .defineSharedProps({
    icon: Database,
    title: 'Title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
  });

export const Base = builder.buildStory({});
