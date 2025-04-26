<script>
    import { goto } from "$app/navigation";

    let {
        title = "Default Title",
        description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam error natus laudantium pariatur dolor cum autem quia molestiae culpa",
        badgeA = "Some Badge",
        badgeB = "Some Other Badge",
        isNew = false,
        location = "/courses/idk",
        img = "/assets/backend.svg",
        color = "bg-yellow-200",
        imgPadding = "p-4",
    } = $props();
    function navigate() {
        goto(location);
    }
</script>

<div
    class={`card ${color} base-100 w-96 shadow-sm text-black rounded-none hover:-translate-y-1 transition-transform duration-200 ease-in-out hover:cursor-pointer hover:shadow-lg hover:shadow-white/50 h-[650px]`}
    onclick={navigate}
    role="button"
>
    <figure class="">
        <img
            src={img}
            alt="Course Image"
            class={`${imgPadding} h-full w-full object-cover p-0`}
        />
    </figure>

    <div class="card-body flex flex-col justify-end flex-grow">
        <div class="border-t-2">
            <h2
                class="card-title font-semibold text-md uppercase tracking-wide mt-8"
            >
                {title}
                {#if isNew}
                    <div class="badge badge-primary rounded-sm text-xs">
                        NEW
                    </div>
                {/if}
            </h2>
            <p
                class="text-s text-gray-700 transition-colors duration-200 ease-in-out"
            >
                {description}
            </p>
        </div>
        <div class="card-actions justify-end mt-4">
            <div class="badge badge-outline rounded-none">{badgeA}</div>
            <div class="badge badge-outline rounded-none">{badgeB}</div>
        </div>
    </div>
</div>
