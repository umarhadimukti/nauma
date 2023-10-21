import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, Head } from "@inertiajs/react";

export default function Register() {
  return (
    <>
      <Head title="Register" />
      <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div className="fixed top-[-50px] hidden lg:block">
          <img src="/images/signup-image.png"
            className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
        </div>
        <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
          <div>
            <img src="/images/nauma-no-background.svg" alt="" width={250} height={50} />
            <div className="my-[70px]">
              <div className="font-semibold text-[26px] mb-3">
                Sign Up
              </div>
              <p className="text-base text-[#767676] leading-7">
                Explore our new movies and get <br />
                the better insight for your life
              </p>
            </div>
            <form className="w-[370px]">
              <div className="flex flex-col gap-6">
                <div>
                  <InputLabel value="Fullname" forInput="fullname" className="mb-2 text-white" />
                  <TextInput
                    name="fullname"
                    placeholder="Your fullname..."
                    defaultValue="Umar Hadi Mukti"
                  />
                </div>
                <div>
                  <InputLabel value="Email Address" forInput="email" className="mb-2 text-white" />
                  <TextInput
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    defaultValue="umarhadimukti@gmail.com"
                  />
                </div>
                <div>
                  <InputLabel value="Password" forInput="password" className="mb-2 text-white" />
                  <TextInput
                    name="password"
                    type="password"
                    placeholder="Your password"
                    defaultValue="11223344"
                  />
                </div>
              </div>
              <div className="grid space-y-[14px] mt-[30px]">
                <Link href={route('prototype.register')}>
                  <PrimaryButton type="submit" variant="primary">
                    <span className="text-base font-semibold">
                      Sign Up
                    </span>
                  </PrimaryButton>
                </Link>
                <Link href={route('prototype.login')}>
                  <PrimaryButton type="submit" variant="white-outline">
                    <span className="text-base text-white">
                      Sign In to My Account
                    </span>
                  </PrimaryButton>
                </Link>
                {/* <button type="submit" className="rounded-2xl bg-alerange py-[13px] text-center">
                              <span className="text-base font-semibold">
                                  Sign Up
                              </span>
                          </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}