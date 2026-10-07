import CourseDetailDialog from './CourseDetailDialog';

// import type { Course } from '@/src/types/courses';
import type { Course } from '@/src/lib/api/courses';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article
      className="
        rounded-2xl
        border
        bg-white
        p-6
      "
    >
      <h3
        className="
          text-xl
          font-bold
        "
      >
        {course.title}
      </h3>

      <p
        className="
          mt-2
          text-slate-600
        "
      >
        {course.description}
      </p>

      <div
        className="
          mt-6
        "
      >
        <CourseDetailDialog course={course} />
      </div>
    </article>
  );
}
