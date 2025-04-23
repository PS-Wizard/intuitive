<script>
  let isMenuOpen = false;
</script>

<nav class="bg-white py-4 border-b sticky top-0 z-50">
	<div class="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
		<div class="flex items-center gap-8 text-black font-medium">
			<img src="/assets/Logo.svg" alt="Logo" class="h-10 w-auto" />
			<div class="flex justify-center items-center hidden md:flex gap-8 ">
				<a href="/features" class="text-base hover:underline">Features</a>
				<a href="/courses" class="text-base hover:underline">Courses</a>
				<a href="/customers" class="text-base hover:underline">Customers</a>
				<a href="/challenges" class="text-base hover:underline">Challenges</a>
			</div>
		</div>

		<!-- Right: Auth buttons -->
		<div class="flex items-center gap-6">
			<div class="hidden md:flex gap-6">
				<a href="/auth/login" class="text-base btn btn-ghost ">Log in</a>
				<a
					href="/auth/signup"
					class="btn btn-primary text-base rounded-lg"
				>
					Sign up
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
						<path
							fill-rule="evenodd"
							d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="md:hidden text-black hover:text-black"
				on:click={() => isMenuOpen = !isMenuOpen}
			>
				{#if isMenuOpen}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div class="md:hidden flex flex-col gap-4 mt-4 px-4">
			<a href="/features" class="text-base btn btn-ghost">Features</a>
			<a href="/courses" class="text-base btn btn-ghost">Courses</a>
			<a href="/customers" class="text-base btn btn-ghost">Customers</a>
			<a href="/challenges" class="text-base btn btn-ghost">Challenges</a>
			<a href="/login" class="text-base btn btn-ghost">Log in</a>
			<a
				href="/signup"
				class="btn btn-primary"
			>
				Sign up
			</a>
		</div>
	{/if}
</nav>
