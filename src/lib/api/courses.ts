import { z } from 'zod';
import { CourseFormValues, CourseSchema } from '../schemas/course';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const PostSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  title: z.string(),
  body: z.string(),
});

export const CoursesSchema = z.array(CourseSchema);
export type Course = z.infer<typeof CourseSchema>;

export async function getCourses(): Promise<Course[]> {
  const response = await fetch(`${API_URL}?_limit=6`);

  if (!response.ok) {
    throw new Error('Gagal mengambil course');
  }

  const rawData: unknown = await response.json();

  const result = z.array(PostSchema).safeParse(rawData);

  if (!result.success) {
    console.error(result.error);
    throw new Error('Response API tidak sesuai kontrak');
  }

  const courses = result.data.map((post, index) => ({
    id: post.id,
    title: post.title,
    description: post.body,
    level: index % 2 === 0 ? 'Beginner' : 'Intermediate',
    totalMeet: 6 + index,
  }));

  return CoursesSchema.parse(courses);
}

export async function createCourse(input: CourseFormValues): Promise<Course> {
  const values = CourseSchema.omit({
    id: true,
  }).parse(input);

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      title: values.title,
      body: values.description,
      userId: 1,
    }),
  });

  if (!response.ok) {
    throw new Error('Gagal menambah course');
  }

  const raw: unknown = await response.json();

  const result = PostSchema.safeParse(raw);

  if (!result.success) {
    throw new Error('Response create course tidak valid');
  }

  return CourseSchema.parse({
    id: result.data.id,
    title: result.data.title,
    description: result.data.body,
    level: values.level,
    totalMeet: values.totalMeet,
  });
}
