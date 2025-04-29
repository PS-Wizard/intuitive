<script>
    import Logo from "./logo.svelte";
    import { isLoggedIn } from "$lib/auth.js";
    import gsap from "gsap";
    import { onMount } from "svelte";

    let isOpen = false;
    let loggedIn = false;

    if (typeof window !== "undefined") {
        loggedIn = isLoggedIn();
    }

    onMount(() => {
        gsap.from(gsap.utils.toArray(".nav-btn"), {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.1,
            delay: 1.6,
            ease: "power2.out",
        });
    });
</script>

<nav
    class="navbar flex items-center justify-between px-6 py-4 backdrop-blur bg-white/30 z-50"
>
    <a
        class="font-2xl nav-btn uppercase font-bold tracking-wide bg-black text-white inline"
        href="/">Intuitive</a
    >

    <!-- Right: Desktop Nav -->
    <div class="hidden md:flex space-x-6 text-sm font-medium">
        {#if loggedIn}
            <a
                href="/leaderboards"
                class="nav-btn btn btn-secondary border border-black rounded-lg btn-md"
            >
                Leaderboards
            </a>
            <a
                href="/dashboard/courses"
                class="nav-btn btn btn-secondary border border-black rounded-lg btn-md"
            >
                Courses
            </a>
            <a
                href="/dashboard/challenges"
                class="nav-btn btn btn-secondary border border-black rounded-lg btn-md"
            >
                Challenges
            </a>
            <a href="/profile" class="nav-btn btn btn-primary btn-md rounded-lg"
                >Profile</a
            >
        {:else}
            <a
                href="/auth/login"
                class="nav-btn btn btn-secondary border border-black rounded-lg btn-md"
            >
                Login
            </a>
            <a
                href="/auth/signup"
                class="nav-btn btn btn-primary btn-md rounded-lg">Sign Up</a
            >
        {/if}
    </div>

    <!-- Mobile Menu Toggle -->
    <button class="md:hidden" on:click={() => (isOpen = !isOpen)}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    </button>
</nav>

<!-- Mobile Nav (shown below nav on toggle) -->
{#if isOpen}
    <div class="md:hidden px-6 pb-4 space-y-2 text-sm font-medium uppercase">
        {#if loggedIn}
            <a href="/dashboard/courses" class="block">Courses</a>
            <a href="/dashboard/challenges" class="block">Challenges</a>
            <a href="/leaderboards" class="block">leaderboards</a>
            <a href="/profile" class="block">Profile</a>
        {:else}
            <a href="/auth/login" class="block">Login</a>
            <a href="/auth/signup" class="block">Signup</a>
        {/if}
    </div>
{/if}
