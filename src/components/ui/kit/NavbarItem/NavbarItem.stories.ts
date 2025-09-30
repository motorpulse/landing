import type { Meta } from '@storybook/react';

import { StoryBuilder } from '@/utils/storybook';

import { NavbarItem } from './NavbarItem';

const meta = {
  title: 'UI Kit / NavbarItem',
  component: NavbarItem,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavbarItem>;

export default meta;

const builder = new StoryBuilder<typeof NavbarItem>()
  .defineMeta(meta)
  .defineSharedProps({
    href: '/',
    children: 'Home',
    active: true,
  });

export const Base = builder.buildStory({});
