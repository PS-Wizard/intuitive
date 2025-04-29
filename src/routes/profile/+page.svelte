<script>
    import { goto } from "$app/navigation";
    import Footer from "../../components/footer.svelte";
    import { showConfirm } from "$lib/toast";

    import Navbar from "../../components/navbar.svelte";
</script>

<Navbar />

<section class="py-16 px-6 md:px-12 lg:px-24 space-y-10">
    <h1
        class="hero-title text-4xl md:text-5xl lg:text-[150px] font-semibold tracking-tight text-center text-gray-900 uppercase"
    >
        Profile
    </h1>
</section>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<section
    class="w-full px-[5vw] h-[60vh] flex justify-start items-start flex-col"
>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="w-full border-b-2 hover:bg-black hover:text-white transition duration-300 cursor-pointer"
        on:click={() => goto("/profile/personalDetails")}
    >
        <h1 class="text-4xl font-semibold uppercase p-4">Personal Details</h1>
    </div>
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <div
        class="w-full border-b-2 hover:bg-black hover:text-white transition duration-300 cursor-pointer"
        on:click={() => goto("/privacyPolicy")}
        role="navigation"
    >
        <h1 class="text-4xl font-semibold uppercase p-4">Privacy Policy</h1>
    </div>
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <div
        class="logout-btn w-full border-b-2 hover:bg-black hover:text-white transition duration-300 cursor-pointer"
        tabindex="0"
        on:click={() => {
            showConfirm({
                title: "Are you sure you want to log out?",
                onConfirm: () => {
                    localStorage.clear();
                    goto("/");
                },
            });
        }}
        role="navigation"
    >
        <h1 class="text-4xl font-semibold uppercase p-4">Log Out</h1>
    </div>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="delete-account w-full border-b-2 bg-red-500 hover:bg-red-600 transition duration-300 cursor-pointer"
        tabindex="0"
        on:click={() => {
            showConfirm({
                title: "Are you sure you want to delete your account?",
                onConfirm: () => {
                    localStorage.clear();
                    goto("/");
                },
            });
        }}
    >
        <h1 class="text-4xl font-semibold uppercase text-white p-4">
            Delete Your Account
        </h1>
    </div>
</section>
<Footer />
