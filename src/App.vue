<script setup>
    import Dropdown from "@/components/Dropdown.vue";
</script>

<template>
    <header class="top-O sticky flex items-center p-4 font-display text-lg">
        <nav
            class="flex w-full items-center justify-between font-bold text-neutral-600"
        >
            <h2 class="text-3xl font-black text-primary-600">KACI</h2>
            <div class="hidden items-center justify-end md:flex">
                <router-link class="mr-4 hover:text-primary-600 md:mr-8" to="/"
                    >Accueil</router-link
                >
                <router-link
                    class="mr-4 hover:text-primary-600 md:mr-8"
                    to="/services"
                    >Services</router-link
                >
                <router-link
                    class="mr-4 hover:text-primary-600 md:mr-8"
                    to="/contact"
                    >Contact</router-link
                >
                <router-link
                    class="mr-4 hover:text-primary-600 md:mr-8"
                    to="/about"
                    >A propos</router-link
                >

                <router-link class="hover:text-primary-600" to="/showcase"
                    >Réalisations</router-link
                >
            </div>
            <Dropdown class="md:hidden" />
        </nav>
    </header>
    <main class="min-h-[90vh]">
        <router-view />
    </main>
    <footer class="py-4 text-center font-display text-lg font-bold">
        &copy; Kaci 2022
    </footer>
</template>
