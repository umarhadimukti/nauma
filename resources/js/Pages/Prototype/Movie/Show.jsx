import { Link } from "@inertiajs/react";
import ReactPlayer from "react-player";

export default function Show() {
  return (
    <section className="mx-auto h-full pb-[50px] relative watching-page font-poppins bg-form-bg" id="stream">
      <div className="pt-[90px] rounded-lg flex items-center justify-center">
        <div className="overflow-hidden w-11/12 rounded-3xl shadow-lg">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=kcnwI_5nKyA"
            controls
            width="100%"
            height="700px"
          />
        </div>
      </div>

      {/* Button back to dashboard */}
      <div className="absolute left-12 top-5 z-20">
        <Link href={route('dashboard.user.index')}>
          <img src="/icons/ic_arrow-left.svg" className="transition-all btn-back w-[46px]" alt="stream" />
        </Link>
      </div>

      {/* Video Title */}
      <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
        <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
          Details Screen Part Final
        </span>
      </div>
    </section>
  );
}