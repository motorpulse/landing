'use client';

import cn from 'classnames';
import type { ComponentRef } from 'react';
import { useEffect } from 'react';
import type { FCProps, VariableFC } from 'xenopomp-essentials';

import { slotable } from '@/components/hoc';
import { useIntersection, useUniqueId } from '@/hooks';
import { useActiveSections } from '@/zustand';

type ObserverOptions = Pick<IntersectionObserverInit, 'threshold'>;
type DivProps = FCProps<VariableFC<'div', unknown, 'ref'>>;
interface OtherProps {
  itemId?: string;
}

export const ActiveSection = slotable<
  'section',
  DivProps & ObserverOptions & OtherProps
>(
  'section',
  ({
    Comp,
    className,
    children,
    threshold = 1,
    itemId: customItemId,
    ...props
  }) => {
    const [ref, intersection] = useIntersection<ComponentRef<'section'>>({
      threshold,
    });
    const itemId = useUniqueId(t => `active-section-${customItemId ?? t}`);
    const { append, remove } = useActiveSections();

    useEffect(() => {
      if (intersection?.isIntersecting) {
        append({ itemId });
        return;
      }
      remove(itemId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [intersection?.isIntersecting]);

    return (
      <Comp
        className={cn(className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
