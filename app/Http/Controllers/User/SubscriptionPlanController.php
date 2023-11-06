<?php

namespace App\Http\Controllers\User;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Http\Controllers\Controller;
use App\Models\UserSubscription;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        return Inertia('User/Dashboard/SubscriptionPlan/Index', [
            'subscription_plans' => SubscriptionPlan::all()
        ]);
    }

    public function userSubscribe(SubscriptionPlan $subscription): RedirectResponse
    {
        $data = [
            'user_id' => Auth::user()->id,
            'subscription_plan_id' => $subscription->id,
            'price' => $subscription->price,
            'expired_date' => Carbon::now()->addMonths($subscription->active_period_in_months),
            'payment_status' => 'paid'
        ];

        UserSubscription::create($data);

        return redirect(route('dashboard.user.index'));
    }
}
