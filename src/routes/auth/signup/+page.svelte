<script>
    import { goto } from "$app/navigation";
    import { signupUser } from "$lib/auth.js";
    import { onMount } from "svelte";
    import gsap from "gsap";
    import Navbar from "../../../components/navbar.svelte";

    let email = "";
    let password = "";
    let error = "";
    let taglineElement;
    const rotateTagline = () => {
        gsap.to(taglineElement, {
            rotation: `+=${Math.random() * 360}`,
            duration: Math.random() * 2 + 1,
            ease: `power${Math.floor(Math.random() * 4) + 1}.inOut`,
            scale: Math.random() * (1.5 - 0.5) + 0.5,
            yoyo: true,
            repeat: -1,
            stagger: Math.random() * 0.5 + 0.2,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const user = signupUser({ email, password });
            console.log("Signed up:", user);
            goto("/auth/login");
        } catch (err) {
            error = err.message;
        }
    };
    onMount(() => {
        setInterval(rotateTagline(), 5000);
    });
</script>

<Navbar />
<main class="w-full flex flex-col lg:flex-row h-screen">
    <!-- Left Side - Yellow block (hidden on small screens) -->
    <div class="hidden lg:flex flex-1 flex-col items-center justify-center">
        <div class="h-[350px] w-[350px] border-2" bind:this={taglineElement}>
            <p class="text-4xl p-4 uppercase text-black">Lets Get Started!</p>
        </div>
    </div>

    <!-- Right Side - Signup Form -->
    <div class="flex-1 flex items-center justify-center bg-white text-gray-600">
        <div class="w-full max-w-md space-y-8 px-4 sm:px-0">
            <div>
                <div class="mt-5 space-y-2">
                    <h3 class="text-gray-800 lg:text-8xl font-medium uppercase text-3xl" >
                        Sign Up 
                    </h3>
                    <p>
                        Already have an account?
                        <a
                            href="/auth/login"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                            >Log in</a
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
            </div>

            <form class="space-y-5" on:submit={handleSubmit}>
                <div>
                    <label class="font-medium">Email</label>
                    <input
                        type="email"
                        bind:value={email}
                        required
                        class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                </div>
                <div>
                    <label class="font-medium">Password</label>
                    <input
                        type="password"
                        bind:value={password}
                        required
                        class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                </div>
                <button
                    class="w-full px-4 py-2 text-white font-medium bg-black hover:bg-white hover:text-black hover:border active:bg-black rounded-lg duration-150"
                >
                    Create account
                </button>
            </form>

            {#if error}
                <p class="text-red-500 mt-2">{error}</p>
            {/if}
        </div>
    </div>
</main>
