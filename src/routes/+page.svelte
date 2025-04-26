<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import Logo from "../components/logo.svelte";
    import Navbar from "../components/navbar.svelte";
    import Card from "../components/card.svelte";
    import Footer from "../components/footer.svelte";
    import { isLoggedIn } from "$lib/auth";
    import { goto } from "$app/navigation";

    gsap.registerPlugin(ScrollTrigger);

    let title;
    let hero;
    let nextSection;
    let cardContainer;
    let heroBackgroundColor = "white"; // Reactive variable for background color
    onMount(() => {
        if (isLoggedIn()) {
            goto("/dashboard");
        }
    });

    onMount(() => {
        gsap.to(title, {
            scale: 40,
            duration: 1.5,
            ease: "power4.in",
            scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "+=1000",
                scrub: true,
                pin: true,
                onUpdate: (self) => {
                    gsap.to(hero, {
                        backgroundColor:
                            self.progress > 0.7 ? "black" : "white", 
                        duration: 0.4,
                        overwrite: true,
                    });
                },
            },
        });

        gsap.to(cardContainer, {
            xPercent: -4.9 * cardContainer.children.length,
            ease: "easein",
            scrollTrigger: {
                trigger: nextSection,
                pin: true,
                start: "top top",
                end: `+=${cardContainer.offsetWidth}`,
                scrub: true,
                invalidateOnRefresh: true,
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
        { text: "50+ Courses", bg: "#fca5a5" }, // red
        { text: "69k+ Learners", bg: "#86efac" }, // green
        { text: "By Developers", bg: "#e9d5ff" }, // purple
        { text: "For Developers", bg: "#fcff42" }, // deeper yellow
    ];

    let statContainer;
    let statSections = [];

    onMount(() => {
        statSections = statContainer.querySelectorAll(".stat");

        statSections.forEach((section, i) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom top",
                ease: "easeInOut",
                scrub: true,
                pin: true,
                pinSpacing: false,
            });
        });
    });
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

<div bind:this={statContainer} class="relative bg-black">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
        ><path
            fill="#fde68a"
            fill-opacity="1"
            d="M0,0L20,26.7C40,53,80,107,120,133.3C160,160,200,160,240,154.7C280,149,320,139,360,133.3C400,128,440,128,480,144C520,160,560,192,600,186.7C640,181,680,139,720,112C760,85,800,75,840,74.7C880,75,920,85,960,106.7C1000,128,1040,160,1080,165.3C1120,171,1160,149,1200,165.3C1240,181,1280,235,1320,234.7C1360,235,1400,181,1420,154.7L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path></svg
    >
    {#each statData as { text, bg }, i}
        <section
            class="stat h-screen w-screen flex items-center justify-center"
            style="background-color: {bg};"
        >
            <h1
                class="text-[10vw] font-bold uppercase leading-none text-black w-full px-16 text-center sm:text-[5vw] md:text-[7vw] lg:text-[10vw] max-w-full"
            >
                {@html text}
            </h1>
        </section>
    {/each}
</div>

<section class="h-screen w-screen bg-black"></section>
<!-- Next section after stats -->
<section
    class="h-screen w-screen bg-white text-black flex justify-center items-center"
>
    <a
        class="cursor-pointer bg-black text-white text-[9vw] hover:bg-yellow-100 hover:text-black transition duration-200 font-medium tracking widest uppercase p-4 leading-none text-black sm:text-[5vw] md:text-[7vw] lg:text-[10vw] max-w-full rounded-full "
        href="/auth/signup">Join Us Now!</a
    >
</section>

<Footer />

<style>
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
