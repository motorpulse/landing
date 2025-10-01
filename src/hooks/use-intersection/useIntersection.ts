'use client';

import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';
import type { Nullable, Undefinable } from 'xenopomp-essentials';

type ObserverOptions = IntersectionObserverInit;
type ObserverEntry = IntersectionObserverEntry;

type UseIntersectionResult<RefBase extends HTMLElement> = [
  ref: RefObject<Nullable<RefBase>>,
  observerEntry: Undefinable<ObserverEntry>,
];

/**
 * Use native intersection observer as React ref.
 */
export const useIntersection = <RefBase extends HTMLElement>(
  options?: ObserverOptions,
): UseIntersectionResult<RefBase> => {
  const ref = useRef<RefBase>(null);
  const [observerEntry, setObserverEntry] =
    useState<Undefinable<ObserverEntry>>(undefined);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setObserverEntry(entry);
    }, options);
    const node = ref.current;

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [options]);

  return [ref, observerEntry];
};
