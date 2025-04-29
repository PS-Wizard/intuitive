<script>
    import { goto } from "$app/navigation";

    export let title;
    export let tutorName;
    export let rating;
    export let profileBgColor = "bg-yellow-100";
    export let styleOverrides = "";
    export let disabled = false;
</script>

<div
    tabindex="0"
    class={`course-card text-black rounded-lg border-2 hover:bg-black hover:text-white transition duration-200 cursor-pointer flex flex-col justify-between h-full focus:outline-2 focus:outline-offset-2 focus:outline-black ${styleOverrides} ${disabled ? "opacity-40 pointer-events-none grayscale" : ""}`}
    on:click={() => goto("/enrolement")}
>
    {#if disabled}
        <div
            class="absolute inset-0 flex items-center justify-center bg-black/80 font-medium tracking-wide text-white text-lg uppercase text-black px-2 text-center z-10"
        >
            You don’t have enough exp yet
        </div>
    {/if}
    <div>
        <h1 class="py-6 px-4 uppercase text-xl font-semibold max-w-[20ch]">
            {title}
        </h1>
    </div>
    <div class="py-6 px-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
            <div
                class={`w-10 h-10 rounded-full border-2 ${profileBgColor}`}
            ></div>
            <h1 class="font-medium uppercase tracking-wide">
                {tutorName}
            </h1>
        </div>
        <h1 class="font-medium uppercase tracking-wide">{rating}</h1>
    </div>
</div>

<style>
    /* You can add component-specific styles here if needed */
</style>
