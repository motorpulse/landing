import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

export type VStackVariantsType = VariantProps<typeof vStackVariants>;

export const vStackVariants = cva('', {
  variants: {
    alignment: {
      // Top
      topLeading: 'justify-start items-start',
      top: 'justify-start items-center',
      topTrailing: 'justify-start items-end',
      // Center
      leading: 'justify-center items-start',
      center: 'justify-center items-center',
      trailing: 'justify-center items-end',
      // Bottom
      bottomLeading: '',
      bottom: '',
      bottomTrailing: '',
    },
  },
  compoundVariants: [
    {
      // Vertical Top
      alignment: ['topLeading', 'top', 'topLeading'],
      className: 'justify-start',
    },
    {
      // Vertical Center
      alignment: ['leading', 'center', 'trailing'],
      className: 'justify-center',
    },
    {
      // Vertical Bottom
      alignment: ['bottomLeading', 'bottom', 'bottomTrailing'],
      className: 'justify-end',
    },
    {
      // Horizontal Left
      alignment: ['topLeading', 'leading', 'bottomLeading'],
      className: 'items-start',
    },
    {
      // Horizontal Center
      alignment: ['top', 'center', 'bottom'],
      className: 'items-center',
    },
    {
      // Horizontal Right
      alignment: ['topTrailing', 'trailing', 'bottomTrailing'],
      className: 'items-end',
    },
  ],
  defaultVariants: {
    alignment: undefined,
  },
});
