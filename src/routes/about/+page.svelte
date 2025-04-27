<script>
    import { onMount } from "svelte";
    import Navbar from "../../components/navbar.svelte";
    import { gsap } from "gsap";

    onMount(() => {
        gsap.from(".hero-title", {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: "power3.out",
            delay: 1.5,
        });

        gsap.from(".about-text p", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            delay: 2,
        });

        gsap.from(".team-member", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3,
            delay: 2.5,
        });
        gsap.utils.toArray(".team-slide").forEach((el) => {
            gsap.from(el, {
                opacity: 0,
                y: 100,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%", // when top of el hits 80% of viewport
                    toggleActions: "play none none none",
                },
            });
        });
    });
</script>

<Navbar />
<main
    class="px-6 md:px-16 py-24 space-y-32 w-full min-h-screen bg-white flex items-center flex-col"
>
    <h1
        class="hero-title text-4xl md:text-5xl lg:text-[120px] font-extrabold leading-none tracking-tight text-center text-gray-900 uppercase"
    >
        About Us
    </h1>
    <section
        class="about-text max-w-4xl mx-auto space-y-10 text-gray-700 text-lg md:text-xl leading-relaxed"
    >
        <p>
            We’re building a platform where learning meets competition. Think
            LeetCode, but with real-time battles, personalized tutorials, and
            ELO-based ranks that actually reflect your skill.
        </p>
        <p>
            Learn by doing, compete with your peers, and grow your
            problem-solving skills with structured video content,
            community-driven challenges, and interactive feedback.
        </p>
        <p>
            Whether you're prepping for interviews or just vibing with cool
            algorithms, we got you.
        </p>
        <p class="text-gray-500 text-sm uppercase tracking-widest pt-10">
            Join. Solve. Rank up.
        </p>
    </section>
    <section class="w-screen flex flex-col">
        <h1
            class="hero-title text-4xl m-4 md:text-5xl lg:text-[100px] font-extrabold leading-none tracking-wide text-center text-gray-900 uppercase"
        >
            Meet the team
        </h1>
        <section class="relative w-full overflow-hidden">
            <img
                src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-235521-jj_nm160224_3163.jpg"
                alt="owner"
                class="w-full object-cover"
            />
            <div
                class="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40"
            >
                <h1 class="text-9xl font-bold uppercase font-medium">
                    Charles Olivera
                </h1>

                <div class="flex justify-center items-center gap-2">
                    <p class="text-xl font-medium tracking-wide uppercase">
                        Lead Design UI
                    </p>
                </div>
            </div>
        </section>
        <section class="relative w-full overflow-hidden">
            <img
                src="https://sportshub.cbsistatic.com/i/r/2022/06/23/9fd34a13-31f3-4fd0-a99d-643934b8ac4d/thumbnail/1200x675/18dbecde12b8da9e1d3a441082a0e7de/charles-oliveira-grayscale.png"
                alt="owner"
                class="w-full object-cover"
            />
            <div
                class="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40"
            >
                <h1 class="text-9xl font-bold uppercase font-medium">
                    Charles Olivera
                </h1>

                <div class="flex justify-center items-center gap-2">
                    <p class="text-xl font-medium tracking-wide uppercase">
                        Lead Design UI
                    </p>
                </div>
            </div>
        </section>
        <section class="relative w-full overflow-hidden">
            <img
                src="https://i0.wp.com/tapinufc.com/wp-content/uploads/2021/07/ufc-1.jpeg?fit=1125%2C733&ssl=1"
                alt="owner"
                class="w-full object-cover"
            />
            <div
                class="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40"
            >
                <h1 class="text-9xl font-bold uppercase font-medium">
                    Charles Olivera
                </h1>

                <div class="flex justify-center items-center gap-2">
                    <p class="text-xl font-medium tracking-wide uppercase">
                        Lead Design UI
                    </p>
                </div>
            </div>
        </section>
    </section>
</main>
