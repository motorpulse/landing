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
        topLeading: `${verticalAxisBase}-start ${horizontalAxisBase}-start`,
        top: `${verticalAxisBase}-start ${horizontalAxisBase}-center`,
        topTrailing: `${horizontalAxisBase}-end`,
        // Center
        leading: `${verticalAxisBase}-center ${horizontalAxisBase}-start`,
        center: `${verticalAxisBase}-center ${horizontalAxisBase}-center`,
        trailing: `${verticalAxisBase}-center ${horizontalAxisBase}-end`,
        // Bottom
        bottomLeading: `${verticalAxisBase}-end ${horizontalAxisBase}-start`,
        bottom: `${verticalAxisBase}-end ${horizontalAxisBase}-center`,
        bottomTrailing: `${verticalAxisBase}-end ${horizontalAxisBase}-end`,
      },
    },
    defaultVariants: {
      alignment: undefined,
    },
  });
}

export const vStackVariants = createStackAlignment('justify', 'items');
export type VStackVariantsType = VariantProps<typeof vStackVariants>;

export const hStackVariants = createStackAlignment('items', 'justify');
export type HStackVariantsType = VariantProps<typeof hStackVariants>;
