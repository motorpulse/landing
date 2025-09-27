import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export type DistStoreButtonVariantsType = VariantProps<
  typeof distStoreButtonVariants
>;

export const distStoreButtonVariants = cva('', {
  variants: {
    inverted: {
      false: 'bg-primary-font text-primary-bg',
      true: 'bg-primary-bg text-primary-font',
    },
  },
});
