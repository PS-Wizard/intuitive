<script>
    import { onMount } from "svelte";
    import Navbar from "../../components/navbar.svelte";
    import { annotate } from "rough-notation";
    import gsap from "gsap";
    import Footer from "../../components/footer.svelte";
    function renderMarkmap(markdown, opts) {
        opts = {
            duration: 500,
            ...opts,
        };
        const { Transformer, Markmap, loadCSS, loadJS } = markmap;
        const transformer = new Transformer();
        const { root, features } = transformer.transform(markdown);
        const { styles, scripts } = transformer.getUsedAssets(features);
        if (styles) loadCSS(styles);
        if (scripts)
            loadJS(scripts, {
                getMarkmap: () => markmap,
            });
        Markmap.create("#markmap", opts, root);
    }

    onMount(() => {
        const elements = document.querySelectorAll("#highlight");

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
            stagger: 0.1,
            delay: 2,
            ease: "power2.out",
        });

        // Stagger annotation with gsap
        gsap.from(elements, {
            duration: 0.5,
            opacity: 0,
            stagger: 0.2, // Delay between each element animation
            delay: 3,
            onStart: () => {
                elements.forEach((element) => {
                    const annotation = annotate(element, {
                        type: "highlight",
                        color: "yellow",
                    });
                    annotation.show();
                });
            },
        });

        renderMarkmap(`
# Web Development Roadmap

## Basics
- HTML
- CSS
- JavaScript

## Frontend Frameworks
- React
- Vue
- Svelte
- Angular

## Backend
- Node.js
- Express
- Django
- Go (chi / fiber)

## Databases 
- SQL
    - PostgreSQL
    - MySQL
- NoSQL
    - MongoDB
    - Redis

## DevOps & Deployment
- Linux Basics
- Docker
- CI/CD
- AWS / Vercel / Netlify

## Extras
- Web Security
- Testing
    - Unit Tests
    - Integration Tests
- WebSockets
- GraphQL
- REST APIs
`);
    });
</script>

<Navbar />
<section class="w-full px-8 py-12 space-y-20 flex flex-col items-center gap-4">
    <h1
        class="hero-title text-4xl md:text-5xl lg:text-[150px] font-bold tracking-tight text-center text-gray-900 uppercase"
    >
        Some New Course
    </h1>
</section>
<section class="w-full px-12 py-12 gap-10 flex flex-col">
    <div class="problem-row flex gap-4 w-full flex-col">
        <h1 class="title bg-black text-white text-2xl text-right">
            About The Course
        </h1>
        <div class="text-gray-700">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                quia neque reiciendis possimus libero. Animi ratione et
                deserunt! Ducimus, ipsam pariatur qui veritatis dolore neque
                repellat <span id="highlight" >aperiam impedit blanditiis labore</span
                >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Cumque quia neque
                reiciendis possimus libero. Animi ratione et deserunt! Ducimus, ipsam
                pariatur qui veritatis dolore neque repellat
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia
                neque reiciendis sit amet consectetur adipisicing elit. Cumque quia
                neque reiciendis possimus libero. Animi ratione et deserunt! Ducimus,
                ipsam pariatur qui veritatis dolore neque repellat aperiam impedit
                blanditiis labore. quia neque reiciendis sit amet consectetur adipisicing
                elit. Cumque quia neque reiciendis possimus libero. Animi ratione
                et deserunt! Ducimus, ipsam pariatur qui veritatis dolore neque repellat
                aperiam impedit blanditiis labore. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cumque quia neque reiciendis possimus libero. Animi
                ratione et deserunt! Ducimus, ipsam pariatur qui veritatis dolore
                neque repellat
                <span id="highlight">aperiam impedit </span>blanditiis labore Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Cumque quia neque
                reiciendis sit amet consectetur adipisicing elit. Cumque quia neque
                reiciendis possimus libero. Animi ratione et deserunt! Ducimus, ipsam
                pariatur qui veritatis dolore neque repellat aperiam impedit blanditiis
                labore.
            </p>
        </div>
    </div>
    <div class="problem-row flex gap-4 w-full flex-col">
        <h1 class="title bg-black text-white text-2xl text-right">
            About The Tutor
        </h1>
        <div class="text-gray-700">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                quia neque reiciendis possimus libero. Animi ratione et
                deserunt! Ducimus, ipsam pariatur qui veritatis dolore neque
                repellat <span id="highlight" >aperiam impedit blanditiis labore</span
                >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Cumque quia neque
                reiciendis possimus libero. Animi ratione et deserunt! Ducimus, ipsam
                pariatur qui veritatis dolore neque repellat
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia
                neque reiciendis sit amet consectetur adipisicing elit. Cumque quia
                neque reiciendis possimus libero. Animi ratione et deserunt! Ducimus,
                ipsam pariatur qui veritatis dolore neque repellat aperiam impedit
                blanditiis labore. quia neque reiciendis sit amet consectetur adipisicing
                elit. Cumque quia neque reiciendis possimus libero. Animi ratione
                et deserunt! Ducimus, ipsam pariatur qui veritatis dolore neque repellat
                aperiam impedit blanditiis labore. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cumque quia neque reiciendis possimus libero. Animi
                ratione et deserunt! Ducimus, ipsam pariatur qui veritatis dolore
                neque repellat
                <span id="highlight">aperiam impedit </span>blanditiis labore Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Cumque quia neque
                reiciendis sit amet consectetur adipisicing elit. Cumque quia neque
                reiciendis possimus libero. Animi ratione et deserunt! Ducimus, ipsam
                pariatur qui veritatis dolore neque repellat aperiam impedit blanditiis
                labore.
            </p>
        </div>
    </div>
