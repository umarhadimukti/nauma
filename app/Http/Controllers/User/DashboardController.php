<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use App\Models\Movie;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index()
    {
        $movies = Movie::all();
        $featuredMovies = Movie::whereIsFeatured(true)->get();
        return Inertia('User/Dashboard/Index', [
            'movies' => $movies,
            'featured_movies' => $featuredMovies
        ]);
    }
}
