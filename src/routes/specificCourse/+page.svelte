<script>
    import { selector } from "gsap/gsap-core";
    import Navbar from "../../components/navbar.svelte";
    import { onMount } from "svelte";
    import Footer from "../../components/footer.svelte";
    import CodeBlock from "../../components/CodeBlock.svelte";
    import gsap from "gsap";
    const roadmap = [
        { title: "Intro", desc: "Welcome to the course." },
        { title: "Setup", desc: "Install all the stuff you need." },
        { title: "First Project", desc: "Build your first mini app." },
        { title: "Advanced Stuff", desc: "Deep dive into advanced topics." },
    ];
    let current = $state(1);

    const total = 7;

    const next = () => {
        if (current < total) current += 1;
    };

    const prev = () => {
        if (current > 1) current -= 1;
    };

    onMount(() => {
        gsap.from(".hero-title", {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: "power3.out",
            delay: 1.5,
        });

        // Animate the iframe when it scrolls into view
        gsap.from("#player", {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            delay: 1.6,
            ease: "power2.out",
        });
    });
</script>

<Navbar />

<section>
    <section
        class="w-full px-8 py-12 space-y-20 flex flex-col items-center gap-4"
    >
        <h1
            class="hero-title text-4xl md:text-5xl lg:text-[150px] font-bold tracking-tight text-center text-gray-900 uppercase"
        >
            Some Course Title
        </h1>
    </section>

    <section
        class="h-auto bg-white shadow-lg rounded-lg flex justify-center items-center flex-col gap-2"
    >
        <!-- First div where video will go -->
        <div class="bg-slate-100 w-full mb-12">
            <div class="relative aspect-video w-full">
                <iframe
                    title="Course Content"
                    id="player"
                    src="https://www.youtube.com/embed/x7v6SNIgJpE?&controls=0&showinfo=0"
                    frameborder="0"
                    allow="autoplay"
                    class="absolute top-0 left-0 w-full h-full"
                ></iframe>
            </div>
        </div>

        <!-- Second div -->

        <div
            class="flex flex-col bg-white items-center h-auto justify-center w-full p-12"
        >
            {#if current === 1}
                <section class="content-section prose w-full max-w-3xl mb-12">
                    <h1 class="font-medium">Introduction to HTMX</h1>
                    <ul>
                        <li>Excitement around HTMX, love/hate reactions.</li>
                        <li>
                            Funny story about being called an "HTMX
                            propagandist."
                        </li>
                        <li>Concepts trace back to mid-90s research.</li>
                        <li>Smart use of memes for dev education.</li>
                    </ul>

                    <h2 class="font-semibold">Example Code</h2>
                    <CodeBlock
                        code={`<button hx-get="/increment" hx-target="#counter">Increment</button>`}
                        language="html"
                    />
                </section>
            {:else if current === 2}
                <section class="prose w-full max-w-3xl mb-12">
                    <h1 class="font-medium">Introduction to HTMX 2</h1>
                    <ul>
                        <li>Excitement around HTMX, love/hate reactions.</li>
                        <li>
                            Funny story about being called an "HTMX
                            propagandist."
                        </li>
                        <li>Concepts trace back to mid-90s research.</li>
                        <li>Smart use of memes for dev education.</li>
                    </ul>

                    <h2>Example Code</h2>
                    <CodeBlock
                        code={`<button hx-get="/increment" hx-target="#counter">Increment</button>`}
                        language="html"
                    />
                </section>
            {:else if current === 3}
                <section class="prose w-full max-w-3xl mb-12">
                    <h1 class="font-medium">Introduction to HTMX</h1>
                    <ul>
                        <li>Excitement around HTMX, love/hate reactions.</li>
                        <li>
                            Funny story about being called an "HTMX
                            propagandist."
                        </li>
                        <li>Concepts trace back to mid-90s research.</li>
                        <li>Smart use of memes for dev education.</li>
                    </ul>

                    <h2>Example Code</h2>
                    <CodeBlock
                        code={`<button hx-get="/increment" hx-target="#counter">Increment</button>`}
                        language="html"
                    />
                </section>
            {:else if current === 4}
                <section class="prose w-full max-w-3xl mb-12">
                    <h1 class="font-medium">Introduction to HTMX</h1>
                    <ul>
                        <li>Excitement around HTMX, love/hate reactions.</li>
                        <li>
                            Funny story about being called an "HTMX
                            propagandist."
                        </li>
                        <li>Concepts trace back to mid-90s research.</li>
                        <li>Smart use of memes for dev education.</li>
                    </ul>

                    <h2>Example Code</h2>
                    <CodeBlock
                        code={`<button hx-get="/increment" hx-target="#counter">Increment</button>`}
                        language="html"
                    />
                </section>
            {:else if current === 5}
                <section class="prose w-full max-w-3xl mb-12">
                    <h1 class="font-medium">Introduction to HTMX</h1>
                    <ul>
                        <li>Excitement around HTMX, love/hate reactions.</li>
                        <li>
                            Funny story about being called an "HTMX
                            propagandist."
                        </li>
                        <li>Concepts trace back to mid-90s research.</li>
                        <li>Smart use of memes for dev education.</li>
                    </ul>

                    <h2>Example Code</h2>
                    <CodeBlock
                        code={`<button hx-get="/increment" hx-target="#counter">Increment</button>`}
                        language="html"
                    />
                </section>
            {:else if current === 6}
                <section class="prose w-full max-w-3xl mb-12">
                    <h1 class="font-medium">Introduction to HTMX</h1>
                    <ul>
                        <li>Excitement around HTMX, love/hate reactions.</li>
                        <li>
                            Funny story about being called an "HTMX
                            propagandist."
                        </li>
                        <li>Concepts trace back to mid-90s research.</li>
                        <li>Smart use of memes for dev education.</li>
                    </ul>

                    <h2>Example Code</h2>
                    <CodeBlock
                        code={`<button hx-get="/increment" hx-target="#counter">Increment</button>`}
                        language="html"
                    />
                </section>
            {:else if current === 7}
                <section class="prose w-full max-w-3xl mb-12">
                    <h1 class="font-medium">Introduction to HTMX</h1>
                    <ul>
                        <li>Excitement around HTMX, love/hate reactions.</li>
                        <li>
                            Funny story about being called an "HTMX
                            propagandist."
                        </li>
                        <li>Concepts trace back to mid-90s research.</li>
                        <li>Smart use of memes for dev education.</li>
                    </ul>

                    <h2>Example Code</h2>
                    <CodeBlock
                        code={`<button hx-get="/increment" hx-target="#counter">Increment</button>`}
                        language="html"
                    />
                </section>
            {/if}

            <div class="join mt-4">
                <button
                    class="join-item btn"
                    on:click={prev}
                    disabled={current === 1}
                >
                    Previous
                </button>
                <button
                    class="join-item btn"
                    on:click={next}
                    disabled={current === total}
                >
                    Next
                </button>
            </div>
        </div>
    </section>
    <Footer />
</section>
