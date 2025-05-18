<script>
    import { onMount, onDestroy } from "svelte";
    import { writable } from "svelte/store";
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores"; // this gives you current URL

    const isOpen = writable(false);
    let inputRef;
    let query = "";

    const commonSuggestions = {
        "/dashboard/courses": [
            {
                name: "Node.js Fundamentals",
                tutorName: "Alice Johnson",
                shortcut: " - Backend",
                action: () => goto("/courseDescription"),
            },
            {
                name: "Python for Backend",
                tutorName: "Bob Williams",
                shortcut: " - Backend",
                action: () => goto("/courseDescription"),
            },
            {
                name: "Advanced Databases",
                tutorName: "Charlie Brown",
                shortcut: " - Backend",
                action: () => goto("/courseDescription"),
            },
            {
                name: "Express.js and MongoDB",
                tutorName: "David Lee",
                shortcut: " - Backend",
                action: () => goto("/courseDescription"),
            },
            {
                name: "Go for Backend Development",
                tutorName: "Eve White",
                shortcut: " - Backend",
                action: () => goto("/courseDescription"),
            },
            {
                name: "React: The Complete Guide",
                tutorName: "Diana Miller",
                shortcut: " - Frontend",
                action: () => goto("/courseDescription"),
            },
            {
                name: "Vue.js Essentials",
                tutorName: "Ethan Davis",
                shortcut: " - Frontend",
                action: () => goto("/courseDescription"),
            },
            {
                name: "Svelte for Beginners",
                tutorName: "Fiona Green",
                shortcut: " - Frontend",
                action: () => goto("/courseDescription"),
            },
            {
                name: "Angular Deep Dive",
                tutorName: "George Carter",
                shortcut: " - Frontend",
                action: () => goto("/courseDescription"),
            },
        ],
        "/profile/personalDetails": [
            {
                name: "Edit Name",
                shortcut: " - Change Your Name",
                action: () => document.querySelector(".nameInput").focus(),
            },
            {
                name: "Edit Password",
                shortcut: " - Change Your Password",
                action: () => document.querySelector(".passwordInput").focus(),
            },
        ],
        "/profile": [
            {
                name: "View Personal Details",
                shortcut: " - Change Your Personal Details",
                action: () => goto("/profile/personalDetails"),
            },
            {
                name: "Privacy Policy",
                shortcut: " - View Our Privacy Policy",
                action: () => goto("/privacyPolicy"),
            },
            {
                name: "Log Out",
                shortcut: " - Log Out Of Your Account",
                action: () => {
                    const logoutDiv = document.querySelector(".logout-btn");
                    logoutDiv?.focus();
                },
            },
            {
                name: "Delete Your Account",
                shortcut: " - View Our Privacy Policy",
                action: () => {
                    const deleteDiv = document.querySelector(".delete-account");
                    deleteDiv?.focus();
                },
            },
        ],
        "/dashboard": [
            {
                name: "Continue Course 1",
                shortcut: " - 69% complete",
                action: () => goto("/specificCourse"),
            },
            {
                name: "Continue Course 2",
                shortcut: " - 49% complete",
                action: () => goto("/specificCourse"),
            },
            {
                name: "Continue Course 3",
                shortcut: " - 19% complete",
                action: () => goto("/specificCourse"),
            },
            {
                name: "Continue Course 4",
                shortcut: " - 19% complete",
                action: () => goto("/specificCourse"),
            },
        ],
    };

    const available_pages = [
        {
            name: "Profile",
            shortcut: " - Open Your Profile Page",
            action: () => goto("/profile"),
        },
        {
            name: "Courses Page",
            shortcut: " - Open All Courses Page",
            action: () => goto("/dashboard/courses"),
        },
        {
            name: "Dashboard",
            shortcut: " - Go To Your Dashboard",
            action: () => goto("/dashboard"),
        },
        {
            name: "Challenges",
            shortcut: " - Tackle Away Challenges",
            action: () => goto("/dashboard/challenges"),
        },
    ];

    const misc_pages = [
        {
            name: "Privacy Policy",
            shortcut: " - View Our Privacy Policy",
            action: () => goto("/privacy"),
        },
        {
            name: "Cookie Policy",
            shortcut: " - View Our Cookie Policy",
            action: () => goto("/cookies"),
        },
    ];

    function toggleOpen(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
            e.preventDefault();
            isOpen.update((v) => !v);
        }
    }

    function handleSelect(cmd) {
        cmd.action();
        isOpen.set(false);
    }

    function handleKeydown(e) {
        if (e.key === "Enter") {
            const topResult = [
                ...filteredSuggestions,
                ...filteredPages,
                ...filteredMisc,
            ][0];
            if (topResult) {
                query = "";
                handleSelect(topResult);
            }
        } else if (e.key === "Escape") {
            isOpen.set(false);
        }
    }

    onMount(() => {
        if (browser) {
            window.addEventListener("keydown", toggleOpen);
        }
    });

    onDestroy(() => {
        if (browser) {
            window.removeEventListener("keydown", toggleOpen);
        }
    });

    $: currentPath = $page.url.pathname;
    $: pageSuggestions = commonSuggestions[currentPath] || [];

    $: filteredSuggestions = pageSuggestions.filter((s) =>
        s.name.toLowerCase().includes(query.toLowerCase()),
    );
    $: filteredPages = available_pages.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()),
    );
    $: filteredMisc = misc_pages.filter((m) =>
        m.name.toLowerCase().includes(query.toLowerCase()),
    );

    $: if ($isOpen && browser) setTimeout(() => inputRef?.focus(), 0);
