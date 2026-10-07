'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  CourseFormSchema,
  type CourseFormValues,
} from '@/src/lib/schemas/course';

import { createCourse, type Course } from '@/src/lib/api/courses';
import { courses } from '@/src/data/courses';

export default function AddCourseForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createCourse,
    onSuccess: async (course) => {
      await queryClient.cancelQueries({
        queryKey: ['courses'],
      });

      queryClient.setQueryData<Course[]>(['courses'], (current = []) => [
        {
          ...course,
          id: -Date.now(),
        },
        ...current,
      ]);
      reset;
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CourseFormValues>({
    resolver: zodResolver(CourseFormSchema),

    defaultValues: {
      title: '',
      description: '',
      level: 'Beginner',
      totalMeet: 1,
    },
  });

  async function onSubmit(data: CourseFormValues) {
    // console.log(data);
    try {
      await mutation.mutateAsync(data);
    } catch {}
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="title">Judul</label>
        <input id="title" {...register('title')} />
        {errors.title && (
          <p className="text-red-500" role="alert">
            {errors.title.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="description">Deskripsi</label>
        <textarea id="description" {...register('description')} />
        {errors.description && (
          <p className="text-red-500" role="alert">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="level">Level</label>
        <select id="level" {...register('level')}>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div>
        <label htmlFor="totalMeet">Total Meet</label>
        <input
          id="totalMeet"
          type="number"
          {...register('totalMeet', {
            valueAsNumber: true,
          })}
        />

        {errors.totalMeet && (
          <p className="text-red-500" role="alert">
            {errors.totalMeet.message}
          </p>
        )}
      </div>

      {mutation.isError && (
        <p className="text-red-500">{mutation.error.message}</p>
      )}
      {mutation.isSuccess && <p>Course berhasil ditambahkan ke daftar</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Menyimpan...' : 'Tambah Course'}
      </button>
    </form>
  );
}
