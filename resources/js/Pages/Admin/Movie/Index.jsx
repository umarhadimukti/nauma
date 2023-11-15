import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link, Head, useForm } from "@inertiajs/react";

export default function Index({ auth, flashMessage, movies }) {
  const { delete: destroy, put } = useForm();

  return (
    <Authenticated auth={auth}>
      <Head title="List of Movies" />
      <div className="flex-column m-auto w-6/12 items-center justify-center">
        <Link href={route('dashboard.admin.movie.create')}>
          <PrimaryButton
            type="button"
            className="w-40 mb-8"
          >
            Buat film baru
          </PrimaryButton>
        </Link>
        {flashMessage?.message && (
          <FlashMessage message={flashMessage.message} />
        )}
      </div>

      <table className="table-fixed w-full text-center mt-[60px] mb-4">
        <thead>
          <tr>
            <th>Gambar</th>
            <th>Nama</th>
            <th>Kategori</th>
            <th>Rating</th>
            <th colSpan={2}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, i) => {
            return (
              <tr key={`${i}-${movie}`} className='mb-5'>
                <td className="flex justify-center">
                  <img src={`/storage/${movie.thumbnail}`} className="rounded-md" width={150} />
                </td>
                <td>{movie.name}</td>
                <td>{movie.category}</td>
                <td>{movie.rating.toFixed(1)}</td>
                <td>
                  <Link href={route('dashboard.admin.movie.edit', movie.id)}>
                    <PrimaryButton type="button" className="w-200 mr-1" variant="warning">
                      Edit
                    </PrimaryButton>
                  </Link>
                </td>
                <td>  
                  <div onClick={() => {
                    movie.deleted_at ?
                      put(
                        route('dashboard.admin.movie.restore', movie.id)
                      )
                      : destroy(
                        route('dashboard.admin.movie.destroy', movie.id)
                      )
                  }}>
                    <PrimaryButton PrimaryButton type="button" className="w-[121px]" variant="danger" >
                      {movie.deleted_at ? 'Restore' : 'Delete'}
                    </PrimaryButton>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table >
    </Authenticated >
  )
}