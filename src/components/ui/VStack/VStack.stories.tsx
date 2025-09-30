import type { Meta } from '@storybook/react';
import cn from 'classnames';

import { StoryBuilder } from '@/utils/storybook';

import { VStack } from './VStack';

const meta = {
  title: 'UI / VStack',
  component: VStack,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof VStack>;

export default meta;

const builder = new StoryBuilder<typeof VStack>()
  .defineMeta(meta)
  .defineSharedProps({
    children: (
      <>
        <p>VStack</p>
        <p>Works</p>
      </>
    ),
  });

export const Base = builder.buildStory({});
export const Alignment = builder.buildStory({
  args: {
    style: {
      height: '300px',
      width: '300px',
    },
    className: cn('bg-red-500/25'),
    alignment: 'topLeading',
  },
  argTypes: {
    alignment: {
      control: { type: 'select' },
      options: [
        'topLeading',
        'top',
        'topTrailing',
        'leading',
        'center',
        'trailing',
        'bottomLeading',
        'bottom',
        'bottomTrailing',
      ],
    },
  },
});
