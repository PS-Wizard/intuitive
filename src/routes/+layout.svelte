<script>
    import { onMount } from "svelte";
    import Lenis from "lenis";
    import "../app.css"; // keep your global styles

    let { children } = $props();

    onMount(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    });
</script>

{@render children()}
