<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubscriptionPlanController;
use App\Http\Controllers\Admin\MovieController as AdminMovieController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::permanentRedirect('/', '/login');

Route::middleware(['web', 'auth', 'role:user'])->prefix('dashboard')->name('dashboard.user.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('movies/{movie:slug}', [MovieController::class, 'show'])->name('movie.show')->middleware('checkUserSubscription:true');
    Route::get('subscription-plan', [SubscriptionPlanController::class, 'index'])->name('subscription.index')->middleware('checkUserSubscription:false');
    Route::post('subscription-plan/{subscription}/user-subscribe', [SubscriptionPlanController::class, 'userSubscribe'])->name('subscription.user-subscribe')->middleware('checkUserSubscription:false');
});

Route::middleware(['web', 'auth', 'role:admin'])->prefix('dashboard')->name('dashboard.admin.')->group(function () {
    Route::resource('movie', AdminMovieController::class);
    Route::put('movie/{movie}/restore', [AdminMovieController::class, 'restore'])->name('movie.restore');
});

Route::prefix('prototype')->name('prototype.')->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Prototype/Login');
    })->name('login');
    Route::get('/register', function () {
        return Inertia::render('Prototype/Register');
    })->name('register');
    Route::get('/dashboard', function () {
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');
    Route::get('/subscription-plan', function () {
        return Inertia::render('Prototype/SubscriptionPlan');
    })->name('subscription-plan');
    Route::get('/movie/{slug}', function () {
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
