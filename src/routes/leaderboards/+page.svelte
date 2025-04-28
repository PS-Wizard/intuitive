<script>
    import { onMount } from "svelte";
    import Navbar from "../../components/navbar.svelte";
    import gsap from "gsap";
    import Footer from "../../components/footer.svelte";

    const leaders = [
        {
            rank: 1,
            name: "John Doe",
            badge: "Wizard",
            points: 3200,
        },
        {
            rank: 2,
            name: "Jane Smith",
            badge: "Eternal",
            points: 3100,
        },
        {
            rank: 3,
            name: "Alice Brown",
            badge: "Phoenix",
            points: 3050,
        },
        {
            rank: 4,
            name: "Bob White",
            badge: "Vanguard",
            points: 2900,
        },
        {
            rank: 5,
            name: "Charlie Black",
            badge: "Wizard",
            points: 2700,
        },
        {
            rank: 6,
            name: "Derek Lee",
            badge: "Eternal",
            points: 2600,
        },
        {
            rank: 7,
            name: "Eve Green",
            badge: "Phoenix",
            points: 2500,
        },
        {
            rank: 8,
            name: "Frank Blue",
            badge: "Vanguard",
            points: 2400,
        },
        {
            rank: 9,
            name: "Grace Red",
            badge: "Wizard",
            points: 2300,
        },
        {
            rank: 10,
            name: "Holly Yellow",
            badge: "Eternal",
            points: 2200,
        },
        {
            rank: 11,
            name: "You",
            badge: "Eternal",
            points: 1100,
        },
    ];

    onMount(() => {
        gsap.from(".hero-title", {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: "power3.out",
            delay: 1.5,
        });

        gsap.from(gsap.utils.toArray(".problem-row"), {
            opacity: 0,
            y: 15,
            duration: 0.5,
            stagger: 0.05,
            delay: 2,
            ease: "power2.out",
        });
    });
</script>

<Navbar />

<section class="py-16 px-6 md:px-12 lg:px-24 space-y-10">
    <h1
        class="hero-title text-4xl md:text-5xl lg:text-[150px] font-bold tracking-tight text-center text-gray-900 uppercase"
    >
        Leaderboards
    </h1>
</section>

<section class="w-full px-5 overflow-hidden rounded-lg shadow-lg bg-white">
    <div class="overflow-x-auto rounded-lg shadow">
        <table class="table w-full">
            <thead class="bg-gray-100">
                <tr>
                    <th
                        class="text-left font-semibold uppercase tracking-wider text-gray-600 py-3 px-4"
                        >#</th
                    >
                    <th
                        class="text-left font-semibold uppercase tracking-wider text-gray-600 py-3 px-4"
                        >User</th
                    >
                    <th
                        class="text-left font-semibold uppercase tracking-wider text-gray-600 py-3 px-4"
                        >Title</th
                    >
                    <th
                        class="text-left font-semibold uppercase tracking-wider text-gray-600 py-3 px-4"
                        >Rank</th
                    >
                </tr>
            </thead>
            <tbody>
                {#each leaders as p, index (p.rank)}
                    <tr
                        class="problem-row hover:bg-gray-50 transition-colors uppercase cursor-pointer {index ===
                        leaders.length - 1
                            ? 'outline-1'
                            : ''}"
                    >
                        <td class="py-3 px-4">{p.rank}</td>
                        <td class="py-3 px-4 font-medium text-gray-800">
                            <p class:line-through={p.completed}>{p.name}</p>
                        </td>
                        <td class="py-3 px-4">
                            <div class="badge">
                                {#if p.badge === "Wizard"}
                                    <span
                                        class="bg-black text-white font-medium tracking-wide uppercase border-none"
                                        >{p.badge}</span
                                    >
                                {:else if p.badge === "Eternal"}
                                    <span
                                        class="bg-orange-100 text-black font-medium tracking-wide uppercase border-none"
                                        >{p.badge}</span
                                    >
                                {:else if p.badge === "Phoenix"}
                                    <span
                                        class="bg-orange-200 text-black font-medium tracking-wide uppercase border-none"
                                        >{p.badge}</span
                                    >
                                {:else if p.badge === "Vanguard"}
                                    <span
                                        class="bg-orange-300 text-black font-medium tracking-wide uppercase border-none"
                                        >{p.badge}</span
                                    >
                                {/if}
                            </div>
                        </td>
                        <td class="py-3 px-4">{p.points}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</section>

<Footer />
<style>
    table {
        border-collapse: collapse;
    }
    th {
        text-align: left;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    td {
        padding: 1rem;
    }
    tr {
        border-bottom: 1px solid #e5e5e5;
    }
    tr:hover {
        background-color: #f7f7f7;
    }
    .badge {
        display: inline-block;
    }
</style>

