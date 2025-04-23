<script>
    import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />

<header class="flex m-4 items-center justify-center">
    <div
        class="mx-auto w-full px-5 py-16 md:px-8 md:py-20 bg-blue-200 border rounded-lg text-center"
    >
        <!-- Component -->
        <div class="w-full items-center gap-9 sm:gap-16">
            <div
                class="text-center w-full flex justify-center items-center flex-col"
            >
                <!-- Title -->
                <h1
                    class="mb-4 text-4xl font-bold md:text-6xl md:leading-tight"
                >
                    Discover A Better Way To Learn.
                </h1>
                <p class="mb-6 text-sm text-gray-500 sm:text-xl lg:mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus
                </p>
                <!-- Button -->
                <div class="mb-6 flex items-stretch md:mb-10 lg:mb-12 gap-4">
                    <a
                        href="javascript:void(0);"
                        class="btn btn-primary btn-lg rounded-lg text-base"
                    >
                        Get Started
                    </a>
                    <a
                        href="javascript:void(0);"
                        class="btn btn-secondary btn-lg rounded-lg text-base"
                    >
                        Book Demo
                    </a>
                </div>
                <!-- App -->
                <div class="mt-2 grid max-w-2xl grid-cols-5 items-center gap-8">
                    <a href="javascript:void(0);">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FMicrosoft%20Logo.svg?alt=media&token=d9a0206b-8dfa-407e-af77-5c5d33abfbb3"
                            alt=""
                            class="inline-block"
                        />
                    </a>
                    <a href="javascript:void(0);">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPayPal%20Logo.svg?alt=media&token=73b2c12b-b86c-4e6c-8158-ea096d5bacb5"
                            alt=""
                            class="inline-block"
                        />
                    </a>
                    <a href="javascript:void(0);">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FGroup.svg?alt=media&token=a908887b-af31-4e54-997a-d5e4dc3be56a"
                            alt=""
                            class="inline-block"
                        />
                    </a>
                    <a href="javascript:void(0);">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FChase%20Logo.svg?alt=media&token=f179fc6d-e765-4969-8966-62ff6ec35e8f"
                            alt=""
                            class="inline-block"
                        />
                    </a>
                    <a href="javascript:void(0);">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FWalmart%20Logo.svg?alt=media&token=614d63e8-5961-4c97-8dc5-cf69669c3848"
                            alt=""
                            class="inline-block"
                        />
                    </a>
                </div>
            </div>
            <!-- Hero Image -->
        </div>
    </div>
