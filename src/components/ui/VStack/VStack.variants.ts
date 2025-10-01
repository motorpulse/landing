import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

/**
 * Creates cva variants for VStack or HStack.
 * @param verticalAxisBase
 * @param horizontalAxisBase
 */
function createStackAlignment(
  verticalAxisBase: string,
  horizontalAxisBase: string,
) {
  return cva('', {
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
        className: `${verticalAxisBase}-start`,
      },
      {
        // Vertical Center
        alignment: ['leading', 'center', 'trailing'],
        className: `${verticalAxisBase}-center`,
      },
      {
        // Vertical Bottom
        alignment: ['bottomLeading', 'bottom', 'bottomTrailing'],
        className: `${verticalAxisBase}-end`,
      },
      {
        // Horizontal Left
        alignment: ['topLeading', 'leading', 'bottomLeading'],
        className: `${horizontalAxisBase}-start`,
      },
      {
        // Horizontal Center
        alignment: ['top', 'center', 'bottom'],
        className: `${horizontalAxisBase}-center`,
      },
      {
        // Horizontal Right
        alignment: ['topTrailing', 'trailing', 'bottomTrailing'],
        className: `${horizontalAxisBase}-end`,
      },
    ],
    defaultVariants: {
      alignment: undefined,
    },
  });
}

export const vStackVariants = createStackAlignment('justify', 'items');
export type VStackVariantsType = VariantProps<typeof vStackVariants>;

export const hStackVariants = createStackAlignment('items', 'justify');
export type HStackVariantsType = VariantProps<typeof hStackVariants>;