</section>
<section class="w-full px-8 py-12 space-y-20 gap-4">
    <h1
        class="hero-title text-4xl md:text-5xl lg:text-[120px] font-bold tracking-tight text-right text-gray-900 uppercase"
    >
        Roadmap
    </h1>
</section>

<div class="h-screen border-t-2 w-screen flex justify-center items-center">
    <svg id="markmap" class="problem-row w-full h-full m-12"></svg>
    <div class="w-full h-full">
        <h1 class="hero-title bg-black text-white text-2xl text-left m-12">
            What This Course Covers
        </h1>
        <div class="problem-row text-gray-700 px-12 flex flex-col gap-6">
            <div>
                <h2 class="text-xl font-semibold mb-2 uppercase">
                    Prerequisites
                </h2>
                <ul class="list-disc list-inside space-y-1">
                    <li>Basic Programming</li>
                    <li>Git & GitHub</li>
                </ul>
            </div>

            <div>
                <h2 class="text-xl font-semibold mb-2 uppercase">Frontend</h2>
                <ul class="list-disc list-inside space-y-1">
                    <li>HTML5 + Semantic Tags</li>
                    <li>CSS3 (Flexbox, Grid)</li>
                    <li>JavaScript (ES6+, Fetch API, DOM Manipulation)</li>
                    <li>SPA Frameworks (React, Svelte, Vue)</li>
                </ul>
            </div>

            <div>
                <h2 class="text-xl font-semibold mb-2 uppercase">Backend</h2>
                <ul class="list-disc list-inside space-y-1">
                    <li>API Design (REST, GraphQL)</li>
                    <li>Node.js Basics</li>
                    <li>Database Integration (SQL, NoSQL)</li>
                    <li>Authentication (JWT, OAuth)</li>
                </ul>
            </div>

            <div>
                <h2 class="text-xl font-semibold mb-2 uppercase">
                    Advanced Topics
                </h2>
                <ul class="list-disc list-inside space-y-1">
                    <li>Docker & Containers</li>
                    <li>Microservices Architecture</li>
                    <li>Scalability Patterns</li>
                </ul>
            </div>
        </div>
        <div class="m-12 flex gap-2 flex-col">
            <a class="btn btn-primary rounded-lg tracking-widest hover:bg-white hover:text-black hover:border-2 hover:border-black font-lg uppercase w-full py-4 px-6" href="/specificCourse"> Enroll Now </a> 
        </div>
    </div>
</div>

<Footer />

<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/d3@6"></script>
    <script src="https://cdn.jsdelivr.net/npm/markmap-lib"></script>
    <script src="https://cdn.jsdelivr.net/npm/markmap-view"></script>
</svelte:head>
