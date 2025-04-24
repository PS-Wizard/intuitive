<script>
    import Logo from "./logo.svelte";
    let isOpen = false;
</script>

<nav
    class="flex items-center justify-between px-6 py-4 backdrop-blur bg-white/30 z-50"
>
    <!-- Left: Logo -->
    <Logo />

    <!-- Right: Desktop Nav -->
    <div class="hidden md:flex space-x-6 text-sm font-medium">
        <a
            href="/courses"
            class="btn btn-secondary border border-black rounded-lg btn-md"
            >Login</a
        >
        <a href="/community" class="btn btn-primary btn-md rounded-lg"
            >Sign Up</a
        >
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
    <div class="md:hidden px-6 pb-4 space-y-2 text-sm font-medium">
        <a href="/courses" class="block">Courses</a>
        <a href="/challenges" class="block">Challenges</a>
        <a href="/community" class="block">Leaderboard</a>
    </div>
{/if}
