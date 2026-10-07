'use client';

import { useForm } from 'react-hook-form';

type FormValues = {
  title: string;
};

export default function Form() {
  const { register, handleSubmit } = useForm<FormValues>();

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} />

      <button type="submit">Submit</button>
    </form>
  );
}
