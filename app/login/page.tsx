export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">

            {/* Top bar */}
            <div className="bg-gray-200 px-6 py-2 flex justify-end items-center">
                <span className="text-[#7b1a2e] font-semibold text-sm">
                    Sign in or Join
                </span>
            </div>

            {/* Logo bar */}
            <div className="bg-white border-b border-gray-200 px-6 py-3">
                <span className="text-[#7b1a2e] font-black text-xl tracking-widest">
                    SENIOR SALES
                </span>
            </div>

            {/* Login box */}
            <div className="flex flex-1 items-center justify-center py-16">
                <div className="bg-white rounded-2xl shadow-md px-10 py-10 w-full max-w-md">

                    {/* Title */}
                    <h1 className="text-[#7b1a2e] font-black text-3xl text-center mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-gray-400 text-sm text-center mb-8">
                        Sign in to your Senior Sales account
                    </p>

                    {/* Username */}
                    <div className="mb-5">
                        <label className="text-[#7b1a2e] font-bold text-sm mb-1 block">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-[#7b1a2e] transition"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="text-[#7b1a2e] font-bold text-sm mb-1 block">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-[#7b1a2e] transition"
                        />
                        <p className="text-right mt-1">
                            <a href="#" className="text-[#7b1a2e] text-xs hover:underline">
                                Forgot password?
                            </a>
                        </p>
                    </div>

                    {/* Sign in button */}
                    <button className="w-full bg-[#7b1a2e] text-white font-bold py-2.5 rounded-lg hover:opacity-80 cursor-pointer transition">
                        Sign In
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-gray-400 text-xs">or</span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    {/* Join button */}
                    <button className="w-full border-2 border-[#7b1a2e] text-[#7b1a2e] font-bold py-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                        Create an Account
                    </button>

                    {/* Footer */}
                    <p className="text-center text-gray-400 text-xs mt-6">
                        By signing in you agree to our{" "}
                        <a href="#" className="text-[#7b1a2e] hover:underline">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-[#7b1a2e] hover:underline">
                            Privacy Policy
                        </a>
                    </p>

                </div>
            </div>
        </div>
    );
}