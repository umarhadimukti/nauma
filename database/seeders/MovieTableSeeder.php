<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'The Walking Dead',
                'slug' => 'the-walking-dead',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=VBDd7dV1GLo&pp=ygUQdGhlIHdhbGtpbmcgZGVhZA%3D%3D',
                'thumbnail' => 'https://i.ytimg.com/vi/VBDd7dV1GLo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiB2A3ta7TNK6oqbIFCDpG8qetBg',
                'rating' => 4.7,
                'is_featured' => 1
            ],
            [
                'name' => 'Avengers: End Game (2019)',
                'slug' => 'avengers-end-game-2019',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=BKviRM0KF2A&pp=ygURYXZlbmdlcnMgZW5kIGdhbWU%3D',
                'thumbnail' => 'https://i.ytimg.com/vi/BKviRM0KF2A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBi_xyVx9-4bcFCqaFiSVj5joZaQ',
                'rating' => 4.8,
                'is_featured' => 0
            ],
            [
                'name' => 'The Nun 2',
                'slug' => 'the-nun-2',
                'category' => 'Horror',
                'video_url' => 'https://www.youtube.com/watch?v=QF-oyCwaArU&pp=ygUHdGhlIG51bg%3D%3D',
                'thumbnail' => 'https://i.ytimg.com/vi/QF-oyCwaArU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzRtcIdsCrBshZxejIFY60oHRbIQ',
                'rating' => 4.2,
                'is_featured' => 1
            ],
            [
                'name' => 'Start-Up',
                'slug' => 'start-up',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=BemKyzbLDDc&pp=ygUNZmlsbSBzdGFydHR1cA%3D%3D',
                'thumbnail' => 'https://i.ytimg.com/vi/BemKyzbLDDc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDa8nAffr2d0GJ6vnmMz4Wh9Y5JYw',
                'rating' => 4.5,
                'is_featured' => 1
            ],
            [
                'name' => 'Avatar: The Way of Water',
                'slug' => 'avatar-the-way-of-water',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=d9MyW72ELq0&pp=ygUIYXZhdGFyIDI%3D',
                'thumbnail' => 'https://i.ytimg.com/vi/d9MyW72ELq0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRTfyihvnh7UWO5qpp_hgtIdkCow',
                'rating' => 4.8,
                'is_featured' => 1
            ]
        ];

        // masukkan data ke dalam model
        Movie::insert($movies);
    }
}
