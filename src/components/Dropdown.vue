<script setup>
    import MenuIcon from "./Icons/MenuIcon";
    import { ref } from "vue";

    const open = ref(false);
</script>

<template>
    <div class="relative">
        <button
            @click="open = !open"
            class="rounded-3xl p-2 text-2xl text-neutral-500 ring-primary-500 transition duration-150 ease-in-out hover:text-primary-500 hover:ring focus:text-primary-500 focus:ring"
        >
            <MenuIcon class="h-7 w-7" />
        </button>

        <transition
            enter-from-class="opacity-0 scale-90"
            enter-to-class="opacity-100 scale-100"
            enter-active-class="transition duration-300 ease-in-out"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-90"
        >
            <div
                v-show="open"
                class="absolute right-0 mt-2 w-56 origin-top-right rounded-3xl bg-white shadow-2xl"
            >
                <div
                    class="my-4 text-center font-display font-medium text-neutral-500"
                >
                    <router-link
                        @click="open = false"
                        class="block py-2 transition duration-150 ease-in-out hover:bg-neutral-200 hover:text-primary-700"
                        to="/"
                        >Accueil</router-link
                    >
                    <router-link
                        @click="open = false"
                        class="block py-2 transition duration-150 ease-in-out hover:bg-neutral-200 hover:text-primary-700"
                        to="/services"
                        >Services</router-link
                    >
                    <router-link
                        @click="open = false"
                        class="block py-2 transition duration-150 ease-in-out hover:bg-neutral-200 hover:text-primary-700"
                        to="/contact"
                        >Contact</router-link
                    >
                    <router-link
                        @click="open = false"
                        class="block py-2 transition duration-150 ease-in-out hover:bg-neutral-200 hover:text-primary-700"
                        to="/about"
                        >A propos</router-link
                    >

                    <router-link
                        @click="open = false"
                        class="block py-2 transition duration-150 ease-in-out hover:bg-neutral-200 hover:text-primary-700"
                        to="/showcase"
                        >Réalisations</router-link
                    >
                </div>
            </div>
        </transition>
    </div>
</template>
