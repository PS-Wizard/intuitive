<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { isLoggedIn } from "$lib/auth";
    import Navbar from "../../components/navbar.svelte";
    import Card from "../../components/card.svelte";
    import gsap from "gsap";
    import Footer from "../../components/footer.svelte";

    let myContainer;
    let exploreContainer;

    const cardTypes = [
        { img: "/assets/iot.svg", color: "bg-blue-200", imgPadding: "p-8" },
        {
            img: "/assets/backend.svg",
            color: "bg-yellow-200",
            imgPadding: "pt-4",
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

    const myCourses = cardTypes.map((c, i) => ({
        ...c,
        title: `Course ${i + 1} - 69% Complete`,
        description: "You're enrolled in this course.",
        badgeA: "Primeagen",
        badgeB: "Enrolled",
        isNew: false,
        location: `/courses/my-course-${i}`,
    }));

    const exploreCourses = cardTypes.map((c, i) => ({
        ...c,
        title: `New Course ${i + 1}`,
        description: "Check this out!",
        badgeA: "New",
        badgeB: "Popular",
        isNew: true,
        location: `/courses/explore-${i}`,
    }));

    onMount(() => {
        if (!isLoggedIn()) goto("/auth/login");

        // Animate all .card elements from center
        const allCards = document.querySelectorAll(".card");

        gsap.fromTo(
            allCards,
            {
                opacity: 0,
                scale: 0.8,
                y: -100,
            },
            {
                opacity: 1,
                scale: 1,
                delay: 1.5,
                y: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "power3.out",
            },
        );
    });
</script>

<Navbar />

<section
    class="min-h-screen w-full px-8 py-12 space-y-20 flex flex-col items-center gap-4"
>
    <!-- My Current Courses -->
    <div>
        <div
            class="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6"
        >
            <h2
                class="text-lg border-2 border-black font-bold bg-yellow-200 px-4 py-2 rounded-full font-bold uppercase"
            >
                Pick up where you left off!
            </h2>
            <div
                class="border-2 text-lg font-semibold bg-orange-100 px-4 py-2 rounded-full"
            >
                🔥 24-day streak
            </div>
        </div>

        <div
            class="flex flex-wrap gap-8 w-full justify-center items-center"
            bind:this={myContainer}
        >
            {#each myCourses as c}
                <Card
                    title={c.title}
                    description={c.description}
                    img={c.img}
                    color={`${c.color} border-2`}
                    imgPadding={c.imgPadding}
                    badgeA={c.badgeA}
                    badgeB={c.badgeB}
                    isNew={c.isNew}
                    location={c.location}
                />
            {/each}
        </div>
    </div>

    <!-- Explore New Courses -->
    <div>
        <div
            class="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6"
        >
            <h2
                class="text-lg text-center border-2 border-black font-bold bg-yellow-100 text-black px-4 py-2 rounded-full font-bold uppercase"
            >
                Checkout Top Courses
            </h2>
            <div
                class="border-2 border-black text-lg font-semibold px-4 py-2 rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-200"
            >
                View More ->
            </div>
        </div>

        <div
            class="flex flex-wrap gap-8 w-full justify-center items-center"
            bind:this={myContainer}
        >
            {#each myCourses as c}
                <Card
                    title={c.title}
                    description={c.description}
                    img={c.img}
                    color={`${c.color} border-2`}
                    imgPadding={c.imgPadding}
                    badgeA={c.badgeA}
                    badgeB={c.badgeB}
                    isNew
                    location={c.location}
                />
            {/each}
        </div>
    </div>
</section>
<Footer />
