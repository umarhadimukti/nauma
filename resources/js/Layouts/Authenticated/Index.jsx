import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Head } from "@inertiajs/react";

export default function Authenticated({ auth, children }) {
  return (
    <>
      <Head title="Dashboard" />
      <div className="mx-auto max-w-screen hidden lg:block">
        {/* Start: Sidebar */}
        <Sidebar auth={auth} />
        {/* End: Sidebar */}

        {/* Start: Content */}
        <div className="ml-[300px] px-[50px]">
          <div className="py-10 flex flex-col gap-[50px]">
            {/* Start: Top bar */}
            <Topbar name={auth.user.name} />
            {/* End: Top */}
            <main>{children}</main>
          </div>
        </div>
        {/* End: Content */}
      </div>
      <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
        <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
          Maaf, halaman ini hanya mendukung ukuran layar 1024px keatas.
        </div>
      </div>
    </>
  )
}