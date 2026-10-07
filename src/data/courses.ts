import type { Course } from '@/src/types/courses';

export const courses: Course[] = [
  {
    id: 1,
    title: 'React Fundamental',
    description: 'Pelajari component, props, dan state.',
    category: 'Frontend',
    level: 'Beginner',
    totalMeet: 8,
  },
  {
    id: 2,
    title: 'TypeScript Fundamental',
    description: 'Pelajari type system pada JavaScript.',
    category: 'Frontend',
    level: 'Intermediate',
    totalMeet: 6,
  },
  {
    id: 3,
    title: 'Next.js App Router',
    description: 'Pelajari routing dan Server Component.',
    category: 'Frontend',
    level: 'Intermediate',
    totalMeet: 8,
  },
];