</header>
<section class="m-4 grid grid-cols-1 lg:grid-cols-3 gap-4 rounded-lg">
    <!-- Left Big Block -->
    <div
        class="lg:col-span-2 bg-yellow-300 border rounded-lg p-6 flex flex-col justify-center"
    >
        <h2 class="text-3xl font-bold mb-4">How it works</h2>
        <p class="mb-6 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
            purus sit amet luctus magna fringilla urna
        </p>
        <div class="grid gap-4">
            <div
                class="flex items-center gap-4 bg-gray-100 rounded-md p-4 border border-gray-400"
            >
                <div
                    class="h-10 w-10 flex items-center justify-center bg-white rounded font-bold"
                >
                    0.
                </div>
                <p class="text-sm">Step one description goes here.</p>
            </div>
            <div
                class="flex items-center gap-4 bg-gray-100 rounded-md p-4 border border-gray-400"
            >
                <div
                    class="h-10 w-10 flex items-center justify-center bg-white rounded font-bold"
                >
                    1.
                </div>
                <p class="text-sm">Step one description goes here.</p>
            </div>
            <div
                class="flex items-center gap-4 bg-gray-100 rounded-md p-4 border border-gray-400"
            >
                <div
                    class="h-10 w-10 flex items-center justify-center bg-white rounded font-bold"
                >
                    2.
                </div>
                <p class="text-sm">Step one description goes here.</p>
            </div>
            <div
                class="flex items-center gap-4 bg-gray-100 rounded-md p-4 border border-gray-400"
            >
                <div
                    class="h-10 w-10 flex items-center justify-center bg-white rounded font-bold"
                >
                    3.
                </div>
                <p class="text-sm">Step one description goes here.</p>
            </div>
        </div>
    </div>

    <!-- Right Column: Stacked -->
    <div class="flex flex-col gap-4">
        <!-- Top small block -->
        <div
            class="flex-1 bg-rose-300 text-black border border-black rounded-lg p-6 flex flex-col justify-between"
        >
            <div>
                <h3 class="text-2xl font-bold tracking-wide uppercase mb-2">
                    Open-Source & Community Driven
                </h3>
                <p class="mb-4">
                    Built with love by devs for devs. Fork it, break it, rebuild
                    it — it’s all yours. We're just here to make the web less
                    boring.
                </p>
                <p class="mb-4">
                    Whether you're fixing typos or launching entire modules,
                    you're part of the crew. We move fast, meme hard, and ship
                    often.
                </p>
            </div>
            <div
                class="mt-6 pt-4 border-t border-black flex flex-wrap gap-4 text-sm"
            >
                <a href="#" class="flex items-center gap-2 hover:underline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="w-4 h-4"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 .5C5.4.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.3-1.9-1.3-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 .1 1.5-.9 1.5-.9.9-1.5 2.5-1.1 3.1-.8.1-.7.3-1.1.5-1.3-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.2 1.8-.4 2.7-.4s1.8.1 2.7.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 2 1.2 3.2 0 4.4-2.7 5.4-5.3 5.7.4.3.6.9.6 1.9v2.8c0 .3.2.7.8.6C20.6 22.3 24 17.8 24 12.5 24 5.9 18.6.5 12 .5z"
                        />
                    </svg>
                    Contribute
                </a>

                <a href="#" class="flex items-center gap-2 hover:underline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="w-4 h-4"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M20.3 0H3.7C1.7 0 0 1.7 0 3.7v16.6C0 22.3 1.7 24 3.7 24h16.6c2 0 3.7-1.7 3.7-3.7V3.7C24 1.7 22.3 0 20.3 0zM7.1 20.4H3.6V9h3.5v11.4zm-1.8-13c-1.1 0-1.9-.9-1.9-2s.9-2 2-2 2 .9 2 2c0 1.2-.9 2-2.1 2zm15.1 13h-3.5v-5.5c0-1.3 0-3-1.8-3s-2 1.4-2 2.9v5.6h-3.5V9h3.3v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.3 2.3 4.3 5.2v6.4z"
                        />
                    </svg>
                    LinkedIn
                </a>

                <a href="#" class="flex items-center gap-2 hover:underline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="w-4 h-4"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M20.317 4.369c-.714.317-1.48.531-2.285.626a3.936 3.936 0 0 0 1.724-2.168 7.866 7.866 0 0 1-2.49.949A3.924 3.924 0 0 0 16.616 3c-2.18 0-3.946 1.766-3.946 3.946 0 .309.035.611.103.9-3.28-.164-6.188-1.737-8.134-4.126a3.934 3.934 0 0 0-.534 1.984c0 1.37.697 2.578 1.756 3.287a3.902 3.902 0 0 1-1.787-.494v.05c0 1.913 1.36 3.509 3.167 3.872a3.943 3.943 0 0 1-1.78.067c.501 1.565 1.956 2.701 3.678 2.732a7.892 7.892 0 0 1-4.872 1.679c-.316 0-.627-.018-.935-.055A11.134 11.134 0 0 0 7.29 21c7.19 0 11.12-5.952 11.12-11.12 0-.17-.004-.34-.012-.509a7.933 7.933 0 0 0 1.92-2.002z"
                        />
                    </svg>
                    Twitter
                </a>

                <a href="#" class="flex items-center gap-2 hover:underline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="w-4 h-4"
                        viewBox="0 0 245 240"
                    >
                        <path
                            d="M104.4 5.7c-36.2 1.7-65.3 12.4-86.5 33.5C-7.7 72.1-5.7 145.8 24.1 192.8c8.5 13.2 19.8 24.8 33.1 34.2 12.3 8.7 31.4 5.7 39.3-7.1 3.7-5.9 5.2-12.2 5.2-19 0-6.3.2-13.3 1.4-19.4 1.3-6.8 6.6-10.6 13-13.2-1.4-.7-2.8-1.5-4.1-2.4-13.2-9.1-24.7-20.3-32.4-34.8-4.2-7.6-6.5-16.2-5.4-25.1.6-5.1 2.3-9.8 4.5-14.3 1.2-2.5 4.3-3.2 6.6-1.7 8.2 5.3 15.6 11.8 22.8 18.5 9.6 9 20.5 15.6 33.7 17.8 8.1 1.4 15.7.3 23.4-2.3 8.7-2.9 17-6.8 25.4-10.5 5.5-2.4 10.5-5.4 15.3-9.1 2.4-1.9 5.9-.1 6.2 2.8 1 8.8-1 17.3-3.3 25.7-5.6 20.3-17.5 36.5-36 48.2-3.4 2.2-6.9 4.2-10.3 6.4-1.1.7-1.5 1.3-.8 2.7 8.3 17.3 8.8 35.3 3.3 53.5-1.6 5.3 2.6 10.4 8.1 10.4 5.1.1 10.3.1 15.4.1 11.3-.1 22.2-1.8 32.8-5.4 20.7-6.9 36.5-20.2 47.2-39.3 14.7-25.6 21.7-53.2 20.7-82.5-1.7-52.1-19.7-94.1-63.6-119.3C177.4 8.5 142.1 4.1 104.4 5.7z"
                        />
                    </svg>
                    Join Discord
                </a>
            </div>
        </div>

        <!-- Bottom small block -->
        <div
            class="flex-1 bg-indigo-200 text-black border border-black rounded-lg p-6"
        >
            <h3 class="text-xl font-bold mb-2">📚 Video Courses</h3>
            <p>
                Curated tutorials that actually teach. Learn by doing with our
                interactive video lessons.
            </p>
        </div>
    </div>
</section>
