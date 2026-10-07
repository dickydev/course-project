'use client';

import { useQuery } from '@tanstack/react-query';
import { getCourses } from '@/src/lib/api/courses';
import { useCourseFilterStore } from '@/src/stores/course-filter-store';
import CourseCard from './CourseCard';

export default function CourseList() {
  const level = useCourseFilterStore((state) => state.level);

  const {
    data: courses = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['courses'],
    queryFn: getCourses,
    staleTime: 5 * 60 * 1000,
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const filteredCourses =
    level === 'All'
      ? courses
      : courses.filter((course) => course.level === level);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
