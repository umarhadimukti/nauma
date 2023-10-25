<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserDashboardController extends Controller
{
    public function index()
    {
        $featuredMovies = Movie::whereIsFeatured(true)->get();
        $movies = Movie::all();
        return Inertia('User/Dashboard/Index', [
            'movies' => $movies,
            'featured_movies' => $featuredMovies
        ]);
    }
}
