<script>
    import { fade } from "svelte/transition";
</script>

<main class="w-full flex flex-col lg:flex-row-reverse h-screen" in:fade>
    <!-- Right Side - Yellow block (hidden on small screens) -->
    <div
        class="hidden lg:flex flex-1 flex-col items-center justify-center bg-blue-300"
    ></div>

    <!-- Left Side - Login Form -->
    <div class="flex-1 flex items-center justify-center bg-white text-gray-600">
        <div class="w-full max-w-md space-y-8 px-4 sm:px-0">
            <div>
                <div class="mt-5 space-y-2">
                    <h3 class="text-gray-800 text-2xl font-bold sm:text-3xl">
                        Log in
                    </h3>
                    <p>
                        Don’t have an account?
                        <a
                            href="/auth/signup"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                            >Sign up</a
                        >
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-x-3">
                <button
                    class="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"
                >
                    <img
                        src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg"
                        alt="Google"
                        class="w-5 h-5"
                    />
                </button>
                <button
                    class="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"
                >
                    <img
                        src="https://raw.githubusercontent.com/sidiDev/remote-assets/f7119b9bdd8c58864383802fb92c7fc3a25c0646/twitter-icon.svg"
                        alt="Twitter"
                        class="w-5 h-5"
                    />
                </button>
                <button
                    class="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"
                >
                    <img
                        src="https://raw.githubusercontent.com/sidiDev/remote-assets/0d3b55a09c6bb8155ca19f43283dc6d88ff88bf5/github-icon.svg"
                        alt="Github"
                        class="w-5 h-5"
                    />
                </button>
            </div>

            <div class="relative">
                <span class="block w-full h-px bg-gray-300"></span>
                <p
                    class="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto"
                >
                    Or continue with
                </p>
            </div>

            <form class="space-y-5">
                <div>
                    <label class="font-medium">Email</label>
                    <input
                        type="email"
                        required
                        class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                </div>
                <div>
                    <label class="font-medium">Password</label>
                    <input
                        type="password"
                        required
                        class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                </div>
                <button
                    class="w-full px-4 py-2 text-white font-medium bg-black hover:bg-white hover:text-black hover:border active:bg-black rounded-lg duration-150"
                >
                    Log in
                </button>
            </form>
        </div>
    </div>
</main>
