import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, useForm } from '@inertiajs/react';
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";

export default function Update({ auth, movie }) {
  const { data, setData, processing, errors, put, reset } = useForm({
    ...movie
  });

  const onHandleChange = (e) => {
    setData(
      e.target.name,
      e.target.type === 'file'
        ? e.target.files[0]
        : e.target.value
    )
  }

  const submit = (e) => {
    e.preventDefault();

    if (data.thumbnail === movie.thumbnail) {
      delete data.thumbnail;
    }

    put(route('dashboard.admin.movie.update', movie.id));
  };
  return (
    <Authenticated auth={auth}>
      <Head title="Admin - Edit Movie" />
      <h1 className="text-xl">Ubah Film: {movie.name}</h1>
      <hr className="mt-2 mb-4" />
      <form className="w-10/12" onSubmit={submit}>
        <InputLabel
          forInput='name'
          value='Nama'
          className="mb-2 text-lg"
        />
        <TextInput
          type='text'
          id='name'
          name='name'
          variant='primary-outline'
          defaultValue={movie.name}
          onChange={onHandleChange}
          autoComplete='name'
          placeholder='Masukkan nama movie..'
          className='bg-neutral-50 focus:ring-0 focus:border-alerange'
        />
        <InputError message={errors.name} className='my-2' />
        <InputLabel
          forInput='category'
          value='Kategori'
          className="mt-3 mb-2 text-lg"
        />
        <TextInput
          type='text'
          id='category'
          name='category'
          variant='primary-outline'
          defaultValue={movie.category}
          autoComplete='category'
          onChange={onHandleChange}
          placeholder='Masukkan kategori movie..'
          className='bg-neutral-50 focus:ring-0 focus:border-alerange'
        />
        <InputError message={errors.category} className='my-2' />
        <InputLabel
          forInput='video_url'
          value='Video URL'
          className="mt-3 mb-2 text-lg"
        />
        <TextInput
          type='url'
          id='video_url'
          name='video_url'
          variant='primary-outline'
          defaultValue={movie.video_url}
          autoComplete='video_url'
          onChange={onHandleChange}
          placeholder='Masukkan URL movie..'
          className='bg-neutral-50 focus:ring-0 focus:border-alerange'
        />
        <InputError message={errors.video_url} className='my-2' />
        <InputLabel
          forInput='thumbnail'
          value='Thumbnail'
          className="mt-3 mb-2 text-lg"
        />
        <img src={`/storage/${movie.thumbnail}`} alt="" width={200} className="rounded" />
        <TextInput
          type='file'
          id='thumbnail'
          name='thumbnail'
          variant='primary-outline'
          autoComplete='video_url'
          onChange={onHandleChange}
          placeholder='Masukkan thumbnail movie..'
          className='bg-neutral-50 focus:ring-0 border-alerange outline-alerange focus:border-alerange'
        />
        <InputError message={errors.thumbnail} className='my-2' />
        <InputLabel
          forInput='rating'
          value='Rating'
          className="mt-3 mb-2 text-lg"
        />
        <TextInput
          type='number'
          id='rating'
          name='rating'
          min={0}
          max={5}
          variant='primary-outline'
          defaultValue={movie.rating}
          autoComplete='rating'
          onChange={onHandleChange}
          placeholder='Masukkan rating movie..'
          className='bg-neutral-50 focus:ring-0 focus:border-alerange'
        />
        <InputError message={errors.rating} className='my-2' />
        <div className="flex flex-row mt-3 gap-2 items-center">
          <Checkbox name='is_featured' checked={movie.is_featured} className="focus:text-alerange active:text-alerange" onChange={(e) => setData('is_featured', e.target.checked)} />
          <InputLabel
            forInput='is_featured'
            value='Featured'
            className="mt-2 mb-2 text-lg"
          />
        </div>
        <PrimaryButton className="mt-4" type="submit" disabled={processing}>
          Simpan
        </PrimaryButton>
      </form>
    </Authenticated>
  )
}