import { max } from '@floating-ui/utils';
import { create } from 'zustand';

interface Intersection {
  id: number;
  itemId: string;
}
type IntersectionPayload = Omit<Intersection, 'id'>;

export interface IActiveSections {
  intersections: Intersection[];
  append: (newIntersection: IntersectionPayload) => void;
  remove: (itemId: Intersection['itemId']) => void;
  exists: (itemId: Intersection['itemId']) => boolean;
  isLast: (itemId: Intersection['itemId']) => boolean;
}

export const useActiveSections = create<IActiveSections>((set, get) => ({
  intersections: [],

  /**
   * Append new intersection into internal store state.
   * @param item
   */
  append(item) {
    // Calculate id
    const ids: number[] = get().intersections.map(i => i.id);
    const maxId: number = ids.length ? max(...ids) : 0;
    const appendedId: number = maxId + 1;

    // Append intersection to store
    const newIntersections: Intersection[] = get().intersections;
    newIntersections.push({
      ...item,
      id: appendedId,
    });
    set({
      intersections: newIntersections,
    });
  },

  /**
   * Remove intersection by id
   * @param itemId
   */
  remove(itemId) {
    const newIntersections: Intersection[] = get().intersections.filter(
      i => i.itemId !== itemId,
    );
    set({
      intersections: newIntersections,
    });
  },

  /**
   * Check if intersection exists.
   * @param itemId
   */
  exists(itemId) {
    return get().intersections.some(i => i.itemId === itemId);
  },

  /**
   * Check if last active section has correct item id.
   * @param itemId
   */
  isLast(itemId) {
    const { intersections } = get();
    const sortedIntersections = intersections.sort((a, b) => a.id - b.id);

    if (!sortedIntersections.length) return false;

    const lastItem = sortedIntersections.at(-1);
    if (!lastItem) return false;

    // Last item id should be the same as argument one.
    return lastItem.itemId === itemId;
  },
}));
