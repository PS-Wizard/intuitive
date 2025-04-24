<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import Logo from "../components/logo.svelte";
    import Navbar from "../components/navbar.svelte";
    import Card from "../components/card.svelte";

    gsap.registerPlugin(ScrollTrigger);

    let title;
    let hero;
    let nextSection;
    let cardContainer;
    let heroBackgroundColor = "white"; // Reactive variable for background color

    onMount(() => {
        gsap.to(title, {
            scale: 20,
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "+=1000",
                scrub: true,
                pin: true,
                onUpdate: (self) => {
                    // Smoothly animate the background color
                    gsap.to(hero, {
                        backgroundColor:
                            self.progress > 0.5 ? "black" : "white",
                        duration: 0.3, // Adjust duration for smoother/faster transition
                        overwrite: true, // Prevent conflicts if animation updates rapidly
                    });
                },
            },
        });

        gsap.to(cardContainer, {
            xPercent: -4.9 * cardContainer.children.length,
            ease: "easeInOut",
            scrollTrigger: {
                trigger: nextSection,
                pin: true,
                start: "top top",
                end: `+=${cardContainer.offsetWidth}`,
                scrub: 0.9,
                invalidateOnRefresh: true, // Re-calculate on resize
            },
        });
    });

    const cardTypes = [
        {
            img: "/assets/iot.svg",
            color: "bg-blue-200",
            imgPadding: "p-8",
        },
        {
            img: "/assets/backend.svg",
            color: "bg-yellow-200",
            imgPadding: "p-8",
        },
        {
            img: "/assets/chatbot_robot.svg",
            color: "bg-rose-200",
            imgPadding: "p-8",
        },
        {
            img: "/assets/frontend.svg",
            color: "bg-rose-200",
            imgPadding: "p-8",
        },
    ];

    const cardCount = 5; // how many times to repeat the set

    const statData = [
        { text: "100% Opensource", bg: "#fde68a" }, // yellow
        { text: "30+ Sponsors", bg: "#bfdbfe" }, // blue
        { text: "&infin; Courses", bg: "#fca5a5" }, // red
        { text: "69k+ Learners", bg: "#86efac" }, // green
        { text: "By Developers", bg: "#e9d5ff" }, // purple
        { text: "For Developers", bg: "#fcd34d" }, // deeper yellow
    ];
</script>

<Navbar />

<section
    bind:this={hero}
    style="background-color: {heroBackgroundColor};"
    class="hero h-screen w-screen flex items-center justify-center overflow-hidden"
>
    <h1
        bind:this={title}
        class="title text-[15vw] font-medium tracking-tight leading-none text-white z-20"
    >
        INTUITIVE<sup class="align-super">™</sup>
    </h1>
</section>

<section
    bind:this={nextSection}
    class="next-section h-screen w-full bg-black text-white overflow-hidden"
    on:mousemove={(e) => {
        const tooltip = document.getElementById("tooltip");
        tooltip.style.left = e.clientX + 10 + "px";
        tooltip.style.top = e.clientY + 10 + "px";
    }}
>
    <div
        bind:this={cardContainer}
        class="card-container h-full flex items-center px-16 gap-10"
        style="width: max-content;"
    >
        {#each Array(cardCount) as _, i}
            {#each cardTypes as type, j}
                <Card
                    title="Frontend Master class"
                    img={type.img}
                    description="Some random thing some random thing yada yada blah blah ugabuga type shit"
                    badgeA="UI"
                    badgeB="Frontend"
                    color={type.color}
                    imgPadding={type.imgPadding}
                    isNew={j === 0}
                />
            {/each}
        {/each}
    </div>

    <div
        id="tooltip"
        class="absolute uppercase font-medium bg-white text-black px-2 py-1 text-sm rounded shadow pointer-events-none"
        style="top: 0; left: 0;"
    >
        Explore Courses
    </div>
</section>

{#each statData as { text, bg }, i}
    <div
        class="stat-section h-screen w-screen flex items-center justify-center overflow-hidden scroll-snap-start"
        style="background-color: {bg};"
    >
        <h1
            class="text-[10vw] font-bold uppercase leading-none text-black w-full px-16 text-center sm:text-[5vw] md:text-[7vw] lg:text-[10vw] max-w-full"
        >
            {@html text}
        </h1>
    </div>
{/each}

<!-- Next section after stats -->
<section
    class="h-screen w-screen bg-black text-white flex justify-center items-center"
>
    <button
        class="cursor-pointer bg-white text-black text-[9vw] hover:bg-yellow-100 hover:underline transition duration-200 font-medium tracking widest uppercase p-4 leading-none text-black sm:text-[5vw] md:text-[7vw] lg:text-[10vw] max-w-full"
        >Join Us Now!</button
    >
</section>

<section
    class="footer h-screen w-screen bg-black text-white flex flex-col justify-center items-center"
>
    <h1
        class="text-[12vw] font-bold uppercase tracking-wide underline leading-none text-center mb-8"
    >
        INTUITIVE
    </h1>
    <div
        class="links flex gap-8 text-lg font-medium justify-center items-center"
    >
        <a
            href="#about"
            class="uppercase hover:underline transition duration-300">About</a
        >
        <a
            href="#services"
            class="uppercase hover:underline transition duration-300"
            >Services</a
        >
        <a
            href="#contact"
            class="uppercase hover:underline transition duration-300">Contact</a
        >
        <a
            href="#privacy"
            class="uppercase hover:underline transition duration-300">Privacy</a
        >
    </div>
    <div class="mt-8 text-sm text-center">
        <p>&copy; 2025 INTUITIVE. All Rights Reserved.</p>
    </div>
</section>

<style>
    @media (max-width: 768px) {
        .links {
            flex-direction: column;
        }
    }
    .title {
        color: black;
    }

    .card-container {
        width: max-content; /* Essential for horizontal scrolling */
    }
    .align-super {
        position: relative;
        top: -1em; /* Move it up a little to align with the text */
        font-size: 0.3em;
    }
</style>
