<script setup>
    import Dropdown from "@/components/Dropdown.vue";
    import Logo from "@/components/Logo.vue";
</script>

<template>
    <header class="flex items-center py-4 backdrop-blur">
        <nav
            class="sticky top-0 z-20 flex w-full items-center justify-between px-2 font-display text-lg font-semibold text-white"
        >
            <router-link class="text-primary-600 hover:text-white" to="/">
                <Logo class="h-7" />
            </router-link>
            <div class="hidden items-center justify-end md:flex">
                <router-link class="p-2 px-4 hover:text-primary-600" to="/"
                    >Accueil
                </router-link>
                <router-link
                    class="p-2 px-4 hover:text-primary-600"
                    to="/produits"
                    >Produits</router-link
                >
                <router-link
                    class="p-2 px-4 hover:text-primary-600"
                    to="/services"
                    >Services</router-link
                >
                <router-link
                    class="p-2 px-4 hover:text-primary-600"
                    to="/contact"
                    >Contact</router-link
                >
                <router-link
                    class="p-2 px-4 hover:text-primary-600"
                    to="/formations"
                    >Formations</router-link
                >

                <router-link
                    class="p-2 px-4 hover:text-primary-600"
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
    <footer class="py-4 text-center font-display text-lg font-bold">
        &copy; Kacisolutions 2022
    </footer>
</template>
