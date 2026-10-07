export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  level: CourseLevel;
  totalMeet: number;
}

export type CourseCardProps = Omit<Course, 'id'>;
