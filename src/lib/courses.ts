import type { Course } from '@/src/types/courses';

interface Post {
  id: number;
  title: string;
  body: string;
}

export async function getCourses(): Promise<Course[]> {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );

  if (!response.ok) {
    throw new Error('Gagal mengambil course');
  }

  const posts: Post[] = await response.json();

  return posts.map((post, index) => ({
    id: post.id,

    title: post.title,

    description: post.body,

    category: 'Frontend',

    level: index % 2 === 0 ? 'Beginner' : 'Intermediate',

    totalMeet: 6 + index,
  }));
}
