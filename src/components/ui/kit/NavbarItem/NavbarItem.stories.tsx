import type { Meta } from '@storybook/react';

import { ActiveSection, HStack } from '@/components/ui';
import { StoryBuilder } from '@/utils/storybook';

import { NavbarItem } from './NavbarItem';

const meta = {
  title: 'UI Kit / NavbarItem',
  component: NavbarItem,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
  subcomponents: {
    HStack,
  },
} satisfies Meta<typeof NavbarItem>;

export default meta;

const builder = new StoryBuilder<typeof NavbarItem>()
  .defineMeta(meta)
  .defineSharedProps({
    href: '/',
    children: 'Home',
    itemId: 'main',
  });

export const Base = builder.buildStory({
  /**
   *
   */
  render: args => (
    <ActiveSection itemId='main'>
      <NavbarItem {...args} />
    </ActiveSection>
  ),
});
