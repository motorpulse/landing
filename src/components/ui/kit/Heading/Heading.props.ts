import type { ElementType } from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5;

export interface HeadingProps {
  level: HeadingLevel;
  exactLevel?: HeadingLevel;
}

export type HeadingType = Extract<ElementType, `h${HeadingProps['level']}`>;
