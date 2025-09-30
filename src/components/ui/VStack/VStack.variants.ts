import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

export type VStackVariantsType = VariantProps<typeof vStackVariants>;

const VERTICAL_AXIS_BASE = 'justify';
const HORIZONTAL_AXIS_BASE = 'items';

export const vStackVariants = cva('', {
  variants: {
    alignment: {
      // Top
      topLeading: '',
      top: '',
      topTrailing: '',
      // Center
      leading: '',
      center: '',
      trailing: '',
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
      className: `${VERTICAL_AXIS_BASE}-start`,
    },
    {
      // Vertical Center
      alignment: ['leading', 'center', 'trailing'],
      className: `${VERTICAL_AXIS_BASE}-center`,
    },
    {
      // Vertical Bottom
      alignment: ['bottomLeading', 'bottom', 'bottomTrailing'],
      className: `${VERTICAL_AXIS_BASE}-end`,
    },
    {
      // Horizontal Left
      alignment: ['topLeading', 'leading', 'bottomLeading'],
      className: `${HORIZONTAL_AXIS_BASE}-start`,
    },
    {
      // Horizontal Center
      alignment: ['top', 'center', 'bottom'],
      className: `${HORIZONTAL_AXIS_BASE}-center`,
    },
    {
      // Horizontal Right
      alignment: ['topTrailing', 'trailing', 'bottomTrailing'],
      className: `${HORIZONTAL_AXIS_BASE}-end`,
    },
  ],
  defaultVariants: {
    alignment: undefined,
  },
});
