export default function SubscriptionDetail({ isPremium }) {
  return (
    <>
      {!isPremium && (
        <div className="mt-auto pr-[30px]">
          <div className="p-5 bg-white rounded-[25px] outline outline-1 outline-[#f1f1f1] shadow-xl">
            <div className="text-black text-lg font-semibold mb-5">
              Paket Basic
            </div>
            <div className="text-black text-sm mb-2">
              5 of 30 hari
            </div>
            <div className="rounded-full w-full h-[6px] bg-[#f1f1f1]">
              <div className="rounded-full h-full w-2/12 bg-alerange"></div>
            </div>
          </div>
        </div>
      )}

      {isPremium && (
        <div className="mt-auto pr-[30px]">
          <div className="p-5 bg-black rounded-[25px]">
            <img src="/icons/ic_star-rounded.svg" alt="" />
            <div className="text-white text-lg font-semibold mt-4 mb-8">
              Paket Premium
            </div>
            <div className="text-white text-sm mb-2">
              3 / 30 hari
            </div>
            <div className="rounded-full w-full h-[6px] bg-[#333333]">
              <div className="rounded-full h-full w-2/12 bg-alerange"></div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}