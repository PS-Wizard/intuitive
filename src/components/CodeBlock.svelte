<script lang="ts">
    import { onMount } from "svelte";
    import { codeToHtml } from "shiki"; // Import the shorthand function

    export let code: string;
    export let language: string = "javascript"; // Default to JavaScript
    export let theme: string = "rose-pine"; // Default theme

    let highlightedCode: string;

    onMount(async () => {
        // Get the highlighted HTML using the shorthand method
        highlightedCode = await codeToHtml(code, { lang: language, theme });
    });
</script>

<div class="code-block mockup-code bg-[#191724]">
    {@html highlightedCode}
</div>

<style>
    .code-block {
        padding: 1rem;
        border-radius: 8px;
        overflow-x: auto;
        color: #d8dee9;
    }
</style>
