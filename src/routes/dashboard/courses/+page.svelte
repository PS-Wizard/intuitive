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
            profileBgColor: "bg-teal-100",
            cardBgColor: "bg-teal-50",
        },
        {
            title: "Advanced Databases",
            tutorName: "Charlie Brown",
            rating: "4.7/5 Stars",
            profileBgColor: "bg-teal-100",
            cardBgColor: "bg-teal-50",
        },
        {
            title: "Express.js and MongoDB",
            tutorName: "David Lee",
            rating: "4.8/5 Stars",
            profileBgColor: "bg-teal-100",
            cardBgColor: "bg-teal-50",
        },
        {
            title: "Go for Backend Development",
            tutorName: "Eve White",
            rating: "4.6/5 Stars",
            profileBgColor: "bg-teal-100",
            cardBgColor: "bg-teal-50",
        },
    ];

    const frontendCourses = [
        {
            title: "React: The Complete Guide",
            tutorName: "Diana Miller",
            rating: "5.0/5 Stars",
            profileBgColor: "bg-blue-100",
            cardBgColor: "bg-blue-200",
        },
        {
            title: "Vue.js Essentials",
            tutorName: "Ethan Davis",
            rating: "4.9/5 Stars",
            profileBgColor: "bg-blue-100",
            cardBgColor: "bg-blue-200",
        },
        {
            title: "Svelte for Beginners",
            tutorName: "Fiona Green",
            rating: "4.8/5 Stars",
            profileBgColor: "bg-blue-100",
            cardBgColor: "bg-blue-200",
        },
        {
            title: "Angular Deep Dive",
            tutorName: "George Carter",
            rating: "4.7/5 Stars",
            profileBgColor: "bg-blue-100",
            cardBgColor: "bg-blue-200",
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
            profileBgColor: "bg-lime-100",
            cardBgColor: "bg-lime-50",
        },
        {
            title: "Building Microservices",
            tutorName: "Ian Lewis",
            rating: "4.7/5 Stars",
            profileBgColor: "bg-lime-100",
            cardBgColor: "bg-lime-50",
        },
    ];

    const dataScienceCourses = [
        {
            title: "Data Science with Python",
            tutorName: "Jack Smith",
            rating: "4.8/5 Stars",
            profileBgColor: "bg-gray-50",
            cardBgColor: "bg-gray-100",
        },
        {
            title: "Machine Learning Basics",
            tutorName: "Kathy Johnson",
            rating: "4.9/5 Stars",
            profileBgColor: "bg-gray-50",
            cardBgColor: "bg-gray-100",
        },
        {
            title: "Deep Learning with TensorFlow",
            tutorName: "Liam Davis",
            rating: "4.9/5 Stars",
            profileBgColor: "bg-gray-50",
            cardBgColor: "bg-gray-100",
        },
        {
            title: "Statistics for Data Science",
            tutorName: "Maria Lee",
            rating: "4.7/5 Stars",
            profileBgColor: "bg-gray-50",
            cardBgColor: "bg-gray-100",
        },
    ];

    const cloudComputingCourses = [
        {
            title: "AWS Certified Solutions Architect",
            tutorName: "Nina Brown",
            rating: "5.0/5 Stars",
            profileBgColor: "bg-blue-200",
            cardBgColor: "bg-blue-100",
        },
        {
            title: "Google Cloud Essentials",
            tutorName: "Oliver Green",
            rating: "4.8/5 Stars",
            profileBgColor: "bg-blue-200",
            cardBgColor: "bg-blue-100",
        },
        {
            title: "Azure Fundamentals",
            tutorName: "Paul White",
            rating: "4.9/5 Stars",
            profileBgColor: "bg-blue-200",
            cardBgColor: "bg-blue-100",
        },
    ];

    const securityCourses = [
        {
            title: "Cybersecurity Basics",
            tutorName: "Quinn Harris",
            rating: "4.7/5 Stars",
            profileBgColor: "bg-indigo-100",
            cardBgColor: "bg-indigo-50",
        },
        {
            title: "Ethical Hacking for Beginners",
            tutorName: "Rachel Evans",
            rating: "4.8/5 Stars",
            profileBgColor: "bg-indigo-100",
            cardBgColor: "bg-indigo-50",
        },
        {
            title: "Network Security",
            tutorName: "Samuel Moore",
            rating: "4.6/5 Stars",
            profileBgColor: "bg-indigo-100",
            cardBgColor: "bg-indigo-50",
        },
        {
            title: "Penetration Testing",
            tutorName: "Tina Scott",
            rating: "4.9/5 Stars",
            profileBgColor: "bg-indigo-100",
            cardBgColor: "bg-indigo-50",
        },
        {
            title: "Malware Analysis",
            tutorName: "Ursula King",
            rating: "4.7/5 Stars",
            profileBgColor: "bg-indigo-100",
            cardBgColor: "bg-indigo-50",
        },
    ];

    const softwareEngineeringCourses = [
        {
            title: "Software Engineering Principles",
            tutorName: "Victor Harris",
            rating: "5.0/5 Stars",
            profileBgColor: "bg-lime-100",
            cardBgColor: "bg-lime-50",
        },
        {
            title: "Agile Project Management",
            tutorName: "Wendy Adams",
            rating: "4.9/5 Stars",
            profileBgColor: "bg-lime-100",
            cardBgColor: "bg-lime-50",
        },
        {
            title: "Design Patterns for Software Engineers",
            tutorName: "Xander White",
            rating: "4.8/5 Stars",
            profileBgColor: "bg-lime-100",
            cardBgColor: "bg-lime-50",
        },
        {
            title: "Object-Oriented Programming",
            tutorName: "Yara Turner",
            rating: "4.7/5 Stars",
            profileBgColor: "bg-lime-100",
            cardBgColor: "bg-lime-50",
        },
    ];

    onMount(() => {
        gsap.from(".hero-title", {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: "power3.out",
            delay: 1.5,
        });

        // Animate all .course-card elements
        const allCards = document.querySelectorAll(".course-card");

        gsap.fromTo(
            allCards,
            {
                opacity: 0,
                scale: 0.9,
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

    <!-- Backend Courses -->
    <section class="mt-2 lg:mt-10 p-4 space-y-2">
        <h2
            class="text-lg border-2 border-black font-bold bg-teal-200 px-4 py-2 inline-block rounded-full font-bold uppercase"
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

    <!-- Frontend Courses -->
    <section class="mt-2 lg:mt-10 p-4 space-y-2">
        <h2
            class="text-lg border-2 border-black font-bold bg-blue-200 px-4 py-2 inline-block rounded-full font-bold uppercase"
        >
            Frontend Courses
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

    <!-- API Development Courses -->
    <section class="mt-2 lg:mt-10 p-4 space-y-2">
        <h2
            class="text-lg border-2 border-black font-bold bg-lime-50 px-4 py-2 inline-block rounded-full font-bold uppercase"
        >
            API Development
        </h2>
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

    <!-- Data Science Courses -->
    <section class="mt-2 lg:mt-10 p-4 space-y-2">
        <h2
            class="text-lg border-2 border-black font-bold bg-gray-100 px-4 py-2 inline-block rounded-full font-bold uppercase"
        >
            Data Science
        </h2>
        <section
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
            {#each dataScienceCourses as course}
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

    <!-- Cloud Computing Courses -->
    <section class="mt-2 lg:mt-10 p-4 space-y-2">
        <h2
            class="text-lg border-2 border-black font-bold bg-blue-100 px-4 py-2 inline-block rounded-full font-bold uppercase"
        >
            Cloud Computing
        </h2>
        <section
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
            {#each cloudComputingCourses as course}
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

    <!-- Security Courses -->
    <section class="mt-2 lg:mt-10 p-4 space-y-2">
        <h2
            class="text-lg border-2 border-black font-bold bg-indigo-50 px-4 py-2 inline-block rounded-full font-bold uppercase"
        >
            Security
        </h2>
        <section
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
            {#each securityCourses as course}
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

    <!-- Software Engineering Courses -->
    <section class="mt-2 lg:mt-10 p-4 space-y-2">
        <h2
            class="text-lg border-2 border-black font-bold bg-lime-50 px-4 py-2 inline-block rounded-full font-bold uppercase"
        >
            Software Engineering
        </h2>
        <section
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
            {#each softwareEngineeringCourses as course}
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