</script>

<!-- Search button bottom right -->
<button
	class="fixed bottom-0 right-0 m-[20px] w-12 h-12 flex items-center justify-center cursor-pointer bg-primary text-white rounded-full shadow-lg z-40"
	on:click={() => isOpen.set(true)}
	aria-label="Open search"
>
	<i class="fas fa-search"></i>
</button>

<button
  class="fixed font-sm font-semibold bottom-0 m-[20px] w-auto px-4 py-2 h-12 bg-black flex items-center justify-center cursor-pointer text-white rounded-lg shadow-lg z-40"
  aria-label="Show Experience"
>
    Exp: 69420 🔥
</button>

{#if $isOpen}
    <div
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
        <div
            class="bg-base-100 p-4 rounded-2xl shadow-2xl w-full max-w-lg space-y-4"
        >
            <input
                bind:this={inputRef}
                bind:value={query}
                type="text"
                placeholder="Type a command or search..."
                class="input input-bordered w-full rounded-lg"
                on:keydown={handleKeydown}
            />

            <div class="space-y-2 max-h-80 overflow-y-auto">
                {#if filteredSuggestions.length}
                    <div>
                        <h3 class="text-sm text-gray-400 mb-1">Suggestions</h3>
                        <ul class="w-full menu bg-base-200 rounded-lg">
                            {#each filteredSuggestions as cmd, i}
                                <li>
                                    <button
                                        class="flex rounded-lg py-3 justify-between {i ===
                                        0
                                            ? 'bg-gray-200'
                                            : ''}"
                                        on:click={() => handleSelect(cmd)}
                                    >
                                        <span> {cmd.name}</span>
                                        <span> {cmd.shortcut}</span>
                                    </button>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/if}

                {#if filteredPages.length}
                    <div class="w-full">
                        <h3 class="text-sm text-gray-400 mb-1">Pages</h3>
                        <ul class="w-full menu bg-base-200 rounded-lg">
                            {#each filteredPages as page, i}
                                <li>
                                    <button
                                        class="flex py-3 justify-between rounded-lg w-full {filteredSuggestions.length ===
                                            0 && i === 0
                                            ? 'bg-gray-200'
                                            : ''}"
                                        on:click={() => handleSelect(page)}
                                    >
                                        <span>{page.name}</span>
                                        <span>{page.shortcut}</span>
                                    </button>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/if}

                {#if filteredMisc.length}
                    <div>
                        <h3 class="text-sm text-gray-400 mb-1">
                            Miscellaneous
                        </h3>
                        <ul class="w-full menu bg-base-200 rounded-lg">
                            {#each filteredMisc as misc, i}
                                <li>
                                    <button
                                        class="flex py-3 rounded-lg justify-between {filteredSuggestions.length ===
                                            0 &&
                                        filteredPages.length === 0 &&
                                        i === 0
                                            ? 'bg-gray-200'
                                            : ''}"
                                        on:click={() => handleSelect(misc)}
                                    >
                                        <span>{misc.name}</span>
                                    </button>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}
