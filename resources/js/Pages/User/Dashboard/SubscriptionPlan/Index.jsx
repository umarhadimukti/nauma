import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Head, router } from "@inertiajs/react";

export default function SubscriptionPlan({ auth, subscription_plans, env }) {
  const selectSubscription = (id) => {
    router.post(
      route('dashboard.user.subscription.user-subscribe', { subscription: id }),
      {},
      {
        only: ['userSubscription'],
        onSuccess: ({ props }) => {
          onSnapMidtrans(props.userSubscription);
        }
      }
    )
  }

  const onSnapMidtrans = (userSubscription) => {
    snap.pay(userSubscription.snap_token, {
      onSuccess: function (result) {
        Inertia.visit(route('dashboard.user.index'));
      },
      onPending: function (result) {
        console.log(result)
      },
      onError: function (result) {
        console.log(result)
      }
    })
  }

  return (
    <Authenticated auth={auth}>
      <Head>
        <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key={env.MIDTRANS_CLIENTKEY}></script>
      </Head>
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