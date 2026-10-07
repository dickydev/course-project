'use client';

import {
  useCourseFilterStore,
  type LevelFilter,
} from '@/src/stores/course-filter-store';

export default function CourseFilter() {
  const level = useCourseFilterStore((state) => state.level);

  const setLevel = useCourseFilterStore((state) => state.setLevel);

  return (
    <select
      value={level}
      onChange={(event) => setLevel(event.target.value as LevelFilter)}
    >
      <option value="All">Semua Level</option>
      <option value="Beginner">Beginner</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Advanced">Advanced</option>
    </select>
  );
}
