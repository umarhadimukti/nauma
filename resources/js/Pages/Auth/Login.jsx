import { useEffect } from 'react';
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from '@/Components/InputError';
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    return (
        <>
            <Head title="Login" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/nauma-no-background.svg" width={250} alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Welcome Back
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel value="Email Address" forInput="email" className="text-base mb-2 text-white" />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        placeholder="Email Address"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    <InputError message={errors.email} className='mt-2' />
                                </div>
                                <div>
                                    <InputLabel value="Password" forInput="password" className="text-base mb-2 text-white" />
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        placeholder="Password"
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    <InputError message={errors.password} className='mt-2' />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <PrimaryButton type="submit" variant="primary" disabled={processing}>
                                    <span className="text-base font-semibold">
                                        Start Watching
                                    </span>
                                </PrimaryButton>
                                <Link href={route('register')}>
                                    <PrimaryButton type="button" variant="white-outline">
                                        <span className="text-base text-white">
                                            Create New Account
                                        </span>
                                    </PrimaryButton>
                                </Link>
                                {/* <button type="submit" className="rounded-2xl bg-alerange py-[13px] text-center">
                  <span className="text-base font-semibold">
                    Start Watching
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