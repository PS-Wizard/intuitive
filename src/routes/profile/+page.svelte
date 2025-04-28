<script>
    import { onMount } from "svelte";
    import Navbar from "../../components/navbar.svelte";
    let name = "Charles Olivera.";
    let email = "jhonJones@gmail.com";
    let password = "securepass";
    import gsap from "gsap";
    onMount(() => {
        gsap.from(".hero-title", {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power3.out",
            delay: 1.5,
        });

        gsap.from(".profile-pic", {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: "back.out(1.7)",
            delay: 1.6,
        });

        gsap.from(".stat-item", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            delay: 1.7,
        });

        gsap.from(".input-group", {
            opacity: 0,
            x: -30,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            delay: 1.8,
        });

        gsap.from(".save-btn", {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            delay: 1.8,
        });
    });
</script>

<Navbar />

<section class="lg:flex lg:mx-5">
    <section
        class="lg:max-w-2/3 px-8 py-12 space-y-20 flex flex-col items-center gap-4 lg:h-screen"
    >
        <div class="space-y-2 flex justify-between items-left flex-col">
            <h1
                class="hero-title text-7xl md:text-8xl md:text-[150px] font-bold tracking-tight text-center md:text-left text-gray-900 uppercase"
            >
                {name}
            </h1>
            <div
                class="flex flex-col justify-start items-end lg:flex-row lg:justify-between w-full gap-2"
            >
                <div>
                    <h1
                        class="text-sm font-semibold stat-item badge badge-outline"
                    >
                        69 Followers
                    </h1>
                    <h1
                        class="text-sm font-semibold stat-item badge badge-outline"
                    >
                        500+ Connections
                    </h1>
                </div>
                <div>
                    <h1
                        class="text-sm font-semibold stat-item badge badge-primary"
                    >
                        {email}
                    </h1>
                    <h1
                        class="text-sm font-semibold stat-item badge badge-accent"
                    >
                        6900 Elo Rating
                    </h1>
                </div>
            </div>
        </div>
        <div class="space-y-5 w-full align-right">
            <div class="input-group">
                <label class="font-semibold text-md uppercase"> Name </label>
                <input
                    type="text"
                    bind:value={name}
                    required
                    class="nameInput w-full mt-2 px-3 py-3 text-gray-500 bg-transparent border-2 border-black outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
            </div>
            <div class="input-group">
                <label class="font-semibold text-md uppercase"> email </label>
                <input
                    type="text"
                    bind:value={email}
                    required
                    class="w-full mt-2 px-3 py-3 text-gray-500 outline-none border-2 border-red-100 shadow-sm rounded-lg bg-red-100"
                    disabled
                />
            </div>
            <div class="input-group">
                <label class="font-semibold text-md uppercase">
                    password
                </label>
                <input
                    type="text"
                    bind:value={password}
                    required
                    class="passwordInput w-full mt-2 px-3 py-3 text-gray-500 bg-transparent outline-none border-2 border-black focus:border-indigo-600 shadow-sm rounded-lg"
                />
            </div>
            <button
                class="save-btn w-full btn btn-primary py-6 border-2 bg-black text-white hover:bg-white hover:text-black text-lg rounded-lg w-full tracking-wide uppercase"
            >
                Save Changes
            </button>
        </div>
    </section>
    <section
        class="w-full flex px-8 py-12 flex-col mt-4 justify-between gap-8 items-center"
    >
        <div class="rounded-full">
            <!--
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"-->
            <img
                src="https://sportshub.cbsistatic.com/i/r/2022/06/23/9fd34a13-31f3-4fd0-a99d-643934b8ac4d/thumbnail/1200x675/18dbecde12b8da9e1d3a441082a0e7de/charles-oliveira-grayscale.png"
                class="w-full profile-pic rounded-full outline-2 outline-offset-2 cursor-pointer"
                alt="profile picture"
            />
        </div>
    </section>
</section>
