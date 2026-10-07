// 'use client';

// import { useCallback, useMemo, useRef, useState } from 'react';

// import CourseCard from './CourseCard';

// import type { Course } from '@/src/types/courses';

// interface CourseExplorerProps {
//   courses: Course[];
// }

// export default function CourseExplorer({ courses }: CourseExplorerProps) {
//   const [search, setSearch] = useState('');

//   const searchRef = useRef<HTMLInputElement>(null);

//   const filteredCourses = useMemo(() => {
//     const keyword = search.trim().toLowerCase();

//     if (!keyword) {
//       return courses;
//     }

//     return courses.filter((course) =>
//       course.title.toLowerCase().includes(keyword)
//     );
//   }, [courses, search]);

//   const handleReset = useCallback(() => {
//     setSearch('');

//     searchRef.current?.focus();
//   }, []);

//   return (
//     <section>
//       <div
//         className="
//           mb-6
//           flex
//           gap-3
//         "
//       >
//         <input
//           ref={searchRef}
//           value={search}
//           onChange={(event) => setSearch(event.target.value)}
//           placeholder="Cari course..."
//           className="
//             rounded-lg
//             border
//             px-4
//             py-2
//           "
//         />

//         <button onClick={handleReset}>Reset</button>
//       </div>

//       <div
//         className="
//           grid
//           grid-cols-1
//           gap-6
//           md:grid-cols-2
//           lg:grid-cols-3
//         "
//       >
//         {filteredCourses.map((course) => (
//           <CourseCard
//             key={course.id}
//             title={course.title}
//             description={course.description}
//             category={course.category}
//             level={course.level}
//             totalMeet={course.totalMeet}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
