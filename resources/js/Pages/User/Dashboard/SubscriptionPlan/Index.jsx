import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { router } from "@inertiajs/react";

export default function SubscriptionPlan({ auth, subscription_plans }) {
  const selectSubscription = (id) => {
    router.post(
      route('dashboard.user.subscription.user-subscribe', { subscription: id })
    )
  }

  return (
    <Authenticated auth={auth}>
      {/* Start: Content */}
      <div className="py-10 flex flex-col items-center">
        <div className="text-black font-semibold text-[26px] mb-3">
          Paket Berlangganan
        </div>
        <p className="text-base text-gray-1 leading-7 max-w-[420px] text-center">
          Investasikan sedikit uang Anda untuk mendapatkan pengalaman baru dari film yang kami sediakan.
        </p>

        {/* Pricing card */}
        <div className="flex justify-center gap-10 mt-[70px]">
          {subscription_plans.map((subscription) => {
            return <SubscriptionCard key={subscription.id} name={subscription.name} price={subscription.price} durationInMonth={subscription.active_period_in_months} features={JSON.parse(subscription.features)} isPremium={subscription.name === 'Premium'} onSelectSubscription={() => selectSubscription(subscription.id)} />
          })}
          {/* Basic */}

          {/* For Greatest */}
          {/* {subscription_plans.map((subscription) => {
            return <SubscriptionCard key={subscription.id} name={subscription.name} price={subscription.price} durationInMonth={subscription.period_in_months} features={JSON.parse(subscription.features)} isPremium={subscription.name === 'Premium'} />
          })} */}
        </div>
        {/* Pricing Card */}
      </div>
      {/* End: Content */}
    </Authenticated >
  );
}