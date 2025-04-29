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
            delay: 1.9,
        });

        // Animate the iframe when it scrolls into view
        gsap.from("#player", {
            opacity: 0,
            scale: 0.4,
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
        <div class="w-full mb-12">
            <div class="relative aspect-video w-full">
                <iframe
                    title="Course Content"
                    id="player"
                    src="https://www.youtube.com/embed/x7v6SNIgJpE?&controls=1&showinfo=0"
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
                <section class="content-section prose-lg w-full max-w-3xl mb-12">
                    <h1 class="font-medium uppercase tracking-wide">Introduction to HTMX</h1>
                    <ul>
                        <li>
                            The hype around HTMX has been growing in the dev
                            community recently. Some folks love it for its
                            simplicity, while others criticize it for straying
                            too far from the SPA approach.
                        </li>
                        <li>
                            Funny story: I was once called an "HTMX
                            propagandist" for pushing the framework in my team.
                            I guess it's controversial, but it gets the job
                            done!
                        </li>
                        <li>
                            The principles behind HTMX are not exactly new. They
                            go back to research from the mid-90s, where people
                            were already experimenting with hypermedia-driven
                            applications.
                        </li>
                        <li>
                            Incorporating memes into the dev world isn't just
                            for fun—HTMX has a strong meme-based marketing
                            strategy that's caught the attention of developers
                            worldwide.
                        </li>
                    </ul>

                    <h2 class="font-medium">
                        Example Code: Simple Button for Action
                    </h2>
                    <CodeBlock
                        fontSize="20px"
                        code={`<button hx-get="/increment" hx-target="#counter">Increment</button>`}
                        language="html"
                    />
                    <p>
                        HTMX enables the ability to send HTTP requests directly
                        from the markup. This button will perform a GET request
                        to "/increment" and update the content of the #counter
                        element with the response.
                    </p>
                </section>
            {:else if current === 2}
                <section class="prose w-full max-w-3xl mb-12">
                    <h1 class="font-medium">
                        Understanding HTMX: The Architecture
                    </h1>
                    <ul>
                        <li>
                            At its core, HTMX is designed to enable incremental
                            HTML updates, which means it doesn't require the
                            entire page to be re-rendered. This offers
                            performance benefits and a more natural user
                            experience.
                        </li>
                        <li>
                            HTMX uses a set of attributes to enhance HTML
                            elements with AJAX-based behavior. It’s like adding
                            a little magic to your forms, buttons, and links
                            without the need for JavaScript.
                        </li>
                        <li>
                            One of HTMX’s key strengths is its simplicity. You
                            can start using it without a build process,
                            JavaScript bundlers, or complex configurations,
                            making it an excellent choice for quick projects or
                            legacy apps.
                        </li>
                        <li>
                            The history behind HTMX is fascinating. It draws
                            inspiration from technologies like Server Push and
                            Comet, which were early attempts at enabling
                            real-time, dynamic web pages back in the late 90s
                            and early 2000s.
                        </li>
                    </ul>

                    <h2 class="font-medium">
                        Example Code: Submitting a Form with HTMX
                    </h2>
                    <CodeBlock
                        fontSize="20px"
                        code={`<form hx-post="/submit" hx-target="#response">Submit</form>`}
                        language="html"
                    />
                    <p>
                        This example shows how easy it is to make a form submit
                        without a page reload. It sends the form data to the
                        server using HTMX’s `hx-post` method and updates the
                        #response element with the server’s reply.
                    </p>
                </section>
            {:else if current === 3}
                <section class="prose w-full max-w-3xl mb-12">
                    <h1 class="font-medium">
                        HTMX and Its Place in the Modern Web
                    </h1>
                    <ul>
                        <li>
                            HTMX’s minimalistic approach has garnered attention,
                            especially for developers who want to keep things
                            simple without relying on frameworks like React or
                            Vue.
                        </li>
                        <li>
                            Despite the rise of JS-heavy frameworks, HTMX shows
                            that it’s possible to build highly interactive
                            applications while sticking to server-rendered HTML.
                        </li>
                        <li>
                            HTMX doesn’t come with the baggage of complex state
                            management or deep component hierarchies, which can
                            be overwhelming for developers new to modern
                            JavaScript frameworks.
                        </li>
                        <li>
                            It embraces the philosophy of “enhancing” HTML,
                            where HTML is still the core, and JavaScript is
                            simply used to augment the experience rather than
                            dominate it.
                        </li>
                    </ul>

                    <h2 class="font-medium">
                        Example Code: HTMX for Real-time Updates
                    </h2>
                    <CodeBlock
                        fontSize="20px"
                        code={`<div hx-get="/messages" hx-trigger="load" hx-target="#messages"></div>`}
                        language="html"
                    />
                    <p>
                        This code fetches data from the server when the page
                        loads and populates the #messages element with the
                        response. It’s great for live-updating content, like
                        news feeds or live notifications.
                    </p>
                </section>
            {:else if current === 4}
                <section class="prose w-full max-w-3xl mb-12">
                    <h1 class="font-medium">
                        Deeper Dive into HTMX Attributes
                    </h1>
                    <ul>
                        <li>
                            HTMX is powered by a set of simple HTML attributes
                            like `hx-get`, `hx-post`, `hx-target`, and
                            `hx-trigger`. Understanding these attributes is key
                            to mastering HTMX.
                        </li>
                        <li>
                            The `hx-get` and `hx-post` attributes are used for
                            triggering HTTP requests when a user interacts with
                            an element (like a button or link).
                        </li>
                        <li>
                            The `hx-target` attribute determines which part of
                            the page will be updated with the response from the
                            server. This makes it super useful for partial page
                            updates.
                        </li>
                        <li>
                            The `hx-trigger` attribute controls when an HTTP
                            request should be made. It can be triggered on
                            events like "click," "change," or even on a timer.
                        </li>
                    </ul>

                    <h2 class="font-medium">
                        Example Code: Conditional Requests with HTMX
                    </h2>
                    <CodeBlock
                        fontSize="20px"
                        code={`<input hx-get="/search" hx-target="#results" hx-trigger="keyup changed delay:500ms">`}
                        language="html"
                    />
                    <p>
                        This input field triggers a GET request to the server on
                        every keyup event, with a delay of 500ms. The server
                        response is injected into the #results element, which is
                        great for search or autocomplete functionality.
                    </p>
                </section>
            {:else if current === 5}
                <section class="prose w-full max-w-3xl mb-12">
                    <h1 class="font-medium">Advanced HTMX Patterns</h1>
                    <ul>
                        <li>
                            When dealing with more complex use cases, HTMX
                            shines by allowing you to manage entire page
                            fragments without loading a full page. You can
                            progressively enhance your web app without losing
                            control over server-side logic.
                        </li>
                        <li>
                            Combining HTMX with WebSockets for real-time updates
                            is incredibly powerful. It allows for a truly
                            dynamic user experience without relying on
                            client-heavy JavaScript solutions.
                        </li>
                        <li>
                            HTMX can even be used for handling form submissions,
                            validation, and dynamic form fields—all without
                            writing a line of JavaScript.
                        </li>
                        <li>
                            If you’re migrating a legacy project to HTMX, the
                            incremental adoption pattern is a good approach. You
                            don’t need to rewrite your entire frontend; you can
                            start by adding HTMX to small parts of your app and
                            see how it fits.
                        </li>
                    </ul>

                    <h2 class="font-medium">
                        Example Code: Using HTMX with WebSockets
                    </h2>
                    <CodeBlock
                        fontSize="20px"
                        code={`<div hx-ws="connect:/ws/updates" hx-target="#live-feed">Live Updates</div>`}
                        language="html"
                    />
                    <p>
                        This code snippet connects to a WebSocket endpoint and
                        listens for updates. As new data arrives, the content in
                        the #live-feed element is updated without a page reload.
                    </p>
                </section>
            {:else if current === 6}
                <section class="prose w-full max-w-3xl mb-12">
                    <h1 class="font-medium">
                        Building Interactive UI with HTMX
                    </h1>
                    <ul>
                        <li>
                            HTMX is great for building interactive,
                            server-driven UI components. It allows you to build
                            everything from simple buttons to complex dynamic
                            tables with minimal JavaScript.
                        </li>
                        <li>
                            Its flexibility makes it possible to implement
                            interactive widgets like modals, carousels, and
                            dropdowns with just a few attributes.
                        </li>
                        <li>
                            Using HTMX, you can keep your frontend codebase
                            small and your backend logic centralized, which
                            helps maintain a clean separation of concerns.
                        </li>
                        <li>
                            HTMX also works well with frameworks like Django and
                            Flask, where it can easily integrate into the
                            template rendering flow.
                        </li>
                    </ul>

                    <h2 class="font-medium">
                        Example Code: Toggle Modal with HTMX
                    </h2>
                    <CodeBlock
                        fontSize="20px"
                        code={`<button hx-get="/modal" hx-target="#modal-container" hx-trigger="click">Open Modal</button>`}
                        language="html"
                    />
                    <p>
                        Clicking the button triggers a GET request to the
                        server, which returns the modal content. The modal is
                        then inserted into the #modal-container element,
                        creating a dynamic popup.
                    </p>
                </section>
            {:else if current === 7}
                <section class="prose w-full max-w-3xl mb-12">
                    <h1 class="font-medium">Conclusion: Why HTMX Matters</h1>
                    <ul>
                        <li>
                            HTMX is a game-changer for developers who prefer
                            server-side rendering with dynamic updates. It lets
                            you create modern, interactive apps without the
                            overhead of client-side frameworks.
                        </li>
                        <li>
                            The real power of HTMX comes from its simplicity and
                            flexibility. You don’t need a massive JavaScript
                            framework to build modern web apps.
                        </li>
                        <li>
                            For developers who want full control over their
                            backend while keeping the frontend light and
                            reactive, HTMX is a great tool.
                        </li>
                        <li>
                            HTMX also blends well with other tools, such as
                            Alpine.js, making it easy to build reactive UIs
                            without being locked into a single ecosystem.
                        </li>
                    </ul>

                    <h2 class="font-medium">Final Thoughts</h2>
                    <p>
                        In conclusion, HTMX is a powerful tool that can
                        revolutionize how you approach modern web development.
                        It may not be the right choice for every project, but
                        for many use cases, it's a fantastic way to build
                        faster, simpler, and more maintainable applications.
                    </p>
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
