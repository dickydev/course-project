'use client';

import { Button } from '@/src/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/components/ui/dialog';

import type { Course } from '@/src/lib/api/courses';

interface CourseDetailDialogProps {
  course: Course;
}

export default function CourseDetailDialog({
  course,
}: CourseDetailDialogProps) {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Lihat Detail</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{course.title}</DialogTitle>

          <DialogDescription>{course.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          <p>Level: {course.level}</p>

          <p>Total: {course.totalMeet} Meet</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
