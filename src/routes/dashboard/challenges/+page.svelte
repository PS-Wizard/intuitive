<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    import Navbar from "../../../components/navbar.svelte";
    import Footer from "../../../components/footer.svelte";

    let search = "";
    let difficultyFilter = "all";
    let categoryFilter = "all"; // New filter for category
    let filteredProblems = [];

    const problems = [
        { id: 1, title: "Two Sum", difficulty: "Easy", category: "Array" },
        {
            id: 2,
            title: "Palindrome Check",
            difficulty: "Easy",
            category: "String",
        },
        {
            id: 3,
            title: "Binary Tree Level Order",
            difficulty: "Medium",
            category: "Tree",
        },
        { id: 4, title: "LRU Cache", difficulty: "Hard", category: "Design" },
        {
            id: 5,
            title: "Merge K Sorted Lists",
            difficulty: "Hard",
            category: "Linked List",
        },
        {
            id: 6,
            title: "Valid Parentheses",
            difficulty: "Easy",
            category: "Stack",
        },
        {
            id: 7,
            title: "Longest Substring Without Repeat",
            difficulty: "Medium",
            category: "Sliding Window",
        },
        {
            id: 8,
            title: "Clone Graph",
            difficulty: "Medium",
            category: "Graph",
        },
        { id: 9, title: "Word Ladder", difficulty: "Hard", category: "Graph" },
        {
            id: 10,
            title: "Course Schedule",
            difficulty: "Medium",
            category: "Graph",
        },
        { id: 11, title: "Two Sum", difficulty: "Easy", category: "Array" },
        {
            id: 12,
            title: "Palindrome Check",
            difficulty: "Easy",
            category: "String",
        },
        {
            id: 13,
            title: "Binary Tree Level Order",
            difficulty: "Medium",
            category: "Tree",
        },
        { id: 14, title: "LRU Cache", difficulty: "Hard", category: "Design" },
        {
            id: 15,
            title: "Merge K Sorted Lists",
            difficulty: "Hard",
            category: "Linked List",
        },
        {
            id: 16,
            title: "Valid Parentheses",
            difficulty: "Easy",
            category: "Stack",
        },
        {
            id: 17,
            title: "Longest Substring Without Repeat",
            difficulty: "Medium",
            category: "Sliding Window",
        },
        {
            id: 18,
            title: "Clone Graph",
            difficulty: "Medium",
            category: "Graph",
        },
        { id: 19, title: "Word Ladder", difficulty: "Hard", category: "Graph" },
        {
            id: 20,
            title: "Course Schedule",
            difficulty: "Medium",
            category: "Graph",
        },
    ];

    $: filteredProblems = problems.filter((p) => {
        const searchMatch = p.title
            .toLowerCase()
            .includes(search.toLowerCase());
        const difficultyMatch =
            difficultyFilter === "all" || p.difficulty === difficultyFilter;
        const categoryMatch =
            categoryFilter === "all" || p.category === categoryFilter; // New category filter
        return searchMatch && difficultyMatch && categoryMatch;
    });

    onMount(() => {
        gsap.from(".hero-title", {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: "power3.out",
            delay: 1.5,
        });

        gsap.from(".filter-section", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            delay: 2,
            ease: "power2.out",
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

    function sortProblems() {
        filteredProblems = [...filteredProblems].sort((a, b) => a.id - b.id);
    }

    function clearFilters() {
        search = "";
        difficultyFilter = "all";
        categoryFilter = "all";
    }

    // Get unique categories for the filter dropdown
    $: uniqueCategories = ["all", ...new Set(problems.map((p) => p.category))];
</script>

<Navbar />
<section class="py-16 px-6 md:px-12 lg:px-24 space-y-10">
    <h1 class="hero-title text-4xl md:text-5xl lg:text-[150px] font-bold tracking-tight text-center text-gray-900 uppercase" >
        Challenges
    </h1>

    <div
        class="filter-section flex flex-col sm:flex-row justify-between items-center gap-6"
    >
        <div class="form-control w-full max-w-md">
            <input
                type="text"
                class="input rounded-lg w-full"
                bind:value={search}
                placeholder="Search problems…"
            />
        </div>

        <div
            class="flex flex-col sm:flex-row sm:w-full gap-4 items-center justify-end"
        >
            <div class="form-control">
                <select
                    class="w-full select select-bordered rounded-lg"
                    bind:value={difficultyFilter}
                >
                    <option value="all">All Difficulties</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div class="form-control">
                <select
                    class="w-full select select-bordered rounded-lg"
                    bind:value={categoryFilter}
                >
                    {#each uniqueCategories as category}
                        <option value={category}>{category}</option>
                    {/each}
                </select>
            </div>
            <button class="btn btn-primary rounded-lg" on:click={clearFilters}>
                Clear Filters
            </button>
            <button class="btn btn-primary bg-orange-100 border-2 text-black rounded-lg" on:click={clearFilters}>
                Challenge A Friend
            </button>
        </div>
    </div>

    <div class="overflow-x-auto rounded-lg shadow">
        <table class="table w-full">
            <thead class="bg-gray-100">
                <tr>
                    <th
                        class="text-left font-semibold uppercase tracking-wider text-gray-600 py-3 px-4"
                    >
                        #
                    </th>
                    <th
                        class="text-left font-semibold uppercase tracking-wider text-gray-600 py-3 px-4"
                    >
                        Title
                    </th>
                    <th
                        class="text-left font-semibold uppercase tracking-wider text-gray-600 py-3 px-4"
                    >
                        Difficulty
                    </th>
                    <th
                        class="text-left font-semibold uppercase tracking-wider text-gray-600 py-3 px-4"
                    >
                        Category
                    </th>
                    <th
                        class="text-right font-semibold uppercase tracking-wider text-gray-600 py-3 px-4"
                    >
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each filteredProblems as p (p.id)}
                    <tr
                        class="problem-row hover:bg-gray-50 transition-colors uppercase cursor-pointer"
                    >
                        <td class="py-3 px-4">{p.id}</td>
                        <td class="py-3 px-4 font-medium text-gray-800"
                            >{p.title}</td
                        >
                        <td class="py-3 px-4">
                            <div class="badge">
                                {#if p.difficulty === "Easy"}
                                    <span
                                        class="bg-green-100 text-green-700 border-none"
                                        >{p.difficulty}</span
                                    >
                                {:else if p.difficulty === "Medium"}
                                    <span
                                        class="bg-yellow-100 text-yellow-700 border-none"
                                        >{p.difficulty}</span
                                    >
                                {:else if p.difficulty === "Hard"}
                                    <span
                                        class="bg-red-100 text-red-700 border-none"
                                        >{p.difficulty}</span
                                    >
                                {/if}
                            </div>
                        </td>
                        <td class="py-3 px-4">{p.category}</td>
                        <td class="py-3 px-4 text-right">
                            <div class="space-x-2 flex justify-end">
                                <button
                                    class="btn btn-sm btn-outline rounded-lg"
                                    >Solve</button
                                >
                                <button class="btn btn-sm btn-link rounded-lg"
                                    >Learn</button
                                >
                            </div>
                        </td>
                    </tr>
                {/each}
                {#if filteredProblems.length === 0}
                    <tr>
                        <td
                            colspan="5"
                            class="py-6 px-4 text-center text-gray-500"
                        >
                            No problems found matching your criteria.
                        </td>
                    </tr>
                {/if}
            </tbody>
        </table>
    </div>
</section>

<Footer />
<style>
    /* Optional: Add some custom styles for very small screens if needed */
    @media (max-width: 640px) {
        .filter-section {
            flex-direction: column;
            align-items: stretch;
        }

        .filter-section > div {
            width: 100%;
        }

        .flex-col.sm\:flex-row > div {
            width: 100%;
        }

        .flex-col.sm\:flex-row {
            align-items: stretch;
        }

        .table thead th {
            padding: 0.75rem 0.5rem;
            font-size: 0.8rem;
        }

        .table tbody td {
            padding: 0.75rem 0.5rem;
            font-size: 0.9rem;
        }

        .text-right.font-semibold.uppercase.tracking-wider.text-gray-600.py-3.px-4 {
            text-align: center;
        }

        .table tbody tr td:last-child {
            text-align: center;
        }

        .space-x-2.flex.justify-end {
            justify-content: center !important;
        }
    }
</style>

