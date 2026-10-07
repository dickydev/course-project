import { z } from 'zod';

export const CourseSchema = z.object({
  id: z.number(),
  title: z.string().min(3, 'Judul minimal 3 karakter'),
  description: z.string().min(10, 'Deskripsi minimal 10 karakter'),
  level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  totalMeet: z
    .number()
    .int()
    .min(1, 'Minimal 1 pertemuan')
    .max(50, 'Maksimal 50 pertemuan'),
});

export const CourseFormSchema = CourseSchema.omit({
  id: true,
});

export type CourseFormValues = z.infer<typeof CourseFormSchema>;
