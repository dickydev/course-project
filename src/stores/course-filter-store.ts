import { create } from 'zustand';

export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type LevelFilter = 'All' | CourseLevel;

type CourseFilterStore = {
  level: LevelFilter;

  setLevel: (level: LevelFilter) => void;

  resetFilter: () => void;
};

export const useCourseFilterStore = create<CourseFilterStore>()((set) => ({
  level: 'All',

  setLevel: (level) => set({ level }),

  resetFilter: () => set({ level: 'All' }),
}));
