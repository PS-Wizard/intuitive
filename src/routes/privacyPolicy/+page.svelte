<script>
    import { onMount } from "svelte";
    import Footer from "../../components/footer.svelte";
    import Navbar from "../../components/navbar.svelte";
    import gsap from "gsap";
    import { annotate } from "rough-notation";

    onMount(() => {
        const elements = document.querySelectorAll("#highlight");

        gsap.from(".hero-title", {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: "power3.out",
            delay: 1.5,
        });

        gsap.from(gsap.utils.toArray(".problem-row"), {
            opacity: 0,
            y: 15,
            duration: 0.5,
            stagger: 0.1,
            delay: 2,
            ease: "power2.out",
        });

        // Stagger annotation with gsap
        gsap.from(elements, {
            duration: 0.5,
            opacity: 0,
            stagger: 0.2, // Delay between each element animation
            delay: 3,
            onStart: () => {
                elements.forEach((element) => {
                    const annotation = annotate(element, {
                        type: "highlight",
                        color: "yellow",
                    });
                    annotation.show();
                });
            },
        });
    });
</script>

<Navbar />

<section class="w-full px-8 py-12 space-y-20 flex flex-col items-center gap-4">
    <h1
        class="hero-title text-4xl md:text-5xl lg:text-[150px] font-bold tracking-tight text-center text-gray-900 uppercase"
    >
        Privacy Policy
    </h1>
</section>
<section class="h-screen w-full px-12 py-12">
    <div class="problem-row flex gap-10 w-full flex-col">
        <h1 class="title bg-black text-white text-2xl text-right">
            What is the privacy policy and what does it cover?
        </h1>
        <div class="text-gray-700">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                quia neque reiciendis possimus libero. Animi ratione et
                deserunt! Ducimus, ipsam pariatur qui veritatis dolore neque
                repellat aperiam impedit blanditiis labore. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Cumque quia neque
                reiciendis possimus libero. Animi ratione et deserunt! Ducimus,
                ipsam pariatur qui veritatis dolore neque repellat aperiam
                impedit blanditiis labore. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Cumque
                <span id="highlight">We DO NOT SHARE YOUR DATA</span> uia neque reiciendis
                possimus libero. Animi ratione et deserunt! Ducimus, ipsam pariatur
                qui veritatis dolore neque repellat aperiam impedit blanditiis labore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia
                neque reiciendis possimus libero. Animi ratione et deserunt! Ducimus,
                ipsam pariatur qui veritatis dolore neque repellat aperiam impedit
                blanditiis labore. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Cumque quia neque reiciendis possimus libero. Animi ratione
                et deserunt! Ducimus, ipsam pariatur qui veritatis dolore neque repellat
                aperiam impedit blanditiis labore. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cumque quia neque reiciendis possimus libero. Animi
                ratione et deserunt! Ducimus, ipsam pariatur qui veritatis dolore
                neque repellat aperiam impedit blanditiis labore.
            </p>
        </div>
    </div>
    <div class=" problem-row flex gap-10 w-full flex-col">
        <h1 class="title bg-black text-white text-2xl text-right">
            What Information We Collect?
        </h1>
        <div class="text-gray-700">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                quia neque reiciendis possimus libero. Animi ratione et
                deserunt! Ducimus, ipsam pariatur qui veritatis dolore neque
                repellat aperiam impedit blanditiis labore. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Cumque quia neque
                reiciendis possimus libero. Animi ratione et deserunt! Ducimus,
                ipsam pariatur qui veritatis dolore neque repellat aperiam
                impedit blanditiis labore. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Cumque uia neque reiciendis
                possimus libero. Animi ratione et deserunt! Ducimus, ipsam
                pariatur qui veritatis dolore neque repellat aperiam impedit
                blanditiis labore. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cumque quia neque reiciendis possimus libero.
                Animi ratione et deserunt! Ducimus, ipsam pariatur qui veritatis
                dolore neque repellat aperiam impedit blanditiis labore.
                <span id="highlight"> We DO NOT collect any DATA</span
                >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia
                neque reiciendis possimus libero. Animi ratione et deserunt! Ducimus,
                ipsam pariatur qui veritatis dolore neque repellat aperiam impedit
                blanditiis labore. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Cumque quia neque reiciendis possimus libero. Animi ratione
                et deserunt! Ducimus, ipsam pariatur qui veritatis dolore neque repellat
                aperiam impedit blanditiis labore.
            </p>
        </div>
    </div>
    <div class=" problem-row flex gap-10 w-full flex-col">
        <h1 class="title bg-black text-white text-2xl text-right">
            How do we share information with third parties?
        </h1>
        <div class="text-gray-700">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                quia neque reiciendis possimus libero. Animi ratione et
                deserunt! Ducimus, ipsam pariatur qui veritatis dolore neque
                repellat aperiam impedit blanditiis labore. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Cumque quia neque
                reiciendis <span id="highlight">We simply do not</span> possimus
                libero. Animi ratione et deserunt! Ducimus, ipsam pariatur qui veritatis
                dolore neque repellat aperiam impedit blanditiis labore. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Cumque uia neque reiciendis
                possimus libero. Animi ratione et deserunt! Ducimus, ipsam pariatur
                qui veritatis dolore neque repellat aperiam impedit blanditiis labore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia
                neque reiciendis possimus libero. Animi ratione et deserunt! Ducimus,
                ipsam pariatur qui veritatis dolore neque repellat aperiam impedit
                blanditiis labore. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Cumque quia neque reiciendis possimus libero. Animi ratione
                et deserunt! Ducimus, ipsam pariatur qui veritatis dolore neque repellat
                aperiam impedit blanditiis labore. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cumque quia neque reiciendis possimus libero. Animi
                ratione et deserunt! Ducimus, ipsam pariatur qui veritatis dolore
                neque repellat aperiam impedit blanditiis labore.
            </p>
        </div>
    </div>
</section>
<Footer />
