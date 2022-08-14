<script setup>
    import Dropdown from "@/components/Dropdown.vue";
</script>

<template>
    <header class="font- flex items-center p-4">
        <nav
            class="top-O sticky inset-x-0 flex w-full items-center justify-between font-display text-xl font-bold text-neutral-600"
        >
            <h2 class="text-3xl font-black text-primary-600">Kacisolutions</h2>
            <div class="hidden items-center justify-end md:flex">
                <router-link
                    class="rounded-xl p-2 px-4 hover:bg-white hover:text-primary-600"
                    to="/"
                    >Accueil</router-link
                >
                <router-link
                    class="rounded-xl p-2 px-4 hover:bg-white hover:text-primary-600"
                    to="/produits"
                    >Produits</router-link
                >
                <router-link
                    class="rounded-xl p-2 px-4 hover:bg-white hover:text-primary-600"
                    to="/services"
                    >Services</router-link
                >
                <router-link
                    class="rounded-xl p-2 px-4 hover:bg-white hover:text-primary-600"
                    to="/contact"
                    >Contact</router-link
                >
                <router-link
                    class="rounded-xl p-2 px-4 hover:bg-white hover:text-primary-600"
                    to="/formations"
                    >Formations</router-link
                >

                <router-link
                    class="rounded-xl p-2 px-4 hover:bg-white hover:text-primary-600"
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
