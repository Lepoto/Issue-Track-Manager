'use client';
import { TextField, Select, Button } from '@radix-ui/themes'
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import SimpleMDE from 'react-simplemde-editor';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';

interface IssueForm {
  title: any;
  status: any;
  description: any;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();

  const onSubmit = async (data: IssueForm) => {
    // Your submit logic here, you can use the 'data' object.
    console.log(data);

    // try {
    //   await axios.post('/your-api-endpoint', data);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  return (
    <form className="max-w-xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register('title')} />
      </TextField.Root>

      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMDE placeholder="Enter description" {...field} />}
      />

      <Button type="submit">Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
