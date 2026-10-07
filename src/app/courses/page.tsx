import AddCourseForm from '@/src/components/course/AddCourseForm';
import { getCourses } from '@/src/lib/courses';
import CourseFilter from '@/src/components/course/CourseFilter';
import CourseList from '@/src/components/course/CourseList';

export default async function CoursesPage() {
  return (
    <div>
      <AddCourseForm />
      <CourseFilter />
      <CourseList />
    </div>
  );
}
