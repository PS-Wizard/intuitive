<script>
    import Footer from "../../../components/footer.svelte";
    import Navbar from "../../../components/navbar.svelte";
    import CourseCard from "../../../components/CourseCard.svelte"; // Import the component
    import { onMount } from "svelte";
    import gsap from "gsap";

    const backendCourses = [
        {
            title: "Node.js Fundamentals",
            tutorName: "Alice Johnson",
            rating: "4.8/5 Stars",
            profileBgColor: "bg-teal-100",
            cardBgColor: "bg-teal-50",
        },
        {
            title: "Python for Backend",
            tutorName: "Bob Williams",
            rating: "4.9/5 Stars",
            profileBgColor: "bg-indigo-100",
            cardBgColor: "bg-indigo-50",
        },
        {
            title: "Advanced Databases",
            tutorName: "Charlie Brown",
            rating: "4.7/5 Stars",
            profileBgColor: "bg-purple-100",
            cardBgColor: "bg-purple-50",
        },
    ];

    const frontendCourses = [
        {
            title: "React: The Complete Guide",
            tutorName: "Diana Miller",
            rating: "5.0/5 Stars",
            profileBgColor: "bg-red-100",
            cardBgColor: "bg-red-50",
        },
        {
            title: "Vue.js Essentials",
            tutorName: "Ethan Davis",
            rating: "4.9/5 Stars",
            profileBgColor: "bg-orange-100",
            cardBgColor: "bg-orange-50",
        },
        {
            title: "Svelte for Beginners",
            tutorName: "Fiona Green",
            rating: "4.8/5 Stars",
            profileBgColor: "bg-blue-100",
            cardBgColor: "bg-blue-50",
        },
    ];

    const apiDevelopmentCourses = [
        {
            title: "RESTful API Design",
            tutorName: "George Harris",
            rating: "4.9/5 Stars",
            profileBgColor: "bg-lime-100",
            cardBgColor: "bg-lime-50",
        },
        {
            title: "GraphQL Mastery",
            tutorName: "Hannah Clark",
            rating: "5.0/5 Stars",
            profileBgColor: "bg-pink-100",
            cardBgColor: "bg-pink-50",
        },
        {
            title: "Building Microservices",
            tutorName: "Ian Lewis",
            rating: "4.7/5 Stars",
            profileBgColor: "bg-yellow-200",
            cardBgColor: "bg-yellow-100",
        },
    ];

    onMount(() => {
        gsap.from(".hero-title", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 1.5,
            ease: "power4.out",
        });

        // Animate all .course-card elements
        const allCards = document.querySelectorAll(".course-card");

        gsap.fromTo(
            allCards,
            {
                opacity: 0,
                scale: 0.8,
                y: -50, // Slightly less than the hero title to feel connected
            },
            {
                opacity: 1,
                scale: 1,
                delay: 1.8, // Start after the hero title animation begins
                y: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "power3.out",
            },
        );
    });
</script>

<Navbar />

<main class="mx-2 sm:mx-">
    <section
        class="mb-2 py-8 lg:mb-10 lg:py-16 px-6 md:px-12 lg:px-24 space-y-10"
    >
        <h1
            class="hero-title text-3xl md:text-5xl lg:text-[150px] font-bold tracking-tight text-center text-gray-900 uppercase"
        >
            Explore Courses
        </h1>
    </section>
    <section class="mt-2 lg:mt-10 p-4 space-y-2">
        <h2
            class="text-lg border-2 border-black font-bold bg-blue-200 px-4 py-2 inline-block rounded-full font-bold uppercase"
        >
            Backend Courses
        </h2>
        <section
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
            {#each backendCourses as course}
                <CourseCard
                    title={course.title}
                    tutorName={course.tutorName}
                    rating={course.rating}
                    profileBgColor={course.profileBgColor}
                    styleOverrides={course.cardBgColor}
                />
            {/each}
        </section>
    </section>
    <section class="mt-2 lg:mt-10 p-4 space-y-2">
        <h2
            class="text-lg border-2 border-black font-bold bg-yellow-200 px-4 py-2 inline-block rounded-full font-bold uppercase"
        >
            frontend Courses
        </h2>
        <section
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
            {#each frontendCourses as course}
                <CourseCard
                    title={course.title}
                    tutorName={course.tutorName}
                    rating={course.rating}
                    profileBgColor={course.profileBgColor}
                    styleOverrides={course.cardBgColor}
                />
            {/each}
        </section>
    </section>
    <section class="mt-2 lg:mt-10 p-4 space-y-2">
        <h1
            class="uppercase text-3xl md:text-5xl lg:text-8xl bg-black text-white inline-block my-5 text-4xl"
        >
            api development
        </h1>
        <section
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
            {#each apiDevelopmentCourses as course}
                <CourseCard
                    title={course.title}
                    tutorName={course.tutorName}
                    rating={course.rating}
                    profileBgColor={course.profileBgColor}
                    styleOverrides={course.cardBgColor}
                />
            {/each}
        </section>
    </section>
</main>
<Footer />
