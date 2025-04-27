<script>
    import { onMount } from "svelte";
    import Navbar from "../../../../components/navbar.svelte";
    import CodeBlock from "../../../../components/CodeBlock.svelte";
    import gsap from "gsap";
    import Footer from "../../../../components/footer.svelte";

    let editorDiv;
    let editorInstance;
    let selectedLanguage = "javascript";
    let isMonacoLoaded = false;
    let showProblem = true; // Controls whether to show the problem or the solution

    // Predefined code for Two Sum problem
    const predefinedCode = `
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Test the function with predefined input
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
alert('Two Sum Result: ' + result);
`;

    onMount(() => {
        if (isMonacoLoaded) return;

        require.config({
            paths: {
                vs: "https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs",
            },
        });
        require(["vs/editor/editor.main"], () => {
            editorInstance = monaco.editor.create(editorDiv, {
                value: predefinedCode, // Set the predefined code
                language: selectedLanguage,
                theme: "vs-dark",
                automaticLayout: true,
            });
            isMonacoLoaded = true;
        });
    });

    function runCode() {
        if (!editorInstance) {
            console.error("Editor instance is not ready");
            return;
        }

        const code = editorInstance.getValue();
        try {
            // Run code in JavaScript context
            eval(code);
        } catch (err) {
            console.error(err);
            alert("Error: " + err.message);
        }
    }

    onMount(() => {
        gsap.from(".hero-title", {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: "power3.out",
            delay: 1.5,
        });
        gsap.from(".code-editor", {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: "back.out(1.1)",
            delay: 1.6,
        });
    });
</script>

<svelte:head>
    <script
        src="https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/loader.js"
    ></script>
    <link
        href="https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/editor/editor.main.min.css"
        rel="stylesheet"
    />
</svelte:head>

<Navbar />

<section class="py-16 px-6 md:px-12 lg:px-24 space-y-10">
    <h1
        class="hero-title text-4xl md:text-5xl lg:text-[150px] font-bold tracking-tight text-center text-gray-900 uppercase"
    >
        Two Sum
    </h1>
</section>

<section class="h-screen w-screen p-4 flex flex-col md:flex-row">
    <!-- Left side: Problem description + toggle -->
    <div class="w-full md:w-1/2 p-4 flex flex-col code-editor">
        <div role="tablist" class="flex justify-between items-center mb-4">
            <button
                class="btn btn-primary rounded-lg"
                on:click={() => (showProblem = true)}
            >
                Problem
            </button>
            <button
                class="btn btn-outline rounded-lg"
                on:click={() => (showProblem = false)}
            >
                Solution
            </button>
        </div>

        <div class="flex-1 rounded-xl p-4 overflow-auto space-y-6 border-2">
            {#if showProblem}
                <!-- Problem content -->
                <div>
                    <p class="mb-4">
                        Given an array of integers <span
                            class="bg-black text-white">nums</span
                        >
                        and an integer
                        <span class="bg-black text-white">target</span>, return
                        the indices of the two numbers such that they add up to
                        <span class="bg-black text-white">target</span>.
                    </p>
                    <p class="mb-4">
                        You may assume that each input would have exactly one
                        solution, and you may not use the same element twice.
                    </p>
                    <p class="mb-6">You can return the answer in any order.</p>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-2">Example:</h3>
                    <CodeBlock
                        code={`
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`}
                        language="javascript"
                        theme="rose-pine"
                    />
                </div>

                <div class="p-4 rounded-lg border-2">
                    <h3 class="text-lg font-semibold mb-2">Constraints:</h3>
                    <ul class="list-disc list-inside text-gray-700 space-y-1">
                        <li>2 ≤ nums.length ≤ 10<sup>4</sup></li>
                        <li>-10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup></li>
                        <li>-10<sup>9</sup> ≤ target ≤ 10<sup>9</sup></li>
                        <li>Only one valid answer exists.</li>
                    </ul>
                </div>
            {:else}
                <!-- Solution content -->
                <div class="h-full">
                    <iframe
                        title="Course Content"
                        id="player"
                        src="https://www.youtube.com/embed/Yyyi12oaK94?&controls=0&showinfo=0"
                        frameborder="0"
                        allow="autoplay"
                        class="w-full h-1/2"
                    ></iframe>
                    <div class="m-4 space-y-2">
                        <h3 class="text-lg font-semibold mb-2">Constraints:</h3>
                        <ul
                            class="list-disc list-inside text-gray-700 space-y-1"
                        >
                            <li>2 ≤ nums.length ≤ 10<sup>4</sup></li>
                            <li>-10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup></li>
                            <li>-10<sup>9</sup> ≤ target ≤ 10<sup>9</sup></li>
                            <li>Only one valid answer exists.</li>
                        </ul>

                        <CodeBlock
                            code={`
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`}
                            language="javascript"
                            theme="rose-pine"
                        />
                    </div>
                </div>
            {/if}
        </div>
    </div>

    <!-- Right side: Monaco editor -->
    <div class="w-full md:w-1/2 p-4 flex flex-col code-editor">
        <div
            role="tablist"
            class="flex items-center mb-4 justify-between w-full space-x-4"
        >
            <select
                bind:value={selectedLanguage}
                class="select select-bordered w-48"
            >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="cpp">C++</option>
                <option value="java">Java</option>
                <option value="go">Go</option>
                <option value="typescript">TypeScript</option>
            </select>

            <div class="flex space-x-2">
                <button
                    class="btn border-black bg-orange-100 border-2 rounded-lg btn-md"
                    on:click={runCode}>Test</button
                >
            </div>
        </div>
        <div class="flex-1 rounded-xl shadow overflow-hidden">
            <div bind:this={editorDiv} class="code-editor w-full h-full"></div>
        </div>
    </div>
</section>
<Footer />
