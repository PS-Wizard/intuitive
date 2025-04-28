<script>
    import { onMount, tick } from "svelte";
    import { beforeNavigate, afterNavigate } from "$app/navigation";
    import Lenis from "lenis";
    import "../app.css";
    import CommandPalette from "../components/CommandPalette.svelte";

    let showOverlay = false;
    let animating = false;

    onMount(() => {
        const lenis = new Lenis({
                wheelMultiplier: 0.9,
                touchMultiplier: 1.2,
            });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    });

    beforeNavigate(async () => {
        showOverlay = true;
        await tick(); // wait for overlay to mount
        animating = true; // THEN trigger slide in
    });

    afterNavigate(async () => {
        await tick();
        setTimeout(() => {
            animating = false; // trigger slide down
            setTimeout(() => {
                showOverlay = false; // unmount after slide down
            }, 500);
        }, 1000);
    });
</script>

{#if showOverlay}
    <div
        class="fixed inset-0 z-50 bg-black flex items-center justify-center transition-transform duration-500"
        style="transform: translateY({animating ? '0%' : '100%'})"
    >
        <h1 class="text-white text-[8vw] font-medium uppercase tracking-wide">
            INTUITIVE
        </h1>
    </div>
{/if}

<slot />
<CommandPalette />
