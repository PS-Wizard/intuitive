<script>
    let {
        tag = "default",
        title = "Some Title",
        description = "Lorem ipsum dolor sit amet...",
        variant = 1,
    } = $props();

    const variantColorMap = {
        1: "bg-blue-600",
        2: "bg-black",
        3: "bg-rose-700",
        4: "bg-amber-200",
    };
</script>

<div class="group flex flex-col h-full bg-white border border-black shadow-2xs -xl" >
    <div class={`h-52 flex flex-col justify-center items-center ${variantColorMap[variant]}`} ></div>
    <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibold uppercase text-grey-700">
            {tag}
        </span>
        <h3 class="text-xl font-semibold text-black-800">{title}</h3>
        <p class="mt-3 text-gray-500 dark:text-neutral-500">
            {description}
        </p>
    </div>
    <div
        class="mt-auto flex border-t border-black-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700"
    >
        <a
            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium bg-white text-gray-800 shadow-2xs hover:bg-black hover:text-white focus:bg-black focus:text-white disabled:opacity-50 disabled:pointer-events-none"
            href="/"
        >
            Get Started!
        </a>
        <a
            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium bg-white text-gray-800 shadow-2xs hover:bg-black hover:text-white focus:bg-black focus:text-white disabled:opacity-50 disabled:pointer-events-none"
            href="/"
        >
            Learn More!
        </a>
    </div>
</div>
