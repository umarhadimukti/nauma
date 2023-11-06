<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SubscriptionPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscription_plan = [
            [
                'name' => 'Basic',
                'price' => 250000,
                'active_period_in_months' => 3,
                'features' => json_encode(['feature1', 'feature2', 'feature3'])
            ],
            [
                'name' => 'Premium',
                'price' => 850000,
                'active_period_in_months' => 6,
                'features' => json_encode(['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'])
            ]
        ];

        SubscriptionPlan::insert($subscription_plan);
    }
}
