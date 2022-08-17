<script setup>
    import Dropdown from "@/components/Dropdown.vue";
    import Logo from "@/components/Logo.vue";
</script>

<template>
    <header class="sticky top-0 z-20 bg-slate-800 backdrop-blur">
        <nav
            class="flex items-center justify-between p-4 font-display text-lg font-semibold text-white md:px-8"
        >
            <router-link class="hover:text-white" to="/">
                <Logo class="h-5" />
            </router-link>
            <div class="hidden items-center justify-end md:flex">
                <router-link
                    class="p-2 px-4 decoration-4 underline-offset-2 hover:underline"
                    to="/"
                    >Accueil
                </router-link>
                <router-link
                    class="p-2 px-4 decoration-4 underline-offset-2 hover:underline"
                    to="/produits"
                    >Produits</router-link
                >
                <router-link
                    class="p-2 px-4 decoration-4 underline-offset-2 hover:underline"
                    to="/services"
                    >Services</router-link
                >
                <router-link
                    class="p-2 px-4 decoration-4 underline-offset-2 hover:underline"
                    to="/contact"
                    >Contact</router-link
                >
                <router-link
                    class="p-2 px-4 decoration-4 underline-offset-2 hover:underline"
                    to="/formations"
                    >Formations</router-link
                >

                <router-link
                    class="p-2 px-4 decoration-4 underline-offset-2 hover:underline"
                    to="/marketing"
                    >Marketing</router-link
                >
            </div>
            <Dropdown class="md:hidden" />
        </nav>
    </header>
    <main class="min-h-[90vh]">
        <router-view />
    </main>
    <footer
        class="mt-10 bg-neutral-200 py-4 text-center font-display text-lg font-bold"
    >
        &copy; Kacisolutions 2022
    </footer>
</template>
