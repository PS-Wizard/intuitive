<script>
import { onMount } from "svelte";
import gsap from "gsap";
import Navbar from "../../components/navbar.svelte";
import Footer from "../../components/footer.svelte";

let name = "";
let email = "";
let message = "";

const submitForm = () => {
    console.log({ name, email, message });
    // You can later plug this into your backend or Firebase
};

onMount(() => {
        gsap.from(".hero-title", {
opacity: 0,
y: -40,
duration: 1,
ease: "power3.out",
delay: 0.5,
});

        gsap.from(".contact-form", {
opacity: 0,
y: 40,
duration: 1,
ease: "power3.out",
delay: 1,
});
        });
</script>

<Navbar />

<section class="w-full px-8 py-16 space-y-16 flex flex-col items-center">
<h1 class="hero-title text-5xl md:text-6xl lg:text-[120px] font-bold tracking-tight text-center uppercase text-gray-900">
Contact
</h1>

<div class="contact-form w-full max-w-3xl bg-white p-10 rounded-xl space-y-6">
<p class="text-lg text-gray-700 leading-relaxed">
Feel free to contact us about anything and everything
</p>

<div class="space-y-4">
<input
type="text"
bind:value={name}
placeholder="Your Name"
class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
/>
<input
type="email"
bind:value={email}
placeholder="Your Email"
class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
/>
<textarea
rows="5"
bind:value={message}
placeholder="What's on your mind?"
class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all resize-none"
></textarea>

<button
on:click={submitForm}
class="bg-black w-full text-white px-6 py-3 rounded-lg font-medium tracking-wide hover:bg-gray-700 transition-all"
>
Send Message
</button>
</div>
</div>
</section>

<Footer />
