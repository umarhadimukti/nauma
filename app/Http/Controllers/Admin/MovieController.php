<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Movie\Store;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Http\Requests\Admin\Movie\Update;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies = Movie::withTrashed()->orderBy('deleted_at')->get();
        return Inertia('Admin/Movie/Index', [
            'movies' => $movies,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
        $data['slug'] = Str::slug($data['name']);

        Movie::create($data);

        return redirect()->route('dashboard.admin.movie.index')->with(['message' => 'Berhasil menambahkan movie!', 'type' => 'success']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {
        return Inertia('Admin/Movie/Update', [
            'movie' => $movie
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, Movie $movie)
    {
        $data = $request->validated();

        // jika ada file yang di upload
        if ($request->file('thumbnail')) {

            // upload file ke dalam folder /storage/movies
            $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));

            // hapus file lama
            Storage::disk('public')->delete($request->file('thumbnail'));
        } else {
            $data['thumbnail'] = $movie->thumbnail;
        }

        $movie->update($data);

        return redirect()->route('dashboard.admin.movie.index')->with(['message' => 'Berhasil mengubah movie: ' . $data['name'] . '.', 'type' => 'success']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        $movie->delete();

        return redirect()->route('dashboard.admin.movie.index')->with([
            'message' => 'Berhasil menghapus movie: ' . $movie->name,
            'type' => 'success'
        ]);
    }

    public function restore($movie)
    {
        // me-restore film yang ada di trash berdasarkan id
        Movie::withTrashed()->find($movie)->restore();

        return redirect()->route('dashboard.admin.movie.index')->with(['message' => 'Berhasil mengembalikan movie', 'type' => 'success']);
    }
}
